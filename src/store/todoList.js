import { action,computed,observable } from 'mobx';
import Todo from './todo';
export default class TodoList{
    @observable
    availableStatus=['To-do','In Progress', 'Finished'];
    @observable 
    tasks= [];
    @computed
    get undones(){
        return this.tasks.filter(todo => !todo.finished).length;
    } 
    @action
    submitTask(name){
        this.tasks.push(new Todo(name));
    }
    @action
    deleteTask(index){
        this.tasks.splice(index,1);
    }
    @action
    editTask(e,index) {
        e.preventDefault();
        this.tasks[index].name=e.target.innerText;    
        e.target.blur();
    }

    @action
    changeStatus(index) {
      var idx = this.availableStatus.indexOf(this.tasks[index].status);
      this.tasks[index].status = this.availableStatus[(idx+1)%3];
      if(this.tasks[index].status==='Finished') this.tasks[index].finished=true;
      else this.tasks[index].finished=false;
    }
}
export const store = new TodoList();