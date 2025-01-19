import{_ as $,u as q,r as i,c as A,a as R,o as u,b as d,g as o,e as v,h as k,v as C,F as _,i as y,t as m,j as E,k as V,w as U,z as j,p as z,q as H}from"./index-DjAcCz50.js";import{I as Q}from"./vue-qrcode-reader-BAOaq1Pu.js";const W=p=>(z("data-v-6a3e716b"),p=p(),H(),p),J=["value"],L=["value"],X=W(()=>o("br",null,null,-1)),Y=["onUpdate:modelValue","id"],G=["for"],K={class:"error"},Z={class:"decode-result"},ee={__name:"ScanQrcode",setup(p){const x=q(),g=i("");function N(a){console.log(a),g.value=JSON.stringify(a.map(t=>t.rawValue));try{a[0].stop()}catch{}x.back()}const b=i({facingMode:"environment"}),S=[{label:"rear camera",constraints:{facingMode:"environment"}},{label:"front camera",constraints:{facingMode:"user"}}],w=i(S);async function O(){const t=(await navigator.mediaDevices.enumerateDevices()).filter(({kind:n})=>n==="videoinput");w.value=[...S,...t.map(({deviceId:n,label:e})=>({label:`${e} (ID: ${n})`,constraints:{deviceId:n}}))],s.value=""}function P(a,t){for(const n of a){const[e,...l]=n.cornerPoints;t.strokeStyle="red",t.beginPath(),t.moveTo(e.x,e.y);for(const{x:r,y:c}of l)t.lineTo(r,c);t.lineTo(e.x,e.y),t.closePath(),t.stroke()}}function B(a,t){for(const n of a){const{boundingBox:{x:e,y:l,width:r,height:c}}=n;t.lineWidth=2,t.strokeStyle="#007bff",t.strokeRect(e,l,r,c)}}function D(a,t){for(const n of a){const{boundingBox:e,rawValue:l}=n,r=e.x+e.width/2,c=e.y+e.height/2,M=Math.max(12,50*e.width/t.canvas.width);t.font=`bold ${M}px sans-serif`,t.textAlign="center",t.lineWidth=3,t.strokeStyle="#35495e",t.strokeText(n.rawValue,r,c),t.fillStyle="#5cb984",t.fillText(l,r,c)}}const T=[{text:"nothing (default)",value:void 0},{text:"outline",value:P},{text:"centered text",value:D},{text:"bounding box",value:B}],h=i(T[1]),f=i({aztec:!1,code_128:!1,code_39:!1,code_93:!1,codabar:!1,databar:!1,databar_expanded:!1,data_matrix:!1,dx_film_edge:!1,ean_13:!1,ean_8:!1,itf:!1,maxi_code:!1,micro_qr_code:!1,pdf417:!1,qr_code:!0,rm_qr_code:!1,upc_a:!1,upc_e:!1,linear_codes:!1,matrix_codes:!1}),I=A(()=>Object.keys(f.value).filter(a=>f.value[a])),s=i("");function F(a){s.value=`[${a.name}]: `,a.name==="NotAllowedError"?s.value+="您需要授予权限以访问摄像头":a.name==="NotFoundError"?s.value+="此设备上没有摄像头":a.name==="NotSupportedError"?s.value+="需要安全环境（如HTTPS或localhost）":a.name==="NotReadableError"?s.value+="摄像头是否已被占用？":a.name==="OverconstrainedError"?s.value+="已安装的摄像头不符合要求":a.name==="StreamApiNotSupportedError"?s.value+="此浏览器不支持Stream API":a.name==="InsecureContextError"?s.value+="仅在安全上下文中允许访问摄像头，请使用HTTPS或localhost而非HTTP。":s.value+=a.message}return(a,t)=>{const n=R("van-button");return u(),d(_,null,[o("div",null,[o("p",null,[v(" 选择摄像头: "),k(o("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e)},[(u(!0),d(_,null,y(w.value,e=>(u(),d("option",{key:e.label,value:e.constraints},m(e.label),9,J))),128))],512),[[C,b.value]])]),o("p",null,[v(" 列表风格: "),k(o("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>h.value=e)},[(u(),d(_,null,y(T,e=>o("option",{key:e.text,value:e},m(e.text),9,L)),64))],512),[[C,h.value]])]),o("p",null,[v(" 识别类型: "),X,(u(!0),d(_,null,y(Object.keys(f.value),e=>(u(),d("span",{key:e,class:"barcode-format-checkbox"},[k(o("input",{type:"checkbox","onUpdate:modelValue":l=>f.value[e]=l,id:e},null,8,Y),[[j,f.value[e]]]),o("label",{for:e},m(e),9,G)]))),128))]),o("p",K,m(s.value),1),o("p",Z,[v(" 识别结果: "),o("b",null,m(g.value),1)]),o("div",null,[E(V(Q),{constraints:b.value,track:h.value.value,formats:I.value,onError:F,onDetect:N,onCameraOn:O},null,8,["constraints","track","formats"])])]),E(n,{type:"primary",onClick:t[2]||(t[2]=e=>V(x).back())},{default:U(()=>[v("返回")]),_:1})],64)}}},oe=$(ee,[["__scopeId","data-v-6a3e716b"]]);export{oe as default};
