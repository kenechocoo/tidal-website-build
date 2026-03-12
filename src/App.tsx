import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import RootLayout from './layouts/RootLayout';
import { routes } from './routes';
import Spinner from './components/Spinner';

const SpinnerFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

const LayoutWithSuspense = () => (
  <Suspense fallback={<SpinnerFallback />}>
    <RootLayout>
      <Outlet />
    </RootLayout>
  </Suspense>
);

// Create router with layout wrapper
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWithSuspense />,
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
