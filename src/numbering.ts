
export default class NUMBERING{

    counting : number;
    type : '123' | 'abc' | 'ABC' | 'Roman' | 'roman';

    prefix : string;
    suffix : string;


    constructor(){
        this.counting = 0;
        this.type = '123';

        this.prefix = "";
        this.suffix = "";
    }

    getNumbering(){
        this.counting++;
        return this.prefix + this.counting+ this.suffix;
    }
}