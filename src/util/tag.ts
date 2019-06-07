var HashMap = require('hashmap');
import {TParse} from "../entity/TParse";
import {getConnection} from 'typeorm';
export const Tag={
	Init(name:string){this.Map=new HashMap();
		this.ParseRepository=getConnection(name).getRepository(TParse);},
    async parseHtml(selectValue:string,selectAttValue:string,name:string,type:number,inputName:string,className:string){
    	let html:string =await this.getInputHtml(name, type, inputName, className);
    	if(html!=null){
            if(selectValue!=""&&type!=2){
                html =await html.replace("value='"+selectValue+"'", "value='"+selectValue+"' "+selectAttValue);
            }else{
                let sss:Array<string>=selectValue.split(",");
                for(let i in sss){
                    html =await html.replace("value='"+sss[i]+"'", "value='"+sss[i]+"' "+selectAttValue);
                }
            }return html;
        }
	},
	async getByNumb(numb:string){
		let o=await this.ParseRepository.findOne({keyword:numb})
		if(o)return o;else return undefined;
	},
	async getInputHtml(name:string,type:number,inputName:string,className:string){
        if(type==1||type==2){}else type=0;
		let numbFmt:string=name+type;
		let html:string=this.Map.get(numbFmt);
		if(!html) {
			if(className!=""){className="class='"+className+"'";}else{className="";}
			let parameter=await this.getByNumb(name);
			if(parameter!=null){
				if(type==1){
					html=await this.setRadioCheckbox(parameter,"radio", inputName,className);
				}else if(type==2){
					html=await this.setRadioCheckbox(parameter,"checkbox", inputName,className);
				}else{
					html=await this.setSelect(parameter, inputName,className);
				}
			}
			this.Map.set(numbFmt, html);
		}
		return html;
    },
	async setSelect(parameter:TParse,inputName:string,className:string){
		let sb:string="<label>"+parameter.parameterName+"</label><select "+className+
		"name='"+inputName+"'><option value=''></option>",vls:Array<string> = parameter.keywordDESC.split(",");
		for(let i in vls){
			if(i=="remove")continue;
			if(String(vls[i]).indexOf("=")>-1){
                let vlsKv:Array<string>=String(vls[i]).split("=");
                sb=sb+"<option value='"+vlsKv[0]+"'>"+vlsKv[1]+"</option>";
			}else{
				sb=sb+"<option value='"+vls[i]+"'>"+vls[i]+"</option>";
			}
		}sb=sb+"</select>";
		return sb;
	},
	async setRadioCheckbox(parameter:TParse,type:string,inputName:string,className:string){
        let sb:string="<span "+className+">"+parameter.parameterName+"：",
        vls:Array<string> = parameter.keywordDESC.split(",");
        for(let i in vls){
			if(i=="remove")continue;
			if(String(vls[i]).indexOf("=")>-1){
				let vlsKv:Array<string>=String(vls[i]).split("=");
				sb=sb+vlsKv[1]+"<input type='"+type+"' name='"
					+inputName+"' value='"+vlsKv[0]+"'>&nbsp;";
			}else{
				sb=sb+vls[i]+"<input type='"+type+"' name='"
					+inputName+"' value='"+vls[i]+"'>&nbsp;";
			}
		}sb=sb+"</span>";
		return sb;
	}
}