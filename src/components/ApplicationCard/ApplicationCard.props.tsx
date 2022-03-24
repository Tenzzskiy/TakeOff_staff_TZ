import {Dispatch, SetStateAction} from "react";
import {card} from "../../Types/index.props";

export interface ApplicationCardProps{

        key?:number;
        Users:card;

}
export interface ApplicationProps{
        Users:[{name:string,website:string,company:{name:string},id:string}];

}