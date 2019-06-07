import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RmsResource {
    @PrimaryGeneratedColumn()id: number;
    @Column()name: string;
    @Column()url: string;
    @Column()pid: number;
    @Column()type: number;
    @Column()seq: number;
    constructor(name:string,url:string,pid?:number,type?:number,seq?:number){
        this.name=name;
        this.url=url;
        this.pid=pid?pid:0;
        this.type=type?type:0;
        this.seq=seq?seq:0;
    }
}
//资源表
