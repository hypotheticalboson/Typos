import NUMBERING from "./numbering.js";
import RENDER from "./render.js"

export default class Typos{

  render : RENDER;
  chapterNames : string[];

  constructor(){
    this.render = new RENDER();

    //chapter names for Table of Content Prep
    this.chapterNames = []



  }


  //normal setters

  chapter(content : string, className : string | string[] | null, count : NUMBERING | null){

    const number : string = count ? count.getNumbering() : "";

    this.render.pushStep({
      kind : "chapter",
      content : content,
      numbering : number,
      className : className as string | null
    });
  }

  title(content : string, className : string | string[] | null, count : NUMBERING | null){

    const number : string = count ? count.getNumbering() : "";

    this.render.pushStep({
      kind : "title",
      content : content,
      numbering : number,
      className : className as string | null
    });
  }

  para(content : string, className : string | string[] | null, count : NUMBERING | null){
    const number : string = count ? count.getNumbering() : "";
    this.render.pushStep({
      kind : "para",
      content : content,
      numbering : number,
      className : className as string | null
    });
  }

  text(content : string, className : string | string[] | null, count : NUMBERING | null){
    const number : string = count ? count.getNumbering() : "";
    this.render.pushStep({
      kind : "text",
      content : content,
      numbering : number,
      className : className as string | null
    });
  }

  //numbering setters

  newNumbering(){
    return new NUMBERING();
  }

  ///PAGE CONTROLS

  startPageNumbering(){
    this.render.pushStep({
      isCommand : true,
      action : "startPageNumbering"
    });
  }
    
  


  //RENDER

  Render(){
    this.render.render();
  }
}