"use strict";(self.webpackChunkppgfrontend=self.webpackChunkppgfrontend||[]).push([[495],{9071:function(e,s,n){n(2791);var r=n(2815),a=n(8542),t=(n(4676),n(5880),n(4432),n(184));s.Z=function(e){var s=e.children,n=e.slides,i=e.row,c=e.spacebetween,l=e.colors,d=e.mobile,o=e.tablet,u=e.desktop;return(0,t.jsx)(r.tq,{navigation:!0,grid:{rows:i},slidesPerView:n,spaceBetween:c,modules:[a.W_],className:"mySwiper",breakpoints:{320:{slidesPerView:d,spaceBetween:20},768:{slidesPerView:o,spaceBetween:30},1024:{slidesPerView:u,spaceBetween:30}},style:{"--swiper-navigation-color":l},children:s})}},9316:function(e,s,n){n.d(s,{Z:function(){return m}});n(2791);var r=n(743),a=n(6153),t=n(7988),i=n(2815),c=n(1523),l=n(2357),d=n(8284),o=n(6187),u=n(7556),h=n(184),x=function(e){var s=e.data;return(0,h.jsxs)(l.Z,{className:"product_cards",children:[(0,h.jsx)("div",{className:"img_wraped",children:(0,h.jsx)("img",{className:"img-fluid rounded",src:s.image,alt:s.title,loading:"lazy"})}),(0,h.jsxs)(d.Z,{children:[(0,h.jsx)(o.Z,{className:"text-truncate",children:s.title}),(0,h.jsx)("div",{className:"actions",children:(0,h.jsx)(u.Z,{className:"btn-white btn-rounded",to:"/article/".concat(s._id),tag:c.rU,outline:!0,color:"amber",children:"View More"})})]})]})},j=n(9071),m=function(e){var s=e.data,n=e.slider;return(0,h.jsx)("div",{className:"all_product",children:(0,h.jsx)(r.Z,{children:(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(t.Z,{lg:"12",children:(0,h.jsx)("div",{className:"heading",children:(0,h.jsxs)("h1",{children:["Our ",(0,h.jsx)("span",{children:"Articles"})]})})}),n?(0,h.jsx)(t.Z,{lg:"12",children:(0,h.jsx)(j.Z,{type:"single",slides:4,row:1,spacebetween:30,colors:"#c74a2d",mobile:"2",tablet:"2",desktop:"4",children:s.map((function(e){return(0,h.jsx)(i.o5,{children:(0,h.jsx)(x,{data:e})},e._id)}))})}):(0,h.jsx)(h.Fragment,{children:s.map((function(e){return(0,h.jsx)(t.Z,{lg:"3",children:(0,h.jsx)(x,{data:e})},e._id)}))})]})})})}},8866:function(e,s,n){n.d(s,{Z:function(){return m}});n(2791);var r=n(743),a=n(6153),t=n(7988),i=n(2815),c=n(1523),l=n(2357),d=n(8284),o=n(6187),u=n(7556),h=n(184),x=function(e){var s=e.data;return(0,h.jsxs)(l.Z,{className:"product_cards",children:[(0,h.jsx)("div",{className:"img_wraped",children:(0,h.jsx)("img",{className:"img-fluid rounded",src:s.image,alt:s.title,loading:"lazy"})}),(0,h.jsxs)(d.Z,{children:[(0,h.jsx)(o.Z,{className:"text-truncate",children:s.name}),(0,h.jsx)("div",{className:"actions",children:(0,h.jsx)(u.Z,{className:"btn-rounded",to:"/pooja/".concat(s._id),tag:c.rU,outline:!0,color:"amber",children:"Book Pooja"})})]})]})},j=n(9071),m=function(e){var s=e.data,n=e.slider;return(0,h.jsx)("div",{className:"all_product",children:(0,h.jsx)(r.Z,{children:(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(t.Z,{lg:"12",children:(0,h.jsx)("div",{className:"heading",children:(0,h.jsxs)("h1",{children:["Our ",(0,h.jsx)("span",{children:"Pooja"})]})})}),n?(0,h.jsx)(t.Z,{lg:"12",children:(0,h.jsx)(j.Z,{type:"single",slides:4,row:1,spacebetween:30,colors:"#c74a2d",mobile:"2",tablet:"2",desktop:"4",children:s.map((function(e){return(0,h.jsx)(i.o5,{children:(0,h.jsx)(x,{data:e})},e._id)}))})}):(0,h.jsx)(h.Fragment,{children:s.map((function(e){return(0,h.jsx)(t.Z,{lg:"3",children:(0,h.jsx)(x,{data:e})},e._id)}))})]})})})}},9799:function(e,s,n){n.d(s,{Z:function(){return _}});var r=n(2791),a=n(743),t=n(6153),i=n(7988),c=n(2815),l=n(5861),d=n(9439),o=n(7757),u=n.n(o),h=n(1523),x=n(9271),j=n(2357),m=n(7556),p=n(8284),f=n(6187),Z=n(2683),g=n(4245),v=n(3695),w=n(184),b=function(e){var s=e.data,n=e.wishlist,a=(0,r.useState)([]),t=(0,d.Z)(a,2),i=t[0],c=t[1],o=(0,r.useState)(!1),b=(0,d.Z)(o,2),N=b[0],_=b[1],k=(0,r.useState)(!0),P=(0,d.Z)(k,2),y=P[0],S=P[1],A=(0,x.k6)();(0,r.useEffect)((function(){var e=function(){var e=(0,l.Z)(u().mark((function e(){var s,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!=(s=sessionStorage.getItem("Authtoken"))){e.next=6;break}_(!1),e.next=11;break;case 6:if(!s){e.next=11;break}return e.next=9,Z.Z.GetProfileData();case 9:n=e.sent,y&&(c(n.data.data),_(!0));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.error);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){e(),S(!0)}}),[y]);var B=function(){var e=(0,l.Z)(u().mark((function e(s,n){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),e.prev=1,r={user:i._id,product:n,status:0},!N){e.next=11;break}return e.next=6,Z.Z.CartCreate(g.stringify(r));case 6:a=e.sent,console.log(a.data),200===a.data.status_code?(v.ZP.success(a.data.message),A.push("/wishlist")):v.ZP.error(a.data.message),e.next=13;break;case 11:v.ZP.error("You have to login first"),A.push("/login");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(s,n){return e.apply(this,arguments)}}();return(0,w.jsxs)(j.Z,{className:"product_cards",children:[(0,w.jsx)("div",{className:"img_wraped",children:(0,w.jsx)("img",{className:"img-fluid rounded",src:s.image,alt:s.title,loading:"lazy"})}),n&&(0,w.jsx)("div",{className:"wishlist",children:(0,w.jsx)(m.Z,{onClick:function(e){return B(e,s._id)},children:(0,w.jsx)("i",{className:"lnr lnr-heart"})})}),(0,w.jsxs)(p.Z,{children:[(0,w.jsx)(f.Z,{className:"text-truncate",children:s.name}),s.price&&(0,w.jsxs)("h5",{children:["Rs. ",s.price," - ",(0,w.jsxs)("del",{children:["( Rs. ",s.discount_price," )"]})]}),(0,w.jsx)("div",{className:"actions",children:(0,w.jsx)(m.Z,{className:"btn-rounded",to:"/product/".concat(s._id),tag:h.rU,outline:!0,color:"amber",children:"Buy Product"})})]})]})},N=n(9071),_=function(e){var s=e.data,n=e.slider,r=e.wishlist,l=e.title;return(0,w.jsx)("div",{className:"all_product",children:(0,w.jsx)(a.Z,{children:(0,w.jsxs)(t.Z,{children:[(0,w.jsx)(i.Z,{lg:"12",children:(0,w.jsx)("div",{className:"heading",children:(0,w.jsx)("h1",{children:l?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("span",{children:l})}):(0,w.jsxs)(w.Fragment,{children:["Our ",(0,w.jsx)("span",{children:"Product"})]})})})}),n?(0,w.jsx)(i.Z,{lg:"12",children:(0,w.jsx)(N.Z,{type:"single",slides:4,row:1,spacebetween:30,colors:"#c74a2d",mobile:"2",tablet:"2",desktop:"4",children:s.map((function(e){return(0,w.jsx)(c.o5,{children:(0,w.jsx)(b,{data:e,wishlist:r})},e._id)}))})}):(0,w.jsx)(w.Fragment,{children:s.map((function(e,s){return(0,w.jsx)(i.Z,{lg:"3",children:(0,w.jsx)(b,{data:e,wishlist:r})},520*Math.random(s+1))}))})]})})})}},7746:function(e,s,n){n.r(s),n.d(s,{default:function(){return b}});var r=n(2791),a=n(3424),t=n(5861),i=n(9439),c=n(7757),l=n.n(c),d=n(2815),o=n(9071),u=n(184),h=function(e){var s=e.data;return(0,u.jsx)("div",{className:"banner",children:(0,u.jsx)(o.Z,{slides:1,row:1,spacebetween:0,colors:"#c74a2d",mobile:"1",tablet:"1",desktop:"1",children:s&&s.map((function(e){return(0,u.jsx)(d.o5,{children:(0,u.jsx)("div",{className:"banner_wrap",children:(0,u.jsx)("img",{src:e.image,alt:e.title,className:"img-fluid"})})},e._id)}))})})},x=n(743),j=n(6153),m=n(7988),p=function(e){return(0,u.jsx)("div",{className:"about_us",children:(0,u.jsx)(x.Z,{children:(0,u.jsxs)(j.Z,{className:"align-items-center",children:[(0,u.jsx)(m.Z,{lg:"4",children:(0,u.jsx)("img",{src:n(3163),alt:"about",className:"img-fluid"})}),(0,u.jsx)(m.Z,{lg:"8",children:(0,u.jsxs)("div",{className:"abt_content",children:[(0,u.jsxs)("h3",{children:["About ",(0,u.jsx)("span",{children:"Us"})]}),(0,u.jsx)("p",{children:"\u092a\u0902\u0921\u093f\u0924\u091c\u0940 \u0921\u0949\u091f \u0915\u0949\u092e \u0939\u092e \u092a\u0902\u0921\u093f\u0924 \u091c\u0940 \u0921\u0949\u091f \u0915\u0949\u092e \u090f\u0915 \u0910\u0938\u093e \u092e\u0902\u091a \u0939\u0948 \u091c\u094b \u092a\u0942\u0930\u0947 \u092d\u093e\u0930\u0924\u0935\u0930\u094d\u0937 \u0915\u0947 \u0927\u093e\u0930\u094d\u092e\u093f\u0915 \u0932\u094b\u0917\u094b \u0915\u094b \u091c\u094d\u092f\u094b\u0924\u093f\u0937 \u0915\u0941\u0902\u0921\u0932\u0940 \u092d\u093e\u0917\u094d\u092f \u0935 \u0935\u0948\u0926\u093f\u0915 \u0935\u093f\u0927\u093f \u0938\u0947 \u092a\u0942\u091c\u093e \u0938\u092e\u094d\u092a\u0928\u094d\u0928 \u0915\u0930\u0935\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0911\u0928\u0932\u093e\u0907\u0928 \u092e\u0902\u091a \u092a\u094d\u0930\u0926\u093e\u0928 \u0915\u0930\u0924\u093e \u0939\u0948\u0964 \u092f\u0939\u093e\u0902 \u0939\u092e \u0906\u092a\u0915\u0947 \u0932\u093f\u090f \u0905\u0928\u0941\u092d\u0935\u0940 \u0935\u093f\u0926\u094d\u0935\u093e\u0928 \u0906\u091a\u093e\u0930\u094d\u092f \u0936\u093e\u0938\u094d\u0924\u094d\u0930\u0940 \u092a\u0902\u0921\u093f\u0924 \u0935\u0930\u094d\u0917 \u0915\u094b \u0906\u092a\u0915\u0940 \u0935\u093f\u0927\u093f\u0935\u0924 \u092a\u0942\u091c\u093e \u0915\u0947 \u0932\u093f\u090f \u0935 \u0938\u093e\u0925 \u092e\u0947 \u0938\u092d\u0940 \u092a\u0942\u091c\u0928 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0909\u092a\u0932\u092c\u094d\u0927 \u0915\u0930\u0935\u093e\u0924\u0947 \u0939\u0948\u0964 \u0939\u092e\u093e\u0930\u0947 \u092f\u0939\u093e\u0902 \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u092a\u0902\u0921\u093f\u0924 \u091c\u0940 \u0939\u092e\u093e\u0930\u0940 \u0935\u0930\u094d\u0937\u094b \u0938\u0947 \u091a\u0932\u0940 \u0906 \u0930\u0939\u0940 \u090b\u0937\u093f \u092a\u0930\u092e\u094d\u092a\u0930\u093e \u0938\u0947 \u0917\u0941\u0930\u0941\u0915\u0941\u0932 \u092a\u093e\u0920\u0936\u093e\u0932\u093e \u092e\u0947\u0902 \u092a\u095d\u0947 \u0939\u0941\u090f \u091c\u094d\u091e\u093e\u0928 \u0905\u0930\u094d\u091c\u093f\u0924 \u0915\u093f\u092f\u0947 \u0939\u0941\u090f \u0939\u0948\u0964 \u092a\u0902\u0921\u093f\u0924 \u091c\u0940 \u0921\u0949\u091f \u0915\u0949\u092e \u0939\u092e\u093e\u0930\u093e \u0932\u0915\u094d\u0937\u094d\u092f \u0939\u0948 \u0915\u0947 \u0935\u093f\u0926\u094d\u0935\u093e\u0928 \u092a\u0902\u0921\u093f\u0924 \u091c\u0940 \u0915\u0947 \u0938\u093e\u0925 \u0939\u0940 \u0938\u092e\u094d\u092a\u0942\u0930\u094d\u0923 \u092a\u0942\u091c\u0928 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0906\u092a\u0915\u094b \u0909\u092a\u0932\u092c\u094d\u0927 \u0915\u0930\u0935\u093e\u090f \u091c\u093f\u0938\u0947 \u0906\u092a \u092c\u093e\u0915\u0940 \u0938\u092d\u0940 \u091a\u093f\u0902\u0924\u093e\u0913\u0902 \u0938\u0947 \u092e\u0941\u0915\u094d\u0924 \u0939\u094b\u0915\u0930 \u0906\u0902\u0928\u0926 \u0915\u0947 \u0938\u093e\u0925 \u092a\u0942\u091c\u093e \u0915\u0930 \u092a\u0942\u0923\u094d\u092f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930 \u092d\u093e\u0917\u094d\u092f\u0936\u093e\u0932\u0940 \u092c\u0928\u0947\u0964 \u092a\u0902\u0921\u093f\u0924 \u091c\u0940 \u0921\u0949\u091f \u0915\u0949\u092e \u0906\u092a\u0915\u0947 \u0915\u093e\u092e\u0928\u093e\u0913 \u0915\u0940 \u092a\u0942\u0930\u094d\u0924\u093f \u0915\u0947 \u0932\u093f\u090f \u0938\u0902\u0915\u0932\u094d\u092a\u093f\u0924 \u0939\u0948 \u0906\u091c \u0939\u0940 \u092c\u0941\u0915 \u0915\u0930\u0947\u0902 pujyapanditG.com"})]})})]})})})},f=n(9316),Z=n(8866),g=n(9799),v=n(2683),w=function(e){var s=(0,r.useState)([]),n=(0,i.Z)(s,2),a=n[0],c=n[1],d=(0,r.useState)([]),o=(0,i.Z)(d,2),x=o[0],j=o[1],m=(0,r.useState)([]),w=(0,i.Z)(m,2),b=w[0],N=w[1],_=(0,r.useState)([]),k=(0,i.Z)(_,2),P=k[0],y=k[1],S=(0,r.useState)(!0),A=(0,i.Z)(S,2),B=A[0],F=A[1];return(0,r.useEffect)((function(){var e=function(){var e=(0,t.Z)(l().mark((function e(s){var n,r,a,t,d,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([v.Z.GetBannerAll("homepage"),v.Z.GetProductAll(),v.Z.GetPoojaAll(),v.Z.GetArticleAll()]);case 3:n=e.sent,r=(0,i.Z)(n,4),a=r[0],t=r[1],d=r[2],o=r[3],B&&(c(a.data.data),j(t.data.data),N(d.data.data),y(o.data.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(s){return e.apply(this,arguments)}}();return e(),function(){e(),F(!1)}}),[B]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{data:a}),(0,u.jsx)(p,{}),(0,u.jsx)(g.Z,{data:x,slider:!0,wishlist:!0}),(0,u.jsx)(Z.Z,{data:b,slider:!0}),(0,u.jsx)(f.Z,{data:P,slider:!0})]})},b=function(e){return(0,u.jsx)(a.Z,{children:(0,u.jsx)(w,{})})}}}]);
//# sourceMappingURL=495.957b306a.chunk.js.map