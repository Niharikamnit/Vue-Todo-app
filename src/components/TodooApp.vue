<template>
  <div class="container">
    <h2> Vue Todo App </h2>

      <!-- input -->
      <div class="d-flex"> 
        <input v-model="task" v-on:keyup.enter.prevent="submitTask" type="text" placeholder= "Enter Text" class="form-control">
        <!-- or can conditionally submit or edit in submitTask function, by checking editTask value
        instead of creating new function submitEdit -->
        <!-- conditionally picking which function to call on submit click- edit or new task -->
        <!-- <button v-if="editTask" v-on:click="submitEdit" class="btn btn-primary rounded-0"> Submit </button> -->
        <button v-on:click="submitTask" class="btn btn-primary rounded-0"> Submit </button>    
      </div>


      <table class="table table-dark">
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
      <tr v-for="(task,index) in tasks" :key="index">
        <th> 
        <span 
        contenteditable="true" 
        v-on:keydown.enter="submitEdit($event,index)" 
        v-on:blur="submitEdit($event,index)"        
        v-bind:class="{finished}">{{task.name}}
        </span>
        </th>
        <td>
          <button class="pointer btn btn-light" v-on:click="changeStatus(index)">
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

    </div>
</template>

<script>
export default {
  name: 'TodoApp',  

  data() {
    return {
      //input bar input
      task:'',
      //stores index of current editing task
      editTask: null,
      availableStatus: ['To-do', 'In progress', 'Finished'],
      //if status is finished
      finished: false,
      //array of tasks created
      tasks: [ ]
    }
  },

  methods: {

    //when creating new task
    submitTask: function() {
      if(this.task.length==0) return;

      this.tasks.push({
        name: this.task, 
        status: 'To-do'
        });
      this.task='';
    },

    //to delete the task
    deleteTask: function(index) {
      this.tasks.splice(index,1);
    },

    //will identify which task to be editted, on clicking edit button
    editingTask: function(index) {
      this.task=this.tasks[index].name;
      this.editTask=index;
    },

    //will edit the task on clicking submit
    submitEdit: function(e,index) {
      e.preventDefault();
      this.tasks[index].name=e.target.innerText;    
      e.target.blur();
    },

    //change the status of task
    changeStatus: function(index) {
      var idx = this.availableStatus.indexOf(this.tasks[index].status);
      this.tasks[index].status = this.availableStatus[(idx+1)%3];
      if(this.tasks[index].status==='Finished') this.finished=true;
      else this.finished=false;
    }
  }
  //further upgrades- use css flexbox instead of bootstrap
  //                - use computed properties or watchers
  //                - add transitions or animations once task marked finished

}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.finished {
  text-decoration: solid line-through red 4px;
}
</style>