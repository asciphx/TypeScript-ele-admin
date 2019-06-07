import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RmsAdmRole {
    @PrimaryGeneratedColumn()id: number;
    @Column()adminId: number;
    @Column()roleId: number;
    @Column()created: Date;

    constructor(adminId:number,roleId:number,created?:Date){
        this.adminId=adminId;
        this.roleId=roleId;
        this.created=created?created:new Date();
    }
}
//用户资源表
