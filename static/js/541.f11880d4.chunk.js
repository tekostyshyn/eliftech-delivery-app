"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,o,s,l,a,d,u,c,p,h,x,m,f,b,g=t(434),j=t(351),Z=t(630),v=t(168),y=t(444),w=y.ZP.li(r||(r=(0,v.Z)(["\n  display: flex;\n  border: 2px solid #0047ab;\n  padding: 20px 0;\n  border-radius: 4px;\n  position: relative;\n"]))),P=y.ZP.img(i||(i=(0,v.Z)(["\n  width: calc(100% / 2);\n"]))),k=y.ZP.p(o||(o=(0,v.Z)(["\n  font-size: 20px;\n"]))),z=y.ZP.p(s||(s=(0,v.Z)(["\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 15px;\n"]))),C=y.ZP.div(l||(l=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 40px;\n"]))),q=y.ZP.p(a||(a=(0,v.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  color: #0047ab;\n\n  border: 1px solid white;\n  border-radius: 4px;\n\n  &:hover,\n  &:focus {\n    background-color: #0047ab;\n    color: white;\n  }\n\n"]))),A=t(494),F=t(329),H=function(n){var e=n.name,t=n.url,r=n.price,i=n.amount,o=n.id,s=(0,g.I0)();return(0,F.jsxs)(w,{children:[(0,F.jsx)(P,{src:t,alt:e}),(0,F.jsxs)("div",{children:[(0,F.jsx)(z,{children:e}),(0,F.jsxs)(k,{children:["Price: ",r," UAH"]}),(0,F.jsxs)(C,{children:[(0,F.jsxs)("button",{onClick:function(){s((0,Z.Cf)(e))},type:"button",children:["-"," "]}),(0,F.jsxs)(k,{children:["Amount: ",i]}),(0,F.jsx)("button",{onClick:function(){s((0,Z.Wj)(e))},type:"button",children:"+"})]}),(0,F.jsx)(q,{onClick:function(){s((0,Z.$v)(o))},type:"button",children:(0,F.jsx)(A.sQZ,{})})]})]})},N=y.ZP.ul(d||(d=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    aligh-items: flex-start;\n    gap: 20px;\n"]))),_=function(){var n=(0,g.v9)(j.Hl);return(0,F.jsx)(N,{children:n.length>0&&n.map((function(n){return(0,F.jsx)(H,{name:n.name,price:n.price,amount:n.amount,url:n.url,id:n.id},n.id)}))})},I=t(105),S=y.ZP.label(u||(u=(0,v.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weigth: 600;\n  margin-bottom: 10px;\n"]))),T=y.ZP.input(c||(c=(0,v.Z)(["\n  display: block;\n  height: 36px;\n  width: 480px;\n  margin-bottom: 20px;\n  font-size: 18px;\n  padding-left: 10px;\n  padding-right: 10px;\n"]))),V=y.ZP.button(p||(p=(0,v.Z)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 180px;\n  height: 50px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n  background-color: #0047ab;\n  color: white;\n  border: 2px solid #0047ab;\n  border-radius: 4px;\n\n  &:hover,\n  &:focus {\n    background-color: white;\n    color: #0047ab;\n  }\n\n  &.disabled {\n    background-color: lightgray;\n    border-color: lightgray;\n    pointer-events: none;\n  }\n"]))),K=function(){var n=(0,g.I0)(),e=(0,g.v9)(j.Hl);return(0,F.jsxs)("form",{onSubmit:function(t){!function(t){t.preventDefault();var r=t.currentTarget,i=r.elements.name.value,o=r.elements.phone.value,s=r.elements.email.value,l=r.elements.address.value;e.length>0&&(n((0,I.p)({userInfo:{name:i,phone:o,email:s,address:l},order:e})),r.reset())}(t)},children:[(0,F.jsx)(S,{htmlFor:"name",children:"Name:"}),(0,F.jsx)(T,{type:"text",id:"name",name:"name",required:!0}),(0,F.jsx)(S,{htmlFor:"email",children:"Email:"}),(0,F.jsx)(T,{type:"email",id:"email",name:"email",required:!0}),(0,F.jsx)(S,{htmlFor:"phone",children:"Phone:"}),(0,F.jsx)(T,{type:"tel",id:"phone",name:"phone",required:!0}),(0,F.jsx)(S,{htmlFor:"address",children:"Address:"}),(0,F.jsx)(T,{type:"text",id:"address",name:"address",required:!0}),(0,F.jsx)(V,{className:e.length<=0?"disabled":"",type:"submit",children:"Submit order"})]})},M=y.ZP.div(h||(h=(0,v.Z)(["\n  padding-bottom: 80px;\n  position: relative;\n"]))),U=y.ZP.div(x||(x=(0,v.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 30px;\n"]))),W=y.ZP.div(m||(m=(0,v.Z)(["\n  width: calc((100% - 30px) / 2);\n  height: 450px;\n  background-color: white;\n  padding: 20px;\n  border: 2px solid black;\n  border-radius: 4px;\n  overflow-y: auto;\n"]))),D=y.ZP.p(f||(f=(0,v.Z)(["\n  font-size: 24px;\n  line-height: 1.36;\n"]))),E=y.ZP.p(b||(b=(0,v.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  position: absolute;\n  bottom: 10px;\n  left: 65%;\n"]))),O=function(){var n=(0,g.v9)(j.fV),e=(0,g.v9)(j.gK);return(0,F.jsx)("main",{children:(0,F.jsxs)(M,{children:[(0,F.jsxs)(U,{children:[(0,F.jsx)(W,{children:(0,F.jsx)(K,{})}),(0,F.jsxs)(W,{children:[n&&(0,F.jsx)(D,{children:"You order has been submitted successfully. We will call you within 15 minutes. Thank you for chosing us and have a nice day!"}),(0,F.jsx)(_,{})]})]}),(0,F.jsxs)(E,{children:["Total: ",e," UAH"]})]})})}},351:function(n,e,t){t.d(e,{Fb:function(){return s},Hl:function(){return d},VA:function(){return l},fV:function(){return u},gK:function(){return c},ql:function(){return a}});var r=t(433),i=t(916),o=function(n){return n.shops.items},s=(0,i.P1)([o],(function(n){return n.map((function(n){return{name:n.name,id:n.id}}))})),l=function(n){return n.shops.chosenShop},a=(0,i.P1)([o,l],(function(n,e){return n.reduce((function(n,t){return t.name===e&&n.push.apply(n,(0,r.Z)(t.meals)),n}),[])})),d=function(n){return n.selectedMeals.meals},u=function(n){return n.selectedMeals.isOrdered},c=(0,i.P1)([d],(function(n){return n.reduce((function(n,e){return n+Number(e.amount)*Number(e.price)}),0)}))}}]);
//# sourceMappingURL=541.f11880d4.chunk.js.map