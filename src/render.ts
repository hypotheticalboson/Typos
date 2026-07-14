import { step, command } from "./models";

export default class RENDER{

    steps : (step | command) []
    constructor(){
        this.steps = [];
    }

    pushStep(st : step | command){
        this.steps.push(st);
    }
}