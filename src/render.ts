import { Step, Command } from "./models";
import PAGE from "./page.js";

export default class RENDER{

    steps : (Step | Command) [];
    currentPage : PAGE;
    pageCount : number = 0;
    constructor(){
        this.steps = [];
        this.currentPage = new PAGE();
        this.pageCount = 1;
    }

    pushStep(st : Step | Command){
        this.steps.push(st);
    }


    ///RENDER
    render(){

        for(const step of this.steps){
            ///check if step is a command
            if(step.hasOwnProperty("isCommand") && (step as Command).isCommand){
                const cmd = (step as Command).action;

                ///Execution Commands

                switch(cmd){
                    case "breakPage":
                        this.currentPage = new PAGE();
                        this.pageCount++;
                        break;

                }
            }
            //else if it is step
            else{
                const newPageNeeded : boolean = this.currentPage.addContent(step as Step);

                if(newPageNeeded){
                    this.currentPage = new PAGE();
                    this.pageCount++;

                    const newPageNeeded : boolean = this.currentPage.addContent(step as Step);

                    if(newPageNeeded)
                        throw new Error("Content too big to fit in a single page.");
                }
            }
        }

    }
}