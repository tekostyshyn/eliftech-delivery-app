"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[908],{908:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var i,o,t,c,p,d,s,l,a,x,u,h=r(439),f=r(168),m=r(444),b=m.ZP.div(i||(i=(0,f.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 30px;\n"]))),Z=r(434),g=r(791),w=r(97),j=r(433),k=function(n){return n.shops.items.map((function(n){return{name:n.name,id:n.id}}))},v=m.ZP.div(o||(o=(0,f.Z)(["\nmin-height: 400px;\n  padding: 20px 15px 60px 15px;\n  width: calc((100% - 30px) * 0.15);\n  border: 2px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 4px;\n"]))),P=m.ZP.div(t||(t=(0,f.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 30px;\n"]))),y=m.ZP.ul(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n"]))),C=m.ZP.button(p||(p=(0,f.Z)(["\n    width: 160px;\n    height: 60px;\n    font-size: 24px;\n    cursor: pointer;\n    background-color: white;\n    border-radius: 4px;\n    border: 3px solid white;\n\n    &:hover, &:focus {\n        border-color: #0047AB;  \n        color: #0047AB; \n    }\n"]))),z=r(184),S=function(n){var e=n.onClick,r=n.name;return(0,z.jsx)(C,{onClick:function(){return e(r)},children:r})},_=function(n){var e=n.onClick,r=(0,Z.v9)(k);return(0,z.jsxs)(v,{children:[(0,z.jsx)(P,{children:"Shops:"}),(0,z.jsx)(y,{children:r.map((function(n){return(0,z.jsx)("li",{children:(0,z.jsx)(S,{onClick:e,name:n.name})},n.id)}))})]})},A=m.ZP.div(d||(d=(0,f.Z)(["\n  padding: 20px 40px 60px 40px;\n  width: calc((100% - 30px) * 0.85);\n  border: 2px solid black;\n  border-radius: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n"]))),B=m.ZP.div(s||(s=(0,f.Z)(["\n  padding: 20px;\n  width: calc((100% - 130px) / 2);\n  border: 2px solid #0047ab;\n  border-radius: 4px;\n"]))),D=m.ZP.img(l||(l=(0,f.Z)(["\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n"]))),E=m.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),H=m.ZP.button(x||(x=(0,f.Z)(["\n  width: 120px;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 600;\n  background-color: #0047ab;\n  color: white;\n  border: 2px solid #0047ab;\n  border-radius: 4px;\n\n  &:hover,\n  &:focus {\n    background-color: white;\n    color: #0047ab;\n  }\n"]))),I=m.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),M=function(n){var e=n.name,r=n.price,i=n.url;return(0,z.jsxs)(B,{children:[(0,z.jsx)(D,{src:i,alt:e}),(0,z.jsxs)(E,{children:[(0,z.jsx)(I,{children:e}),(0,z.jsxs)(I,{children:[r," UAH"]})]}),(0,z.jsx)(H,{children:"Order"})]})},N=function(n){var e,r=n.chosenShop,i=(0,Z.v9)((e=r,function(n){return n.shops.items.reduce((function(n,r){return r.name===e&&n.push.apply(n,(0,j.Z)(r.meals)),n}),[])}));return console.log(i),(0,z.jsx)(A,{children:i.map((function(n){return(0,z.jsx)(M,{name:n.name,price:n.price,url:n.url},n.id)}))})},O=function(){var n=(0,Z.I0)(),e=(0,g.useState)("McDonalds"),r=(0,h.Z)(e,2),i=r[0],o=r[1];return(0,g.useEffect)((function(){n((0,w.N)())}),[n]),(0,z.jsx)("main",{children:(0,z.jsxs)(b,{children:[(0,z.jsx)(_,{onClick:function(n){o(n)}}),(0,z.jsx)(N,{chosenShop:i})]})})}}}]);
//# sourceMappingURL=908.311faf95.chunk.js.map