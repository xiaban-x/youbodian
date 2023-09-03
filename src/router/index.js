import { createRouter, createWebHistory } from 'vue-router'
// createRouter 创建路由实例，===> new VueRouter()
// 1. history模式: createWebHistory()   http://xxx/user
// 2. hash模式: createWebHashHistory()  http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path

// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') }, // 登录页
    {
      path: '/selectProfession',
      component: () => import('@/views/login/SelectProfession.vue')
    },
    {
      path: '/resetPassword',
      component: () => import('@/views/login/ResetPassword.vue')
    },
    {
      path: '/bindPhone',
      component: () => import('@/views/login/BindPhone.vue')
    },
    {
      path: '/moreCourse',
      component: () => import('@/views/course/MoreCourse.vue')
    },
    {
      path: '/highCourse',
      component: () => import('@/views/course/HighCourse.vue')
    },
    {
      path: '/personalInformation',
      component: () => import('@/views/user/PersonalInformation.vue')
    },
    {
      path: '/changeNickname',
      component: () => import('@/views/user/ChangeNickname.vue')
    },
    // {
    //   path: '/dictionary',
    //   component: () => import('@/views/dictionary/DictionaryIndex.vue')
    // },
    // {
    //   path: '/cource',
    //   component: () => import('@/views/course/CourseIndex.vue')
    // }
    {
      path: '/',
      component: () => import('@/views/dictionary/index.vue'),
      redirect: '/dictionary',
      children: [
        {
          path: '/dictionary',
          component: () => import('@/views/dictionary/DictionaryIndex.vue')
        },
        {
          path: '/course',
          component: () => import('@/views/course/CourseIndex.vue')
        },
        {
          path: '/training',
          component: () => import('@/views/training/TrainingIndex.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/user/UserIndex.vue')
        }
      ]
    }
  ]
})

export default router
