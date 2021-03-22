import React from 'react';

const Home = React.lazy(() => import('../containers/Home/HomeContainer'));
const Login = React.lazy(() => import('../containers/Login/LoginContainer'));
const NotFound = React.lazy(() => import('../containers/NotFound/NotFoundContainer'));
const Dashboard = React.lazy(() => import('../containers/Dashboard/DashboardContainer'));
// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

const routes = [{
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
}, {
    path: '/login',
    name: 'Login',
    component: Login
}, {
    path: '/dashboard',
    name: Dashboard,
    component: Dashboard
}, // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE
{
    path: '*',
    name: NotFound,
    component: NotFound
}];

export default routes;
