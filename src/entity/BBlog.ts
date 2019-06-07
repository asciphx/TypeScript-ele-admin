import {Entity, PrimaryGeneratedColumn,OneToOne,Column} from "typeorm";
import {TAdmin} from "./TAdmin";
@Entity()
export class BBlog {
    @PrimaryGeneratedColumn()id: number;
    @Column()aid: number;
    @Column()pv: number;
    @Column()name: string;
    @Column()title: string;
    @Column()content: string;
    @Column()time: Date;
    @Column()avator: string;
    // @OneToOne(type => TAdmin, admin => admin.id, {
    //     cascade: true
    // })
    // admin: TAdmin;
}
