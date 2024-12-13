"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[2768],{57952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>m,default:()=>T,frontMatter:()=>k,metadata:()=>s,toc:()=>G});const s=JSON.parse('{"id":"user-service/apis/auth-controller-refresh-token","title":"Get Refresh Token","description":"Get Refresh Token","source":"@site/docs/user-service/apis/auth-controller-refresh-token.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/auth-controller-refresh-token","permalink":"/docs/user-service/apis/auth-controller-refresh-token","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Manoj","lastUpdatedAt":1734087546000,"frontMatter":{"id":"auth-controller-refresh-token","title":"Get Refresh Token","description":"Get Refresh Token","sidebar_label":"Get Refresh Token","hide_title":true,"hide_table_of_contents":true,"api":"eJxtU01vm0AQ/SvWnDfF7pFbmlZV1EMt2zkhKxrD2GwMLJkdnFDEf69mF6e2Uy7AMLx5H7MDuJYYxbrmsYAU7jspH1wj7KqK+Jlpz+TLjTtSAwZaZKxJiD2k2dYA02tHXr65ood0CK+WqYBUuCMDuWuEGtFP2LaVzcOc5MW7Rms+L6lGfZK+JUjB7V4oF53Dykos+QgbSDxLYPGv3Qvb5gAGCvI521bBIYXYNo7mgk92A7I1IFYqRVldSFxd6BnHCOFb1/hI5Ot8rrfrcWGS4EEtCfYp+HXLT5LZNGZ2trImKZ063jofJKOUkELSeeLktEiwkzKZSIMBT3z6sN1T3rGVfq0GRmqY5+T93a1F2Npf1IMBqzxKwoIYDDRY0xS2Y/snxBJ0aDQXJvx4x7pVlz6FcDZ/VOi9CyMnQ9elPfoSZ8sKZe+4/hTQw+rp++x++QgGVFMsLr7MIW4M5roxykatqTHomRj/z8kr8A/lQu+StBXaRjl2XOm3aHIGarJOX4ABNRrMWZ+GV2oiaQbDsENPT1yNo5ZfO+I+BnBCtrhTtdl2NGdf02yAI/WqMC7+3Ua5aHvVxTRuDsG4vViE5e/1BgzspsNUu0L/YXxTdvimq2bABZ3xWGhtgAqbQ4cH7Y2Yev0FDyNS8Q==","sidebar_class_name":"post api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Logout","permalink":"/docs/user-service/apis/auth-controller-logout"},"next":{"title":"Create Cohort Academic Year","permalink":"/docs/user-service/apis/cohort-academic-year-controller-create-cohort-academic-year"}}');var o=r(74848),a=r(28453),i=r(57742),n=r.n(i),l=r(78178),c=r.n(l),d=r(19624),p=r.n(d),h=r(96226),u=r.n(h),f=(r(77675),r(19365),r(51107));const k={id:"auth-controller-refresh-token",title:"Get Refresh Token",description:"Get Refresh Token",sidebar_label:"Get Refresh Token",hide_title:!0,hide_table_of_contents:!0,api:"eJxtU01vm0AQ/SvWnDfF7pFbmlZV1EMt2zkhKxrD2GwMLJkdnFDEf69mF6e2Uy7AMLx5H7MDuJYYxbrmsYAU7jspH1wj7KqK+Jlpz+TLjTtSAwZaZKxJiD2k2dYA02tHXr65ood0CK+WqYBUuCMDuWuEGtFP2LaVzcOc5MW7Rms+L6lGfZK+JUjB7V4oF53Dykos+QgbSDxLYPGv3Qvb5gAGCvI521bBIYXYNo7mgk92A7I1IFYqRVldSFxd6BnHCOFb1/hI5Ot8rrfrcWGS4EEtCfYp+HXLT5LZNGZ2trImKZ063jofJKOUkELSeeLktEiwkzKZSIMBT3z6sN1T3rGVfq0GRmqY5+T93a1F2Npf1IMBqzxKwoIYDDRY0xS2Y/snxBJ0aDQXJvx4x7pVlz6FcDZ/VOi9CyMnQ9elPfoSZ8sKZe+4/hTQw+rp++x++QgGVFMsLr7MIW4M5roxykatqTHomRj/z8kr8A/lQu+StBXaRjl2XOm3aHIGarJOX4ABNRrMWZ+GV2oiaQbDsENPT1yNo5ZfO+I+BnBCtrhTtdl2NGdf02yAI/WqMC7+3Ua5aHvVxTRuDsG4vViE5e/1BgzspsNUu0L/YXxTdvimq2bABZ3xWGhtgAqbQ4cH7Y2Yev0FDyNS8Q==",sidebar_class_name:"post api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},m=void 0,x={},G=[];function v(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get Refresh Token"}),"\n",(0,o.jsx)(n(),{method:"post",path:"/user/v1/auth/refresh",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"Get Refresh Token"}),"\n",(0,o.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(c(),{parameters:[]}),"\n",(0,o.jsx)(p(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{refresh_token:{type:"string",description:"token"}},required:["refresh_token"],title:"RefreshTokenRequestBody"}}}}}),"\n",(0,o.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:""}}})]})}function T(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}}}]);