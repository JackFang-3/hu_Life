import { createStore } from 'vuex'
import { reqGrade } from '@/api'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    grade: {
      state: {
        table: ''
      },
      mutations: {
        getTable(state, table) {
          state.table = table
        }
      },
      actions: {
        async getTable({ commit }, username) {
          let result = await reqGrade(username)
          if (result.code == 200) {
            commit('getTable',result.data)
            return 'Ok'
          } else {
            return Promise.reject(new Error('faile'))
          }
        }
      },
      getters: {
        tab(state){
          return state.table
        }
      }
    },
    userInformation:{
      state:{
        userInfo:''
      },
      mutations:{
        getUserInfo(state,userInfo){
          state.userInfo=userInfo
          console.log(userInfo)
        }
      },
      actions:{
        getUserInfo({commit},userInfo){
          commit('getUserInfo',userInfo)
          console.log(userInfo)
        }
      },
      getters:{}
    }
  }
})
