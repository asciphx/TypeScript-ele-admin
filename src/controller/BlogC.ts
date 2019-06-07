import { getRepository } from "typeorm";
import { Request, Response} from "express";
import { BBlog } from "../entity/BBlog";
import { C } from "../controller";
export class BolgC extends C{
    private BolgRepository = getRepository(BBlog);
    async all() {
        return this.BolgRepository.find();
    }
    async one(req: Request) {
        return this.BolgRepository.findOne(req.params.id);
    }
    async save(req: Request) {
        return this.BolgRepository.save(req.body);
    }
    async remove(req: Request) {
        let BolgToRemove = await this.BolgRepository.findOne(req.params.id);
        await this.BolgRepository.remove(BolgToRemove);
    }
    async index(req: Request, res: Response){
        this.html(req,res);
    }
}