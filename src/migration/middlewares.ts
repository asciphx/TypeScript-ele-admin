import {Request, Response, NextFunction} from 'express';
//check开头的是http请求中间件，ajax开头的是阿贾克斯中间件
export class M{
    checkLogin(req:Request, res:Response, next:NextFunction){
        if (!req.session.user) {req.flash('err','未登录');return res.redirect('/');}next();
    }
    checkNotLogin(req:Request, res:Response, next:NextFunction){
        if (req.session.user) {req.flash('err', '您已登录');return res.redirect('back');}next();
    }
    checkQx(req:Request, res:Response,next:NextFunction){
        next();//权限http请求，暂时为设计
    }
    AjaxLogin(req:Request, res:Response, next:NextFunction){
        if (!req.session.user) {return res.json({status:1});}next();
    }
}