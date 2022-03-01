<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- state getting refreshed between routes/pages -->
    <div v-if="vm.undones>0">
    <h2> You have {{vm.undones}} tasks pending. Go do them noww </h2>
    </div>
    <div v-else-if="vm.tasks.length>0">
    <h2>All tasks are done! Great Job! </h2>
    </div>
    <div v-else>
    <h2> No tasks! Joblesss. </h2>
    </div>
  </div>
</template>

<script>
import {observer} from "mobx-vue";
import {store} from "../store/todoList";

export default observer({
    name:"task",

    data() {
        return {
            vm:store
        };
    }
});
</script>