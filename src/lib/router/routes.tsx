import React from 'react';
import type { PathRouteProps } from 'react-router-dom';
import Home from '../pages/home';

import Dashboard from '../pages/dashboard'
import Buydragons from '../pages/buydragons'
import DepositReport from '../pages/deposit-report'

// const Home = React.lazy(() => import('@/lib/pages/home'));
// const Eggs = React.lazy(() => import('@/lib/pages/dragons'))
// const Dashboard = React.lazy(() => import('@/lib/pages/dashboard'))
// const Buydragons = React.lazy(() => import('@/lib/pages/buydragons'))

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/deposit-report',
    element: <DepositReport />,
  },
  {
    path: '/level-details',
    element: <Dashboard />,
  },
  {
    path: '/report',
    element: <Buydragons />,
  },
]

export const privateRoutes: Array<PathRouteProps> = [];
