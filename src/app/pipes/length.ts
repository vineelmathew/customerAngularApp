import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name:"stringlength"})
export class Length implements PipeTransform
{
    transform(input:string):number {
        if(input===null)
        {
            return null;
        }
        else{
            return input.length;
        }
    }
    
}