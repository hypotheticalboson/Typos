export interface step{
    kind : string;
    content : string;
    numbering : string | null;
    className : string | null;
}

export interface command{
    isCommand : true;
    action : string;
}