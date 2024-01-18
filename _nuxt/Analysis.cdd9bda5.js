import{_ as C,r as u,u as f,a as _,b as i,o as a,c as l,d as x,e as c,F as p,f as t,g as h,t as w,h as y}from"./entry.58f99939.js";const v={data(){return{messages:{}}},setup(){const e=u(!1),s=u(!1),{getModel:r,modelChanged:o,modelResults:n}=f();return _(()=>{e.value=!1}),{getModel:r,modelChanged:o,modelResults:n,showConsole:e,analysisCompleted:s}},computed:{hasResults(){return this.modelResults!==null}},methods:{async startProcess(){const e=this.getModel();try{(await i.post("http://127.0.0.1:5001/api/start-process",e)).data.status==="started"&&(this.messages={},this.pollForMessages())}catch(s){console.error("Error starting process:",s)}},async pollForMessages(){try{const e=await i.get("http://127.0.0.1:5001/api/status");if(e.status===200){this.showConsole=!0,this.analysisCompleted=!1;const s=e.data.step;if(this.messages[s]=e.data,e.data.status==="completed"){let o=(await i.get("http://127.0.0.1:5001/api/get-results/"+e.data.text)).data;this.modelChanged=!1,this.modelResults=o,this.analysisCompleted=!0}else this.pollForMessages()}}catch(e){console.error("Error polling for messages:",e)}}}},k={key:0,class:"rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-sm leading-6 text-emerald-900"},M={class:"flex"},b=t("div",{class:"flex-shrink-0"},[t("svg",{class:"h-5 w-5 text-emerald-500",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{opacity:"0.12",d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"}),t("path",{d:"M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),R={class:"ml-3 flex-1 md:flex md:justify-between"},B=t("p",{class:"text-sm"}," Model data has changed. Results may no longer be valid. Please solve again to get updated results. ",-1),F={class:"mt-3 text-sm md:ml-6 md:mt-0"},P=t("span",{"aria-hidden":"true"}," →",-1),S=t("span",{"aria-hidden":"true"}," →",-1);function V(e,s,r,o,n,d){const g=y;return a(),l("div",null,[o.showConsole?(a(),x(g,{key:0,messages:n.messages,completed:o.analysisCompleted,onClose:s[0]||(s[0]=m=>o.showConsole=!1)},null,8,["messages","completed"])):c("",!0),d.hasResults?(a(),l(p,{key:1},[o.modelChanged&&!o.showConsole?(a(),l("div",k,[t("div",M,[b,t("div",R,[B,t("p",F,[t("button",{type:"button",onClick:s[1]||(s[1]=m=>d.startProcess()),class:"whitespace-nowrap font-medium text-emerald-500 hover:text-emerald-600"},[h(" Solve "),P])])])])])):c("",!0),t("pre",null,w(o.modelResults),1)],64)):(a(),l(p,{key:2},[o.showConsole?c("",!0):(a(),l("button",{key:0,type:"button",onClick:s[2]||(s[2]=m=>d.startProcess()),class:"whitespace-nowrap font-medium text-green-700 hover:text-green-600"},[h(" Solve "),S]))],64))])}const N=C(v,[["render",V]]);export{N as default};
