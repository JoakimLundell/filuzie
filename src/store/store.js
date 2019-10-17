/*import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { functions } from 'firebase'

import chatt from './modules/chatt'
import notifyer from './modules/notifyer'
import geolocation from './modules/geolocation'
import map from './modules/map'






async function confirmLogin(user) {
  //console.log("Hear, hear, confirming login");
  let userinfo = await pullUserinfo(user.uid);
  //console.log(userinfo);
  return userinfo;
  
}

function pullUserinfo(uid) {
  return new Promise((resolve, reject) => {
      firebase.database().ref('users-info/' + uid).once('value')
      .then(function(snapshot) {
          var userinfo = snapshot.val(); 
          resolve(userinfo);
      })     
  })  
} 

function changeTrainersHandler(uid, trainers) {
  firebase.database().ref('/users-info/' + uid +'/trainers').set(trainers);
}

Vue.use(Vuex)

const state = {
    auth: false,
    user: null,
    status: null,
    error: null,
    loading: false,
    //posts: null,
    name: null,
    trainers: null,
    info: [],
}

const mutations = {
    setLoading (state, status) {
      state.loading = status
    },

    setUser (state, payload) {
        state.user = payload
    },

    removeUser (state) {
        state.user = null
    },

    setStatus (state, payload) {
        state.status = payload
    },

    setError (state, payload) {
        state.error = payload
    },

    setName (state, payload) {
      state.name = payload
    },
    setTrainers (state, payload) {
      state.trainers = payload
    },
    setInfo (state, info) {
      state.info.push(info)
    }
}

const getters = {
    user: state => state.user,
    status: state => state.status,
    error: state => state.error,
    loading: state => state.loading,
    //posts: state => state.posts,
    name: state => state.name,
    trainers: state => state.trainers,
    info: state => state.info,
}

const actions = {

    signInAction ({ commit }, payload) {
        commit('setLoading', true);
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
        
        
        }).then(()=>{
            commit('setLoading', false)
        })
        .catch((error) => {
            console.log(error)
            commit('setStatus', 'failure')
            commit('setError', error.message)
            commit('setLoading', false)
        })   
    },

    signOutAction ({ commit }) {
        firebase.auth().signOut()
        .then((response) => {
            commit('setUser', null)
            commit('setStatus', 'success')
            commit('setError', null)
        })
        .catch((error) => {
            commit('setStatus', 'failure')
            commit('setError', error.message)
        })
    },

    checkAuthState ({ commit, dispatch }) {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                confirmLogin(user).then((userinfo)=> {
                    commit('setName', userinfo.nic)
                    commit('setTrainers', userinfo.trainers)
                });
        
                commit('setUser', user.uid)
                commit('setStatus', 'success')
                commit('setError', null)
                dispatch('startGeolocation');
       
            } else {
                commit('setUser', null)
                commit('setStatus', 'success')
                commit('setError', null)
                dispatch('stopGeolocation');
            }
        });
    },

    changeTrainers({commit}, payload) {
        commit('setTrainers', payload)
        changeTrainersHandler(state.user, state.trainers) 
    }
}



const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    chatt, notifyer, geolocation, map
  }
})

export default store */