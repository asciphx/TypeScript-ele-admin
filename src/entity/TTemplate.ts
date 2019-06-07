import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TTemplate {
    @PrimaryGeneratedColumn()id: number;
    @Column()templateName: string;
    @Column()age: number;
    @Column()birthday: Date;
    @Column()pic: string;
    @Column()sex: number;
    constructor(templateName:string,age?:number,birthday?:Date,sex?:number,pic?:string){
        this.templateName=templateName;
        this.age=age?age:0;
        this.birthday=birthday?birthday:new Date();
        this.pic=pic?pic:"resource/admin/u0.gif";
        this.sex=sex?sex:0;
    }
}
