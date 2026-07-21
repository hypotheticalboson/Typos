import { Step, Command } from "./models";

export default class PAGE {

    page : HTMLDivElement;
    body : HTMLDivElement
    header : HTMLDivElement;
    footer : HTMLDivElement;
    constructor(){

        ///cratation PAGE HTML Element
        this.page = document.createElement("div");
        this.body  = document.createElement("div");
        this.header = document.createElement("div");
        this.footer = document.createElement("div");

        this.page.className = "doc-page";
        this.body.className = "doc-body";
        this.header.className = "doc-header";
        this.footer.className = "doc-footer";

        this.page.appendChild(this.header);
        this.page.appendChild(this.body);
        this.page.appendChild(this.footer);

        document.body.appendChild(this.page);
    }


    addContent(content : Step) : boolean{

        // if the content has numbering, a container is created
        // to hold both the numbering and the content
        if(content.numbering !== undefined && content.numbering !== null){

            const numberingElement = document.createElement("span");
            numberingElement.className = "doc-numbering";
            numberingElement.innerText = content.numbering;

            const contentElement = document.createElement("div");
            contentElement.className = "doc-content";
  


            ///className can be both a list of class or a single class name string,
            /// hence, if it is an array, its spread into the classList, 
            // ///else it is added as a single class name
            if(Array.isArray(content.className))
                contentElement.classList.add(...content.className);
            else if(content.className !== null && content.className !== '')
                contentElement.classList.add(content.className);

            contentElement.innerHTML = content.content;

            const Container = document.createElement("div");
            Container.className = "doc-numbering-content-container";
            
            Container.append(numberingElement, contentElement);

            Container.classList.add('doc-' + content.kind);
            
            this.body.appendChild(Container);
            
            ///Check Height
            if(this.#getContentHeight() > this.page.clientHeight){
                this.body.removeChild(Container);
                return true;
            }

            return false;
        }
        /// if the content don't need numbering

        const contentElement = document.createElement("div");
        contentElement.className = "doc-content";
        contentElement.classList.add('doc-' + content.kind);

        ///className can be both a list of class or a single class name string,
        /// hence, if it is an array, its spread into the classList, 
        // ///else it is added as a single class name
        if(Array.isArray(content.className))
            contentElement.classList.add(...content.className);
        else if(content.className !== null && content.className !== '')
            contentElement.classList.add(content.className);
        
        contentElement.innerHTML = content.content;

        this.body.appendChild(contentElement);

        ///Check Height
        if(this.#getContentHeight() > this.page.clientHeight){
            this.body.removeChild(contentElement);
            return true;
        }

        return false;
        
    }

    ///funtion to get the content height of the page

    #getContentHeight(){
        const bodyHeight = this.body.clientHeight;
        const headerHeight = this.header.clientHeight;
        const footerHeight = this.footer.clientHeight;

        const contentHeight = bodyHeight + headerHeight + footerHeight;

        return contentHeight;
    }




}

