import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "*",
            name: "notFound",
            component: NotFound
        }
    ]
});

export default router;
