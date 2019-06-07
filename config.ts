export const Config={
        port:80,
        upload:"upload",
        pic:"pic",
        view:"views",
        dbLog:"log.db",
        jsonLimit:"1mb",
        session:{
                name:"asciphx",
                secret:'ياخشى',
                cookie:{
                        path:"/",
                        httpOnly:true,
                        originalMaxAge:1500000
                }
        }
}