import{_ as m,a6 as u}from"./index-DZ1IiwsM.js";import{f as c,o as l,g as e,F as d,aj as _,t as f,aJ as k,b as g,w as v,ah as b,e as W,v as x,x as j,X as p}from"./modules/vue-D5Jw2PmI.js";import{I as w}from"./slidev/default-CuS1vCI2.js";import{u as h,f as C}from"./slidev/context-T6n7ClfC.js";import"./monaco/bundled-types-D0vIpmQc.js";import"./modules/file-saver-BzOOqXCn.js";import"./modules/shiki-C304EDc1.js";const S={inject:{$slidev:{from:u}},name:"WebWorker",data(){return{numbers:[]}},methods:{startWorker(){const i=`
        self.onmessage = function(e) {
          console.log(e.data);
          for (let i = 1; i <= 10; i++) {
            self.postMessage(i);
            for (let j = 0; j < 1e9; j++) {
              // Simulate some work
            }
          }
          console.log('done')
          self.postMessage('done');
        };
      `,t=new Blob([i],{type:"application/javascript"}),s=new Worker(URL.createObjectURL(t));s.onmessage=a=>{console.log("Worker message:",a.data),a.data==="done"?s.terminate():this.numbers.push(a.data)},console.log("Worker created"),s.postMessage("start")}}},B={class:"flex flex-wrap gap-2 mt-4"};function $(i,t,s,a,r,n){return l(),c("div",null,[e("button",{class:"border-2 p-3 rounded-xl",onClick:t[0]||(t[0]=(...o)=>n.startWorker&&n.startWorker(...o))}," Start Worker "),e("div",B,[(l(!0),c(d,null,_(r.numbers,o=>(l(),c("span",{key:o},f(o),1))),128))])])}const y=m(S,[["render",$]]),I={__name:"javascript-is-singlethreaded.md__slidev_13",setup(i){const{$clicksContext:t,$frontmatter:s}=h();return t.setup(),(a,r)=>{const n=y,o=k("click");return l(),g(w,x(j(p(C)(p(s),12))),{default:v(()=>[r[0]||(r[0]=e("h1",null,"Use Web Workers",-1)),r[1]||(r[1]=e("ul",null,[e("li",null,[e("p",null,"run JavaScript in a separate thread")]),e("li",null,[e("p",null,"communicate with the main thread via message passing")])],-1)),b(W(n,{class:"pt-5"},null,512),[[o]])]),_:1,__:[0,1]},16)}}};export{I as default};
