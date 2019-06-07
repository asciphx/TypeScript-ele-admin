import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";
@Entity()
export class TParse {
    @PrimaryColumn()keyword:string;
    @Column()keywordDESC:string;
    @Column()parameterName:string;
    constructor(keyword:string,keywordDESC?:string,parameterName?:string){
        this.keyword=keyword;this.keywordDESC=keywordDESC;
        this.parameterName=parameterName?parameterName:keyword;}
}
