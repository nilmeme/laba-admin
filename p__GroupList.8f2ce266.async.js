(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[93],{67913:function(J,S,e){"use strict";e.r(S),e.d(S,{default:function(){return te}});var F=e(71194),C=e(50146),k=e(57663),m=e(71577),T=e(62350),$=e(75443),A=e(12968),V=e(38629),E=e(57337),U=e(8870),D=e(34792),p=e(48086),b=e(3182),W=e(94043),o=e.n(W),l=e(51042),t=e(67294),h=e(4743),x=e(80569),r=e(43185),Q=e(65488),se=e(77576),z=e(85979),le=e(43358),B=e(34041),ie=e(47673),H=e(4107),de=e(9715),j=e(92080),X=e(36571),n=e(85893),q=void 0,_=function(s){var v=j.Z.useForm(),g=(0,E.Z)(v,1),c=g[0],a=s.values,R=a.url,L=a.status,w=a.icon,I=a.isIntroduce,K=function(){return[{uid:"1",name:"\u56FE\u6807",status:"done",url:w}]};(0,t.useEffect)(function(){s.isUpdate?c.setFieldsValue((0,U.Z)({},s.values)):c.setFieldsValue({name:void 0,id:void 0,status:!1,type:void 0,icon:void 0})},[]);var G=function(){return!0},N=function(){var y=(0,b.Z)(o().mark(function d(){var f;return o().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,X.ZL)();case 2:return f=i.sent,i.abrupt("return",{token:f.data.token});case 4:case"end":return i.stop()}},d)}));return function(){return y.apply(this,arguments)}}(),M=function(d){d.file.status==="done"&&c.setFieldsValue({icon:"http://labaimg.wuliangit.com/"+d.file.response.key})},Y=function(){var d=c.getFieldValue("url");d==null&&c.setFieldsValue({url:R}),s.onSubmit(c.getFieldsValue())};return(0,n.jsx)(C.Z,{title:"\u4FEE\u6539\u5206\u7EC4\u4FE1\u606F",closable:!1,getContainer:!1,visible:s.updateModalVisible,onCancel:function(){return s.onCancel()},okText:"\u63D0\u4EA4",onOk:Y,children:(0,n.jsxs)(j.Z,{name:"basic",form:c,labelCol:{span:5},wrapperCol:{span:16},initialValues:(0,U.Z)({},s.values),onFinish:s.onSubmit,onFinishFailed:function(){return s.onCancel()},autoComplete:"off",children:[(0,n.jsx)(j.Z.Item,{label:"id",name:"id",hidden:!0,rules:[{required:!0,message:"Please input your username!"}],children:(0,n.jsx)(H.Z,{})}),(0,n.jsx)(j.Z.Item,{label:"\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],children:(0,n.jsx)(H.Z,{})}),(0,n.jsx)(j.Z.Item,{label:"\u7C7B\u578B",name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B"}],children:(0,n.jsxs)(B.Z,{children:[(0,n.jsx)(B.Z.Option,{value:"anchor",children:"\u53D1\u97F3\u4EBA"}),(0,n.jsx)(B.Z.Option,{value:"demo",children:"\u793A\u4F8B\u8BED\u97F3"}),(0,n.jsx)(B.Z.Option,{value:"back",children:"\u80CC\u666F\u97F3"})]})}),(0,n.jsx)(j.Z.Item,{label:"\u542F\u7528\u72B6\u6001",valuePropName:"checked",name:"status",children:(0,n.jsx)(z.Z,{defaultChecked:L})}),(0,n.jsx)(j.Z.Item,{label:"\u63A8\u8350\u5230\u9996\u9875",valuePropName:"checked",name:"isIntroduce",children:(0,n.jsx)(z.Z,{defaultChecked:I})}),(0,n.jsx)(j.Z.Item,{label:"\u4E0A\u4F20\u56FE\u6807",valuePropName:"icon",name:"icon",children:(0,n.jsx)(Q.Z,{name:"file",listType:"picture",maxCount:1,defaultFileList:K(),action:"http://up-z2.qiniup.com",data:N,beforeUpload:G.bind(q),onChange:M,children:(0,n.jsx)(m.Z,{children:"\u4E0A\u4F20"})})})]})})},ee=_,O=e(42443),ae=function(){var P=(0,b.Z)(o().mark(function s(v){var g;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return g=p.default.loading("\u63D0\u4EA4\u4E2D"),a.prev=1,console.log("handleAdd-----",v),a.next=5,(0,O.Rp)((0,U.Z)({},v));case 5:return g(),p.default.success("\u63D0\u4EA4\u6210\u529F"),a.abrupt("return",!0);case 10:return a.prev=10,a.t0=a.catch(1),g(),p.default.error("\u63D0\u4EA4\u5931\u8D25"),a.abrupt("return",!1);case 15:case"end":return a.stop()}},s,null,[[1,10]])}));return function(v){return P.apply(this,arguments)}}(),ne=function(){var P=(0,b.Z)(o().mark(function s(v){var g;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return g=p.default.loading("\u63D0\u4EA4\u4E2D"),a.prev=1,a.next=4,(0,O.mD)((0,U.Z)({},v));case 4:return g(),p.default.success("\u63D0\u4EA4\u6210\u529F"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),g(),p.default.error("\u63D0\u4EA4\u5931\u8D25"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},s,null,[[1,9]])}));return function(v){return P.apply(this,arguments)}}(),re=function(){var s=(0,t.useState)(!1),v=(0,E.Z)(s,2),g=v[0],c=v[1],a=(0,t.useState)(!1),R=(0,E.Z)(a,2),L=R[0],w=R[1],I=(0,t.useRef)(),K=(0,t.useState)(),G=(0,E.Z)(K,2),N=G[0],M=G[1],Y=function(){var d=(0,b.Z)(o().mark(function f(Z){var i;return o().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=p.default.loading("\u6B63\u5728\u5220\u9664"),u.prev=1,u.next=4,(0,O.BN)(Z);case 4:return i(),p.default.success("\u5220\u9664\u6210\u529F"),I.current&&I.current.reload(),u.abrupt("return",!0);case 10:return u.prev=10,u.t0=u.catch(1),i(),p.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),u.abrupt("return",!1);case 15:case"end":return u.stop()}},f,null,[[1,10]])}));return function(Z){return d.apply(this,arguments)}}(),y=[{title:"\u7EC4\u540D",dataIndex:"name",width:80},{title:"\u56FE\u6807",dataIndex:"icon",hideInSearch:!0,width:60,renderText:function(f){return(0,n.jsx)(V.Z,{height:40,src:f})}},{title:"\u7C7B\u578B",dataIndex:"type",width:120,hideInForm:!0,valueEnum:{back:{text:"\u80CC\u666F\u97F3"},anchor:{text:"\u53D1\u97F3\u4EBA"},demo:{text:"\u793A\u4F8B\u8BED\u97F3"}}},{title:"\u662F\u5426\u63A8\u8350\u5230\u4E3B\u9875",dataIndex:"isIntroduce",hideInForm:!0,valueEnum:{true:{text:"\u662F",status:"Processing"},false:{text:"\u5426",status:"Default"}}},{title:"\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{true:{text:"\u542F\u7528",status:"Processing"},false:{text:"\u5173\u95ED",status:"Default"}}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(f,Z){return[(0,n.jsx)("a",{onClick:function(){console.log("-------onClick",Z),c(!0),w(!0),M(Z)},children:"\u4FEE\u6539"},"config"),(0,n.jsx)($.Z,{title:"\u662F\u5426\u786E\u5B9A\u5220\u9664?",onConfirm:function(){return Y({id:Z.id})},okText:"\u662F",cancelText:"\u5426",children:(0,n.jsx)("a",{children:"\u5220\u9664"},"delete")})]}}];return(0,n.jsxs)(h.ZP,{children:[(0,n.jsx)(x.ZP,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:I,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,n.jsxs)(m.Z,{type:"primary",onClick:function(){c(!0),w(!1),M(void 0)},children:[(0,n.jsx)(l.Z,{})," \u65B0\u5EFA"]},"primary")]},request:O.cv,columns:y}),(0,n.jsx)(ee,{onSubmit:function(){var d=(0,b.Z)(o().mark(function f(Z){var i;return o().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!L){u.next=6;break}return u.next=3,ne(Z);case 3:i=u.sent,u.next=9;break;case 6:return u.next=8,ae(Z);case 8:i=u.sent;case 9:i&&(c(!1),I.current&&I.current.reload());case 10:case"end":return u.stop()}},f)}));return function(f){return d.apply(this,arguments)}}(),onCancel:function(){C.Z.destroyAll(),c(!1)},updateModalVisible:g,values:N||{},isUpdate:L})]})},te=re},42443:function(J,S,e){"use strict";e.d(S,{cv:function(){return $},l4:function(){return V},mD:function(){return U},Rp:function(){return p},BN:function(){return W}});var F=e(8870),C=e(3182),k=e(94043),m=e.n(k),T=e(2489);function $(l,t){return A.apply(this,arguments)}function A(){return A=(0,C.Z)(m().mark(function l(t,h){return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,T.WY)("https://laba.wuliangit.com/admin/group/list",(0,F.Z)({method:"GET",params:(0,F.Z)({},t)},h||{})));case 1:case"end":return r.stop()}},l)})),A.apply(this,arguments)}function V(l,t){return E.apply(this,arguments)}function E(){return E=(0,C.Z)(m().mark(function l(t,h){return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,T.WY)("https://laba.wuliangit.com/admin/group/list4Select",(0,F.Z)({method:"GET",params:(0,F.Z)({},t)},h||{})));case 1:case"end":return r.stop()}},l)})),E.apply(this,arguments)}function U(l,t){return D.apply(this,arguments)}function D(){return D=(0,C.Z)(m().mark(function l(t,h){return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,T.WY)("https://laba.wuliangit.com/admin/group/update",(0,F.Z)({method:"POST",data:t},h||{})));case 1:case"end":return r.stop()}},l)})),D.apply(this,arguments)}function p(l,t){return b.apply(this,arguments)}function b(){return b=(0,C.Z)(m().mark(function l(t,h){return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,T.WY)("https://laba.wuliangit.com/admin/group/add",(0,F.Z)({method:"POST",data:t},h||{})));case 1:case"end":return r.stop()}},l)})),b.apply(this,arguments)}function W(l,t){return o.apply(this,arguments)}function o(){return o=(0,C.Z)(m().mark(function l(t,h){return m().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,T.WY)("https://laba.wuliangit.com/admin/group/delete",(0,F.Z)({method:"GET",params:(0,F.Z)({},t)},h||{})));case 1:case"end":return r.stop()}},l)})),o.apply(this,arguments)}}}]);
