import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import * as types from '../mutations-types'
Vue.use(Vuex)
Vue.use(VueResource)
const state = {
  contacts: []
}

const getters = {
  allContacts: state => state.contacts
}

const actions = {

  GET_PERSON({ commit }) {
    Vue.http.get('http://119.29.151.195:8080/ContactsBe/getPerson').then((res) => {
      commit(types.GET_PERSON, { contacts: JSON.parse(res.body) })
    }, error => {
      console.log(error)
    })
  },
  FUZZY_QUERY({ commit }, fkey) {
    Vue.http.post('http://119.29.151.195:8080/ContactsBe/SearchPerson', { key: fkey }).then(res => {
      commit(types.GET_PERSON, { contacts: JSON.parse(res.body) })
    }, err => {
      return console.log(err)
    })
  },
  ADD_PERSON({ commit }, list) {
    commit(types.ADD_PERSON, list)
    Vue.http.post('http://119.29.151.195:8080/ContactsBe/addPerson', list).then(response => {
      console.log('addPerson status is: ' + response.status)
    }, error => {
      console.log(error)
    })
  },
  DEL_PERSON({ commit }, person) {
    Vue.http.post('http://119.29.151.195:8080/ContactsBe/delPerson', person).then(response => {
      console.log('delPerson status is: ' + response.status)
    }, error => {
      console.log(error)
    })
  },
  UPDATE_PERSON({ commit }, person) {
    Vue.http.post('http://119.29.151.195:8080/ContactsBe/updatePerson', person).then(response => {
      console.log('update status is: ' + response.status)
    }, error => {
      console.log(error)
    })
  }
}

const mutations = {
  [types.GET_PERSON](state, { contacts }) {
    state.contacts = contacts
  },
  [types.DEL_PERSON](state, index) {
    state.contacts.splice(index, 1)
  },
  [types.ADD_PERSON](state, person) {
    state.contacts.push(
      person
    )
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
