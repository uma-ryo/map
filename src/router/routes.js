const Top = () => import('../components/pages/Top.vue');
const Users = () => import('../components/pages/Users.vue');

export default [
    {
        path: '/',
        component: Top,
    },
    {
        path: '/users',
        component: Users,
    },
];
