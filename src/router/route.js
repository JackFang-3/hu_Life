import Banner from '@/views/Banner'
import Grade from '@/views/Grade'
import Information from '@/views/Information'
import Logined from '@/views/Logined'
import store from '@/store'
export default  [
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/grade',
      name: 'grade',
      component: Grade
    },
    {
      path: '/',
      name: 'information',
      component: Information,
      beforeEnter:((to, from, next) => {
        if(!localStorage.getItem("id")){
          if(to.path='/information'){
            next()
          }
        }
        else{
          next('/logined')
        }
      })
    },
    {
      path: '/logined',
      name: 'logined',
      component:Logined
    },
  ]