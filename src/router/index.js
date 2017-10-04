import Vue from 'vue';
import vueRouter from 'vue-router';
import home from '@/components/home';
import document from '@/components/document';
import about from '@/components/about';
import error from '@/components/error';
import work from '@/components/work';
import study from '@/components/study';
import hobby from '@/components/hobby';
import user from '@/components/user';
import slider from '@/components/slider';

Vue.use(vueRouter);
var router = new vueRouter({
    linkActiveClass: 'ac',
    mode:'history',
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            return {x:0,y:0}
        }
        if(to.hash){
            return {
                selector:to.hash
            }
        }
    },
    routes:[{
        path:'/',
        name:'home',
        meta:{
            login:true,        
            index:0
        },
        component: home
    },{
        path: '/document',
        name:'document',
        meta:{
            login:false,
            index:1
        },
        components: {
            slider: slider,
            default:document
        }
    },{
        path:'/about',
        component: about,
        children:[{
            path:'',
            name:'about',
            meta:{
                login:true,            
                index:2
            },
            component: work
        },{
            path:'study',
            component: study
        },{
            path:'hobby',
            component: hobby
        }]
    },{
        path: '*',
        component: error
    },{
        path: '/user/:id?',
        meta:{
            login:true,
            index:3
        },
        component:user
    }]
})
// router.beforeEach(function(to,from,next){
//       if(to.meta.login) {
//           next()
//       }else{
//           next('/about')
//       }
// })
export default router;
