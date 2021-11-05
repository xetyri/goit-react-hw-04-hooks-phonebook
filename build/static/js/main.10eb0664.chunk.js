(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={elem:"Filter_elem__r4jBv"}},13:function(e,t,n){e.exports={Section:"Section_Section__1_EFJ"}},14:function(e,t,n){e.exports={Container:"Container_Container__2AhIp"}},15:function(e,t,n){e.exports={elem:"ContactForm_elem__KXFp4"}},2:function(e,t,n){e.exports={elem:"ContactList_elem__CukgJ",title:"ContactList_title__2Eiwo"}},22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=(n(22),n(12)),s=n(17),l=n(5),u=n(6),d=n(8),m=n(7),h=n(13),b=n.n(h),j=n(0);var p=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:b.a.Section,children:[t&&Object(j.jsx)("h1",{children:t}),n]})},f=n(14),O=n.n(f);var v=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:O.a.Container,children:[t&&Object(j.jsx)("h2",{children:t}),n]})},x=n(4),C=n(15),g=n.n(C),S=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(x.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.elem,children:[Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:this.handleChange,required:!0})}),Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"Enter number",pattern:"38[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}",title:"\u041d\u043e\u043c\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 380956665557.",required:!0})}),Object(j.jsx)("button",{type:"submit",children:"Save"})]})}}]),n}(a.Component),_=S,y=n(2),N=n.n(y);var k=function(e){var t=e.contacts,n=e.deleteContact;return Object(j.jsx)("ul",{className:N.a.list,children:t.map((function(e){return Object(j.jsxs)("li",{className:N.a.elem,children:[Object(j.jsxs)("p",{className:N.a.title,children:[e.name," : "]}),Object(j.jsx)("p",{className:N.a.title,children:e.number}),Object(j.jsx)("button",{className:N.a.button,onClick:function(){return n(e.id)},type:"button",children:"Delete"})]},e.id)}))})},w=n(10),A=n.n(w);function E(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{className:A.a.elem,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",className:A.a.input,value:t,onChange:n,placeholder:"Enter name "})]})}var F=n(16),J=n.n(F),z=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"380950254596"},{id:"id-2",name:"Hermione Kline",number:"380950254436"},{id:"id-3",name:"Eden Clements",number:"380950256456"},{id:"id-4",name:"Annie Copeland",number:"380950252276"}],filter:""},e.addContact=function(t){e.state.contacts.some((function(e){return e.name===t.name}))?alert("Sorry, this name has already been added !!!"):e.setState((function(e){return{contacts:[Object(o.a)({id:J.a.generate()},t)].concat(Object(s.a)(e.contacts))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t?this.setState({contacts:t}):this.setState(this.state.contacts)}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase(),c=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(j.jsxs)(p,{children:[Object(j.jsx)(v,{children:Object(j.jsx)(_,{onSubmit:this.addContact})}),Object(j.jsx)(v,{children:Object(j.jsx)(E,{value:n,onChange:this.changeFilter})}),Object(j.jsx)(v,{children:Object(j.jsx)(k,{contacts:c,deleteContact:this.deleteContact})})]})}}]),n}(a.Component),D=z;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.10eb0664.chunk.js.map