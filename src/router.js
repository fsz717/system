import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/login.vue"),
        },
        {
            path: '*',
            component: Layout,
            redirect: '/notFound',
            children: [
                {
                    path: '/notFound',
                    name: 'notFound',
                    meta: {
                        title: '404'
                    },
                    component: () => import('./views/notFound')
                }
            ]
        },
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: "/home",
                    name: "home",
                    meta:{parentPath:''},
                    component: () =>
                        import("./views/home.vue")
                }
           ]
        },
        {
            path: "/fsz",
            component: Layout,
            redirect: '/fsz/fsz1',
            children: [
                {
                    path: "/fsz/fsz1",
                    name: "fsz1",
                    meta:{parentPath:'/fsz'},
                    component: () => import("./views/fsz1.vue")
                },
                {
                    path: "/fsz/fsz2",
                    name: "fsz2",
                    meta:{parentPath:'/fsz'},
                    component: () => import("./views/fsz2.vue")
                },
                {
                    path: "/fsz/fsz3",
                    name: "fsz3",
                    meta:{parentPath:'/fsz'},
                    component: () => import("./views/fsz3.vue")
                },
            ]
        },
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: "/fsz4",
                    name: "fsz4",
                    meta:{parentPath:''},
                    component: () => import("./views/fsz4.vue")
                },
            ]
        }
    ]
});
