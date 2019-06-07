import {  Request, Response} from 'express';
import * as fs from "fs";
export const T={
    readFileList(path:string, filesList:Array<any>){
        fs.readdirSync(path).forEach((itm, index)=>{
            var stat =fs.statSync(path + itm);
            if (stat.isDirectory()) {
                this.readFileList(path + itm + "/", filesList)
            } else {
                filesList.push(path+itm);
            }
        })
    },
    deleteAll(path:string) {
        path=path+"/";
        fs.readdirSync(path).forEach((itm)=>{
            fs.unlinkSync(path + itm)
        })
    },
    deleteOne(path:string) {
        if(fs.existsSync(path))fs.unlinkSync(path);
    },
    fileAction(request: Request, response: Response) {
        let filesList =new Array;
        this.readFileList(request.query.path, filesList);
        response.send(filesList);
    }
}