(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={Section:"Section_Section__2eHCr"}},11:function(e,t,n){e.exports={Container:"Container_Container__l1mMv"}},12:function(e,t,n){e.exports={elem:"ContactForm_elem__YN2Bp"}},19:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(19),n(14)),s=n(2),l=n(10),u=n.n(l),b=n(0);var j=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:u.a.Section,children:[t&&Object(b.jsx)("h1",{children:t}),n]})},m=n(11),d=n.n(m);var h=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("div",{className:d.a.Container,children:[t&&Object(b.jsx)("h2",{children:t}),n]})},O=n(12),f=n.n(O);function p(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],j=l[1],m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":j(a);break;default:return}};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,u),i(""),j("")},className:f.a.elem,children:[Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:r,onChange:m,required:!0})}),Object(b.jsx)("label",{children:Object(b.jsx)("input",{type:"tel",name:"number",value:u,onChange:m,placeholder:"Enter number",pattern:"38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}",title:"\u041d\u043e\u043c\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 380956665557.",required:!0})}),Object(b.jsx)("button",{type:"submit",children:"Save"})]})}var x=n(3),v=n.n(x);function C(e){var t=e.contacts,n=e.deleteContact;return Object(b.jsx)("ul",{className:v.a.list,children:t.map((function(e){return Object(b.jsxs)("li",{className:v.a.elem,children:[Object(b.jsxs)("p",{className:v.a.title,children:[e.name," : "]}),Object(b.jsx)("p",{className:v.a.title,children:e.number}),Object(b.jsx)("button",{className:v.a.button,onClick:function(){return n(e.id)},type:"button",children:"Delete"})]},e.id)}))})}var _=n(8),S=n.n(_);function g(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{className:S.a.elem,children:["Find contacts by name",Object(b.jsx)("input",{type:"text",name:"filter",className:S.a.input,value:t,onChange:n,placeholder:"Enter name "})]})}var N=n(13),w=n.n(N),k=[{id:"id-1",name:"Rosie Simpson",number:"380950254596"},{id:"id-2",name:"Hermione Kline",number:"380950254436"},{id:"id-3",name:"Eden Clements",number:"380950256456"},{id:"id-4",name:"Annie Copeland",number:"380950252276"}];function y(){var e,t=Object(a.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:k),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],m=l[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]);return Object(b.jsxs)(j,{children:[Object(b.jsx)(h,{children:Object(b.jsx)(p,{onSubmit:function(e,t){var n=c.some((function(t){return t.name===e}));if(n)alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!");else{var a={name:e,number:t,id:w.a.generate()};r((function(e){return[a].concat(Object(o.a)(e))}))}}})}),Object(b.jsx)(h,{children:Object(b.jsx)(g,{value:u,onChange:function(e){m(e.currentTarget.value)}})}),Object(b.jsx)(h,{children:Object(b.jsx)(C,{contacts:function(){var e=u.toLowerCase();return c.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),deleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})})]})}i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={elem:"ContactList_elem__17_8H",title:"ContactList_title__1drHu"}},8:function(e,t,n){e.exports={elem:"Filter_elem__AWNqY"}}},[[29,1,2]]]);
//# sourceMappingURL=main.87095865.chunk.js.map