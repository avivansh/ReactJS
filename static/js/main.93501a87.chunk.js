(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,c){t.exports={card_cont:"Topbar_card_cont__2488X",card:"Topbar_card__1i-z4",desc:"Topbar_desc__fh35x",name:"Topbar_name__1CtWn"}},40:function(t,e,c){},41:function(t,e,c){},67:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c(19),r=c.n(a),s=(c(40),c.p,c(41),c(0)),i=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("footer",{class:"page-footer font-small mdb-color darken-3 pt-4 bg-success",children:[Object(s.jsx)("div",{class:"container",children:Object(s.jsx)("div",{class:"row d-flex justify-content-center",children:Object(s.jsx)("div",{class:"col-md-6",children:Object(s.jsx)("div",{class:"embed-responsive embed-responsive-16by9 mb-4",children:Object(s.jsx)("iframe",{class:"embed-responsive-item",src:"https://www.youtube.com/embed/vlDzYIIOYmM",allowfullscreen:!0})})})})}),Object(s.jsxs)("div",{class:"footer-copyright text-center py-3",children:["\xa9 2020 Copyright:",Object(s.jsx)("a",{href:"https://mdbootstrap.com/",children:" MDBootstrap.com"})]})]})})},o=c(5),j=c(13),d=function(t){return{type:"GET_PRODUCTS",payload:t}},l=function(t){return{type:"ADD_TO_CART",payload:t}},b=Object(j.b)((function(t){return{products:t.products,cart:t.cart}}),null)((function(t){var e=t.cart,c=(t.products,"/ReactJS");return Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-light p-2",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:"Ally React"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)(o.b,{to:"".concat(c,"/"),className:"nav-link",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"".concat(c,"/about"),className:"nav-link",children:"About"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"".concat(c,"/contact"),className:"nav-link",children:"Contact"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(o.b,{to:"".concat(c,"/cart"),className:"nav-link",children:["Cart",Object(s.jsx)("sup",{children:e.length})]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"".concat(c,"/products"),className:"nav-link",children:"Products Listing Page"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"".concat(c,"/signin"),className:"nav-link",children:"Sign-In"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"".concat(c,"/signup"),className:"nav-link",children:"Sign-up"})})]})})]})})),u=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{children:" Welcome to the home"})})},O=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{children:" About US"})})},h=c(4),p=c(7),m=c(6),x=c(15),v=c.n(x),f=c(3),g=Object(j.b)((function(t){return{products:t.products,cart:t.cart}}),(function(t){return{sendProducts:function(e){return t(d(e))},updateCart:function(e){return t(l(e))}}}))((function(t){var e,c,a=t.updateCart,r=Object(n.useState)({}),i=Object(m.a)(r,2),o=i[0],j=i[1],d=Object(f.g)().id,l=(o.productId,o.name),b=void 0===l?"":l,u=o.preview,O=void 0===u?"":u,x=o.brand,g=void 0===x?"":x,N=o.photos,_=void 0===N?[]:N,C=o.description,y=void 0===C?"":C,w=o.price,k=void 0===w?"":w;Object(n.useEffect)((function(){v()("".concat("https://5d76bf96515d1a0014085cf9.mockapi.io/product/").concat(d)).then((function(t){return j(t.data)})).catch((function(t){return alert(t)}))}),[]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("img",{src:O,width:"500"})}),Object(s.jsxs)("div",(c={className:"right"},Object(h.a)(c,"className","m-5"),Object(h.a)(c,"children",[Object(s.jsx)("h1",{children:b}),Object(s.jsx)("h3",{children:g}),Object(s.jsxs)("h3",{className:"price",children:[k,"/-"]}),Object(s.jsx)("p",{className:"desc",children:y}),Object(s.jsx)("div",(e={className:"photos"},Object(h.a)(e,"className","d-flex flex-row"),Object(h.a)(e,"children",_.map((function(t,e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"p-1 ",children:Object(s.jsx)("img",{src:t,className:"ind_photo",onClick:function(){j(Object(p.a)(Object(p.a)({},o),{},{preview:t}))}})})})}))),e)),Object(s.jsx)("button",{className:"add_to_cart",onClick:function(){a({preview:O,name:b,description:y,id:d,price:k})},children:"Add to cart"})]),c))]})})})),N=Object(j.b)((function(t){return{products:t.products,cart:t.cart}}),(function(t){return{sendProducts:function(e){return t(d(e))},updateCart:function(e){return t(l(e))},clearCart:function(){return t({type:"ZERO_THE_CART",payload:e});var e}}}))((function(t){var e=t.cart,c=(t.products,t.clearCart);return Object(s.jsxs)("div",{className:"cart_container",children:[e.length&&e.map((function(t){var e=t.price,c=t.name,n=t.quantity;return Object(s.jsxs)("div",{className:"ind_cart_prod",children:[Object(s.jsx)("h1",{children:c}),Object(s.jsxs)("h3",{className:"m-4",children:["Rs. ",e,"/-"]}),Object(s.jsxs)("h3",{className:"m-4",children:["X ",n]}),Object(s.jsxs)("h3",{className:"m-4",children:["Rs. ",e*n,"/-"]})]})})),Object(s.jsxs)("h1",{className:"total_price",children:["total is Rs. ",e.reduce((function(t,e){return t+e.price*e.quantity}),0),"/-"]}),Object(s.jsx)("button",{className:"checkout",onClick:function(){t.history.push("".concat("/ReactJS","/products")),c()},children:"checkout"})]})})),_=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{children:" Contact us!!"})})},C=c(14),y=c.n(C),w=function(t){var e,c,a,r=t.price,i=t.preview,j=t.name,d=t.description,l=t.id,b=t.updateCart,u=(t.products,Object(n.useState)(0)),O=Object(m.a)(u,2);O[0],O[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",(a={className:"card",styles:"width: 18rem;"},Object(h.a)(a,"className",y.a.card),Object(h.a)(a,"children",[Object(s.jsxs)(o.b,{to:"products/".concat(l),children:[Object(s.jsx)("img",{className:"card-img-top .max-width: 10%;",src:i,alt:"Card image cap"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h5",(e={className:"card-title"},Object(h.a)(e,"className",y.a.name),Object(h.a)(e,"children",[j," "]),e)),Object(s.jsx)("p",(c={className:"card-text"},Object(h.a)(c,"className",y.a.desc),Object(h.a)(c,"children",d),c))]})]}),Object(s.jsx)("button",{class:"btn btn-success",onClick:function(){b({preview:i,name:j,description:d,id:l,price:r})},children:"Add to cart"})]),a),l)})},k=Object(j.b)((function(t){return{products:t.products,cart:t.cart}}),(function(t){return{sendProducts:function(e){return t(d(e))},updateCart:function(e){return t(l(e))}}}))((function(t){var e=t.products,c=t.sendProducts,a=t.updateCart;return Object(n.useEffect)((function(){v()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(t){c(t.data)})).catch((function(t){return alert(t)}))}),[]),Object(s.jsx)("div",{className:y.a.card_cont,children:e.length&&e.map((function(t){var c=t.name,n=t.preview,r=t.description,i=t.id,o=t.price;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(w,{price:o,preview:n,name:c,description:r,id:i,updateCart:a,products:e})})}))})})),T=function(){var t=Object(n.useState)(""),e=Object(m.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),o=i[0],j=i[1],d=Object(n.useState)(!1),l=Object(m.a)(d,2),b=l[0],u=l[1],O="vansh",h="mittal";return Object(s.jsxs)(s.Fragment,{children:[b&&Object(s.jsx)(f.a,{to:"".concat("/ReactJS","/products")}),Object(s.jsx)("h1",{style:{textAlign:"center"},children:" Sign in"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"form",children:Object(s.jsxs)("form",{onSubmit:function(t){var e=O,n=h;c.toLowerCase()===e&&o===n&&u(!0)},children:[Object(s.jsx)("label",{children:"User Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:c,placeholder:"vansh",onChange:function(t){return a(t.target.value)},className:"form-align"}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",value:o,placeholder:"mittal",onChange:function(t){return j(t.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"submit",className:"submit"})]})})]})},S=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"sign up page"}),Object(s.jsx)("hr",{})]})},R=function(){var t="/ReactJS";return Object(s.jsx)("div",{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(b,{}),Object(s.jsxs)(f.d,{children:[Object(s.jsx)(f.b,{path:"".concat(t,"/"),exact:!0,component:u}),Object(s.jsx)(f.b,{path:"".concat(t,"/about"),component:O}),Object(s.jsx)(f.b,{path:"".concat(t,"/cart"),component:N}),Object(s.jsx)(f.b,{path:"".concat(t,"/contact"),component:_}),Object(s.jsx)(f.b,{path:"".concat(t,"/products"),exact:!0,component:k}),Object(s.jsx)(f.b,{path:"".concat(t,"/products/:id"),component:g}),Object(s.jsx)(f.b,{path:"".concat(t,"/signin"),component:T}),Object(s.jsx)(f.b,{path:"".concat(t,"/signup"),component:S}),Object(s.jsx)(f.b,{component:function(){return Object(s.jsx)("h1",{children:"404"})}})]}),Object(s.jsx)(i,{})]})})},F=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))},A=(c(66),c(35)),P=c(34),D={userDetails:[],products:[{name:"Vansh",age:21}],cart:[]},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case"GET_PRODUCTS":return Object(p.a)(Object(p.a)({},t),{},{products:n});case"ADD_TO_CART":var a=[],r=n.id,s=t.cart,i=s.findIndex((function(t){return t.id===r}));return-1!==i?(s[i].quantity+=1,a=s):a=[].concat(Object(P.a)(s),[Object(p.a)(Object(p.a)({},n),{},{quantity:1})]),Object(p.a)(Object(p.a)({},t),{},{cart:a});case"ZERO_THE_CART":return Object(p.a)(Object(p.a)({},t),{},{cart:[]});default:return t}},I=Object(A.a)(E);r.a.render(Object(s.jsx)(j.a,{store:I,children:Object(s.jsx)(R,{})}),document.getElementById("root")),F()}},[[67,1,2]]]);
//# sourceMappingURL=main.93501a87.chunk.js.map