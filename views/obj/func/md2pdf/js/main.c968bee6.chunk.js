(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(42)},29:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),i=t.n(o),l=(t(28),t(29),t(1)),c=t(2),s=t(3),u=t(13),d=function(e){document.querySelector(".CodeMirror").CodeMirror.setValue(e)},m=t.n(u)()(new FileReader),f=function(e){var n=m("load",function(e){if(2===e.target.readyState)if(e.target.error)alert("Error while reading file");else{var n=e.target.result;d(n)}}),t=Object(s.a)(n,1)[0];return a.a.createElement("p",Object.assign({},e,{style:{position:"relative"}}),a.a.createElement("input",{id:"mdFile",type:"file",style:{display:"none"},onChange:function(e){var n=e.currentTarget.files;n.length>0&&t.readAsText(n[0])},accept:".md"}),a.a.createElement("label",{htmlFor:"mdFile",style:{position:"absolute",opacity:0,top:0,left:0,right:0,bottom:0,zIndex:2,cursor:"pointer"}}),a.a.createElement("span",{role:"img","aria-label":"upload"},"\ud83d\udcc1"),a.a.createElement("span",null,"选取.md"))};function p(){var e=Object(l.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  flex-shrink: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  user-select: none;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: black;\n  background-color: rgb(233, 233, 233);\n  display: flex;\n  align-items: center;\n  height: 40px;\n  .project {\n    font-weight: bold;\n    margin: 5px;\n    flex-shrink: 0;\n    height: 20px;\n  }\n  div.menu {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    .button {\n      height: 80%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      margin-left: 3px;\n      border-radius: 3px;\n      border: 1px solid black;\n      padding: 10px;\n      cursor: pointer;\n    }\n  }\n\n  /* span.author {\n    position: fixed;\n    bottom: 2px;\n    left: 2px;\n    opacity: 0.5;\n    color: white;\n    height: 20px;\n    z-index:99;\n  } */\n  @keyframes dance {\n    0% {\n      transform: rotate(3deg);\n    }\n    100% {\n      transform: rotate(-2deg);\n    }\n  }\n"]);return p=function(){return e},e}var h=Object(c.a)(function(e){var n=e.className;return a.a.createElement("header",{className:n+" no-print"},a.a.createElement("p",{className:"project"}," TypeScript-ele-admin "),a.a.createElement("iframe",{title:"github-button",className:"project",style:{display:"block"},src:"https://ghbtns.com/github-btn.html?user=asciphx&repo=TypeScript-ele-admin&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100px",height:"20px"}),a.a.createElement("div",{className:"menu"},a.a.createElement(f,{className:"button upload"}),a.a.createElement("p",{className:"button download",onClick:function(){return window.print()}},a.a.createElement("span",{role:"img","aria-label":"download"},"\ud83c\udf89"),a.a.createElement("span",null,"打印PDF"))))})(p()),b=t(5),v="# Markdown2PDF \nhttps://www.baidu.com/\n> 很好的Markdown转换成PDF!\n```diff\n- 在线?上传resume.md到html?\n+ 请尝试断网/脱机使用Web应用!\n```\n\n## 如何使用md2pdf?\n1. 点击**选取.md**按钮选择`.md`文件打开.\n2. 在编辑器中编辑 (左面板).\n3. 单机 **打印PDF**!\n4. 钩选“目标打印机”框 **另存为PDF**..\n4. **建议使用Chrome高速核心**\n\n## Tips提示\n- `Resize`你想要的布局.\n- 点击 `打印PDF`按钮后, 反转**'Headers and Footers'**. \n- **\u53cd\u9078\u9801\u9996\u8207\u9801\u5c3e**.\n\n## 特别什么?\n- 你可以使用<span style=\"color:#0984e3\">html</span>标签!\n<blockquote>Hey 我是空格!</blockquote>\n\n## Profile简况\n- Github: [@asciphx](https://github.com/asciphx)\n- Project项目: md2pdf (Markdown2PDF)\n- 关于我: \u2615 \u3001 \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb\ufe0f\u3001 \ud83c\udf55\u3001 \ud83c\udf9e\ufe0f\n\n## 像这样编码\n```javascript\n// index.js\nfunction Hello(){\n  console.log('World!')\n}\nHello();\n```\n\n或者是\n\n```python\n# main.py\ndef awesome():\n    print('awesome!')\nawesome()\n```\n\n",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=Object(r.useState)(e),t=Object(s.a)(n,2);return[t[0],t[1]]},x=Object(b.Container)(g);function w(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  & > p {\n    margin: 5px;\n    width: 5px;\n    height: 15px;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-name: load;\n    animation-duration: ",";\n    &:nth-child(1) {\n      animation-delay: ",";\n    }\n    &:nth-child(2) {\n      animation-delay: ",";\n    }\n  }\n  @keyframes load {\n    25% {\n      transform: translateY(-10px);\n    }\n    75% {\n      transform: translateY(10px);\n    }\n  }\n"]);return w=function(){return e},e}var E=Object(c.a)(function(e){var n=e.className;return a.a.createElement("div",{className:n},a.a.createElement("p",null),a.a.createElement("p",null),a.a.createElement("p",null))})(w(),function(e){return e.duration+"s"},function(e){return e.duration/3+"s"},function(e){return 2*e.duration/3+"s"}),j=t(16),y=t(17),O=t(20),k=t(18),N=t(22),C=function(e){function n(e){var t;return Object(j.a)(this,n),(t=Object(O.a)(this,Object(k.a)(n).call(this,e))).state={error:null,errorInfo:null},t}return Object(N.a)(n,e),Object(y.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,errorInfo:n})}},{key:"render",value:function(){return this.state.errorInfo?a.a.createElement("div",null,a.a.createElement("p",null,"Error occurs"),a.a.createElement("button",{onClick:function(){window.location.reload()},style:{background:"none",padding:"5px",borderRadius:"5px",boxShadow:"1px 1px 1px grey",outline:"none",cursor:"pointer"}},"Reload This Page")):this.props.children}}]),n}(a.a.Component);t(12);function S(){var e=Object(l.a)(["\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  padding: 10px;\n  @media print {\n    padding: 0;\n    overflow-y: hidden;\n  }\n"]);return S=function(){return e},e}var D=c.a.div(S()),T=Object(r.lazy)(function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,293))}),F=function(e){var n=e.source,t=e.children;return a.a.createElement(C,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(E,{duration:.5})},a.a.createElement(D,{className:"preview  markdown-body"},a.a.createElement(T,{source:n},t))))},L=t(19);t(35),t(36),t(37);function P(){var e=Object(l.a)(["\n  height: 100%;\n  .CodeMirror {\n    height: 100%;\n    line-height: 1.5;\n  }\n"]);return P=function(){return e},e}var M=Object(c.a)(function(e){var n=e.className,t=e.setText;return a.a.createElement(L.UnControlled,{className:n,value:v,options:{mode:"gfm",theme:"darcula",lineNumbers:!0,lineWrapping:!0},onChange:function(e,n,r){t(r)}})})(P());function z(){var e=Object(l.a)(["\n  flex-shrink: 0;\n  height: 100%;\n  width: 50%;\n  color: rgb(204, 204, 204);\n"]);return z=function(){return e},e}var R=Object(c.a)(function(e){var n=e.className,t=e.setText,r=e.width;return a.a.createElement("div",{style:{width:r},className:n},a.a.createElement(M,{setText:t}))})(z());function I(){var e=Object(l.a)(["\n  width: ",";\n  flex-shrink: 0;\n  background-color: ",";\n  height: 100%;\n  color: white;\n  text-align: center;\n  cursor: col-resize;\n  user-select: none;\n"]);return I=function(){return e},e}var W=Object(c.a)(function(e){var n=e.className,t=e.setDrag,r=e.setStartX;return a.a.createElement("div",{className:n,onMouseDown:function(e){t(!0),function(e){var n=e.nativeEvent.offsetX;r(n)}(e)},onMouseUp:function(){t(!1)}})})(I(),"15px",function(e){return e.isDrag?"#0984e3":"rgb(233,233,233)"});var A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=Object(r.useState)(!1),a=Object(s.a)(t,2),o=a[0],i=a[1],l=Object(r.useState)(!1),c=Object(s.a)(l,2),u=c[0],d=c[1],m=function(e){e.preventDefault(),e.stopPropagation()},f=function(e){d(!0),m(e)},p=function(e){d(!1),m(e)},h=function(e){d(!1),m(e),function(e){if(e&&e[0]&&e[0].name&&/\.(md)$/i.test(e[0].name)&&!o){var t=new FileReader;t.onload=function(e){i(!1),n(e.target.result)},t.readAsText(e[0]),i(!0)}}(e.dataTransfer.files)};return Object(r.useEffect)(function(){var n=e.current;if(n)return n.addEventListener("dragenter",m,!0),n.addEventListener("dragover",f,!0),n.addEventListener("dragleave",p,!0),n.addEventListener("drop",h,!0),function(){n.removeEventListener("dragenter",m,!0),n.removeEventListener("dragover",f,!0),n.removeEventListener("dragleave",p,!0),n.removeEventListener("drop",h,!0)}},[]),[o,u]};function H(){var e=Object(l.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  height: 100%;\n  display: flex;\n"]);return H=function(){return e},e}var q=Object(c.a)(function(e){var n=e.className,t=Object(b.useProvided)(x),o=Object(s.a)(t,2),i=o[0],l=o[1],c=Object(r.useState)(!1),u=Object(s.a)(c,2),m=u[0],f=u[1],p=Object(r.useState)(0),h=Object(s.a)(p,2),v=h[0],g=h[1],w=Object(r.useState)(window.innerWidth/2),E=Object(s.a)(w,2),j=E[0],y=E[1],O=Object(r.useRef)(null),k=A(O,d),N=Object(s.a)(k,2),C=N[0],S=N[1];return a.a.createElement("div",{ref:O,style:{opacity:S||C?.5:1},className:n,onMouseMove:function(e){if(m){var n=e.nativeEvent.pageX;y(n-v)}}},a.a.createElement(R,{className:"no-print",width:j,setText:l}),a.a.createElement(W,{className:"no-print",isDrag:m,setDrag:f,setStartX:g}),a.a.createElement(F,null,i))})(H());function X(){var e=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family: \u5fae\u8edf\u6b63\u9ed1\u9ad4, sans-serif;\n  @media print {\n    &,\n    div {\n      display: block;\n      height: auto;\n      /* Reset to normalize for FireFox */\n    }\n    .no-print,\n    .no-print * {\n      display: none !important;\n    }\n  }\n"]);return X=function(){return e},e}var U=Object(c.a)(function(e){var n=e.className;return a.a.createElement("div",{className:n,id:"md2pdf-app"},a.a.createElement(b.Provider,{inject:[x]},a.a.createElement(h,null),a.a.createElement(q,null)))})(X()),Y=document.getElementById("root");window.addEventListener("drop",function(e){return e.preventDefault()},!0),window.addEventListener("dragover",function(e){return e.preventDefault()},!0),i.a.render(a.a.createElement(U,null),Y)}},[[23,1,3]]]);
//# sourceMappingURL=main.c968bee6.chunk.js.map