import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


 const state= {
    todos: []
  }

 const  mutations= {
    addTodo (state,todo) {
      state.todos.push(todo) 
    },
    delTodo (state, { todo }) {
    	state.todos.splice(state.todos.indexOf(todo),1)
    }
  }


export default new Vuex.Store({
	state,
	mutations
})
	