(this.webpackJsonptrain_todolist_11jun=this.webpackJsonptrain_todolist_11jun||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(7),r=t.n(l),c=(t(14),t(15),t(1)),i=t(8),m=t(2),d=(t(5),o.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))),s=o.a.createElement("svg",{className:"bi bi-pencil",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"})),u={top:5,left:15};var v=function(e){var a=Object(n.useState)({}),t=Object(m.a)(a,2),l=t[0],r=t[1],i=function(e){r(Object(c.a)(Object(c.a)({},l),{},{name:e.target.value}))},v=function(a){e.onTaskSave(l),r({})};return o.a.createElement("div",{className:"TodoList"},o.a.createElement("ul",{className:"list-group"},e.todos.map((function(a){return o.a.createElement("li",{key:a.id,className:"list-group-item"},l.id===a.id?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",value:l.name,onChange:i}),o.a.createElement("button",{onClick:v,disabled:!l.name.trim()},"Save")):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"form-check"},o.a.createElement("input",{className:"form-check-input",style:u,type:"checkbox",value:"",id:"defaultCheck1"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"defaultCheck1"}," ",a.name," "),o.a.createElement("button",{onClick:function(){r(a)}},s),o.a.createElement("button",{onClick:function(){return e.onTaskDelete(a.id)}},d))))}))))};var h=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],r=t[1];return o.a.createElement("div",{className:"TodoCreateForm"},o.a.createElement("div",{className:"input-group mb-3",style:{padding:"20px"}},o.a.createElement("input",{value:l,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",placeholder:"Add Todo","aria-label":"Add Todo","aria-describedby":"button-addon2"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{onClick:function(){console.log(l),e.onTaskCreate(l),r("")},disabled:""===l.trim(),className:"btn btn-primary",type:"button",id:"button-addon2"},"Add Task"))))},p=[{id:1,name:"Call Mom",done:!1},{id:2,name:"Go shopping",done:!0},{id:3,name:"Do laundry",done:!1},{id:4,name:"Learn react",done:!1},{id:5,name:"Watch lecture",done:!1}];var b=function(){var e=Object(n.useState)(p),a=Object(m.a)(e,2),t=a[0],l=a[1];return o.a.createElement("div",{className:"App"},o.a.createElement(h,{onTaskCreate:function(e){console.log("APP "+e);var a=Object(i.a)(t);a.push({id:Math.random(),name:e,done:!1}),l(a)}}),o.a.createElement(v,{todos:t,onTaskDelete:function(e){var a=t.filter((function(a){return a.id!==e}));l(a)},onTaskDoneToggle:function(e){var a=t.map((function(a){return a.id===e?Object(c.a)(Object(c.a)({},a),{},{done:!a.done}):a}));l(a)},onTaskSave:function(e){var a=t.map((function(a){return a.id===e.id?Object(c.a)(Object(c.a)({},a),{},{name:e.name}):a}));l(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1709f326.chunk.js.map