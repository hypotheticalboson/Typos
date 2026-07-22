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


export interface PageInformation{
    putPageNumber : boolean;
    pageNumbering : number;
}



export function notNull(value :any) : boolean{
    return value !== null && value !== undefined;
}