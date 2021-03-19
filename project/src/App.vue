<template>
  <div>
    <div>
      <input type="text" v-model="newTask.text" />
      <button @click="addTask">Add a Task</button>
    </div>
    <ul>
      <li :key="index" v-for="(item, index) in tasks">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      tasks: [],
      newTask: {id: null, text: ""},
    }
  },
  methods: {
    addTask() {
      if (this.newTask.text.trim()) {
        this.newTask.id = Math.floor((Math.random() * 10000));
        this.tasks = [...this.tasks, this.newTask];
        this.newTask = {id: null, text: ""};
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
