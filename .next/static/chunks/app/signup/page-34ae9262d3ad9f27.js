(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{1850:function(e,s,l){Promise.resolve().then(l.bind(l,4538))},4538:function(e,s,l){"use strict";l.r(s);var a=l(7437),t=l(2265),r=l(1396),n=l.n(r),i=l(4033),c=l(5925),o=l(2173);s.default=()=>{let e=(0,i.useRouter)(),[s,l]=(0,t.useState)({username:"",email:"",password:""}),[r,m]=(0,t.useState)(!1),[d,u]=(0,t.useState)(!1),h=async()=>{try{u(!0);let l=await o.Z.post("/api/users/signup",s);console.log("successfully data created ".concat(l.data)),c.default.success("user created successfully"),e.push("/login")}catch(e){c.default.error("username and email must be uinque"),console.log("here is error "+e.message)}finally{u(!1)}};return(0,t.useEffect)(()=>{s.username.length>0&&s.email.length>0&&s.password.length>0?m(!1):m(!0)},[s]),(0,a.jsx)("section",{id:"register",className:"vh-100 gradient-custom",children:(0,a.jsx)("div",{className:"container py-5 h-100",children:(0,a.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:(0,a.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:(0,a.jsx)("div",{className:"card bg-dark text-white",style:{borderRadius:"1rem"},children:(0,a.jsxs)("div",{className:"card-body p-5 text-center",children:[(0,a.jsxs)("div",{className:"mb-md-5 mt-md-4 ",children:[(0,a.jsx)("h2",{className:"fw-bold mb-2 text-uppercase",children:d?"Processing":"Signup"}),(0,a.jsx)("p",{className:"text-white-50 mb-5",children:"Please fill up this all field"}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[(0,a.jsx)("input",{type:"text",id:"username",className:"form-control form-control-lg",value:s.username,onChange:e=>l({...s,username:e.target.value})}),(0,a.jsx)("label",{className:"form-label",htmlFor:"typeEmailX",children:"Name"})]}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[(0,a.jsx)("input",{type:"email",id:"email",className:"form-control form-control-lg",value:s.email,onChange:e=>l({...s,email:e.target.value})}),(0,a.jsx)("label",{className:"form-label",htmlFor:"typePasswordX",children:"Email"})]}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[(0,a.jsx)("input",{type:"password",id:"password",className:"form-control form-control-lg",value:s.password,onChange:e=>l({...s,password:e.target.value})}),(0,a.jsx)("label",{className:"form-label",htmlFor:"typePasswordX",children:"Password"})]}),(0,a.jsx)("button",{className:"btn btn-outline-light btn-lg px-5",type:"submit",onClick:h,children:r?"No Signup":"Signup"})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:"mb-0",children:["Do have an account?"," ",(0,a.jsx)(n(),{href:"/login",className:"text-white-50 fw-bold",children:"Login"})]})})]})})})})})})}}},function(e){e.O(0,[413,564,971,472,744],function(){return e(e.s=1850)}),_N_E=e.O()}]);