import { observable } from 'mobx';
export default class Todo{
    id = Math.random();
    @observable name;
    @observable status = "To-do";
    @observable finished= false;
    constructor(name){
        this.name = name;
    }
}