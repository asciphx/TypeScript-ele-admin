import { TemplateC } from "./controller/TemplateC";
import { AdminC } from "./controller/AdminC";
import { RmsRoleC } from "./controller/RmsRoleC";
import { BolgC } from "./controller/BlogC";
import { C } from "./controller";
import { M } from './migration/middlewares';//Routes, method, route, controller, action, middlewares
export const R=[
    {m:"get", r:"/main", c:AdminC, a:"ejs", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/person/log", c:AdminC, a:"log", w:[M.prototype.checkLogin, M.prototype.checkQx]},
    {m:"get", r:"/obj/person/pwd", c:AdminC, a:"pwd", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/person/home", c:AdminC, a:"main", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/person/blog", c:BolgC, a:"index", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/person/template", c:TemplateC, a:"index", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/func/xyq", c:AdminC, a:"xyq", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/func/md2pdf", c:AdminC, a:"md2pdf", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/func/winxp", c:AdminC, a:"winxp", w:M.prototype.checkLogin},
    {m:"get", r:"/obj/func/xzmf", c:AdminC, a:"xzmf", w:M.prototype.checkLogin},
    {m:"get", r:"/templates/:id", c:TemplateC, a:"one", w:M.prototype.checkLogin},
    {m:"get", r:"/websocket/getAll", c:AdminC, a:"webkit", w:M.prototype.AjaxLogin},
    {m:"post", r:"/photo", c:AdminC, a:"photo", w:M.prototype.AjaxLogin},
    {m:"post", r:"/obj/person/save", c:TemplateC, a:"save", w:M.prototype.AjaxLogin},
    {m:"post", r:"/obj/person/page", c:TemplateC, a:"page", w:M.prototype.AjaxLogin},
    {m:"get", r:"/users/:id", c:RmsRoleC, a:"one", w:M.prototype.checkLogin},
    {m:"get", r:"/users", c:RmsRoleC, a:"all", w:M.prototype.checkLogin},
    {m:"delete", r:"/users/:id", c:RmsRoleC, a:"remove", w:M.prototype.checkLogin},
    {m:"post", r:"/file", c:C, a:"file", w:M.prototype.checkLogin}], 
O= [{m:"post", r:"/obj/register", c:AdminC, a:"register"},
    {m:"post", r:"/obj", c:AdminC, a:"login"},
    {m:"get", r:"/", c:AdminC, a:"index"}];