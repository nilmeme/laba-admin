(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[477],{46606:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ve}});var r=t(71194),u=t(50146),o=t(57663),a=t(71577),E=t(62350),x=t(75443),w=t(12968),k=t(38629),b=t(57337),R=t(8870),Z=t(34792),g=t(48086),y=t(3182),F=t(94043),p=t.n(F),d=t(51042),s=t(67294),f=t(4743),M=t(80569),l=t(43185),te=t(65488),ye=t(77576),ue=t(85979),Ee=t(43358),oe=t(34041),Pe=t(9715),C=t(92080),be=t(47673),B=t(4107),le=t(36571),se=t(42443),i=t(85893),re=void 0,ie=B.Z.TextArea,de=function(h){var T=C.Z.useForm(),D=(0,b.Z)(T,1),m=D[0],c=h.values,G=c.url,z=c.status,H=c.icon,S=(0,s.useState)(),Y=(0,b.Z)(S,2),N=Y[0],X=Y[1],Q=function(){return[{uid:"1",name:"\u793A\u4F8B\u97F3\u9891",status:"done",url:G}]},q=function(){return[{uid:"1",name:"\u56FE\u6807",status:"done",url:H}]};h.isUpdate?(m.setFieldsValue({url:void 0,name:void 0,value:void 0,desc:void 0,tag:void 0,tagColor:void 0,id:void 0,status:!1,icon:void 0}),m.setFieldsValue((0,R.Z)({},h.values))):m.setFieldsValue({url:void 0,name:void 0,value:void 0,desc:void 0,tag:void 0,tagColor:void 0,id:void 0,status:!1,icon:void 0});var J=function(){return!0},I=function(){var P=(0,y.Z)(p().mark(function v(){var j;return p().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,le.ZL)();case 2:return j=U.sent,U.abrupt("return",{token:j.data.token});case 4:case"end":return U.stop()}},v)}));return function(){return P.apply(this,arguments)}}(),O=function(v){v.file.status==="done"&&m.setFieldsValue({sourceUrl:"https://labaimg.wuliangit.com/"+v.file.response.key})},A=function(v){v.file.status==="done"&&m.setFieldsValue({icon:"https://labaimg.wuliangit.com/"+v.file.response.key})},L=function(){var P=(0,y.Z)(p().mark(function v(j){var W,U,ne;return p().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,(0,se.l4)({name:j,type:"anchor"});case 2:W=V.sent,U=W.data.map(function(ae){return(0,i.jsx)(Option,{children:ae.name},ae.name)}),ne=m.getFieldsValue(),X(U),setTimeout(function(){m.setFieldsValue((0,R.Z)({},ne))},0);case 7:case"end":return V.stop()}},v)}));return function(j){return P.apply(this,arguments)}}(),ee=function(){var P=(0,y.Z)(p().mark(function v(){return p().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:L(void 0);case 1:case"end":return W.stop()}},v)}));return function(){return P.apply(this,arguments)}}(),_=function(){var v=m.getFieldValue("url");v==null&&m.setFieldsValue({url:G}),m.validateFields().then(function(){h.onSubmit(m.getFieldsValue())}).catch(function(j){console.log("\u63D0\u4EA4\u7684\u6570\u636E\u65E0\u6548:",j)})};return(0,i.jsx)(u.Z,{title:h.isUpdate?"\u4FEE\u6539\u8F6E\u64AD\u56FE":"\u65B0\u589E\u8F6E\u64AD\u56FE",closable:!1,getContainer:!1,visible:h.updateModalVisible,onCancel:function(){return h.onCancel()},okText:"\u63D0\u4EA4",onOk:_,children:(0,i.jsxs)(C.Z,{name:"basic",form:m,labelCol:{span:5},wrapperCol:{span:16},initialValues:(0,R.Z)({},h.values),onFinish:h.onSubmit,onFinishFailed:function(){return h.onCancel()},autoComplete:"off",children:[(0,i.jsx)(C.Z.Item,{label:"id",name:"id",hidden:!0,rules:[{required:!0,message:"Please input your username!"}],children:(0,i.jsx)(B.Z,{})}),(0,i.jsx)(C.Z.Item,{label:"\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],children:(0,i.jsx)(B.Z,{})}),(0,i.jsx)(C.Z.Item,{label:"\u503C",name:"value",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u503C"}],children:(0,i.jsx)(B.Z,{})}),(0,i.jsx)(C.Z.Item,{label:"\u5206\u7EC4",name:"groups",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],children:(0,i.jsx)(oe.Z,{showSearch:!0,defaultActiveFirstOption:!1,showArrow:!0,filterOption:!1,onSearch:L,onFocus:ee,notFoundContent:null,getPopupContainer:function(v){return v.parentElement},children:N})}),(0,i.jsx)(C.Z.Item,{label:"\u6807\u7B7E",name:"tag",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u503C"}],children:(0,i.jsx)(B.Z,{})}),(0,i.jsx)(C.Z.Item,{label:"\u6807\u7B7E\u989C\u8272",name:"tagColor",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u503C"}],children:(0,i.jsx)(B.Z,{})}),(0,i.jsx)(C.Z.Item,{label:"\u63CF\u8FF0",name:"desc",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0"}],children:(0,i.jsx)(ie,{rows:4})}),(0,i.jsx)(C.Z.Item,{label:"\u542F\u7528\u72B6\u6001",valuePropName:"checked",name:"status",children:(0,i.jsx)(ue.Z,{defaultChecked:z})}),(0,i.jsx)(C.Z.Item,{label:"\u4E0A\u4F20\u97F3\u9891",valuePropName:"sourceUrl",name:"sourceUrl",children:(0,i.jsx)(te.Z,{name:"file",maxCount:1,defaultFileList:Q(),action:"https://up-z2.qiniup.com",data:I,beforeUpload:J.bind(re),onChange:O,children:(0,i.jsx)(a.Z,{children:"\u4E0A\u4F20"})})}),(0,i.jsx)(C.Z.Item,{label:"\u4E0A\u4F20\u56FE\u6807",valuePropName:"icon",name:"icon",children:(0,i.jsx)(te.Z,{name:"file",listType:"picture",maxCount:1,defaultFileList:q(),action:"https://up-z2.qiniup.com",data:I,beforeUpload:J.bind(re),onChange:A,children:(0,i.jsx)(a.Z,{children:"\u4E0A\u4F20"})})})]})})},ce=de,pe=t(81540),_e=t.n(pe),$=t(8998),fe=function(){var K=(0,y.Z)(p().mark(function h(T){var D;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return D=g.default.loading("\u63D0\u4EA4\u4E2D"),c.prev=1,console.log("handleAdd-----",T),c.next=5,(0,$.ep)((0,R.Z)({},T));case 5:return D(),g.default.success("\u63D0\u4EA4\u6210\u529F"),c.abrupt("return",!0);case 10:return c.prev=10,c.t0=c.catch(1),D(),g.default.error("\u63D0\u4EA4\u5931\u8D25"),c.abrupt("return",!1);case 15:case"end":return c.stop()}},h,null,[[1,10]])}));return function(T){return K.apply(this,arguments)}}(),me=function(){var K=(0,y.Z)(p().mark(function h(T){var D;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return D=g.default.loading("\u63D0\u4EA4\u4E2D"),c.prev=1,c.next=4,(0,$.DS)((0,R.Z)({},T));case 4:return D(),g.default.success("\u63D0\u4EA4\u6210\u529F"),c.abrupt("return",!0);case 9:return c.prev=9,c.t0=c.catch(1),D(),g.default.error("\u63D0\u4EA4\u5931\u8D25"),c.abrupt("return",!1);case 14:case"end":return c.stop()}},h,null,[[1,9]])}));return function(T){return K.apply(this,arguments)}}(),he=function(){var h=(0,s.useState)(!1),T=(0,b.Z)(h,2),D=T[0],m=T[1],c=(0,s.useState)(!1),G=(0,b.Z)(c,2),z=G[0],H=G[1],S=(0,s.useRef)(),Y=(0,s.useState)(),N=(0,b.Z)(Y,2),X=N[0],Q=N[1],q=function(){var I=(0,y.Z)(p().mark(function O(A){var L;return p().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return L=g.default.loading("\u6B63\u5728\u5220\u9664"),_.prev=1,_.next=4,(0,$.WL)(A);case 4:return L(),g.default.success("\u5220\u9664\u6210\u529F"),S.current&&S.current.reload(),_.abrupt("return",!0);case 10:return _.prev=10,_.t0=_.catch(1),L(),g.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),_.abrupt("return",!1);case 15:case"end":return _.stop()}},O,null,[[1,10]])}));return function(A){return I.apply(this,arguments)}}(),J=[{title:"\u53D1\u97F3\u4EBA",dataIndex:"name",width:80},{title:"\u56FE\u6807",dataIndex:"icon",hideInSearch:!0,width:60,renderText:function(O){return(0,i.jsx)(k.Z,{height:40,src:O})}},{title:"\u97F3\u9891\u6587\u4EF6",dataIndex:"sourceUrl",hideInSearch:!0,valueType:"textarea",width:330,renderText:function(O){return(0,i.jsx)(_e(),{src:O,controls:!0})}},{title:"\u503C",dataIndex:"value",hideInSearch:!0,ellipsis:!0,width:100},{title:"\u5206\u7EC4",dataIndex:"groups",hideInSearch:!0,ellipsis:!0,width:100},{title:"\u63CF\u8FF0",dataIndex:"desc",hideInSearch:!0,ellipsis:!0,width:170},{title:"\u6807\u7B7E",dataIndex:"tag",hideInSearch:!0,ellipsis:!0,width:100},{title:"\u6807\u7B7E\u989C\u8272",dataIndex:"tagColor",hideInSearch:!0,ellipsis:!0,width:100},{title:"\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{true:{text:"\u542F\u7528",status:"Processing"},false:{text:"\u5173\u95ED",status:"Default"}}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(O,A){return[(0,i.jsx)("a",{onClick:function(){console.log("-------onClick",A),m(!0),H(!0),Q(A)},children:"\u4FEE\u6539"},"config"),(0,i.jsx)(x.Z,{title:"\u662F\u5426\u786E\u5B9A\u5220\u9664?",onConfirm:function(){return q({id:A.id})},okText:"\u662F",cancelText:"\u5426",children:(0,i.jsx)("a",{children:"\u5220\u9664"},"delete")})]}}];return(0,i.jsxs)(f.ZP,{children:[(0,i.jsx)(M.ZP,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:S,rowKey:"name",search:{labelWidth:120},toolBarRender:function(){return[(0,i.jsxs)(a.Z,{type:"primary",onClick:function(){m(!0),H(!1),Q(void 0)},children:[(0,i.jsx)(d.Z,{})," \u65B0\u5EFA"]},"primary")]},request:$.vG,columns:J}),(0,i.jsx)(ce,{onSubmit:function(){var I=(0,y.Z)(p().mark(function O(A){var L;return p().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(!z){_.next=6;break}return _.next=3,me(A);case 3:L=_.sent,_.next=9;break;case 6:return _.next=8,fe(A);case 8:L=_.sent;case 9:L&&(m(!1),S.current&&S.current.reload());case 10:case"end":return _.stop()}},O)}));return function(O){return I.apply(this,arguments)}}(),onCancel:function(){u.Z.destroyAll(),m(!1)},updateModalVisible:D,values:X||{},isUpdate:z})]})},ve=he},8998:function(e,n,t){"use strict";t.d(n,{vG:function(){return x},QO:function(){return k},DS:function(){return R},ep:function(){return g},WL:function(){return F}});var r=t(8870),u=t(3182),o=t(94043),a=t.n(o),E=t(2489);function x(d,s){return w.apply(this,arguments)}function w(){return w=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/anchor/list",(0,r.Z)({method:"GET",params:(0,r.Z)({},s)},f||{})));case 1:case"end":return l.stop()}},d)})),w.apply(this,arguments)}function k(d,s){return b.apply(this,arguments)}function b(){return b=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/anchor/list4Select",(0,r.Z)({method:"GET",params:(0,r.Z)({},s)},f||{})));case 1:case"end":return l.stop()}},d)})),b.apply(this,arguments)}function R(d,s){return Z.apply(this,arguments)}function Z(){return Z=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/anchor/update",(0,r.Z)({method:"POST",data:s},f||{})));case 1:case"end":return l.stop()}},d)})),Z.apply(this,arguments)}function g(d,s){return y.apply(this,arguments)}function y(){return y=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/anchor/add",(0,r.Z)({method:"POST",data:s},f||{})));case 1:case"end":return l.stop()}},d)})),y.apply(this,arguments)}function F(d,s){return p.apply(this,arguments)}function p(){return p=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("removeBanner----",s),l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/anchor/delete",(0,r.Z)({method:"GET",params:(0,r.Z)({},s)},f||{})));case 2:case"end":return l.stop()}},d)})),p.apply(this,arguments)}},42443:function(e,n,t){"use strict";t.d(n,{cv:function(){return x},l4:function(){return k},mD:function(){return R},Rp:function(){return g},BN:function(){return F}});var r=t(8870),u=t(3182),o=t(94043),a=t.n(o),E=t(2489);function x(d,s){return w.apply(this,arguments)}function w(){return w=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/group/list",(0,r.Z)({method:"GET",params:(0,r.Z)({},s)},f||{})));case 1:case"end":return l.stop()}},d)})),w.apply(this,arguments)}function k(d,s){return b.apply(this,arguments)}function b(){return b=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/group/list4Select",(0,r.Z)({method:"GET",params:(0,r.Z)({},s)},f||{})));case 1:case"end":return l.stop()}},d)})),b.apply(this,arguments)}function R(d,s){return Z.apply(this,arguments)}function Z(){return Z=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/group/update",(0,r.Z)({method:"POST",data:s},f||{})));case 1:case"end":return l.stop()}},d)})),Z.apply(this,arguments)}function g(d,s){return y.apply(this,arguments)}function y(){return y=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/group/add",(0,r.Z)({method:"POST",data:s},f||{})));case 1:case"end":return l.stop()}},d)})),y.apply(this,arguments)}function F(d,s){return p.apply(this,arguments)}function p(){return p=(0,u.Z)(a().mark(function d(s,f){return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,E.WY)("https://laba.wuliangit.com/admin/group/delete",(0,r.Z)({method:"GET",params:(0,r.Z)({},s)},f||{})));case 1:case"end":return l.stop()}},d)})),p.apply(this,arguments)}},81540:function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(r,u,o){t.o(r,u)||Object.defineProperty(r,u,{enumerable:!0,get:o})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,u){if(1&u&&(r=t(r)),8&u||4&u&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&u&&typeof r!="string")for(var a in r)t.d(o,a,function(E){return r[E]}.bind(null,a));return o},t.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(u,"a",u),u},t.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)},t.p="",t(t.s=2)}([function(e,n){e.exports=__webpack_require__(45697)},function(e,n){e.exports=__webpack_require__(67294)},function(module,__webpack_exports__,__nested_webpack_require_1058__){"use strict";__nested_webpack_require_1058__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_1058__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__nested_webpack_require_1058__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_1058__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__nested_webpack_require_1058__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _inherits(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(e,n)}function _createSuper(e){return function(){var n,t=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,n){return!n||_typeof(n)!=="object"&&typeof n!="function"?_assertThisInitialized(e):n}function _assertThisInitialized(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(e)}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}enterModule=typeof reactHotLoaderGlobal!="undefined"?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__=typeof reactHotLoaderGlobal!="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e},ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(t))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",function(u){var o,a;return(o=(a=e.props).onError)===null||o===void 0?void 0:o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onCanPlay",function(u){var o,a;return(o=(a=e.props).onCanPlay)===null||o===void 0?void 0:o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",function(u){var o,a;return(o=(a=e.props).onCanPlayThrough)===null||o===void 0?void 0:o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onPlay",function(u){var o,a;e.setListenTrack(),(o=(a=e.props).onPlay)===null||o===void 0||o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onAbort",function(u){var o,a;e.clearListenTrack(),(o=(a=e.props).onAbort)===null||o===void 0||o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onEnded",function(u){var o,a;e.clearListenTrack(),(o=(a=e.props).onEnded)===null||o===void 0||o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onPause",function(u){var o,a;e.clearListenTrack(),(o=(a=e.props).onPause)===null||o===void 0||o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onSeeked",function(u){var o,a;(o=(a=e.props).onSeeked)===null||o===void 0||o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",function(u){var o,a;(o=(a=e.props).onLoadedMetadata)===null||o===void 0||o.call(a,u)}),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",function(u){var o,a;(o=(a=e.props).onVolumeChanged)===null||o===void 0||o.call(a,u)}),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var n=this.props.listenInterval;this.listenTracker=window.setInterval(function(){var t,r;e.audioEl.current&&((t=(r=e.props).onListen)===null||t===void 0||t.call(r,e.audioEl.current.currentTime))},n)}}},{key:"updateVolume",value:function(e){var n=this.audioEl.current;n!==null&&typeof e=="number"&&e!==(n==null?void 0:n.volume)&&(n.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),n=this.props.controls!==!1,t=this.props.title?this.props.title:this.props.src,r={};return this.props.controlsList&&(r.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:n,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:t},r),e)}},{key:"__reactstandin__regenerateByEval",value:function(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=typeof reactHotLoaderGlobal!="undefined"?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule=typeof reactHotLoaderGlobal!="undefined"?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__nested_webpack_require_1058__(3)(module))},function(e,n){e.exports=function(t){if(!t.webpackPolyfill){var r=Object.create(t);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}}])}}]);
