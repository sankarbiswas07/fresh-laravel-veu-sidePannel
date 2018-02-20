const router = new VueRouter();

router.map({
    '*': {
        name: 'not-found',
        component: require('./components/404.vue')
    },
    '/': {
        name: 'dashboard',
        component: require('./components/home.vue')
    },
    '/topic/add': {
        name: 'addTopic',
        component: require('./components/topic.vue')
    },
    // '/': {
    //     name: 'update',
    //     component: require('./components/review.vue')
    // },
    // '/': {
    //     name: 'update',
    //     component: require('./components/home.vue')
    // },
    
});

var App = Vue.extend({});

router.start(App, '#app');