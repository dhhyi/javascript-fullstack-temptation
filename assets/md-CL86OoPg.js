import{_ as u,a6 as d}from"./index-JMDOyCY6.js";import{f as c,o as l,g as e,F as m,aj as _,t as f,aJ as k,b as g,w as v,ah as b,e as W,v as x,x as h,X as p}from"./modules/vue-BYJtssLi.js";import{I as j}from"./slidev/default-X_J8Nb1N.js";import{u as w,f as C}from"./slidev/context-BvKWXXJ1.js";import"./monaco/bundled-types-3VLDfr5b.js";import"./modules/file-saver-BzOOqXCn.js";import"./modules/shiki-RUd7EipU.js";const S={inject:{$slidev:{from:d}},name:"WebWorker",data(){return{numbers:[]}},methods:{startWorker(){const i=`
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
      `,t=new Blob([i],{type:"application/javascript"}),r=new Worker(URL.createObjectURL(t));r.onmessage=a=>{console.log("Worker message:",a.data),a.data==="done"?r.terminate():this.numbers.push(a.data)},console.log("Worker created"),r.postMessage("start")}}},B={class:"flex flex-wrap gap-2 mt-4"};function $(i,t,r,a,s,n){return l(),c("div",null,[e("button",{class:"border-2 p-3 rounded-xl",onClick:t[0]||(t[0]=(...o)=>n.startWorker&&n.startWorker(...o))}," Start Worker "),e("div",B,[(l(!0),c(m,null,_(s.numbers,o=>(l(),c("span",{key:o},f(o),1))),128))])])}const y=u(S,[["render",$]]),F={__name:"javascript-is-singlethreaded.md__slidev_13",setup(i){const{$clicksContext:t,$frontmatter:r}=w();return t.setup(),(a,s)=>{const n=y,o=k("click");return l(),g(j,x(h(p(C)(p(r),12))),{default:v(()=>[s[0]||(s[0]=e("h1",null,"Use Workers",-1)),s[1]||(s[1]=e("ul",null,[e("li",null,[e("p",null,"run JavaScript in a separate thread")]),e("li",null,[e("p",null,"communicate with the main thread via message passing")]),e("li",null,[e("p",null,"available in the browser (Web Workers) and Node.js (Worker Threads)")])],-1)),b(W(n,{class:"pt-5"},null,512),[[o]])]),_:1,__:[0,1]},16)}}};export{F as default};
