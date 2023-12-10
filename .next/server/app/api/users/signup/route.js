"use strict";(()=>{var e={};e.id=84,e.ids=[84],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},3020:(e,r,s)=>{s.r(r),s.d(r,{headerHooks:()=>v,originalPathname:()=>h,patchFetch:()=>x,requestAsyncStorage:()=>m,routeModule:()=>g,serverHooks:()=>f,staticGenerationAsyncStorage:()=>y,staticGenerationBailout:()=>w});var o={};s.r(o),s.d(o,{POST:()=>d});var t=s(884),n=s(6132),a=s(1040),i=s(2969),u=s(9949),l=s(5798),p=s(2421),c=s.n(p);async function d(e){try{let r=await e.json(),{username:s,email:o,password:t}=r;console.log(r);let n=await u.Z.findOne({email:o});if(n)return l.Z.json({error:"User Already exist"},{status:400});let a=await c().genSalt(10),i=await c().hash(t,a),p=new u.Z({username:s,email:o,password:i}),d=await p.save();return console.log(d),l.Z.json({message:"user created successfully",success:!0,savedUser:d})}catch(e){return l.Z.json({error:e.message},{status:500})}}(0,i.$)();let g=new t.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/users/signup/route",pathname:"/api/users/signup",filename:"route",bundlePath:"app/api/users/signup/route"},resolvedPagePath:"E:\\portfolio website next js\\next js server deploy website\\custom-login-website\\my-app\\src\\app\\api\\users\\signup\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:m,staticGenerationAsyncStorage:y,serverHooks:f,headerHooks:v,staticGenerationBailout:w}=g,h="/api/users/signup/route";function x(){return(0,a.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:y})}},2969:(e,r,s)=>{s.d(r,{$:()=>n});var o=s(1185),t=s.n(o);async function n(){try{t().connect(process.env.MONGO_URI);let e=t().connection;e.on("connected",()=>{console.log("Mongodb connected successfully  ")}),e.on("error",e=>{console.log(`Mongodb is a error. pls make sure all is running ${e}`),process.exit()})}catch(e){console.log("Something is Wrong"),console.log(e)}}},9949:(e,r,s)=>{s.d(r,{Z:()=>i});var o=s(1185),t=s.n(o);let n=new(t()).Schema({username:{type:String,required:[!0,"Please provide a username"],unique:!0},email:{type:String,required:[!0,"Please provide a email"],unique:!0},password:{type:String,required:[!0,"Please provide a password"]},isVerfied:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},forgotPasswordToken:String,forgotPasswordTokenExpiry:Date,verifyToken:String,verifyTokenExpiry:Date}),a=t().models.users||t().model("users",n),i=a}};var r=require("../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),o=r.X(0,[271,107,421],()=>s(3020));module.exports=o})();