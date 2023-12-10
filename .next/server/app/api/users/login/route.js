"use strict";(()=>{var e={};e.id=373,e.ids=[373],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},2781:e=>{e.exports=require("stream")},3837:e=>{e.exports=require("util")},3648:(e,r,o)=>{o.r(r),o.d(r,{headerHooks:()=>w,originalPathname:()=>q,patchFetch:()=>P,requestAsyncStorage:()=>y,routeModule:()=>f,serverHooks:()=>x,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>h});var s={};o.r(s),o.d(s,{POST:()=>m});var t=o(884),n=o(6132),i=o(1040),a=o(2969),u=o(9949),l=o(5798),p=o(2421),c=o.n(p),d=o(6721),g=o.n(d);async function m(e){try{let r=await e.json(),{email:o,password:s}=r;console.log(r);let t=await u.Z.findOne({email:o});if(!t)return l.Z.json({error:"User does not exist"},{status:400});console.log("user exists");let n=await c().compare(s,t.password);if(!n)return l.Z.json({error:"Invalid password"},{status:400});console.log(t);let i={id:t._id,username:t.username,email:t.email},a=await g().sign(i,process.env.TOKEN_SECRET,{expiresIn:"1d"}),p=l.Z.json({message:"Login successful",success:!0});return p.cookies.set("token",a,{httpOnly:!0}),p}catch(e){return l.Z.json({error:e.message},{status:500})}}(0,a.$)();let f=new t.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/users/login/route",pathname:"/api/users/login",filename:"route",bundlePath:"app/api/users/login/route"},resolvedPagePath:"E:\\portfolio website next js\\next js server deploy website\\custom-login-website\\my-app\\src\\app\\api\\users\\login\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:y,staticGenerationAsyncStorage:v,serverHooks:x,headerHooks:w,staticGenerationBailout:h}=f,q="/api/users/login/route";function P(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:v})}},2969:(e,r,o)=>{o.d(r,{$:()=>n});var s=o(1185),t=o.n(s);async function n(){try{t().connect(process.env.MONGO_URI);let e=t().connection;e.on("connected",()=>{console.log("Mongodb connected successfully  ")}),e.on("error",e=>{console.log(`Mongodb is a error. pls make sure all is running ${e}`),process.exit()})}catch(e){console.log("Something is Wrong"),console.log(e)}}},9949:(e,r,o)=>{o.d(r,{Z:()=>a});var s=o(1185),t=o.n(s);let n=new(t()).Schema({username:{type:String,required:[!0,"Please provide a username"],unique:!0},email:{type:String,required:[!0,"Please provide a email"],unique:!0},password:{type:String,required:[!0,"Please provide a password"]},isVerfied:{type:Boolean,default:!1},isAdmin:{type:Boolean,default:!1},forgotPasswordToken:String,forgotPasswordTokenExpiry:Date,verifyToken:String,verifyTokenExpiry:Date}),i=t().models.users||t().model("users",n),a=i}};var r=require("../../../../webpack-runtime.js");r.C(e);var o=e=>r(r.s=e),s=r.X(0,[271,107,721,421],()=>o(3648));module.exports=s})();