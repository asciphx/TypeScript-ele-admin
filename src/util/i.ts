// type UnionToIntersection<T>=(T extends any ? (K:T)=>void:never)extends((K:infer I)=>void)?I:never;
// type Peel<T>=UnionToIntersection<T[keyof T]>;type A={a:{a:number},b:{b:boolean}};
// let z:Peel<A>;z={a:1,b:true};console.log(z.b);type B={a:{a:number}};
// let y:Peel<B>;y={a:1};console.log(y.a)
type List={"a":(a:number,b:string)=>void,"b":(...args:Array<string|number>)=>void};
function o<K extends keyof List>(type:K,L:List[K]){};
console.time(`5`);'！@#……%.*&.—_.gif'.replace(/([^_]|_)+\./,'\.');console.timeEnd(`5`);
console.time(`6`);'！@#……%.*&.—_.gif'.replace(/().*(?=)\./,'\.');console.timeEnd(`6`);
console.time(`1`);let a:string;
for(let i=0;i<100;i++){a+="~";}
console.timeEnd(`1`);
console.time(`2`);let b:string;
for(let i=0;i<100;i++){b=b+"~";}
console.timeEnd(`2`);
let c:string="abcdefg"
console.time(`3`);let d:string="";
for(let i=c.length-1;i>-1;i--){d=d+c.charAt(i);}
console.timeEnd(`3`);console.log(d);
console.time(`4`);let e:string="";console.timeEnd(`4`);
// interface NodeProps extends


