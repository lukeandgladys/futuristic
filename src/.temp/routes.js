const c1 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/luke/Documents/UDEMY/futuristic/node_modules/gridsome/app/pages/404.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--contentful-pages-vue" */ "/home/luke/Documents/UDEMY/futuristic/src/templates/ContentfulPages.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/luke/Documents/UDEMY/futuristic/src/pages/Index.vue")

export default [
  {
    name: "404",
    path: "/404/",
    component: c1
  },
  {
    path: "/:title/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c1
  }
]
