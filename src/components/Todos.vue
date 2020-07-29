<template>
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
                    <h1 id="cards" class="bv-no-focus-ring" tabindex="-1"><span class="bd-content-title">Todos</span></h1>
                </div>
            </div>
            <div class="row pt-4">
                <div class="col col-sm-12">
                    <ul class="nav nav-pills nav-fill">
                        <li class="nav-item" v-for="item in navItems" :key="item.key">
                            <a class="nav-link" href="javascript:" :class="{ 'active' : item.key === activeNavKey }" @click="onNavChanged(item)">{{ item.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container py-4">
            <div class="row">
                <div v-for="(todo, index) in filterItems" v-bind:key="index + todo.id" class="col col-sm-6 col-md-4">
                    <todo-card :todo="todo" @action:mark="onAction(todo)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex';
import TodoCard from "./TodoCard";
export default {
    name: "Todos",
    components: {TodoCard},
    methods:{
     ...mapActions(["fetchTodos"]),
        onNavChanged(item) {
         this.activeNavKey = item.key
        },
        onAction(item) {
         this.$store.dispatch('markToDo', { ...item, completed: !item.completed})
        }
    },
    computed: {
        ...mapGetters(["allTodos"]),
        filterItems() {
            if(this.activeNavKey === 'all') {
                return this.allTodos
            }
            return this.allTodos.filter((item) => {
                return this.activeNavKey === 'completed' ? item.completed : !item.completed
            });
        }
    },
    data() {
        return {
            navItems: [
                {
                    key: 'all',
                    title: 'All Task'
                },
                {
                    key: 'completed',
                    title: 'Completed Task'
                },
                {
                    key: 'uncompleted',
                    title: 'Uncompleted Task'
                }
            ],
            activeNavKey: 'all'
        }
    },
    created(){
        this.fetchTodos();
    }

};
</script>

<style>
.todos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:1rem;
}
.todo {
    border:1px solid #ccc;
    background:#41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align:center;
    position: relative;
    cursor: pointer;
}
</style>
