"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,i,l,s,a,d,o,u,p,c,x=r(168),m=r(444),h=m.ZP.div(t||(t=(0,x.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 30px;\n"]))),f=m.ZP.div(i||(i=(0,x.Z)(["\n  width: calc((100% - 30px) / 2);\n  height: 500px;\n  background-color: white;\n  padding: 20px 20px 60px 20px;\n  border: 2px solid black;\n  border-radius: 4px;\n  overflow-y: scroll;\n"]))),j=r(434),g=r(351),b=m.ZP.li(l||(l=(0,x.Z)(["\n  display: flex;\n  border: 1px solid black;\n  padding: 20px 0;\n  border-radius: 4px;\n"]))),Z=m.ZP.img(s||(s=(0,x.Z)(["\n  width: calc(100% / 2);\n"]))),v=m.ZP.p(a||(a=(0,x.Z)(["\n  font-size: 20px;\n"]))),k=m.ZP.p(d||(d=(0,x.Z)(["\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 15px;\n"]))),y=m.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 40px;\n"]))),w=r(630),P=r(184),q=function(n){var e=n.name,r=n.url,t=n.price,i=n.amount,l=(0,j.I0)();return(0,P.jsxs)(b,{children:[(0,P.jsx)(Z,{src:r,alt:e}),(0,P.jsxs)("div",{children:[(0,P.jsx)(k,{children:e}),(0,P.jsxs)(v,{children:["Price: ",t," UAH"]}),(0,P.jsxs)(y,{children:[(0,P.jsx)("button",{onClick:function(){l((0,w.Cf)(e))},children:"-"}),(0,P.jsxs)(v,{children:["Amount: ",i]}),(0,P.jsx)("button",{onClick:function(){l((0,w.Wj)(e))},children:"+"})]})]})]})},C=m.ZP.ul(u||(u=(0,x.Z)(["\n    display: flex;\n    flex-direction: column;\n    aligh-items: flex-start;\n    gap: 20px;\n"]))),z=function(){var n=(0,j.v9)(g.Hl);return(0,P.jsx)(C,{children:n.length>0&&n.map((function(n){return(0,P.jsx)(q,{name:n.name,price:n.price,amount:n.amount,url:n.url},n.id)}))})},F=m.ZP.label(p||(p=(0,x.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weigth: 600;\n  margin-bottom: 10px;\n  "]))),H=m.ZP.input(c||(c=(0,x.Z)(["\n  display: block;\n  height: 36px;\n  width: 480px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  padding-left: 10px;\n  padding-right: 10px;\n"]))),_=r(97),A=function(){var n=(0,j.I0)(),e=(0,j.v9)(g.Hl);return(0,P.jsxs)("form",{onSubmit:function(r){r.preventDefault();var t=r.currentTarget,i=t.elements.name.value,l=t.elements.phone.value,s=t.elements.email.value,a=t.elements.address.value;e.length>0&&n((0,_.p)({userInfo:{name:i,phone:l,email:s,address:a},order:e})),t.reset()},children:[(0,P.jsx)(F,{htmlFor:"name",children:"Name:"}),(0,P.jsx)(H,{type:"text",id:"name",name:"name",required:!0}),(0,P.jsx)(F,{htmlFor:"email",children:"Email:"}),(0,P.jsx)(H,{type:"email",id:"email",name:"email",required:!0}),(0,P.jsx)(F,{htmlFor:"phone",children:"Phone:"}),(0,P.jsx)(H,{type:"tel",id:"phone",name:"phone",required:!0}),(0,P.jsx)(F,{htmlFor:"address",children:"Address:"}),(0,P.jsx)(H,{type:"text",id:"address",name:"address",required:!0}),(0,P.jsx)("button",{type:"submit",children:"Submit order"})]})},I=function(){return(0,P.jsxs)("main",{children:[(0,P.jsxs)(h,{children:[(0,P.jsx)(f,{children:(0,P.jsx)(A,{})}),(0,P.jsx)(f,{children:(0,P.jsx)(z,{})})]}),(0,P.jsx)("p",{children:"Total: "})]})}},351:function(n,e,r){r.d(e,{Hl:function(){return s},e3:function(){return i},ql:function(){return l}});var t=r(433),i=function(n){return n.shops.items.map((function(n){return{name:n.name,id:n.id}}))},l=function(n){return function(e){return e.shops.items.reduce((function(e,r){return r.name===n&&e.push.apply(e,(0,t.Z)(r.meals)),e}),[])}},s=function(n){return n.selectedMeals.meals}}}]);
//# sourceMappingURL=541.2e8bbfd1.chunk.js.map