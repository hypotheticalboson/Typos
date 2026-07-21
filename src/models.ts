export interface Step{
    kind : string;
    content : string;
    numbering : string | null;
    className : string | null;
}

export interface Command{
    isCommand : true;
    action : string;
}


export interface page{
    page : HTMLDivElement;
    body : HTMLDivElement;
    header : HTMLDivElement;
    footer : HTMLDivElement;
}