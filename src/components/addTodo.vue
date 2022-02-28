<template>
<div class="container">
    <div class="d-flex"> 
        <input v-model="name" v-on:keyup.enter.prevent="submitTask" type="text" placeholder= "Enter Text" class="form-control">
        <button v-on:click="submitTask" class="btn btn-primary rounded-0"> Add </button>    
    </div>
</div>
</template>

<script>
    import {observer} from "mobx-vue";
    import {store} from "../store/todoList";

    export default observer({
        name: "addTodo",
        data() {
            return {
                name: "",
                disabled: false,
                vm:store
            }
        },

        methods: {
            submitTask() {
                console.log("submittt");
                if(this.name!=="") {
                    this.vm.submitTask(this.name);
                    this.name="";
                }
            }
        }
    });
</script>
        
