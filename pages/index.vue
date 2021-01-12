<template>
  <div class="container">
    <div>
      <h1 class="title">to-do</h1>
    </div>
    <div class="subtitle">
      <h2>add your first to-do</h2>
      <button class="button3" type="button" name="button" @click="allDone">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#4d4d4d" class="bi bi-card-checklist" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
    </div>
    <form class="addtask" @submit.prevent="addTodo">
      <label for="newTodo"></label>
      <input v-model="newTodo" type="text" name="newTodo" id="newTodo" value="" placeholder="ex. Practice guitar">
      <button class="button" type="submit" name="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill=#4d4d4d class="button" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
      </button>
    </form>
    <ul >
      <li v-for="todo in todos" v-bind:value="todo" v-bind:key = "todo" class="list">
        <input type="checkbox" v-model="todo.done" class="checkmark">
        <span :class="{ done: todo.done }" class="span1">{{todo.title}}</span>
        <button class="button2" @click="removeTodo(todo)" type="button" name="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="button2a" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

data: function () {
  return {
    newTodo: '',
    todos: Array(),
    title: '',
    todo: '',
  }
},

methods: {
  addTodo() {
    this.todos.push({
      title: this.newTodo,
      done: false
    });
    this.newTodo = '';
  },
    removeTodo(todo: any) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
  },
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      })
    }
}

})

</script>
<style>


.list {
  list-style-type: none;
  width: 300px;
  padding-bottom: 5px;
}

.span1 {
  color: #4d4d4d;
  font-size: 19px;
  font-weight: 450;
  list-style-type: none;
}

.button3 {
  border: none;
  background: none;
  cursor: pointer;
  color:white;
  border: none;
  outline:none;
}

.button {
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 -1px
}

.button2 {
  border: none;
  width: 20px;
  height: 20px;
  background: none;
  cursor: pointer;
  align-items: right;
  float: right;
}

.subtitle {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 0vh;
  color: #4d4d4d;
  letter-spacing: 2px;
  font-weight: 20;
}

.done {
  text-decoration: line-through;
}

.form[type="text"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 3px solid #333;
}

.addtask {
  min-height: 10vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.checkmark {
  width: 28px;
  height: 28px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  vertical-align: middle;
  border: 3px solid #333;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-left: 74px;
  display: inline-flex;
  justify-content: left;
  align-items: left;

}

.checkmark:checked {
  background-color: rgb(231, 231, 231);
}

.container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  color: #333;
  height: 80vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  overflow-y: auto;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 20;
  font-size: 90px;
  color: #969696;
  letter-spacing: 1px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
