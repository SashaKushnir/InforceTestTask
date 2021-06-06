(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{155:function(e,t,c){},156:function(e,t,c){},266:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(10),o=c.n(i),a=(c(155),c(156),c(13)),d=c(294),s=c(297),u=c(299),j=c(60),l=c(128),b=c.n(l),h=c(300),O=c(15),m=function(e){return{type:"MODAL_STATUS_TOGGLE",status:e}},p=c(32),x=c(127),f=c.n(x),g=c(2),v=Object(d.a)((function(){return{typographyStyles:{flex:1},whiteColored:{color:"white"}}})),C=function(){var e=Object(O.b)(),t=v(),c=window.location.href;return Object(g.jsx)(s.a,{position:"static",children:Object(g.jsxs)(u.a,{children:[!c.includes("/products")&&Object(g.jsx)(p.b,{to:"/content/products",children:Object(g.jsx)(h.a,{color:"inherit",children:Object(g.jsx)(f.a,{className:t.whiteColored})})}),Object(g.jsx)(j.a,{className:t.typographyStyles,children:Object(g.jsx)("span",{children:"Product site header"})}),Object(g.jsxs)("span",{onClick:function(){e(m(!0))},children:[Object(g.jsx)(h.a,{color:"inherit",size:"small",children:"Create new product"}),"    ",Object(g.jsx)(h.a,{color:"inherit",children:Object(g.jsx)(b.a,{color:"inherit"})})]})]})})},w=c(129),S=c.n(w),_=c(301),I=c(302),E=c(303),T=c(313),M=c(304),y=c(305),R=c(306),N=c(307),D=c.p+"static/media/img.e381ae67.png",P=function(e){return{type:"PUSH_PRODUCT",product:e}},A=function(e){return{type:"REMOVE_PRODUCT",id:e}},U=function(e){return{type:"SET_CURRENT_PRODUCT",productI:e}},B=function(e){return{type:"REMOVE_COMMENT",commentId:e}},L=function(e){return{type:"ADD_COMMENT",commentI:e}},V=Object(d.a)({textAligning:{textAlign:"center"}}),k=function(e){var t=e.productI,c=V(),n=Object(O.b)(),r=Object(a.g)();return Object(g.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsxs)(I.a,{children:[Object(g.jsx)(E.a,{avatar:Object(g.jsx)(T.a,{"aria-label":"recipe",src:D}),action:Object(g.jsx)(h.a,{"aria-label":"settings",onClick:function(){n(A(t.id))},children:Object(g.jsx)(S.a,{})}),title:t.name,subheader:t.weight}),Object(g.jsx)(M.a,{style:{height:"150px"},image:t.imageUrl,title:t.name}),Object(g.jsx)(y.a,{children:Object(g.jsxs)(j.a,{children:["Amount: ",t.count]})}),Object(g.jsx)(R.a,{className:c.textAligning,children:Object(g.jsxs)(_.a,{container:!0,children:[Object(g.jsx)(_.a,{item:!0,xs:4}),Object(g.jsx)(_.a,{item:!0,xs:4,children:Object(g.jsx)(N.a,{className:c.textAligning,variant:"outlined",size:"small",onClick:function(){n(U(t)),r.push("/content/productItem/"+t.id)},children:"show info"})}),Object(g.jsx)(_.a,{item:!0,xs:4})]})})]})})},q=function(){var e=Object(O.c)((function(e){return e.productsR.products})).map((function(e,t){return Object(g.jsx)(k,{productI:e},t)}));return Object(g.jsx)("div",{children:Object(g.jsx)(_.a,{container:!0,spacing:2,children:e})})},F=c(25),W=c(310),z=c(312),G=c(309),X=c(308),H=c(76),J=c(39),$=Object(d.a)({toCenter:{textAlign:"center"},toCenterButton:{textAlign:"center",padding:"1%"}}),K=function(){var e=Object(O.c)((function(e){return e.commonR.createProductModalStatus})),t=r.a.useState(!1),c=Object(F.a)(t,2),i=c[0],o=c[1],a=Object(O.b)(),d=$(),s=function(){o(!1),a(m(!1))};Object(n.useEffect)((function(){e&&o(!0)}),[e]);var u=J.a().shape({name:J.b().required("Required").min(2,"Too Short").matches(/^\S.{0,48}\S$/,"don't start or end with space").max(50,"Too long"),count:J.b().required("Required").max(10,"Too Long!").matches(/^[0-9]$/,"only numbers!"),weight:J.b().required("Required").max(10,"Too Long!").matches(/^\d+$/,"only numbers!")}),j=Object(H.a)({initialValues:{name:"",count:1,weight:1e3},validationSchema:u,onSubmit:function(e){console.log(e),a(P(e)),s()}});return Object(g.jsx)("div",{children:Object(g.jsxs)(z.a,{open:i,onClose:s,"aria-labelledby":"form-dialog-title",children:[Object(g.jsx)(X.a,{className:d.toCenter,id:"form-dialog-title",children:"Creating new product"}),Object(g.jsx)(G.a,{children:Object(g.jsxs)("form",{onSubmit:j.handleSubmit,children:[Object(g.jsx)(W.a,{fullWidth:!0,id:"name",name:"name",label:"name",value:j.values.name,onChange:j.handleChange,error:j.touched.name&&Boolean(j.errors.name),helperText:j.touched.name&&j.errors.name}),Object(g.jsx)(W.a,{fullWidth:!0,id:"count",name:"count",label:"Count",value:j.values.count,onChange:j.handleChange,error:j.touched.count&&Boolean(j.errors.count),helperText:j.touched.count&&j.errors.count}),Object(g.jsx)(W.a,{fullWidth:!0,id:"weight",name:"weight",label:"Weight",value:j.values.weight,onChange:j.handleChange,error:j.touched.weight&&Boolean(j.errors.weight),helperText:j.touched.weight&&j.errors.weight}),Object(g.jsx)("div",{className:d.toCenterButton,children:Object(g.jsx)(N.a,{variant:"outlined",color:"primary",type:"submit",children:"Submit"})})]})})]})})},Q=c(11),Y=c(77),Z=c.n(Y),ee=Object(d.a)({toCenter:{textAlign:"center"},toCenterButton:{textAlign:"center",padding:"1%"}}),te=function(e){var t=e.modalMode,c=e.setModalMode,i=e.commentsLength,o=e.productId,a=r.a.useState(t),d=Object(F.a)(a,2),s=d[0],u=d[1],j=Object(O.b)(),l=ee(),b=function(){u(!1),c(!1)};Object(n.useEffect)((function(){t&&u(!0)}),[t]);var h=J.a().shape({description:J.b().required("Required")}),m=Object(H.a)({initialValues:{description:""},validationSchema:h,onSubmit:function(e){console.log(e);var t,c={id:i,productId:o,description:e.description,date:new Date};j((t=c,function(e,c){e(L(t)),c().productsR.products.forEach((function(e){e.id===t.productId&&e.comments.push(t)}))})),b()}});return Object(g.jsx)("div",{children:Object(g.jsxs)(z.a,{open:s,onClose:b,"aria-labelledby":"form-dialog-title",children:[Object(g.jsx)(X.a,{className:l.toCenter,id:"form-dialog-title",children:"Creating new product"}),Object(g.jsx)(G.a,{children:Object(g.jsxs)("form",{onSubmit:m.handleSubmit,children:[Object(g.jsx)(W.a,{fullWidth:!0,id:"description",name:"description",label:"Description",value:m.values.description,onChange:m.handleChange,error:m.touched.description&&Boolean(m.errors.description),helperText:m.touched.description&&m.errors.description}),Object(g.jsx)("div",{className:l.toCenterButton,children:Object(g.jsx)(N.a,{variant:"outlined",color:"primary",type:"submit",children:"Submit"})})]})})]})})},ce=function(){var e,t,c,r,i,o=Object(n.useState)(!1),d=Object(F.a)(o,2),s=d[0],u=d[1],j=Object(a.h)(),l=Object(O.b)(),b=Object(O.c)((function(e){return e.productsR.products})),h=Object(O.c)((function(e){return e.productItemR.productItem}));Object(n.useEffect)((function(){for(var e=0;e<b.length;e++)b[e].id===Number(j.id)&&l(U(b[e]))}),[]),Object(n.useEffect)((function(){for(var e=0;e<b.length;e++)b[e].id===Number(j.id)&&(h=Object(Q.a)({},b[e]))}),[j.id]);return console.log(h),Object(g.jsxs)("div",{className:Z.a.wrapper,children:[Object(g.jsx)("h1",{children:null===(e=h)||void 0===e?void 0:e.name}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:null===(t=h)||void 0===t?void 0:t.imageUrl})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Weight: "}),null===(c=h)||void 0===c?void 0:c.weight]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Amount: "}),null===(r=h)||void 0===r?void 0:r.count]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Comments: "}),Object(g.jsx)(N.a,{variant:"outlined",onClick:function(){u(!0)},children:" Add comment"})]}),null===(i=h)||void 0===i?void 0:i.comments.map((function(e,t){return Object(g.jsx)(ne,{commentI:e},t)}))]}),Object(g.jsx)(te,{commentsLength:h?h.comments.length:0,modalMode:s,setModalMode:u,productId:h?h.id:0})]})},ne=function(e){var t=e.commentI,c=Object(O.b)();return Object(g.jsxs)("div",{className:Z.a.wrapComment,children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{children:t.description}),Object(g.jsxs)("div",{children:[t.date.getHours()," hr"]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:Z.a.margin,children:[t.date.getMinutes()," min"]}),Object(g.jsx)(N.a,{variant:"outlined",onClick:function(){c(function(e){return function(t,c){t(B(e.id)),c().productsR.products.forEach((function(t){t.id===e.productId&&t.comments.filter((function(t){return t.id!==e.id}))}))}}(t))},children:"remove"})]}),Object(g.jsx)("div",{})]})},re=function(){Object(O.b)();var e=Object(a.i)().url;Object(a.h)();return Object(g.jsx)("div",{children:Object(g.jsxs)(a.d,{children:[Object(g.jsx)(a.a,{exact:!0,from:e,to:"".concat(e,"/products")}),Object(g.jsx)(a.b,{path:"".concat(e,"/products"),render:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(q,{}),Object(g.jsx)(K,{})]})}}),Object(g.jsx)(a.b,{path:"".concat(e,"/productItem/:id"),render:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ce,{})})}})]})})},ie=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(re,{})]})};var oe=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(ie,{}),Object(g.jsxs)(a.d,{children:[Object(g.jsx)(a.a,{exact:!0,from:"/",to:"/content"}),Object(g.jsx)(a.b,{path:"*",render:function(){return Object(g.jsx)(ie,{})}}),Object(g.jsx)(a.b,{path:"/content",render:function(){return Object(g.jsx)("div",{children:"Error, empty linker"})}})]})]})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,315)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),i(e),o(e)}))},de=c(59),se=c(135),ue=c(20),je=c.p+"static/media/img_1.a3e226c4.png";var le={products:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=[],c=0;c<e;c++)t.push({id:c+1,imageUrl:D,name:"Product Name # "+(c+1),count:Math.floor(100*Math.random()),size:{width:200,height:200},weight:Math.floor(100*Math.random())+"g",comments:[{id:0,productId:c+1,description:"some text here",date:new Date}]});return t}()},be={createProductModalStatus:!1},he={},Oe=Object(de.b)({productsR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUSH_PRODUCT":var c=Object(Q.a)(Object(Q.a)({},t.product),{},{weight:t.product.weight+"g",imageUrl:je,id:e.products.length+1,size:{width:200,height:200},comments:[]});return Object(Q.a)(Object(Q.a)({},e),{},{products:[].concat(Object(ue.a)(e.products),[c])});case"REMOVE_PRODUCT":return Object(Q.a)(Object(Q.a)({},e),{},{products:Object(ue.a)(e.products).filter((function(e){return e.id!==t.id}))});default:return e}},commonR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODAL_STATUS_TOGGLE":return Object(Q.a)(Object(Q.a)({},e),{},{createProductModalStatus:t.status});default:return e}},productItemR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PRODUCT":return Object(Q.a)(Object(Q.a)({},e),{},{productItem:Object(Q.a)({},t.productI)});case"REMOVE_COMMENT":return Object(Q.a)(Object(Q.a)({},e),{},{productItem:e.productItem?Object(Q.a)(Object(Q.a)({},e.productItem),{},{comments:e.productItem?Object(ue.a)(e.productItem.comments).filter((function(e){return e.id!==t.commentId})):[]}):void 0});case"ADD_COMMENT":return Object(Q.a)(Object(Q.a)({},e),{},{productItem:e.productItem?Object(Q.a)(Object(Q.a)({},e.productItem),{},{comments:e.productItem?[].concat(Object(ue.a)(e.productItem.comments),[Object(Q.a)({},t.commentI)]):[]}):void 0});default:return e}}}),me=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):de.c)(Object(de.a)(se.a)),pe=Object(de.d)(Oe,me);o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(p.a,{children:Object(g.jsx)(O.a,{store:pe,children:Object(g.jsx)(oe,{})})})}),document.getElementById("root")),ae()},77:function(e,t,c){e.exports={wrapper:"ShowProductItemContent_wrapper__3T8J-",wrapComment:"ShowProductItemContent_wrapComment__gjVF9",margin:"ShowProductItemContent_margin__1Bz7B"}}},[[266,1,2]]]);
//# sourceMappingURL=main.f22cf25b.chunk.js.map