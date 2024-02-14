import{_ as b,d as $,r as k,c as T,o as n,g as F,a,b as d,e,s as p,k as f,n as U,F as E,f as m,t as j,H as u,i as r,w as c,v as w,J as x,h as C,l as D,m as V,p as S,q as N}from"./global-qxdaYMwq.js";import{a as M}from"./axios-kMxbiGYq.js";const L=$({name:"app",watch:{$route:{immediate:!0,handler(l,t){document.title=l.meta.title||"app"}}}});function B(l,t,h,_,s,i){const o=k("router-view");return n(),T(o)}const q=b(L,[["render",B]]),R={components:{global:F},data(){return{imageUrl:"/images/dots.png",app_name:window.core.APP_NAME,sidebarActive:!1}},mounted(){},methods:{btnController(){this.sidebarActive=!this.sidebarActive},remove(){this.sidebarActive=!1}}},O={class:"user-sidebar-header"},I=e("i",{class:"bi bi-x-lg"},null,-1),H=[I],z={class:"user-sidebar-body"},J=e("i",{class:"bi bi-circle me-1"},null,-1),W=e("i",{class:"bi bi-circle me-1"},null,-1),K=e("i",{class:"bi bi-cart me-1"},null,-1),G=e("i",{class:"bi bi-bell me-1"},null,-1),Q={class:"user-content"},X={class:"user-content-header"},Y=e("i",{class:"bi bi-justify-left"},null,-1),Z=[Y],ee={class:"dropdown"},te={type:"button",class:"btn btn-user","data-bs-toggle":"dropdown","aria-expanded":"false"},se=["src"],oe={class:"dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0"},ie=e("i",{class:"bi bi-person me-2"},null,-1),ne=e("li",null,[e("a",{href:"/auth/login",class:"dropdown-item px-3 py-2"},[e("i",{class:"bi bi-box-arrow-right me-2"}),m(" Logout ")])],-1),ae={class:"user-content-body"};function le(l,t,h,_,s,i){const o=k("global"),v=k("router-link"),A=k("router-view");return n(),a(E,null,[d(o),e("div",{class:"user-wrapper",style:U({background:"url("+s.imageUrl+")"})},[e("div",{class:p(["user-sidebar",{active:s.sidebarActive}])},[e("div",O,[d(v,{to:{name:"dashboard"},class:"user-sidebar-title"},{default:f(()=>[m(j(s.app_name),1)]),_:1}),e("button",{type:"button",class:"btn btn-controller",onClick:t[0]||(t[0]=(...P)=>i.remove&&i.remove(...P))},H)]),e("div",z,[d(v,{to:{name:"dashboard"},class:"user-sidebar-link",onClick:i.remove},{default:f(()=>[J,m(" Dashboard ")]),_:1},8,["onClick"]),d(v,{to:{name:"chat"},class:"user-sidebar-link",onClick:i.remove},{default:f(()=>[W,m(" Chat ")]),_:1},8,["onClick"]),d(v,{to:{name:"order"},class:"user-sidebar-link",onClick:i.remove},{default:f(()=>[K,m(" Orders ")]),_:1},8,["onClick"]),d(v,{to:{name:"notification"},class:"user-sidebar-link",onClick:i.remove},{default:f(()=>[G,m(" Notifications ")]),_:1},8,["onClick"])])],2),e("div",Q,[e("div",X,[e("button",{type:"button",class:"btn btn-controller",onClick:t[1]||(t[1]=P=>i.btnController())},Z),e("div",ee,[e("button",te,[e("img",{src:"/images/avatar.png",class:"rounded-circle overflow-hidden user-avatar",alt:"user avatar"},null,8,se)]),e("ul",oe,[e("li",null,[d(v,{to:{name:"profile"},class:"dropdown-item px-3 py-2"},{default:f(()=>[ie,m(" Profile ")]),_:1})]),ne])])]),e("div",ae,[d(A)])])],4)],64)}const re=b(R,[["render",le]]),ce={data(){return{}},mounted(){},methods:{}},de={class:""};function me(l,t,h,_,s,i){return n(),a("div",de)}const ue=b(ce,[["render",me]]),pe={data(){return{}},mounted(){},methods:{}};function be(l,t,h,_,s,i){return null}const he=b(pe,[["render",be]]),_e={data(){return{chatSidebarActive:!1,clientDetailsActive:!1,ownerDetailsActive:!1,select:{ClientImage:"face-1.png",clientName:"Harriet McBride",ClientEmail:""}}},mounted(){},methods:{chatSidebarController(){this.chatSidebarActive=!0,this.clientDetailsActive=!1,this.ownerDetailsActive=!1},clientDetails(){this.clientDetailsActive=!0,this.chatSidebarActive=!1,this.ownerDetailsActive=!1},ownerDetails(){this.ownerDetailsActive=!0,this.chatSidebarActive=!1,this.clientDetailsActive=!1},remove(){this.chatSidebarActive=!1,this.clientDetailsActive=!1,this.ownerDetailsActive=!1}}},ve={class:"chat-wrapper"},fe={class:"text-end"},ye={class:"d-flex flex-column justify-content-between content"},ge={class:"col-12"},we={class:"text-center"},xe=["src"],ke=e("div",{class:"h5"},"John Deo",-1),Ce=e("small",{class:"text-secondary text-opacity-50"},"Admin",-1),Pe=u('<div class="text-start col-12 mt-4"><div class="mb-3">PERSONAL INFORMATION</div><div class="mb-3 text-secondary text-opacity-75"><i class="bi bi-envelope me-2"></i> johndeo@gmail.com </div><div class="mb-3 text-secondary text-opacity-75"><i class="bi bi-telephone me-2"></i> +880 01400125289 </div><div class="mb-3 text-secondary text-opacity-75"><i class="bi bi-clock me-2"></i> Mon - Fri 10AM - 8PM </div></div>',1),je=u('<div class="d-flex justify-content-center align-items-center"><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-twitter-x"></i></button><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-linkedin"></i></button><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-youtube"></i></button><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-github"></i></button></div>',1),Ae={class:"text-start"},$e={class:"d-flex flex-column justify-content-between content"},Te={class:"col-12"},Fe={class:"text-center"},Ue=["src"],Ee=e("div",{class:"h5"},"Harriet McBride",-1),De=e("small",{class:"text-secondary text-opacity-50"},"Frontend Developer",-1),Ve=u('<div class="text-start col-12 mt-4"><div class="mb-3">PERSONAL INFORMATION</div><div class="mb-3 text-secondary text-opacity-75"><i class="bi bi-envelope me-2"></i> harriet@gmail.com </div><div class="mb-3 text-secondary text-opacity-75"><i class="bi bi-telephone me-2"></i> +1(123) 456 - 7890 </div><div class="mb-3 text-secondary text-opacity-75"><i class="bi bi-clock me-2"></i> Mon - Fri 10AM - 8PM </div></div>',1),Se=u('<div class="d-flex justify-content-center align-items-center"><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-twitter-x"></i></button><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-linkedin"></i></button><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-youtube"></i></button><button type="button" class="border-0 btn-light mx-1 rounded-circle d-flex justify-content-center align-items-center wpx-35 hpx-35"><i class="bi bi-github"></i></button></div>',1),Ne={class:"chat-sidebar-header"},Me=["src"],Le=e("div",{class:"position-relative"},[e("input",{type:"text",name:"",class:"form-control shadow-none ps-5",placeholder:"Search Here"}),e("div",{class:"position-absolute start-0 top-50 translate-middle-y ps-3"},[e("i",{class:"bi bi-search text-secondary"})])],-1),Be=e("i",{class:"bi bi-x-lg"},null,-1),qe=[Be],Re={class:"chat-sidebar-body"},Oe={href:"javascript:void(0)",class:"chat-sidebar-link"},Ie=["src"],He=e("span",null,[e("strong",null," Harriet McBride "),e("br"),e("small",{class:"text-secondary"},"harriet@gmail.com")],-1),ze={href:"javascript:void(0)",class:"chat-sidebar-link"},Je=["src"],We=e("span",null,[e("strong",null," Danny Conner "),e("br"),e("small",{class:"text-secondary"},"danny@gmail.com")],-1),Ke={href:"javascript:void(0)",class:"chat-sidebar-link"},Ge=["src"],Qe=e("span",null,[e("strong",null," Janie West "),e("br"),e("small",{class:"text-secondary"},"janie@gmail.com")],-1),Xe={href:"javascript:void(0)",class:"chat-sidebar-link"},Ye=["src"],Ze=e("span",null,[e("strong",null," Bryan Murray "),e("br"),e("small",{class:"text-secondary"},"bryan@gmail.com")],-1),et={href:"javascript:void(0)",class:"chat-sidebar-link"},tt=["src"],st=e("span",null,[e("strong",null," Albert Underwood "),e("br"),e("small",{class:"text-secondary"},"albert@gmail.com")],-1),ot={class:"chat-body"},it={class:"chat-body-header"},nt={class:"d-flex align-items-center justify-content-start"},at=e("i",{class:"bi bi-justify-left"},null,-1),lt=[at],rt=["src"],ct=e("br",null,null,-1),dt=e("small",{class:"text-secondary"},"harriet@gmail.com",-1),mt=u('<div class="dropdown"><button type="button" class="btn-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></button><ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0"><li><button type="button" class="dropdown-item px-3 py-2"> Audio call </button></li><li><button type="button" class="dropdown-item px-3 py-2"> Video call </button></li><li><button type="button" class="dropdown-item px-3 py-2"> Mute notification </button></li><li><button type="button" class="dropdown-item px-3 py-2"> Block conversation </button></li><li><button type="button" class="dropdown-item px-3 py-2"> Clear conversation </button></li></ul></div>',1),ut={class:"chat-body-content p-3"},pt={class:"chat-text-content p-1 cursor-content-menu"},bt={class:"d-flex justify-content-end align-items-center mb-3"},ht=e("div",{class:"py-2 px-3 bg-theme text-white rounded-3 shadow-sm"}," How can we help? We're here for you! ",-1),_t=["src"],vt={class:"d-flex justify-content-start align-items-center mb-3"},ft=["src"],yt=e("div",{class:"py-2 px-3 bg-white text-secondary rounded-3 shadow-sm"}," Hey John, I am looking for the best admin template. Could you please help me to find it out? ",-1),gt=u('<div class="mt-3"><div class="position-relative"><input type="text" name="" class="form-control" placeholder="Type you message" required><div class="position-absolute top-50 end-0 translate-middle-y me-1"><button type="button" class="btn btn-theme d-flex justify-content-center align-items-center rounded-1 hpx-38"><i class="bi bi-send me-2"></i> Send </button></div></div></div>',1);function wt(l,t,h,_,s,i){return n(),a("div",ve,[e("div",{class:p(["ownerDetails",{active:s.ownerDetailsActive}])},[e("div",fe,[e("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=(...o)=>i.remove&&i.remove(...o))})]),e("div",ye,[e("div",ge,[e("div",we,[e("img",{src:"/images/avatar.png",class:"img-fluid mb-3 wpx-100 hpx-100 rounded-circle",alt:"avatar"},null,8,xe),ke,Ce]),Pe]),je])],2),e("div",{class:p(["clientDetails",{active:s.clientDetailsActive}])},[e("div",Ae,[e("button",{type:"button",class:"btn-close",onClick:t[1]||(t[1]=(...o)=>i.remove&&i.remove(...o))})]),e("div",$e,[e("div",Te,[e("div",Fe,[e("img",{src:"/images/clients/face-1.png",class:"img-fluid mb-3 wpx-100 hpx-100 rounded-circle",alt:"client-avatar"},null,8,Ue),Ee,De]),Ve]),Se])],2),e("div",{class:p(["chat-sidebar",{active:s.chatSidebarActive}])},[e("div",Ne,[e("img",{src:"/images/avatar.png",class:"img-fluid rounded-circle me-2 cursor-pointer wpx-45 hpx-45",alt:"avatar",onClick:t[2]||(t[2]=(...o)=>i.ownerDetails&&i.ownerDetails(...o))},null,8,Me),Le,e("a",{href:"javascript:void(0)",class:"chat-sidebar-close ms-2",onClick:t[3]||(t[3]=(...o)=>i.remove&&i.remove(...o))},qe)]),e("div",Re,[e("a",Oe,[e("img",{src:"/images/clients/face-1.png",class:"chat-user",alt:"avatar.png"},null,8,Ie),He]),e("a",ze,[e("img",{src:"/images/clients/face-2.png",class:"chat-user",alt:"avatar.png"},null,8,Je),We]),e("a",Ke,[e("img",{src:"/images/clients/face-3.png",class:"chat-user",alt:"avatar.png"},null,8,Ge),Qe]),e("a",Xe,[e("img",{src:"/images/clients/face-4.png",class:"chat-user",alt:"avatar.png"},null,8,Ye),Ze]),e("a",et,[e("img",{src:"/images/clients/face-5.png",class:"chat-user",alt:"avatar.png"},null,8,tt),st])])],2),e("div",ot,[e("div",it,[e("div",nt,[e("a",{href:"javascript:void(0)",class:"btn-controller",onClick:t[4]||(t[4]=(...o)=>i.chatSidebarController&&i.chatSidebarController(...o))},lt),e("div",{class:"d-flex align-items-center cursor-pointer font-14",onClick:t[5]||(t[5]=(...o)=>i.clientDetails&&i.clientDetails(...o))},[e("img",{src:"/images/clients/"+s.select.ClientImage,class:"img-fluid rounded-circle me-2 wpx-45 hpx-45",alt:"client-avatar"},null,8,rt),e("span",null,[e("strong",null,j(s.select.clientName),1),ct,dt])])]),mt]),e("div",ut,[e("div",pt,[e("div",bt,[ht,e("img",{src:"/images/avatar.png",class:"rounded-circle ms-2 wpx-45 hpx-45",alt:"avatar"},null,8,_t)]),e("div",vt,[e("img",{src:"/images/clients/face-1.png",class:"img-fluid rounded-circle me-2 wpx-45 hpx-45",alt:"client-avatar"},null,8,ft),yt])]),gt])])])}const xt=b(_e,[["render",wt]]),kt={data(){return{}},mounted(){},methods:{}};function Ct(l,t,h,_,s,i){return null}const Pt=b(kt,[["render",Ct]]),jt={data(){return{url:null,profileEditParam:{fullName:"Mahi Bashar Akash",email:"mahibasbar2023@gmail.com",contact:"+880 01645820007",country:"bangladesh",language:"english"},passwordParam:{currentPassword:"",password:"",passwordConfirm:""},necessaryParam:{vehiclesType:"1",areaLocation:"dhaka",vehicleLicense:"",licenseUrl:null},tab:1,password:"",passwordFieldType:"password",passwordConfirmationFieldType:"password",currentPasswordFieldType:"password"}},mounted(){},methods:{onFileChange(l){const t=l.target.files[0];this.url=URL.createObjectURL(t)},onFileChangeLicenseUrl(l){const t=l.target.files[0];this.necessaryParam.licenseUrl=URL.createObjectURL(t)},setTab(l){this.tab=l},currentPasswordVisibility(){this.currentPasswordFieldType=this.currentPasswordFieldType==="password"?"text":"password"},passwordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"},passwordConfirmVisibility(){this.passwordConfirmationFieldType=this.passwordConfirmationFieldType==="password"?"text":"password"}}},At={class:"row justify-content-center"},$t={class:"col-lg-3 p-3"},Tt={class:"p-3 bg-white shadow rounded-4"},Ft={class:"p-4 d-flex justify-content-center align-items-center flex-column"},Ut={key:0,for:"avatar",class:"form-label wpx-175 hpx-175 d-flex justify-content-center align-items-center shadow rounded-circle cursor-pointer"},Et=e("i",{class:"bi bi-person-fill font-50 text-theme"},null,-1),Dt={key:1,class:"wpx-175 hpx-175 position-relative"},Vt=["src"],St=e("i",{class:"bi bi-trash2-fill text-danger"},null,-1),Nt=[St],Mt=u('<div class="font-14 py-3"><div class="mt-3"><div class="mb-2 fw-semibold">Full Name</div><div class="text-secondary">Mahi Bashar Akash</div></div><div class="mt-3"><div class="mb-2 fw-semibold">Contact</div><div class="text-secondary">+880 01645820007</div></div><div class="mt-3"><div class="mb-2 fw-semibold">Email</div><div class="text-secondary">mahibashar2023@gmail.com</div></div><div class="mt-3"><div class="mb-2 fw-semibold">Selected Country</div><div class="text-secondary">Bangladesh</div></div><div class="mt-3"><div class="mb-2 fw-semibold">Selected Language</div><div class="text-secondary">English</div></div></div>',1),Lt={class:"col-lg-6 p-3 font-14"},Bt={class:"d-flex justify-content-start align-items-center flex-wrap"},qt={key:0,class:"p-4 bg-white shadow rounded-4"},Rt={class:"form-group mb-3"},Ot=e("label",{for:"full-name",class:"form-label"},"Full Name",-1),It={class:"form-group mb-3"},Ht=e("label",{for:"email",class:"form-label"},"Email",-1),zt={class:"form-group mb-3"},Jt=e("label",{for:"contact",class:"form-label"},"Contact",-1),Wt={class:"form-group mb-3"},Kt=e("label",{for:"country",class:"form-label"},"Select Country",-1),Gt=e("option",{value:"bangladesh"},"Bangladesh",-1),Qt=[Gt],Xt={class:"form-group mb-3"},Yt=e("label",{for:"language",class:"form-label"},"Select Language",-1),Zt=e("option",{value:"english"},"English",-1),es=[Zt],ts=e("button",{type:"submit",class:"btn btn-theme"}," Update Profile ",-1),ss={key:1,class:"p-4 bg-white shadow rounded-4"},os={class:"form-group mb-3"},is=e("label",{for:"current-password",class:"form-label"},"Current Password",-1),ns={class:"position-relative"},as=["type"],ls={key:0,class:"bi bi-eye"},rs={key:1,class:"bi bi-eye-slash"},cs={class:"form-group mb-3"},ds=e("label",{for:"password",class:"form-label"},"Password",-1),ms={class:"position-relative"},us=["type"],ps={key:0,class:"bi bi-eye"},bs={key:1,class:"bi bi-eye-slash"},hs={class:"form-group mb-3"},_s=e("label",{for:"password-confirm",class:"form-label"},"Password confirm",-1),vs={class:"position-relative"},fs=["type"],ys={key:0,class:"bi bi-eye"},gs={key:1,class:"bi bi-eye-slash"},ws=e("button",{type:"submit",class:"btn btn-theme"}," Update Password ",-1),xs={key:2,class:"p-4 bg-white shadow rounded-4"},ks={class:"form-group mb-3"},Cs=e("label",{for:"vehicles-type",class:"form-label"},"Select vehicles",-1),Ps=e("option",{value:"1"},"Bicycle",-1),js=e("option",{value:"2"},"Bike",-1),As=e("option",{value:"3"},"Small Truck",-1),$s=[Ps,js,As],Ts={class:"form-group mb-3"},Fs=e("label",{for:"area-location",class:"form-label"},"Area location",-1),Us=u('<option value="chittagong">Chittagong</option><option value="dhaka">Dhaka</option><option value="rajshahi">Rajshahi</option><option value="sylhet">Sylhet</option><option value="mymensingh">Mymensingh</option><option value="barisal">Barisal</option><option value="rangpur">Rangpur</option><option value="khulna">Khulna</option>',8),Es=[Us],Ds={class:"form-group mb-3"},Vs=e("label",{for:"vehicle-license",class:"form-label"},"Vehicle license",-1),Ss={class:"form-group mb-3"},Ns=e("label",{for:"organization-license",class:"form-label"},"Organization license prove",-1),Ms={key:0,for:"license-avatar",id:"organization-license",class:"w-100 bg-white border hpx-175 d-flex justify-content-center align-items-center flex-column rounded-3 cursor-pointer text-theme"},Ls=e("i",{class:"bi bi-clouds-fill font-50"},null,-1),Bs={key:1,class:"position-relative"},qs=["src"],Rs={class:"position-absolute top-50 start-50 translate-middle"},Os=e("i",{class:"bi bi-trash2 text-danger"},null,-1),Is=[Os],Hs=e("button",{type:"submit",class:"btn btn-theme"}," Update Necessary Info ",-1);function zs(l,t,h,_,s,i){return n(),a("div",At,[e("div",$t,[e("div",Tt,[e("div",Ft,[s.url?r("",!0):(n(),a("label",Ut,[e("input",{id:"avatar",type:"file",name:"upload-image",class:"d-none",accept:"image/png, image/gif, image/jpeg",onChange:t[0]||(t[0]=(...o)=>i.onFileChange&&i.onFileChange(...o))},null,32),Et])),s.url?(n(),a("div",Dt,[e("img",{src:s.url,class:"img-fluid object-fit-cover wpx-175 hpx-175 rounded-circle",alt:"avatar"},null,8,Vt),e("div",{class:"position-absolute bottom-0 end-0 translate-middle-y cursor-pointer bg-light shadow wpx-35 hpx-35 d-flex justify-content-center align-items-center rounded-circle",onClick:t[1]||(t[1]=o=>s.url=null)},Nt)])):r("",!0)]),Mt])]),e("div",Lt,[e("div",Bt,[e("button",{type:"button",class:p(["btn mb-3 me-2",{"btn-light-theme":s.tab!==1,"btn-theme":s.tab===1}]),onClick:t[2]||(t[2]=o=>i.setTab(1))}," Edit Profile ",2),e("button",{type:"button",class:p(["btn mb-3 me-2",{"btn-light-theme":s.tab!==2,"btn-theme":s.tab===2}]),onClick:t[3]||(t[3]=o=>i.setTab(2))}," Edit Password ",2),e("button",{type:"button",class:p(["btn mb-3",{"btn-light-theme":s.tab!==3,"btn-theme":s.tab===3}]),onClick:t[4]||(t[4]=o=>i.setTab(3))}," Edit Necessary Info ",2)]),s.tab===1?(n(),a("form",qt,[e("div",Rt,[Ot,c(e("input",{type:"text",name:"full-name",class:"form-control",required:"",autocomplete:"new-full-name","onUpdate:modelValue":t[5]||(t[5]=o=>s.profileEditParam.fullName=o)},null,512),[[w,s.profileEditParam.fullName]])]),e("div",It,[Ht,c(e("input",{type:"email",name:"email",class:"form-control",required:"",autocomplete:"new-email","onUpdate:modelValue":t[6]||(t[6]=o=>s.profileEditParam.email=o)},null,512),[[w,s.profileEditParam.email]])]),e("div",zt,[Jt,c(e("input",{type:"text",name:"contact",class:"form-control",required:"",autocomplete:"new-contact","onUpdate:modelValue":t[7]||(t[7]=o=>s.profileEditParam.contact=o)},null,512),[[w,s.profileEditParam.contact]])]),e("div",Wt,[Kt,c(e("select",{name:"country",class:"form-select",id:"country",required:"",autocomplete:"new-country","onUpdate:modelValue":t[8]||(t[8]=o=>s.profileEditParam.country=o)},Qt,512),[[x,s.profileEditParam.country]])]),e("div",Xt,[Yt,c(e("select",{name:"language",class:"form-select",id:"language",required:"",autocomplete:"new-language","onUpdate:modelValue":t[9]||(t[9]=o=>s.profileEditParam.language=o)},es,512),[[x,s.profileEditParam.language]])]),ts])):r("",!0),s.tab===2?(n(),a("form",ss,[e("div",os,[is,e("div",ns,[c(e("input",{id:"current-password",type:s.currentPasswordFieldType,name:"password",class:"form-control","onUpdate:modelValue":t[10]||(t[10]=o=>s.passwordParam.currentPassword=o),placeholder:"Enter your current password",required:"",autocomplete:"new-current-password"},null,8,as),[[C,s.passwordParam.currentPassword]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[11]||(t[11]=(...o)=>i.currentPasswordVisibility&&i.currentPasswordVisibility(...o))},[s.currentPasswordFieldType==="text"?(n(),a("i",ls)):r("",!0),s.currentPasswordFieldType==="password"?(n(),a("i",rs)):r("",!0)])])]),e("div",cs,[ds,e("div",ms,[c(e("input",{id:"password",type:s.passwordFieldType,name:"password",class:"form-control","onUpdate:modelValue":t[12]||(t[12]=o=>s.passwordParam.password=o),placeholder:"Enter your password",required:"",autocomplete:"new-password"},null,8,us),[[C,s.passwordParam.password]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[13]||(t[13]=(...o)=>i.passwordVisibility&&i.passwordVisibility(...o))},[s.passwordFieldType==="text"?(n(),a("i",ps)):r("",!0),s.passwordFieldType==="password"?(n(),a("i",bs)):r("",!0)])])]),e("div",hs,[_s,e("div",vs,[c(e("input",{id:"password-confirm",type:s.passwordConfirmationFieldType,name:"password0confirm","onUpdate:modelValue":t[14]||(t[14]=o=>s.passwordParam.passwordConfirm=o),class:"form-control",placeholder:"Enter your confirm password",required:"",autocomplete:"new-confirm-password"},null,8,fs),[[C,s.passwordParam.passwordConfirm]]),e("div",{class:"me-3 border-0 bg-transparent position-absolute top-50 end-0 translate-middle-y me-2 cursor-pointer",onClick:t[15]||(t[15]=(...o)=>i.passwordConfirmVisibility&&i.passwordConfirmVisibility(...o))},[s.passwordConfirmationFieldType==="text"?(n(),a("i",ys)):r("",!0),s.passwordConfirmationFieldType==="password"?(n(),a("i",gs)):r("",!0)])])]),ws])):r("",!0),s.tab===3?(n(),a("form",xs,[e("div",ks,[Cs,c(e("select",{name:"vehicles-type",class:"form-select",id:"vehicles-type","onUpdate:modelValue":t[16]||(t[16]=o=>s.necessaryParam.vehiclesType=o),required:"",autocomplete:"new-select-vehicles"},$s,512),[[x,s.necessaryParam.vehiclesType]])]),e("div",Ts,[Fs,c(e("select",{name:"area-location",id:"area-location",class:"form-select","onUpdate:modelValue":t[17]||(t[17]=o=>s.necessaryParam.areaLocation=o),required:"",autocomplete:"new-area-location"},Es,512),[[x,s.necessaryParam.areaLocation]])]),e("div",Ds,[Vs,c(e("input",{id:"vehicle-license",type:"text",class:"form-control","onUpdate:modelValue":t[18]||(t[18]=o=>s.necessaryParam.vehicleLicense=o),placeholder:"Enter your vehicle license",required:"",autocomplete:"new-Vehicle-license"},null,512),[[w,s.necessaryParam.vehicleLicense]])]),e("div",Ss,[Ns,s.necessaryParam.licenseUrl?r("",!0):(n(),a("label",Ms,[e("input",{id:"license-avatar",type:"file",name:"organization-avatar",class:"d-none",onChange:t[19]||(t[19]=o=>i.onFileChangeLicenseUrl(o))},null,32),Ls,m(" Upload picture ")])),s.necessaryParam.licenseUrl?(n(),a("div",Bs,[e("img",{src:s.necessaryParam.licenseUrl,class:"w-100 bg-white border hpx-175 rounded-3"},null,8,qs),e("div",Rs,[e("button",{type:"button",class:"btn bg-white d-flex justify-content-center border-0 align-items-center shadow wpx-45 hpx-45",onClick:t[20]||(t[20]=o=>s.necessaryParam.licenseUrl=null)},Is)])])):r("",!0)]),Hs])):r("",!0)])])}const Js=b(jt,[["render",zs]]),g=window.core.APP_NAME,y="/delivery",Ws=[{path:y,name:"layout",component:re,children:[{path:y+"/dashboard",name:"dashboard",component:ue,meta:{title:g+" - dashboard"}},{path:y+"/chat",name:"chat",component:xt,meta:{title:g+" - chat"}},{path:y+"/order",name:"order",component:he,meta:{title:g+" - order"}},{path:y+"/notification",name:"notification",component:Pt,meta:{title:g+" - notification"}},{path:y+"/profile",name:"profile",component:Js,meta:{title:g+" - profile"}}]}],Ks=D({history:V(),routes:Ws});window.bootstrap=S;N(q).use(Ks,M).mount("#app");
