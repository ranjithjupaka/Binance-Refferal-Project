import React from 'react';
import type { PathRouteProps } from 'react-router-dom';
import Home from '../pages/home';

import LevelDetails from '../pages/level-details'
import IncomeReport from '../pages/income-report'
import TransactionReport from '../pages/transaction-report'
import Dashboard from '../pages/dashboard'

// const Home = React.lazy(() => import('@/lib/pages/home'));
// const Eggs = React.lazy(() => import('@/lib/pages/dragons'))
// const Dashboard = React.lazy(() => import('@/lib/pages/dashboard'))
// const Buydragons = React.lazy(() => import('@/lib/pages/buydragons'))

export const publicRoutes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
]

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/transaction-report',
    element: <TransactionReport />,
  },
  {
    path: '/level-details',
    element: <LevelDetails />,
  },
  {
    path: '/income-report',
    element: <IncomeReport />,
  },
]
