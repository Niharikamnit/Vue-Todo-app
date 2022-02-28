<template>
<div class="container">
      <addTodo/>
<table class="table table-light">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
        <!-- <th scope="col">Edit</th> -->
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <!-- got error for not using v-bind:key="index" why -->
      <tr v-for="(task,index) in vm.tasks" :key="index">
        <th> 
        <span 
        contenteditable="true" 
        v-on:keydown.enter="editTask($event,index)" 
        v-on:blur="editTask($event,index)"        
        v-bind:class="{done}">{{task.name}}
        </span>
        </th>
        <td>
          <button class="pointer btn btn-dark" v-on:click="changeStatus(index)">
            {{task.status}}
          </button>
        </td>
        <!-- <td>
          <div>
            <button class="btn btn-secondary" v-on:click="editingTask(index)">Edit</button>
          </div>
        </td> -->
        <td>
          <div>
            <button type="button" class="btn btn-danger" v-on:click="deleteTask(index)">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="vm.undones>0">
    Task not finished {{ vm.undones}}
    </div>
    <div v-else-if="vm.tasks.length>0">
    All tasks are done!
    </div>
    <div v-else>
    No tasks!
    </div>
</div>
</template>

<script>
import {observer} from "mobx-vue";
import {store} from "../store/todoList";
import addTodo from "./addTodo";

export default observer({
    name:"task",

    components: {
        addTodo
    },

    data() {
        return {
            done:false,
            vm:store
        };
    },

    methods: {
        deleteTask(index) {
            this.vm.deleteTask(index);
        },

        editTask(e,index) {
            this.vm.editTask(e,index);
        },

        changeStatus(index) {
            this.vm.changeStatus(index);
            this.done=this.vm.tasks[index].finished;
            console.log(this.done);
        }
    }
});
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.done {
  text-decoration: solid line-through red 4px;
}
</style>