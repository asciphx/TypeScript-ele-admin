import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { TTemplate } from "../entity/TTemplate";
import { Page } from "../util/page";
import { C } from "../controller";
// import * as si from "silly-datetime";
export class TemplateC extends C{
    private templateRepository = getRepository(TTemplate);
    async index(req: Request, res: Response){this.html(req,res);}
    async one(req: Request) {return this.templateRepository.findOne(req.params.id);}
    async remove(req: Request) {
        let templateToRemove = await this.templateRepository.findOne(req.params.id);
        await this.templateRepository.remove(templateToRemove);
    }
    async page(req: Request) {
        let pageNum:number=req.body.pageNum,current:number=1,startPage:number=0;
        pageNum?(current=req.body.current,startPage=current*pageNum-pageNum):pageNum=10;
        let templateName:string=req.body.templateName;
        let list =await this.templateRepository.createQueryBuilder("t_template")
        .where("(t_template.templateName LIKE :templateName)")
        if(templateName.indexOf("\\")>-1) {//转义符反斜杠存在时候的查询方法
            list=await list.setParameters({ templateName:`%${this.hex(templateName)}%`})
        }else list=await list.setParameters({ templateName:`%${templateName}%`})
        list =await list.orderBy("t_template.id", "DESC").skip(startPage).take(pageNum)
        let total:number=await list.getCount(),
        page=await new Page(current,pageNum,total,startPage);
        return {l:await list.getMany(),p:page.toObject()};//兼容ie6+的拼接分页法(然而前端是从ie9开始支持，当然也可以不用我的前端)
    }
    save(req: Request, res: Response) {//内置异步回调的写法
        this.pic(req,async(e,p)=>{if(e)return e;
            let o=p.field.templateName;if(o.indexOf("alert")>-1||o.indexOf("document")>-1)o=o.replace(/\"/g,'&quot;');//做xss攻击防护禁止注入
            o=new TTemplate(o,p.field.age,p.field.birth,p.field.sex,p.field.pic);
            if(p.path){o.pic=p.path;}
            if(p.field.id>0){o.id=p.field.id;await this.templateRepository.update(p.field.id,o);}else{
                let template=await this.templateRepository.insert(o);if(template){o.id=template.raw.insertId;}}
            res.send(o);
        });
    }
}