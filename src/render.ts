import { Step, Command, PageInformation, notNull } from "./models";
import PAGE from "./page.js";

export default class RENDER{

    steps : (Step | Command) [];
    currentPage : PAGE;
    pageCount : number = 0;

    ///PaGE INFORMATION VAriables
    pageInfo : PageInformation;
    


    constructor(){
        this.steps = [];



        ///things that are passed to PAGE

        this.pageInfo = {
            putPageNumber : false,
            pageNumbering : 0
        }

        this.currentPage = new PAGE(this.pageInfo);
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
                        this.#createNewPage();
                        break;
                    case "startPageNumbering":
                        this.pageInfo.putPageNumber = true;
                        break;

                }
            }
            //else if it is step
            else{
                const newPageNeeded : boolean = this.currentPage.addContent(step as Step);

                if(newPageNeeded){
                    this.#createNewPage();

                    const newPageNeeded : boolean = this.currentPage.addContent(step as Step);

                    if(newPageNeeded)
                        throw new Error("Content too big to fit in a single page.");
                }
            }
        }

    }

    ///Minimize repetitive code by creating a function that
    // handles the creation of new PAGE and making it the this.currentPage,
    // also incremetenting the pageCount and pageNumbering if needed

    #createNewPage(){
        this.currentPage = new PAGE(this.pageInfo);
        this.pageCount++;
        
        if(this.pageInfo.putPageNumber)
            this.pageInfo.pageNumbering!++;
    }
}