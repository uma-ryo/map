const Top = () => import('../components/pages/Top.vue');
const Users = () => import('../components/pages/Users.vue');
const Tools = () => import('../components/pages/Tools.vue');

export default [
    {
        path: '/',
        component: Top,
    },
    {
        path: '/users',
        component: Users,
    },
    {
        path: '/tools',
        component: Tools,
    },
];
