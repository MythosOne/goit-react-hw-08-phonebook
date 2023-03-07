"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[625],{7625:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,o,i,a,l,c,s,d,u,x,p,m=t(5705),h=t(9434),b=t(3634),f=function(n){return n.contacts.items},g=function(n){return n.contacts.filter},Z=t(168),j=t(82),w=(0,j.ZP)(m.l0)(r||(r=(0,Z.Z)(["\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    padding: 10px;\n    margin: 0 auto;\n    border: 1px solid rgb(236, 236, 236);\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);\n"]))),y=(0,j.ZP)(m.gN)(o||(o=(0,Z.Z)(["\n    height: 20px;\n    border: 2px solid rgb(163 167 167);\n    border-radius: 4px;\n"]))),v=j.ZP.label(i||(i=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: auto;\n    font-size: 16px;\n    font-weight: 600;\n"]))),C=j.ZP.button(a||(a=(0,Z.Z)(["\n    border-radius: 4px;\n    width: 100px;\n    height: 30px;\n    text-align: center;\n    border: none;\n    font-size: 14px;\n    font-weight: 600;\n    background-color: rgb(63, 81, 181);\n    color: white;\n    margin: 0 auto;\n"]))),P=t(184),k=function(){var n=(0,h.I0)(),e=(0,h.v9)(f);return(0,P.jsx)(m.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var o=t.name,i=t.number,a=r.resetForm,l=o.toLowerCase().trim();e.some((function(n){return n.name.toLowerCase().trim()===l}))?alert("".concat(o," is already in contacts")):0===o.length?alert("Fields must be filled!"):n((0,b.uK)({name:o,number:i})),a()},children:(0,P.jsxs)(w,{children:[(0,P.jsxs)(v,{children:["Name",(0,P.jsx)(y,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter name",required:!0})]}),(0,P.jsxs)(v,{children:["Number",(0,P.jsx)(y,{type:"tel",name:"number",pattern:"\\d{3}[-]\\d{2}[-]\\d{2}",title:"The phone number must consist of numbers and a dash ###-##-##",placeholder:"Enter phone number",required:!0})]}),(0,P.jsx)(C,{type:"submit",children:"Add Contact"})]})})},z=j.ZP.ul(l||(l=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 0;\n"]))),_=j.ZP.li(c||(c=(0,Z.Z)(["\n    width: 280px;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 8px;\n"]))),A=j.ZP.button(s||(s=(0,Z.Z)(["\n    border-radius: 4px;\n    text-align: center;\n    border: none;\n    font-size: 12px;\n    background-color: rgb(63, 81, 181);\n    color: white;\n"]))),F=j.ZP.ul(d||(d=(0,Z.Z)(["\n    padding: 0;\n    text-align: center;\n\n    font-size: 16px;\n    font-weight: 600;\n    color: orange;\n"]))),N=function(){var n=(0,h.v9)(g),e=(0,h.v9)(f),t=(0,h.I0)(),r=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return(0,P.jsxs)(z,{children:[r.map((function(n){return(0,P.jsxs)(_,{children:["".concat(n.name," : ").concat(n.number),(0,P.jsx)(A,{type:"button",name:"delete",onClick:function(){t((0,b.GK)(n.id))},children:"delete"})]},n.id)})),(0,P.jsx)(F,{children:0===e.length&&"You do not have contacts \ud83d\ude2f"})]})},L=t(1538),E=j.ZP.h3(u||(u=(0,Z.Z)(["\n    font-size: 24px;\n    text-align: center;\n    margin: 0;\n    margin-bottom: 10px;\n"]))),I=j.ZP.div(x||(x=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),q=j.ZP.input(p||(p=(0,Z.Z)(["\n    height: 20px;\n    border: 2px solid rgb(163 167 167);\n    border-radius: 4px;\n"]))),J=function(){var n=(0,h.I0)(),e=(0,h.v9)(g);return(0,P.jsxs)(I,{children:[(0,P.jsx)(E,{children:"Find contacts by name"}),(0,P.jsx)(q,{type:"text",value:e,onChange:function(e){return n((0,L.Tv)(e.target.value))},placeholder:"Enter Name"})]})},K=function(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(k,{}),(0,P.jsx)(N,{}),(0,P.jsx)(J,{})]})}}}]);
//# sourceMappingURL=625.51bac8cf.chunk.js.map