
import * as formidable from "formidable";
import {Request,Response} from 'express';
import * as fs from "fs";
import * as url from "url";
import { Config } from "../config";
const sha1=require('node-sha1');type Y<T>=object;type P<T>=Y<T[keyof T]>;
//Controller
export class C{
    html(req: Request,res: Response,...str:Array<P<{K:{k:string}}>>) {
        if(str.length>0){
            let o={user:req.session.user,nick:req.session.nick,photo:req.session.photo,err:req.flash('err')};
            Object.assign(o,...str);
            res.render(url.parse(req.url).path.replace(/^\//,''),o);
        }else
        res.render(url.parse(req.url).path.replace(/^\//,''),{user:req.session.user,nick:req.session.nick,photo:req.session.photo,err:req.flash('err')});
    }
    suffix(name: string):string{
        return name.replace(/().*(?=)\./,'\.');
    }
    pic(req: Request,callback:Function):any{
        let form =new formidable.IncomingForm();
        form.encoding='utf-8';
        form.uploadDir = Config.pic;form.keepExtensions = true;
        form.maxFieldsSize = 2097152;
        form.parse(req,(err, fields, files)=>{
            if(err){callback(err);}
            else if(files.uploadfiles&&files.uploadfiles.path){
                let oldpath=files.uploadfiles.path,newpath=C.prototype.suffix(files.uploadfiles.name);
                sha1(fs.createReadStream(oldpath),(er,hash)=>{if(er){callback(er);}
                    newpath=form.uploadDir+"/"+hash+files.uploadfiles.size+newpath;
                    if(!fs.existsSync(newpath)){fs.rename(oldpath,newpath,(e)=>{
                            if(e){callback(e);}});}else{fs.unlinkSync(oldpath)}
                    callback(err,{path:newpath.slice(String(form.uploadDir).length+1),field:fields});
                });
            }else callback(err,{field:fields});
        })
    }
    hex(str:string):string{let stri=str.split("\\",-1),b:string="\\";
        for (let a=0;a<stri.length;a++) {
            if(stri[a]!="") {
                if(a!=0)b=b+"\\\\"+stri[a];else b=b+stri[a];
            }else {
                if(a>1||stri[0]!="")b=b+"\\\\";else b=b+"\\";
            }
        };return b;
    }
    file(request: Request, response: Response){
        let form = new formidable.IncomingForm();form.encoding='utf-8';
        form.uploadDir = Config.upload+"/";form.keepExtensions = true;
        form.maxFieldsSize = 2 * 1024 * 1024;//文件的大小2m
        form.parse(request,(err, fields, files)=>{
            if(files.fileName&&files.fileName.path){
                response.send({ "pic": files.fileName.path});
            }else{console.log(err)}
        });
    }
}