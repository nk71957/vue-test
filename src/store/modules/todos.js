import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        commit('setTodos', response.data);
    },
    markToDo({commit}, payload) {
        commit('setTodoItem', payload)
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    setTodoItem: function (state, todo) {
        const index = state.todos.findIndex((item) => {
            return item.id === todo.id
        })
        if (index === -1) return
        state.todos.splice(index, 1, todo)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
