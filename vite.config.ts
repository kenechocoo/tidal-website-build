import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import apiRoutes from "vite-plugin-api-routes";
import { URL } from "node:url";

// Optional external plugins — gracefully skip if not available
let sourceMapperPlugin: unknown = null;
let devToolsPlugin: (() => Plugin) | null = null;
let fullStoryPlugin: (() => Plugin) | null = null;
let errorInterceptorPlugin: (() => Plugin) | null = null;

// Important: keep these paths as non-literal strings so TypeScript doesn't try to
// resolve them when the optional plugin folders are absent in this repo.
const sourceMapperPath: string = "./source-mapper/src/index";
const devToolsPluginPath: string = "./dev-tools/src/vite-plugin";
const fullStoryPluginPath: string = "./fullstory-plugin";
const errorInterceptorPath: string = "./dev-tools/src/vite-error-interceptor";

try {
	sourceMapperPlugin = (await import(sourceMapperPath)).default;
} catch {
	// optional
}
try {
	devToolsPlugin = (await import(devToolsPluginPath)).devToolsPlugin;
} catch {
	// optional
}
try {
	fullStoryPlugin = (await import(fullStoryPluginPath)).fullStoryPlugin;
} catch {
	// optional
}
try {
	errorInterceptorPlugin = (await import(errorInterceptorPath)).errorInterceptorPlugin;
} catch {
	// optional
}

function extractHostname(value: string): string {
	try {
		if (value.includes("://")) {
			return new URL(value).host;
		}
		return value;
	} catch {
		return value;
	}
}

const allowedHosts: string[] = [];
const corsOrigins: string[] = [];

if (process.env.FRONTEND_DOMAIN) {
	const frontendHost = extractHostname(process.env.FRONTEND_DOMAIN);
	allowedHosts.push(frontendHost);
	corsOrigins.push(`http://${frontendHost}`, `https://${frontendHost}`);
}
if (process.env.ALLOWED_ORIGINS) {
	const origins = process.env.ALLOWED_ORIGINS.split(",");
	allowedHosts.push(...origins.map(extractHostname));
	corsOrigins.push(...origins);
}
if (process.env.VITE_PARENT_ORIGIN) {
	allowedHosts.push(extractHostname(process.env.VITE_PARENT_ORIGIN));
	corsOrigins.push(process.env.VITE_PARENT_ORIGIN);
}
if (allowedHosts.length === 0) {
	allowedHosts.push("*");
}
if (corsOrigins.length === 0) {
	corsOrigins.push("*");
}

export default defineConfig(({ mode }) => ({
	plugins: [
		react({
			babel: {
				plugins: sourceMapperPlugin ? [sourceMapperPlugin] : [],
			},
		}),
		apiRoutes({
			mode: "isolated",
			configure: "src/server/configure.js",
			dirs: [{ dir: "./src/server/api", route: "" }],
			forceRestart: mode === "development",
		}),
		...(mode === "development"
			? [
					devToolsPlugin ? (devToolsPlugin() as Plugin) : null,
					fullStoryPlugin ? fullStoryPlugin() : null,
					errorInterceptorPlugin ? errorInterceptorPlugin() : null,
				].filter(Boolean)
			: []),
	],

	resolve: {
		alias: {
			nothing: "/src/fallbacks/missingModule.ts",
			"@/api": path.resolve(__dirname, "./src/server/api"),
			"@": path.resolve(__dirname, "./src"),
		},
	},

	server: {
		host: process.env.HOST || "0.0.0.0",
		port: parseInt(process.env.PORT || "5173"),
		strictPort: !!process.env.PORT,
		allowedHosts,
		cors: {
			origin: corsOrigins,
			credentials: true,
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			allowedHeaders: ["Content-Type", "Authorization", "Accept", "User-Agent"],
		},
		hmr: {
			overlay: false,
		},
		watch: {
			ignored: ["**/dist/**", "**/.api/**"],
		},
	},

	build: {
		rollupOptions: {
			// No external dependencies - bundle everything
			output: {
				// Prevent crossorigin attribute issues on static hosting
			},
		},
		modulePreload: {
			polyfill: false,
		},
		cssCodeSplit: false,
	},
}));
