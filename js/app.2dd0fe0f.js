(function(){"use strict";var t={2029:function(t,e,o){var n=o(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TodoHeader"),e("TodoTitle"),e("TodoInput"),e("TodoMiddle"),e("TodoList"),e("TodoFooter")],1)},l=[],a=function(){var t=this,e=t._self._c;return e("header",[e("h3",[t._v("나의 일정관리")]),e("p",[t._v(t._s(this.todayTamp))])])},r=[],c=()=>{const t=new Date,e=t.getFullYear(),o=t.getMonth()+1,n=t.getDate(),s=["일","월","화","수","목","금","토"],l=s[t.getDay()],a=t.getTime();return{year:e,month:o,date:n,day:l,time:a}},i={data(){return{todayTamp:""}},created(){this.todayTamp=`${c().year}/${c().month}/${c().date} ${c().day}`}},d=i,u=o(1001),m=(0,u.Z)(d,a,r,!1,null,"01faba69",null),f=m.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h1",[e("span",{staticClass:"totalNum"},[t._v(t._s(t.itemCount.successCount))]),t._v(" / "),e("span",[t._v(" "+t._s(t.itemCount.totalCount)+" ")]),e("br"),t._v(" 완료하였습니다. ")])])},p=[],v=o(4910),g={computed:{...(0,v.Se)(["itemCount"])}},I=g,_=(0,u.Z)(I,h,p,!1,null,null,null),k=_.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inputBox shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newtodoItems,expression:"newtodoItems"}],attrs:{type:"text",placeholder:"할일을 입력해주세요."},domProps:{value:t.newtodoItems},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addTodo.apply(null,arguments))},input:function(e){e.target.composing||(t.newtodoItems=e.target.value)}}}),e("span",{staticClass:"addContainer",on:{click:t.addTodo}},[e("font-awesome-icon",{staticClass:"addBtn",attrs:{icon:"fa-solid fa-plus"}})],1),t.showModal?e("alertModal",{on:{close:function(e){t.showModal=!1}}},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v(" 경고! "),e("font-awesome-icon",{staticClass:"closeModalBtn",attrs:{icon:"fa-solid fa-times"},on:{click:function(e){t.showModal=!1}}})],1),e("div",{attrs:{slot:"body"},slot:"body"},[t._v("할일을 입력해주세요.")])]):t._e()],1)},y=[],w=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2)])])])])},T=[],b={},O=b,S=(0,u.Z)(O,w,T,!1,null,null,null),x=S.exports,M={data(){return{newtodoItems:"",showModal:!1}},methods:{addTodo(){""!==this.newtodoItems?(this.$store.commit("addOneItem",this.newtodoItems),this.clearInput()):this.showModal||(this.showModal=!0)},clearInput(){this.newtodoItems=""}},components:{alertModal:x}},Z=M,B=(0,u.Z)(Z,C,y,!1,null,"661446f2",null),P=B.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"middle"},[e("span",{class:[this.getchecked?"checkBtnCompleted":"checkBtn"],on:{click:t.checkAllItem}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-check"}})],1),e("label",{attrs:{for:"checkbox"}},[t._v(" "+t._s(this.getchecked?"전체해제":"전체선택"))]),e("button",{staticClass:"claerAllBtn",on:{click:t.clearTodo}},[t._v("전체삭제")])]),e("div",{staticClass:"middle"},[e("select",{staticClass:"select",attrs:{id:"selected",name:"selected"},on:{value:this.getSelected,change:t.sortTodo}},[e("option",{attrs:{value:"asc"}},[t._v("오름차순")]),e("option",{attrs:{value:"desc"}},[t._v("내림차순")])])])])},A=[],N={methods:{...(0,v.OI)({clearTodo:"clearAllItems",checkAllItem:"checkAllItem",sortTodo:"sortTodo"})},computed:{...(0,v.Se)(["getchecked","getSelected"])}},j=N,D=(0,u.Z)(j,$,A,!1,null,"8b0897b4",null),E=D.exports,F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"list"},[e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(this.storageTodoItems,(function(o,n){return e("li",{key:o.item,staticClass:"shadow"},[e("span",{staticClass:"checkBtn",class:{checkBtnCompleted:o.completed},on:{click:function(e){return t.toggleComplete({todoItem:o,index:n})}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-check"}})],1),e("span",{class:["item-text",{textCompleted:o.completed}]},[t._v(" "+t._s(o.item)+" ")]),e("div",{staticClass:"list-right",on:{click:function(e){return t.removeTodo({todoItem:o,index:n})}}},[e("div",{staticClass:"removeDiv"},[e("font-awesome-icon",{staticClass:"removeBtn",attrs:{icon:"fa-solid fa-x"}})],1),e("div",{staticClass:"list-right-font"},[t._v(" "+t._s(o.date)+" ")])])])})),0)],1)},J=[],L={methods:{...(0,v.OI)({removeTodo:"removeOneItem",toggleComplete:"toggleOnItem"})},computed:{...(0,v.Se)(["storageTodoItems"])}},H=L,G=(0,u.Z)(H,F,J,!1,null,"2cbb0b9f",null),W=G.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[t._v(" Made by Soyeon ")])},q=[],z={},K=z,Q=(0,u.Z)(K,Y,q,!1,null,null,null),R=Q.exports,U={components:{TodoHeader:f,TodoTitle:k,TodoInput:P,TodoMiddle:E,TodoList:W,TodoFooter:R}},V=U,X=(0,u.Z)(V,s,l,!1,null,null,null),tt=X.exports;const et={fetch(){let t=[];if(localStorage.length>0)for(let e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!=localStorage.key(e)&&""!=localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t}},ot={todoItems:et.fetch(),allchecked:!1,selected:"asc"},nt={storageTodoItems(t){return"desc"===t.selected?t.todoItems.sort((function(t,e){return e.time-t.time})):"asc"===t.selected&&t.todoItems.sort((function(t,e){return t.time-e.time})),t.todoItems},itemCount(t){let e=t.todoItems.filter((t=>!0===t.completed)).length,o=t.todoItems.length;return{totalCount:o,successCount:e}},getchecked(t){const e=t.todoItems.filter((t=>!0===t.completed)),o=e.length==t.todoItems.length;return t.allchecked=0!==t.todoItems.length&&o,t.allchecked},getSelected(t){return t.selected}},st={addOneItem(t,e){const o={completed:!1,item:e,time:c().time,date:`${c().month}.${c().date} ${c().day}`};localStorage.setItem(e,JSON.stringify(o)),t.todoItems.push(o)},removeOneItem(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},toggleOnItem(t,e){const{todoItem:o,index:n}=e;t.todoItems[n].completed=!t.todoItems[n].completed,localStorage.removeItem(o.item),localStorage.setItem(o.item,JSON.stringify(o))},clearAllItems(t){localStorage.clear(),t.todoItems=[]},checkAllItem(t){if(t.todoItems.length>0){t.allchecked=!t.allchecked,localStorage.clear();for(let e=0;e<t.todoItems.length;e++)t.todoItems[e].completed=t.allchecked,localStorage.setItem(t.todoItems[e].item,JSON.stringify(t.todoItems[e]))}else console.log("클릭안됌")},sortTodo(t,e){t.selected=e.target.value,"desc"===t.selected?t.todoItems.sort((function(t,e){return e.time-t.time})):"asc"===t.selected&&t.todoItems.sort((function(t,e){return t.time-e.time}))}};var lt={state:ot,getters:nt,mutations:st};n.ZP.use(v.ZP);const at=new v.ZP.Store({modules:{todoApp:lt}});var rt=o(1872),ct=o(3333),it=o(6221);rt.vI.add(ct.BC0,ct.r8p,ct.$aW,ct.LEp,ct.NBC,ct.EOp),n.ZP.component("font-awesome-icon",it.GN),n.ZP.config.productionTip=!1,new n.ZP({el:"#app",store:at,render:t=>t(tt)})}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var l=e[n]={exports:{}};return t[n](l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,l){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],l=t[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(r=!1,l<a&&(a=l));if(r){t.splice(d--,1);var i=s();void 0!==i&&(e=i)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[n,s,l]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,l,a=n[0],r=n[1],c=n[2],i=0;if(a.some((function(e){return 0!==t[e]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(c)var d=c(o)}for(e&&e(n);i<a.length;i++)l=a[i],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(d)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2029)}));n=o.O(n)})();
//# sourceMappingURL=app.2dd0fe0f.js.map