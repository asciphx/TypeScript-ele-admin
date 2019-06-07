import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { RmsRole } from "../entity/RmsRole";
import { C } from "../controller";
export class RmsRoleC extends C{
    private rmsRoleRepository = getRepository(RmsRole);
    async all(req: Request) {
        return this.rmsRoleRepository.find();
    }
    async one(req: Request) {
        return this.rmsRoleRepository.findOne(req.params.id);
    }
    async save(req: Request) {
        return this.rmsRoleRepository.save(req.body);
    }
    async remove(req: Request) {
        let rmsRoleToRemove = await this.rmsRoleRepository.findOne(req.params.id);
        await this.rmsRoleRepository.remove(rmsRoleToRemove);
    }
    async index(req: Request, res: Response){
        this.html(req,res);
    }
}