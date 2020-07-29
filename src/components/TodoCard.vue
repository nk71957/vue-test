<template>
    <article class="card mb-4 todo-card">
        <div class="card-body">
            <h5>
                <span class="badge" :class="{ 'badge-success' : todo.completed, 'badge-warning': !todo.completed }">
                    {{ todo.completed ? 'Done' : 'Not yet done' }}
                </span>
            </h5>
            <h4 class="card-title">{{ todo.title | truncate(30) }}</h4>
            <p class="card-text">User ID:  {{ todo.userId }}</p>
            <button tabindex="0" class="btn" :class="{ 'btn-success' : todo.completed, 'btn-warning' : !todo.completed}" @click="$emit('action:mark')">
                {{ todo.completed ? 'Mark as not done' : 'Mark as done' }}
            </button>
        </div>
    </article>
</template>

<script>
    export default {
        name: "TodoCard",
        props: {
            todo: {
                required: true,
                type: Object
            }
        },
        filters : {
            truncate: function(text, length, clamp) {
                clamp = clamp || '...';
                var node = document.createElement('div');
                node.innerHTML = text;
                var content = node.textContent;
                return content.length > length ? content.slice(0, length) + clamp : content
            }
        }
    };
</script>

<style>
    .todo-card {
        min-height: 250px;
    }
</style>
