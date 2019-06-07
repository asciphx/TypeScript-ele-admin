import { getRepository } from 'typeorm';
import { Request, Response} from 'express';
import { TAdmin } from "../entity/TAdmin";
import { C } from "../controller";
import { Tag } from "../util/tag";
const socket=require("../util/websocket");
export class AdminC extends C{
    private AdminRepository = getRepository(TAdmin);//html(窗口变化)iframe(容器开关)static(纯静态资源页，不含后端)
    async webkit() {return Promise.resolve(socket.users);}//获取socket用户列表
    async index(req: Request, res: Response){res.render("index",{A:"MVC超级系统",
    user:req.session.user,nick:req.session.nick,photo:req.session.photo,err:req.flash('err')})}//登陆html页面，需要防止？后缀必须写死
    async ejs(req: Request, res: Response){this.html(req,res,{A:"MVC超级系统",B:"个人主页",C:"功能列表",D:"系统中心(待更新！)",a:"首页",b:"我的博客",
    c:"修改密码",d:"用户表",e:"图形化日志",f:"许愿贴纸",g:"md2pdf",h:"winXP",i:"旋转魔方"});}//H-ui-html,static
    async main(req: Request, res: Response){this.html(req,res);}//首页iframe
    async pwd(req: Request, res: Response){this.html(req,res);}//密码iframe
    async log(req: Request, res: Response){this.html(req,res);}//日志,Ajax渲染Tag的方式iframe,static
    async xyq(req: Request, res: Response){this.html(req,res,{p1:"玩家1",p2:"玩家2"},{p3:"玩家3"});}//许愿墙iframe,static
    async md2pdf(req: Request, res: Response){this.html(req,res);}//万能小滑块,ejs渲染Tag标签的方式iframe,static
    async winxp(req: Request, res: Response){this.html(req,res);}//winxp前端iframe,static
    async xzmf(req: Request, res: Response){
        this.html(req,res,{Blood:await Tag.parseHtml("0","selected","Blood",0,"blood","input-text"),
        ID_TYPE:await Tag.parseHtml("1,2","checked","ID_TYPE",2,"blood","xuanX radius"),
        USER_TYPE:await Tag.parseHtml("P","selected","USER_TYPE",1,"blood","input-text")});}//魔方前端iframe,static
    async register(req: Request) {
        let admin=await this.AdminRepository.findOne({username:req.body.username});
        if(admin){return{err:"账号已经存在！",txt:admin.username};}else{
            admin=new TAdmin(req.body.username,req.body.password);
            let administrator=await this.AdminRepository.insert(admin);
            if(administrator){
                req.session.user=admin.username;req.session.nick=admin.name;
                admin.id=administrator.raw.insertId;req.session.uid=admin.id;
                return {txt:admin.name+"注册成功！您是第"+admin.id+"位用户。"};
            }else return "[]";
        }
    }
    async login(req: Request){
        let admin=await this.AdminRepository.findOne({username:req.body.username,password:req.body.password});
        if(admin){req.session.uid=admin.id;
            req.session.user=admin.username;req.session.nick=admin.name;req.session.photo=admin.photo;
            return admin;}else return "[]";
    }
    photo(req: Request, res: Response) {//内置异步回调的写法
        this.pic(req,async(e,p)=>{if(e)return e;
            req.session.nick=p.field.name;
            if(p.path){req.session.photo=p.path;
                let r=await this.AdminRepository.update(req.session.uid,{name:p.field.name,photo:p.path});
                await res.send({i:r.raw.affectedRows,data:p});
            }else{
                let r=await this.AdminRepository.update(req.session.uid,{name:p.field.name});
                await res.send({i:r.raw.affectedRows,data:p.field.name});
            }
        });
    }
}