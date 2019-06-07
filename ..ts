console.time(`time`);import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as session from "express-session";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as schedule from "node-schedule";
import { R, O } from "./src/routes";
import { Tag } from "./src/util/tag";
import { T } from "./src/util/tool";
import { M } from './src/migration/middlewares';
import { Config } from "./config";
const S=require("./src/util/websocket");
const N=require('nedb-session-store')(session);
const Flash = require('connect-flash')
createConnection().then(async c=>{const a = express();
    a.use(bodyParser.json());Tag.Init(c.name);
    const t=()=>{
        schedule.scheduleJob('*/15 * * * *',()=>{
            T.deleteAll(Config.upload);
            T.deleteOne(Config.dbLog);
        }); 
    };t();//每隔15min删除一次临时文件
    a.use(session({
        name:Config.session.name,secret:Config.session.secret,cookie:Config.session.cookie,//期限毫秒,25min,path:'/',secure:true
        resave:true,rolling:true,saveUninitialized:false,store:new N({filename:Config.dbLog})
        //url:'mongodb://localhost/blog',store:new MongoStore({host:'localhost',port:27017,db:'test'}),proxy:true// 'path_to_nedb_persistence_file.db'
    }));a.use(bodyParser.json({limit:Config.jsonLimit}));a.use(bodyParser.urlencoded({ extended:false }));a.use(cookieParser());
    a.all((req,res,next)=>{res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');res.header('Access-Control-Allow-Credentials',false);
    res.header('Access-Control-Allow-Origin',req.headers.origin);res.locals.session=req.session;next();});a.use(Flash());
    R.forEach(v=>{
        (a as any)[v.m](v.r,v.w,(req:Request,res:Response,next:Function)=>{
            const r=(new (v.c as any))[v.a](req,res,next);
            if (r instanceof Promise){
                r.then(r=>r!==null&&r!==undefined?res.send(r):undefined).catch(e=>next(e));
            } else if (r!==null&&r!==undefined){
                res.json(r);
            }
        });
    });
    O.forEach(v=>{
        (a as any)[v.m](v.r,(req:Request,res:Response,next:Function)=>{
            const r=(new (v.c as any))[v.a](req,res,next);
            if (r instanceof Promise){
                r.then(r=>r!==null&&r!==undefined?res.send(r):undefined).catch(e=>next(e));
            } else if (r!==null&&r!==undefined){
                res.json(r);
            }
        });
    });
    //a.set('views',path.join(__dirname,'www'));
    S.init(await a.listen(Config.port,"0.0.0.0",
    ()=>{console.log(`ExServer http://localhost:${Config.port} to see`);}));
    a.use(express.static(path.join(Config.upload)));
    a.use(express.static(path.join(Config.pic)));
    a.use(express.static(path.join(Config.view)));//a.set("view cache",true);
    a.set('view engine','ejs');
    a.get('/logout',M.prototype.checkLogin,(req,res)=>{
        req.flash("err","退出成功！");
        req.session.destroy(function(err){
            if(err){console.log(err)}else{return res.redirect('/');}
        })
    });
    a.get('/x',M.prototype.checkLogin,async(req,res)=>{
        res.send(await Tag.parseHtml(req.query.a,
            req.query.b,req.query.c,req.query.d,req.query.e,req.query.f))
    })
    //a.all('/inapi/*', (req,res)=>{}
    // var pathname=url.parse(req.url).pathname;
    //let s=await ;//insert new users for test
    // await c.manager.save(c.manager.create(TAdmin,{
    //     username:"Phantom1",password:"e30e7efb40e0de61511dae9173af17b6",photo:"",name:"Phantoms"
    // }));
    console.timeEnd(`time`);
}).catch(e=>console.log(e));