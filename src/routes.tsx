import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';

// Lazy load components for code splitting (except HomePage for instant loading)
const isDevelopment = import.meta.env.MODE === 'development';
const NotFoundPage = isDevelopment ? lazy(() => import('../dev-tools/src/PageNotFound')) : lazy(() => import('./pages/_404'));
const ServicesPage = lazy(() => import('./pages/services'));
const ListingsPage = lazy(() => import('./pages/listings'));
const AssetManagementPage = lazy(() => import('./pages/asset-management'));
const TheNestPage = lazy(() => import('./pages/the-nest'));
const ContactPage = lazy(() => import('./pages/contact'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/listings',
    element: <ListingsPage />,
  },
  {
    path: '/asset-management',
    element: <AssetManagementPage />,
  },
  {
    path: '/the-nest',
    element: <TheNestPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/services' | '/listings' | '/asset-management' | '/the-nest' | '/contact';

export type Params = Record<string, string | undefined>;
