"use strict";(()=>{var e={};e.id=847,e.ids=[847],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},2781:e=>{e.exports=require("stream")},3837:e=>{e.exports=require("util")},9181:(e,r,o)=>{o.r(r),o.d(r,{headerHooks:()=>f,originalPathname:()=>h,patchFetch:()=>w,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>y,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>x});var t={};o.r(t),o.d(t,{GET:()=>c});var s=o(884),n=o(6132),a=o(1040),i=o(6721),u=o.n(i);let p=e=>{try{let r=e.cookies.get("token")?.value||"",o=u().verify(r,process.env.TOKEN_SECRET);return o.id}catch(e){throw Error(e.message)}};var l=o(9949),d=o(5798);async function c(e){try{let r=await p(e),o=await l.Z.findOne({_id:r}).select("-password");return d.Z.json({message:"user found",data:o})}catch(e){return d.Z.json({error:e.message},{status:500})}}(0,o(2969).$)();let m=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/users/me/route",pathname:"/api/users/me",filename:"route",bundlePath:"app/api/users/me/route"},resolvedPagePath:"E:\\portfolio website next js\\next js server deploy website\\custom-login-website\\my-app\\src\\app\\api\\users\\me\\route.ts",nextConfigOutput:"",userland:t}),{requestAsyncStorage:g,staticGenerationAsyncStorage:v,serverHooks:y,headerHooks:f,staticGenerationBailout:x}=m,h="/api/users/me/route";function w(){return(0,a.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:v})}},2969:(e,r,o)=>{o.d(r,{$:()=>n});var t=o(1185),s=o.n(t);async function n(){try{s().connect(process.env.MONGO_URI);let e=s().connection;e.on("connected",()=>{console.log("Mongodb connected successfully  ")}),e.on("error",e=>{console.log(`Mongodb is a error. pls make sure all is running ${e}`),process.exit()})}catch(e){console.log("Something is Wrong"),console.log(e)}}},9949:(e,r,o)=>{o.d(r,{Z:()=>i});var t=o(1185),s=o.n(t);let n=new(s()).Schema({username:{type:String,required:[!0,"Please provide a username"],unique:!0},email:{type:String,required:[!0,"Please provide a email"],unique:!0},password:{type:String,required:[!0,"Please provide a password"]},isVerfied:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},forgotPasswordToken:String,forgotPasswordTokenExpiry:Date,verifyToken:String,verifyTokenExpiry:Date}),a=s().models.users||s().model("users",n),i=a}};var r=require("../../../../webpack-runtime.js");r.C(e);var o=e=>r(r.s=e),t=r.X(0,[271,107,721],()=>o(9181));module.exports=t})();