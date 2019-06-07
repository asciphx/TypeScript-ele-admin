import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RmsRoleRes {
    @PrimaryGeneratedColumn()id: number;
    @Column()roleId: number;
    @Column()resourceId: number;
    @Column()created: Date;

    constructor(roleId:number,resourceId:number,created?:Date){
        this.roleId=roleId;
        this.resourceId=resourceId;
        this.created=created?created:new Date();
    }
}
//角色资源表
