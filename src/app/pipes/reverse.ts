import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name:"reversename"})
export class Reverse implements PipeTransform
{
    answer:string="";
    transform(input:string):string {
        if(input===null)
        {
            return null;
        }
        else{
        for(let i=input.length-1;i>=0;i--)
        {
            this.answer+=input[i];
        }
        }
        return this.answer;
    }
    
}