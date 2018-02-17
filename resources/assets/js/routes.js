const router = new VueRouter();

router.map({
    '/': {
        name: 'home',
        component: require('./components/topic.vue')
    },
    '/show': {
        name: 'show',
        component: require('./components/questions.vue')
    },
    '/': {
        name: 'update',
        component: require('./components/review.vue')
    },
    '/': {
        name: 'update',
        component: require('./components/edit.vue')
    },
    '*': {
        name: 'not-found',
        component: require('./components/404.vue')
    }
});

var App = Vue.extend({});

router.start(App, '#app');