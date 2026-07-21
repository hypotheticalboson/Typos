import {step, command, page } from "./models";

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
}