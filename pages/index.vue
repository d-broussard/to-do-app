<template>
  <div class="container my-5 h-75 w-100" style="max-width: 500px">
    <div>
      <h1
        class="text-center justify-content-center title d-block fw-lighter"
        style="font-size: 90px; color: #969696"
      >
        to-do
      </h1>
    </div>
    <div
      class="d-flex flex-column justify-content-center align-items-center secondary-color fw-lighter"
      style="letter-spacing: 2px"
    >
      <h2>add your first to-do</h2>
      <button
        type="button"
        class="bg-transparent border-0"
        name="button"
        @click="allDone"
        style="outline: none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#4d4d4d"
          class="bi bi-card-checklist"
          viewBox="0 0 16 16"
        >
          <path
            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
          />
          <path
            d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
    </div>
    <form
      class="d-flex justify-content-center my-5"
      @submit.prevent="addTodo"
      autocomplete="off"
    >
      <label></label>
      <input
        v-model="newTodo"
        type="text"
        name="newTodo"
        id="newTodo"
        value=""
        placeholder="ex. Practice guitar"
        style="outline: none"
        class="justify-content-center"
      />
      <button
        class="mx-0 bg-transparent border-0"
        type="submit"
        name="button"
        style="outline: none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          fill="#4d4d4d"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
      </button>
    </form>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
        class="pb-1"
        style="width: 300px; list-style-type: none"
      >
        <input
          type="checkbox"
          v-model="todo.done"
          class="checkmark start-0 border border-dark border-3 align-middle rounded-circle"
          style="
            width: 28px;
            height: 28px;
            outline: none;
            margin-left: 65px;
            -webkit-appearance: none;
          "
        />
        <span
          :class="{ done: todo.done }"
          class="secondary-color"
          style="font-size: 19px"
          >{{ todo.title }}</span
        >
        <button
          class="bg-transparent border-0 float-end"
          style="width: 20px; outline: none"
          @click="removeTodo(todo)"
          type="button"
          name="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as _ from "lodash";

export default Vue.extend({
  data: function () {
    return {
      newTodo: "" as string,
      todos: [] as any,
    };
  },

  methods: {
    addTodo() {
      let todo = {
        title: this.newTodo,
        done: false,
      };
      this.todos.push(todo);
      this.newTodo = "";
    },

    removeTodo(todo: any) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },

    allDone() {
      _.forEach(this.todos, (todo: any) => {
        todo.done = true;
      });
    },
  },
});
</script>

<style lang="less">
.secondary-color {
  color: #4d4d4d;
}

.done {
  text-decoration: line-through;
}

.checkmark:checked {
  background-color: rgb(231, 231, 231);
}
</style>
