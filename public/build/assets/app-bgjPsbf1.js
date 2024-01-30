import{_ as h,d as k,r as _,o as i,c as T,g as F,a,b as m,e,f as c,t as P,n as V,F as v,w as n,v as u,h as f,i as l,j as C,k as w,l as E,m as $,p as U,q as N,s as q}from"./global-jvb6_f9B.js";const A=k({name:"app",watch:{$route:{immediate:!0,handler(p,o){document.title=p.meta.title||"app"}}}});function M(p,o,b,y,s,r){const d=_("router-view");return i(),T(d)}const S=h(A,[["render",M]]),j={components:{global:F},data(){return{app_name:window.core.APP_NAME,imageUrl:"/images/dots.png"}},mounted(){},methods:{}},R={class:"d-flex justify-content-center align-items-center min-vh-100"},B={class:"form-content my-4"},D={class:"mb-3 h5 d-flex align-items-center justify-content-center"},I=["src"],L=e("div",{class:"d-flex justify-content-center align-items-center mt-3"},[e("hr",{class:"col-7 border"})],-1),O=e("div",{class:"d-flex justify-content-center"},[e("a",{href:"/front/home",class:"btn btn-theme d-flex justify-content-center align-items-center"}," Go to home ")],-1);function W(p,o,b,y,s,r){const d=_("global"),t=_("router-view");return i(),a(v,null,[m(d),e("div",{class:"user-authentication container-fluid",style:V({background:"url("+s.imageUrl+")"})},[e("div",R,[e("div",B,[e("div",D,[e("img",{src:"/images/svg/logo.svg",class:"img-fluid me-3",style:{width:"35px",height:"35px"},alt:"logo"},null,8,I),c(" "+P(s.app_name),1)]),m(t),L,O])])],4)],64)}const G=h(j,[["render",W]]),z={data(){return{app_name:window.core.APP_NAME,password:"",passwordFieldType:"password",loginParam:{email:"",password:"",rememberMe:""}}},mounted(){},methods:{passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},loginPush(){window.location.href="/admin/dashboard"}}},H={class:"mb-3 h5"},K=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Please sign-in to your account and start the adventure ",-1),J={autocomplete:"off"},Q={class:"mb-3"},X={class:"form-group"},Y=e("label",{for:"email",class:"form-label"},"Email",-1),Z={class:"mb-3"},ee={class:"form-group"},se=e("label",{for:"password",class:"form-label"},"Password",-1),oe={class:"position-relative"},te=["type"],re={key:0,class:"bi bi-eye"},ie={key:1,class:"bi bi-eye-slash"},ae={class:"row"},ne={class:"col-12 col-md-6 mb-3"},le={for:"remember",class:"form-label"},de={class:"col-12 col-md-6 text-md-end mb-3"},ce={class:"mb-3"},me={class:"form-group"},pe={class:"text-secondary text-opacity-50 text-center"};function ue(p,o,b,y,s,r){const d=_("router-link");return i(),a(v,null,[e("div",H," Welcome to "+P(s.app_name)+"! 👋🏻 ",1),K,e("form",J,[e("div",Q,[e("div",X,[Y,n(e("input",{id:"email",type:"email",name:"email",class:"form-control",placeholder:"Enter your email",required:"",autocomplete:"new-email","onUpdate:modelValue":o[0]||(o[0]=t=>s.loginParam.email=t)},null,512),[[u,s.loginParam.email]])])]),e("div",Z,[e("div",ee,[se,e("div",oe,[n(e("input",{id:"password",type:s.passwordFieldType,name:"password",class:"form-control",placeholder:"Enter your password",required:"",autocomplete:"new-password","onUpdate:modelValue":o[1]||(o[1]=t=>s.loginParam.password=t)},null,8,te),[[f,s.loginParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:o[2]||(o[2]=(...t)=>r.passwordVisibility&&r.passwordVisibility(...t))},[s.passwordFieldType==="text"?(i(),a("i",re)):l("",!0),s.passwordFieldType==="password"?(i(),a("i",ie)):l("",!0)])])])]),e("div",ae,[e("div",ne,[e("label",le,[n(e("input",{id:"remember",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[3]||(o[3]=t=>s.loginParam.rememberMe=t)},null,512),[[C,s.loginParam.rememberMe]]),c(" Remember me ")])]),e("div",de,[m(d,{to:{name:"forget"},class:"text-decoration-none text-theme"},{default:w(()=>[c(" Forget password? ")]),_:1})])]),e("div",ce,[e("div",me,[e("button",{type:"button",class:"btn btn-theme w-100",onClick:o[4]||(o[4]=(...t)=>r.loginPush&&r.loginPush(...t))}," LOGIN ")])]),e("div",pe,[c(" New on our platform? "),m(d,{to:{name:"register"},class:"text-decoration-none text-theme"},{default:w(()=>[c(" Create an account ")]),_:1})])])],64)}const _e=h(z,[["render",ue]]),fe={data(){return{password:"",passwordFieldType:"password",passwordConfirmationFieldType:"password",agreeChecked:!1,registerParam:{fullName:"",email:"",password:"",passwordConfirm:""}}},mounted(){},methods:{passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},passwordConfirmVisibility(){this.passwordConfirmationFieldType=this.passwordConfirmationFieldType==="password"?"text":"password"},checkController(){this.isCheckedPrivacy=!this.isCheckedPrivacy}}},we=e("div",{class:"mb-3 h5"}," Adventure starts here 🚀 ",-1),he=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Make your app management easy and fun! ",-1),be={autocomplete:"off"},ye={class:"mb-3"},ge={class:"form-group"},ve=e("label",{for:"full_name",class:"form-label"},"Full name",-1),xe={class:"mb-3"},Pe={class:"form-group"},Ce=e("label",{for:"email",class:"form-label"},"Email",-1),ke={class:"mb-3"},Te={class:"form-group"},Fe=e("label",{for:"password",class:"form-label"},"Password",-1),Ve={class:"position-relative"},Ee=["type"],$e={key:0,class:"bi bi-eye"},Ue={key:1,class:"bi bi-eye-slash"},Ne={class:"mb-3"},qe={class:"mb-3 form-group"},Ae=e("label",{for:"password_confirm",class:"form-label"},"Confirm password",-1),Me={class:"position-relative"},Se=["type"],je={key:0,class:"bi bi-eye"},Re={key:1,class:"bi bi-eye-slash"},Be={class:"mb-3"},De={for:"agree"},Ie=e("a",{href:"javascript:void(0)",class:"text-decoration-none text-theme"}," privacy policy & terms ",-1),Le={class:"mb-3"},Oe={class:"form-group"},We=["disabled"],Ge={class:"text-secondary text-opacity-50 text-center"};function ze(p,o,b,y,s,r){const d=_("router-link");return i(),a(v,null,[we,he,e("form",be,[e("div",ye,[e("div",ge,[ve,n(e("input",{id:"full_name",type:"text",name:"full_name","onUpdate:modelValue":o[0]||(o[0]=t=>s.registerParam.fullName=t),class:"form-control",placeholder:"Enter your full name",required:"",autocomplete:"new-full-name"},null,512),[[u,s.registerParam.fullName]])])]),e("div",xe,[e("div",Pe,[Ce,n(e("input",{id:"email",type:"email",name:"email",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>s.registerParam.email=t),placeholder:"Enter your email",required:"",autocomplete:"new-email"},null,512),[[u,s.registerParam.email]])])]),e("div",ke,[e("div",Te,[Fe,e("div",Ve,[n(e("input",{id:"password",type:s.passwordFieldType,name:"password",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>s.registerParam.password=t),placeholder:"Enter your password",required:"",autocomplete:"new-password"},null,8,Ee),[[f,s.registerParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:o[3]||(o[3]=(...t)=>r.passwordVisibility&&r.passwordVisibility(...t))},[s.passwordFieldType==="text"?(i(),a("i",$e)):l("",!0),s.passwordFieldType==="password"?(i(),a("i",Ue)):l("",!0)])])])]),e("div",Ne,[e("div",qe,[Ae,e("div",Me,[n(e("input",{id:"password_confirm",type:s.passwordConfirmationFieldType,name:"password_confirm","onUpdate:modelValue":o[4]||(o[4]=t=>s.registerParam.passwordConfirm=t),class:"form-control",placeholder:"Enter your confirm password",required:"",autocomplete:"new-confirm-password"},null,8,Se),[[f,s.registerParam.passwordConfirm]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:o[5]||(o[5]=(...t)=>r.passwordConfirmVisibility&&r.passwordConfirmVisibility(...t))},[s.passwordConfirmationFieldType==="text"?(i(),a("i",je)):l("",!0),s.passwordConfirmationFieldType==="password"?(i(),a("i",Re)):l("",!0)])])])]),e("div",Be,[e("label",De,[n(e("input",{id:"agree",type:"checkbox",class:"form-check-input","onUpdate:modelValue":o[6]||(o[6]=t=>s.agreeChecked=t)},null,512),[[C,s.agreeChecked]]),c(" I agree to "),Ie])]),e("div",Le,[e("div",Oe,[e("button",{type:"button",class:"btn btn-theme w-100",disabled:!s.agreeChecked}," SIGN UP ",8,We)])]),e("div",Ge,[c(" Already have an account? "),m(d,{to:{name:"login"},class:"text-decoration-none text-theme"},{default:w(()=>[c(" Sign in instead ")]),_:1})])])],64)}const He=h(fe,[["render",ze]]),Ke={data(){return{step:"forget-password",password:"",passwordFieldType:"password",passwordConfirmationFieldType:"password",forgetParam:{email:""},resetParam:{email:"",code:"",password:"",passwordConfirm:""}}},mounted(){},methods:{emailPush(){this.step="reset-password"},passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},passwordConfirmVisibility(){this.passwordConfirmationFieldType=this.passwordConfirmationFieldType==="password"?"text":"password"}}},Je={key:0},Qe=e("div",{class:"mb-3 h5"}," Forgot Password? 🔒 ",-1),Xe=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Enter your email and we'll send you instructions to reset your password ",-1),Ye={autocomplete:"off"},Ze={class:"mb-3"},es={class:"form-group"},ss=e("label",{for:"email",class:"form-label"},"Email",-1),os={class:"mb-3"},ts={class:"form-group"},rs={class:"text-center"},is=e("i",{class:"bi bi-chevron-left me-2"},null,-1),as={key:1},ns=e("div",{class:"mb-3 h5"}," Reset Password 🔒 ",-1),ls=e("div",{class:"mb-3 text-secondary text-opacity-50"}," Enter your email and we'll send you instructions to reset your password ",-1),ds={autocomplete:"off"},cs={class:"mb-3"},ms={class:"form-group"},ps=e("label",{for:"email",class:"form-label"},"Email",-1),us={class:"mb-3"},_s={class:"form-group"},fs=e("label",{for:"code",class:"form-label"},"Code",-1),ws={class:"mb-3"},hs={class:"form-group"},bs=e("label",{for:"password",class:"form-label"},"Password",-1),ys={class:"position-relative"},gs=["type"],vs={key:0,class:"bi bi-eye"},xs={key:1,class:"bi bi-eye-slash"},Ps={class:"mb-3"},Cs={class:"mb-3 form-group"},ks=e("label",{for:"password_confirm",class:"form-label"},"Confirm password",-1),Ts={class:"position-relative"},Fs=["type"],Vs={key:0,class:"bi bi-eye"},Es={key:1,class:"bi bi-eye-slash"},$s=e("div",{class:"mb-3"},[e("div",{class:"form-group"},[e("button",{type:"button",class:"btn btn-theme w-100"}," SET NEW PASSWORD ")])],-1),Us={class:"text-center"},Ns=e("i",{class:"bi bi-chevron-left me-2"},null,-1);function qs(p,o,b,y,s,r){const d=_("router-link");return i(),a(v,null,[s.step==="forget-password"?(i(),a("div",Je,[Qe,Xe,e("form",Ye,[e("div",Ze,[e("div",es,[ss,n(e("input",{type:"email",name:"email","onUpdate:modelValue":o[0]||(o[0]=t=>s.forgetParam.email=t),class:"form-control",placeholder:"Enter your email",required:"",autocomplete:"new-email"},null,512),[[u,s.forgetParam.email]])])]),e("div",os,[e("div",ts,[e("button",{type:"button",class:"btn btn-theme w-100",onClick:o[1]||(o[1]=(...t)=>r.emailPush&&r.emailPush(...t))}," SEND RESET LINK ")])]),e("div",rs,[m(d,{to:{name:"login"},class:"text-decoration-none text-theme"},{default:w(()=>[is,c(" Back to login ")]),_:1})])])])):l("",!0),s.step==="reset-password"?(i(),a("div",as,[ns,ls,e("form",ds,[e("div",cs,[e("div",ms,[ps,n(e("input",{id:"email",type:"email",name:"email","onUpdate:modelValue":o[2]||(o[2]=t=>s.resetParam.email=t),class:"form-control shadow-none border",placeholder:"Enter your email",required:"",autocomplete:"new-email"},null,512),[[u,s.resetParam.email]])])]),e("div",us,[e("div",_s,[fs,n(e("input",{id:"code",type:"text",name:"code","onUpdate:modelValue":o[3]||(o[3]=t=>s.resetParam.code=t),class:"form-control shadow-none border",placeholder:"Enter your otp code",required:"",autocomplete:"new-otp-code"},null,512),[[u,s.resetParam.code]])])]),e("div",ws,[e("div",hs,[bs,e("div",ys,[n(e("input",{id:"password",type:s.passwordFieldType,name:"password","onUpdate:modelValue":o[4]||(o[4]=t=>s.resetParam.password=t),class:"form-control",placeholder:"Enter your password",required:"",autocomplete:"new-password"},null,8,gs),[[f,s.resetParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:o[5]||(o[5]=(...t)=>r.passwordVisibility&&r.passwordVisibility(...t))},[s.passwordFieldType==="text"?(i(),a("i",vs)):l("",!0),s.passwordFieldType==="password"?(i(),a("i",xs)):l("",!0)])])])]),e("div",Ps,[e("div",Cs,[ks,e("div",Ts,[n(e("input",{id:"password_confirm",type:s.passwordConfirmationFieldType,name:"password_confirm","onUpdate:modelValue":o[6]||(o[6]=t=>s.resetParam.passwordConfirm=t),class:"form-control",placeholder:"Enter your confirm password",required:"",autocomplete:"new-confirm-password"},null,8,Fs),[[f,s.resetParam.passwordConfirm]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:o[7]||(o[7]=(...t)=>r.passwordConfirmVisibility&&r.passwordConfirmVisibility(...t))},[s.passwordConfirmationFieldType==="text"?(i(),a("i",Vs)):l("",!0),s.passwordConfirmationFieldType==="password"?(i(),a("i",Es)):l("",!0)])])])]),$s,e("div",Us,[m(d,{to:{name:"login"},class:"text-decoration-none text-theme"},{default:w(()=>[Ns,c(" Back to login ")]),_:1})])])])):l("",!0)],64)}const As=h(Ke,[["render",qs]]),x=window.core.APP_NAME,g="/auth",Ms=[{path:g,name:"layout",component:G,children:[{path:g+"/login",name:"login",component:_e,meta:{title:x+" - login"}},{path:g+"/register",name:"register",component:He,meta:{title:x+" - registration"}},{path:g+"/forget",name:"forget",component:As,meta:{title:x+" - forget"}}]}],Ss=E({history:$(),routes:Ms});window.bootstrap=U;N(S).use(Ss,q).mount("#app");