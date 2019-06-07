import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RmsRole {
    @PrimaryGeneratedColumn()id: number;
    @Column()name: string;
    @Column()seq: number;
    constructor(name:string,seq?:number){
        this.name=name;
        this.seq=seq?seq:0;
    }
}
//角色表
