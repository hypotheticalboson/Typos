import RENDER from "./render"

export default class Typos{

  render : RENDER;
  chapterNames : string[];

  constructor(){
    this.render = new RENDER();

    //chapter names for Table of Content Prep
    this.chapterNames = []



  }


  //normal setters

  chapter(content : string, className : string | string[] | null, count : string |null){
    
  }

}