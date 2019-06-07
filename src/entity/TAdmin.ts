import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TAdmin {
    @PrimaryGeneratedColumn()id: number;
    @Column()username: string;
    @Column()password: string;
    @Column()photo: string;
    @Column()name: string;
    constructor(username:string,password:string,name?:string,photo?:string){
        this.username=username;
        this.password=password;
        this.photo=photo?photo:"";
        this.name=name?name:username;
    }
}
//外部客户表
