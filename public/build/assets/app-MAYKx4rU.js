import{_ as y,d as D,r as g,o as c,c as q,g as M,a as p,b as _,e,f as h,t as O,n as L,F as C,w as u,v as w,h as v,i as m,j as V,k as b,T as R,l as N,m as A,p as H,q as F,s as I,u as j,x as G,y as z,z as W}from"./global-OGyRk9aw.js";import{a as B}from"./axios-kMxbiGYq.js";const Q=D({name:"app",watch:{$route:{immediate:!0,handler(i,t){document.title=i.meta.title||"app"}}}});function K(i,t,r,l,s,n){const d=g("router-view");return c(),q(d)}const J=y(Q,[["render",K]]),X={components:{global:M},data(){return{app_name:window.core.APP_NAME,imageUrl:"/images/dots.png"}},mounted(){},methods:{}},Y={class:"d-flex justify-content-center align-items-center min-vh-100"},Z={class:"form-content my-4"},ee={class:"mb-3 h5 d-flex align-items-center justify-content-center"},te=["src"],se=e("div",{class:"d-flex justify-content-center align-items-center mt-3"},[e("hr",{class:"col-7 border"})],-1),oe=e("div",{class:"d-flex justify-content-center"},[e("a",{href:"/front/home",class:"btn btn-theme d-flex justify-content-center align-items-center"}," Go to home ")],-1);function re(i,t,r,l,s,n){const d=g("global"),a=g("router-view");return c(),p(C,null,[_(d),e("div",{class:"user-authentication container-fluid",style:L({background:"url("+s.imageUrl+")"})},[e("div",Y,[e("div",Z,[e("div",ee,[e("img",{src:"/images/svg/logo.svg",class:"img-fluid me-3",style:{width:"35px",height:"35px"},alt:"logo"},null,8,te),h(" "+O(s.app_name),1)]),_(a),se,oe])])],4)],64)}const ie=y(X,[["render",re]]),ae={data(){return{app_name:window.core.APP_NAME,password:"",passwordFieldType:"password",loginParam:{email:"",password:"",rememberMe:""}}},mounted(){},methods:{passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},loginPush(){window.location.href="/admin/dashboard"}}},ne={class:"mb-3 h5"},le=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Please sign-in to your account and start the adventure ",-1),de={autocomplete:"off"},ce={class:"mb-3"},pe={class:"form-group"},me=e("label",{for:"email",class:"form-label"},"Email",-1),ue={class:"mb-3"},he={class:"form-group"},fe=e("label",{for:"password",class:"form-label"},"Password",-1),_e={class:"position-relative"},we=["type"],ge={key:0,class:"bi bi-eye"},be={key:1,class:"bi bi-eye-slash"},ye={class:"row"},ve={class:"col-12 col-md-6 mb-3"},Te={for:"remember",class:"form-label"},Ce={class:"col-12 col-md-6 text-md-end mb-3"},xe={class:"mb-3"},Pe={class:"form-group"},ke={class:"text-secondary text-opacity-50 text-center"};function Ee(i,t,r,l,s,n){const d=g("router-link");return c(),p(C,null,[e("div",ne," Welcome to "+O(s.app_name)+"! 👋🏻 ",1),le,e("form",de,[e("div",ce,[e("div",pe,[me,u(e("input",{id:"email",type:"email",name:"email",class:"form-control",placeholder:"Enter your email",required:"",autocomplete:"new-email","onUpdate:modelValue":t[0]||(t[0]=a=>s.loginParam.email=a)},null,512),[[w,s.loginParam.email]])])]),e("div",ue,[e("div",he,[fe,e("div",_e,[u(e("input",{id:"password",type:s.passwordFieldType,name:"password",class:"form-control",placeholder:"Enter your password",required:"",autocomplete:"new-password","onUpdate:modelValue":t[1]||(t[1]=a=>s.loginParam.password=a)},null,8,we),[[v,s.loginParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[2]||(t[2]=(...a)=>n.passwordVisibility&&n.passwordVisibility(...a))},[s.passwordFieldType==="text"?(c(),p("i",ge)):m("",!0),s.passwordFieldType==="password"?(c(),p("i",be)):m("",!0)])])])]),e("div",ye,[e("div",ve,[e("label",Te,[u(e("input",{id:"remember",type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[3]||(t[3]=a=>s.loginParam.rememberMe=a)},null,512),[[V,s.loginParam.rememberMe]]),h(" Remember me ")])]),e("div",Ce,[_(d,{to:{name:"forget"},class:"text-decoration-none text-theme"},{default:b(()=>[h(" Forget password? ")]),_:1})])]),e("div",xe,[e("div",Pe,[e("button",{type:"button",class:"btn btn-theme w-100",onClick:t[4]||(t[4]=(...a)=>n.loginPush&&n.loginPush(...a))}," LOGIN ")])]),e("div",ke,[h(" New on our platform? "),_(d,{to:{name:"register"},class:"text-decoration-none text-theme"},{default:b(()=>[h(" Create an account ")]),_:1})])])],64)}const Fe=y(ae,[["render",Ee]]),$e=i=>{typeof i.remove<"u"?i.remove():i.parentNode.removeChild(i)};class Se{constructor(t,r){this.startedAt=Date.now(),this.callback=t,this.delay=r,this.timer=setTimeout(t,r)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const f={TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"},$=Object.freeze(f);function S(i,t,r){let l=null;switch(i){case f.TOP:case f.TOP_RIGHT:case f.TOP_LEFT:l=t;break;case f.BOTTOM:case f.BOTTOM_RIGHT:case f.BOTTOM_LEFT:l=r;break}return l}class qe{constructor(){this.queue={}}$on(t,r){this.queue[t]=this.queue[t]||[],this.queue[t].push(r)}$off(t,r){if(this.queue[t]){for(var l=0;l<this.queue[t].length;l++)if(this.queue[t][l]===r){this.queue[t].splice(l,1);break}}}$emit(t,r){this.queue[t]&&this.queue[t].forEach(function(l){l(r)})}}const k=new qe,Oe={name:"toast",props:{message:{type:String,required:!0},type:{type:String,default:"default"},position:{type:String,default:$.BOTTOM_RIGHT,validator(i){return Object.values($).includes(i)}},maxToasts:{type:[Number,Boolean],default:!1},duration:{type:[Number,Boolean],default:4e3},dismissible:{type:Boolean,default:!0},queue:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},useDefaultCss:{type:Boolean,default:!0},onClose:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1,timer:null}},beforeMount(){this.createParents(),this.setDefaultCss(),this.setupContainer()},mounted(){this.showNotice(),k.$on("toast-clear",this.close)},methods:{createParents(){this.parentTop=document.querySelector(".c-toast-container--top"),this.parentBottom=document.querySelector(".c-toast-container--bottom"),!(this.parentTop&&this.parentBottom)&&(this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="c-toast-container c-toast-container--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="c-toast-container c-toast-container--bottom"))},setDefaultCss(){const i=this.useDefaultCss?"add":"remove";this.parentTop.classList[i]("v--default-css"),this.parentBottom.classList[i]("v--default-css")},setupContainer(){const i=document.body;i.appendChild(this.parentTop),i.appendChild(this.parentBottom)},shouldQueue(){return!this.queue&&this.maxToasts===!1?!1:this.maxToasts!==!1?this.maxToasts<=this.parentTop.childElementCount+this.parentBottom.childElementCount:this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=this.duration!==!1?new Se(this.close,this.duration):null},click(){this.onClick.apply(null,arguments),this.dismissible&&this.close()},toggleTimer(i){this.timer&&this.pauseOnHover&&(i?this.timer.pause():this.timer.resume())},stopTimer(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer)},close(){this.stopTimer(),this.isActive=!1,setTimeout(()=>{this.onClose.apply(null,arguments),$e(this.$el)},150)}},computed:{correctParent(){return S(this.position,this.parentTop,this.parentBottom)},transition(){return S(this.position,{enter:"fadeInDown",leave:"fadeOut"},{enter:"fadeInUp",leave:"fadeOut"})}},beforeUnmount(){k.$off("toast-clear",this.close)}},Ve=["innerHTML"];function Be(i,t,r,l,s,n){return c(),q(R,{"enter-active-class":n.transition.enter,"leave-active-class":n.transition.leave},{default:b(()=>[u(e("div",{class:A(["c-toast",`c-toast--${r.type}`,`c-toast--${r.position}`]),onMouseover:t[0]||(t[0]=d=>n.toggleTimer(!0)),onMouseleave:t[1]||(t[1]=d=>n.toggleTimer(!1)),onClick:t[2]||(t[2]=(...d)=>n.click&&n.click(...d)),role:"alert",innerHTML:r.message},null,42,Ve),[[N,s.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}const U=y(Oe,[["render",Be]]),Ue=()=>typeof document<"u"&&document.createElement("div"),De=(i,{props:t,children:r,element:l,app:s}={})=>{let n=l||Ue(),d=H(i,t,r);return s&&s._context&&(d.appContext=s._context),F(d,n),{vNode:d,destroy:()=>{n&&F(null,n),n=null,d=null},el:n}},E=(i={})=>({show(t,r={}){let l={message:t,...r};return De(U,{props:{...i,...l}})},clear(){k.$emit("toast-clear")},success(t,r={}){return r.type="success",this.show(t,r)},error(t,r={}){return r.type="error",this.show(t,r)},info(t,r={}){return r.type="info",this.show(t,r)},warning(t,r={}){return r.type="warning",this.show(t,r)}}),Me=(i,t={})=>{let r=E(t);i.$toast=r,i.config.globalProperties.$toast=r};U.install=Me;const Le=E({position:"top-left",duration:5e3,singleton:!0}),x={headerContent:{"Content-Type":"application/json; charset=utf-8"},mediaHeaderContent:{"Content-Type":"multipart/form-data"},ErrorHandler(i){Object.entries(i).forEach(([t,r])=>{var n,d;const l=document.querySelector(`[name="${t}"]`),s=(n=l==null?void 0:l.closest(".form-group"))==null?void 0:n.querySelector(".error-report");(d=l==null?void 0:l.closest(".form-control"))==null||d.classList.add("is-invalid-custom"),s&&(s.textContent=r)})},ClearErrorHandler(){const i=document.querySelectorAll(".error-report");document.querySelectorAll(".form-control").forEach(r=>{r.classList.remove("is-invalid-custom")}),i.forEach(r=>{r.textContent=""})},toasterError(i){for(const t in i)i.hasOwnProperty(t)&&i[t].forEach(l=>{Le.error(`${l}`)})}},o="/api/",Re={login:o+"auth/login",registration:o+"auth/register",forget:o+"auth/forget",reset:o+"auth/reset",sliderCreate:o+"slider/create",sliderList:o+"slider/list",sliderSingle:o+"slider/single",sliderUpdate:o+"slider/update",sliderDelete:o+"slider/delete",categoryCreate:o+"category/create",categoryList:o+"category/list",categorySingle:o+"category/single",categoryUpdate:o+"category/update",categoryDelete:o+"category/delete",productCreate:o+"product/create",productList:o+"product/list",productSingle:o+"product/single",productUpdate:o+"product/update",productDelete:o+"product/delete",productReviewCreate:o+"review/create",productReviewList:o+"review/list",productReviewSingle:o+"review/single",productReviewUpdate:o+"review/update",productReviewDelete:o+"review/delete",packageCreate:o+"package/create",packageList:o+"package/list",packageSingle:o+"package/single",packageUpdate:o+"package/update",packageDelete:o+"package/delete",orderCreate:o+"order/create",orderList:o+"order/list",orderSingle:o+"order/single",orderUpdate:o+"order/update",orderDelete:o+"order/delete",blogCreate:o+"blog/create",blogList:o+"blog/list",blogSingle:o+"blog/single",blogUpdate:o+"blog/update",blogDelete:o+"blog/delete",blogReviewCreate:o+"blog/review/create",blogReviewList:o+"blog/review/list",blogReviewSingle:o+"blog/review/single",blogReviewUpdate:o+"blog/review/update",blogReviewDelete:o+"blog/review/delete",contactCreate:o+"contact/create",contactList:o+"contact/list",contactSingle:o+"contact/single",contactUpdate:o+"contact/update",contactDelete:o+"contact/delete"},Ne=E({position:"top-left"}),Ae={data(){return{password:"",passwordFieldType:"password",passwordConfirmationFieldType:"password",agreeChecked:!1,registerParam:{name:"",email:"",password:"",passwordConfirm:"",role:""},loading:!1}},mounted(){},methods:{passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},passwordConfirmVisibility(){this.passwordConfirmationFieldType=this.passwordConfirmationFieldType==="password"?"text":"password"},emailDomainSwitch(){switch(this.registerParam.email.split("@")[1]){case"admin.com":this.registerParam.role="admin";break;case"seller.com":this.registerParam.role="seller";break;case"delivery.com":this.registerParam.role="delivery";break;default:this.registerParam.role="customer";break}},register(){this.emailDomainSwitch(),x.ClearErrorHandler(),this.loading=!0,B.post(Re.registration,this.registerParam,{headers:x.headerContent}).then(i=>{this.loading=!1}).catch(i=>{var r,l;this.loading=!1;let t=i.response;((r=t==null?void 0:t.data)==null?void 0:r.errors)!==void 0?x.ErrorHandler((l=t==null?void 0:t.data)==null?void 0:l.errors):Ne.error("Server error!")})}}},He=e("div",{class:"mb-3 h5"}," Adventure starts here 🚀 ",-1),Ie=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Make your app management easy and fun! ",-1),je={class:"mb-3"},Ge={class:"form-group"},ze=e("label",{for:"name",class:"form-label"},"Full name",-1),We=e("div",{class:"error-report"},null,-1),Qe={class:"mb-3"},Ke={class:"form-group"},Je=e("label",{for:"email",class:"form-label"},"Email",-1),Xe=e("div",{class:"error-report"},null,-1),Ye={class:"mb-3"},Ze={class:"form-group"},et=e("label",{for:"password",class:"form-label"},"Password",-1),tt={class:"position-relative"},st=["type"],ot={key:0,class:"bi bi-eye"},rt={key:1,class:"bi bi-eye-slash"},it=e("div",{class:"error-report"},null,-1),at={class:"mb-3"},nt={class:"mb-3 form-group"},lt=e("label",{for:"password_confirm",class:"form-label"},"Confirm password",-1),dt={class:"position-relative"},ct=["type"],pt={key:0,class:"bi bi-eye"},mt={key:1,class:"bi bi-eye-slash"},ut=e("div",{class:"error-report"},null,-1),ht={class:"mb-3"},ft={for:"agree"},_t=e("a",{href:"javascript:void(0)",class:"text-decoration-none text-theme"}," privacy policy & terms ",-1),wt={class:"mb-3"},gt={class:"form-group"},bt=["disabled"],yt={key:1,type:"button",class:"btn btn-theme w-100"},vt={class:"text-secondary text-opacity-50 text-center"};function Tt(i,t,r,l,s,n){const d=g("router-link");return c(),p(C,null,[He,Ie,e("form",{onSubmit:t[7]||(t[7]=I((...a)=>n.register&&n.register(...a),["prevent"])),autocomplete:"off"},[e("div",je,[e("div",Ge,[ze,u(e("input",{id:"name",type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=a=>s.registerParam.name=a),class:"form-control",placeholder:"Enter your full name",required:"",autocomplete:"new-full-name"},null,512),[[w,s.registerParam.name]]),We])]),e("div",Qe,[e("div",Ke,[Je,u(e("input",{id:"email",type:"email",name:"email",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=a=>s.registerParam.email=a),placeholder:"Enter your email",required:"",autocomplete:"new-email"},null,512),[[w,s.registerParam.email]]),Xe])]),e("div",Ye,[e("div",Ze,[et,e("div",tt,[u(e("input",{id:"password",type:s.passwordFieldType,name:"password",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=a=>s.registerParam.password=a),placeholder:"Enter your password",required:"",autocomplete:"new-password"},null,8,st),[[v,s.registerParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[3]||(t[3]=(...a)=>n.passwordVisibility&&n.passwordVisibility(...a))},[s.passwordFieldType==="text"?(c(),p("i",ot)):m("",!0),s.passwordFieldType==="password"?(c(),p("i",rt)):m("",!0)])]),it])]),e("div",at,[e("div",nt,[lt,e("div",dt,[u(e("input",{id:"password_confirm",type:s.passwordConfirmationFieldType,name:"password_confirm","onUpdate:modelValue":t[4]||(t[4]=a=>s.registerParam.passwordConfirm=a),class:"form-control",placeholder:"Enter your confirm password",required:"",autocomplete:"new-confirm-password"},null,8,ct),[[v,s.registerParam.passwordConfirm]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[5]||(t[5]=(...a)=>n.passwordConfirmVisibility&&n.passwordConfirmVisibility(...a))},[s.passwordConfirmationFieldType==="text"?(c(),p("i",pt)):m("",!0),s.passwordConfirmationFieldType==="password"?(c(),p("i",mt)):m("",!0)])]),ut])]),e("div",ht,[e("label",ft,[u(e("input",{id:"agree",type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[6]||(t[6]=a=>s.agreeChecked=a)},null,512),[[V,s.agreeChecked]]),h(" I agree to "),_t])]),e("div",wt,[e("div",gt,[s.loading?m("",!0):(c(),p("button",{key:0,type:"submit",class:"btn btn-theme w-100",disabled:!s.agreeChecked}," SIGN UP ",8,bt)),s.loading?(c(),p("button",yt," Loading ... ")):m("",!0)])]),e("div",vt,[h(" Already have an account? "),_(d,{to:{name:"login"},class:"text-decoration-none text-theme"},{default:b(()=>[h(" Sign in instead ")]),_:1})])],32)],64)}const Ct=y(Ae,[["render",Tt]]),xt={data(){return{step:"forget-password",password:"",passwordFieldType:"password",passwordConfirmationFieldType:"password",forgetParam:{email:""},resetParam:{email:"",code:"",password:"",passwordConfirm:""}}},mounted(){},methods:{emailPush(){this.step="reset-password"},passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},passwordConfirmVisibility(){this.passwordConfirmationFieldType=this.passwordConfirmationFieldType==="password"?"text":"password"}}},Pt={key:0},kt=e("div",{class:"mb-3 h5"}," Forgot Password? 🔒 ",-1),Et=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Enter your email and we'll send you instructions to reset your password ",-1),Ft={autocomplete:"off"},$t={class:"mb-3"},St={class:"form-group"},qt=e("label",{for:"email",class:"form-label"},"Email",-1),Ot={class:"mb-3"},Vt={class:"form-group"},Bt={class:"text-center"},Ut=e("i",{class:"bi bi-chevron-left me-2"},null,-1),Dt={key:1},Mt=e("div",{class:"mb-3 h5"}," Reset Password 🔒 ",-1),Lt=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Enter your email and we'll send you instructions to reset your password ",-1),Rt={autocomplete:"off"},Nt={class:"mb-3"},At={class:"form-group"},Ht=e("label",{for:"email",class:"form-label"},"Email",-1),It={class:"mb-3"},jt={class:"form-group"},Gt=e("label",{for:"code",class:"form-label"},"Code",-1),zt={class:"mb-3"},Wt={class:"form-group"},Qt=e("label",{for:"password",class:"form-label"},"Password",-1),Kt={class:"position-relative"},Jt=["type"],Xt={key:0,class:"bi bi-eye"},Yt={key:1,class:"bi bi-eye-slash"},Zt={class:"mb-3"},es={class:"mb-3 form-group"},ts=e("label",{for:"password_confirm",class:"form-label"},"Confirm password",-1),ss={class:"position-relative"},os=["type"],rs={key:0,class:"bi bi-eye"},is={key:1,class:"bi bi-eye-slash"},as=e("div",{class:"mb-3"},[e("div",{class:"form-group"},[e("button",{type:"button",class:"btn btn-theme w-100"}," SET NEW PASSWORD ")])],-1),ns={class:"text-center"},ls=e("i",{class:"bi bi-chevron-left me-2"},null,-1);function ds(i,t,r,l,s,n){const d=g("router-link");return c(),p(C,null,[s.step==="forget-password"?(c(),p("div",Pt,[kt,Et,e("form",Ft,[e("div",$t,[e("div",St,[qt,u(e("input",{type:"email",name:"email","onUpdate:modelValue":t[0]||(t[0]=a=>s.forgetParam.email=a),class:"form-control",placeholder:"Enter your email",required:"",autocomplete:"new-email"},null,512),[[w,s.forgetParam.email]])])]),e("div",Ot,[e("div",Vt,[e("button",{type:"button",class:"btn btn-theme w-100",onClick:t[1]||(t[1]=(...a)=>n.emailPush&&n.emailPush(...a))}," SEND RESET LINK ")])]),e("div",Bt,[_(d,{to:{name:"login"},class:"text-decoration-none text-theme"},{default:b(()=>[Ut,h(" Back to login ")]),_:1})])])])):m("",!0),s.step==="reset-password"?(c(),p("div",Dt,[Mt,Lt,e("form",Rt,[e("div",Nt,[e("div",At,[Ht,u(e("input",{id:"email",type:"email",name:"email","onUpdate:modelValue":t[2]||(t[2]=a=>s.resetParam.email=a),class:"form-control shadow-none border",placeholder:"Enter your email",required:"",autocomplete:"new-email"},null,512),[[w,s.resetParam.email]])])]),e("div",It,[e("div",jt,[Gt,u(e("input",{id:"code",type:"text",name:"code","onUpdate:modelValue":t[3]||(t[3]=a=>s.resetParam.code=a),class:"form-control shadow-none border",placeholder:"Enter your otp code",required:"",autocomplete:"new-otp-code"},null,512),[[w,s.resetParam.code]])])]),e("div",zt,[e("div",Wt,[Qt,e("div",Kt,[u(e("input",{id:"password",type:s.passwordFieldType,name:"password","onUpdate:modelValue":t[4]||(t[4]=a=>s.resetParam.password=a),class:"form-control",placeholder:"Enter your password",required:"",autocomplete:"new-password"},null,8,Jt),[[v,s.resetParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[5]||(t[5]=(...a)=>n.passwordVisibility&&n.passwordVisibility(...a))},[s.passwordFieldType==="text"?(c(),p("i",Xt)):m("",!0),s.passwordFieldType==="password"?(c(),p("i",Yt)):m("",!0)])])])]),e("div",Zt,[e("div",es,[ts,e("div",ss,[u(e("input",{id:"password_confirm",type:s.passwordConfirmationFieldType,name:"password_confirm","onUpdate:modelValue":t[6]||(t[6]=a=>s.resetParam.passwordConfirm=a),class:"form-control",placeholder:"Enter your confirm password",required:"",autocomplete:"new-confirm-password"},null,8,os),[[v,s.resetParam.passwordConfirm]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[7]||(t[7]=(...a)=>n.passwordConfirmVisibility&&n.passwordConfirmVisibility(...a))},[s.passwordConfirmationFieldType==="text"?(c(),p("i",rs)):m("",!0),s.passwordConfirmationFieldType==="password"?(c(),p("i",is)):m("",!0)])])])]),as,e("div",ns,[_(d,{to:{name:"login"},class:"text-decoration-none text-theme"},{default:b(()=>[ls,h(" Back to login ")]),_:1})])])])):m("",!0)],64)}const cs=y(xt,[["render",ds]]),P=window.core.APP_NAME,T="/auth",ps=[{path:T,name:"layout",component:ie,children:[{path:T+"/login",name:"login",component:Fe,meta:{title:P+" - login"}},{path:T+"/register",name:"register",component:Ct,meta:{title:P+" - registration"}},{path:T+"/forget",name:"forget",component:cs,meta:{title:P+" - forget"}}]}],ms=j({history:G(),routes:ps});window.bootstrap=z;W(J).use(ms,B).mount("#app");
