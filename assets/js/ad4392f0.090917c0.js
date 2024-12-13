"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[9388],{8009:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"user-service/devops","title":"Devops","description":"Installation","source":"@site/docs/user-service/8_devops.md","sourceDirName":"user-service","slug":"/user-service/devops","permalink":"/docs/user-service/devops","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Manoj","lastUpdatedAt":1734087546000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Database Schema","permalink":"/docs/user-service/database-schema"},"next":{"title":"Introduction","permalink":"/docs/user-service/apis/shiksha-platform"}}');var d=r(74848),a=r(28453);const i={sidebar_position:8},t="Devops",l={},o=[{value:"1. Clone git repository",id:"1-clone-git-repository",level:4},{value:"2. Setup DB",id:"2-setup-db",level:4},{value:"3. Environment Variables",id:"3-environment-variables",level:4},{value:"4. Run the Application",id:"4-run-the-application",level:4}];function c(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"devops",children:"Devops"})}),"\n",(0,d.jsx)(n.p,{children:"Installation"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Steps to install locally for development"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"1-clone-git-repository",children:"1. Clone git repository"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/tekdi/user-microservice\ncd user-microservice\nnpm install\n"})}),"\n",(0,d.jsx)(n.h4,{id:"2-setup-db",children:"2. Setup DB"}),"\n",(0,d.jsx)(n.p,{children:"Make sure you have PostgreSQL installed and running. Create a database for the user service"}),"\n",(0,d.jsx)(n.h4,{id:"3-environment-variables",children:"3. Environment Variables"}),"\n",(0,d.jsx)(n.p,{children:"Create a .env file in the root directory of your project and add the necessary environment variables."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-dotenv",children:'#server\nPOSTGRES_HOST="add-here"\nPOSTGRES_PORT="add-here"\nPOSTGRES_USERNAME="add-here"\nPOSTGRES_PASSWORD="add-here"\nPOSTGRES_DATABASE="add-here"\nPOSTGRES_SCHEMA="add-here"\n\n#KEYCLOAK\nKEYCLOAK="add-here"\nKEYCLOAK_ADMIN="add-here"\nKEYCLOAK_ADMIN="add-here"\nKEYCLOAK_USER_TOKEN="add-here"\nKEYCLOAK_REALM_RSA_PUBLIC_KEY="add-here"\nKEYCLOAK_CLIENT_ID="add-here"\nKEYCLOAK_REALM="add-here"\nKEYCLOAK_CLIENT_SECRET="add-here"\nKEYCLOAK_USERNAME="add-here"\nKEYCLOAK_PASSWORD="add-here"\nKEYCLOAK_ADMIN_TOKEN="add-here"\n\n#Course Planner\nAUTH_TOKEN="add-here"\nINTERNAL_ACCESS_TOKEN="add-here"\n#AWS\nAWS_BUCKET_NAME = "add-here"\nAWS_ACCESS_KEY_ID = "add-here"\nAWS_SECRET_ACCESS_KEY= "add-here"\nAWS_REGION = "add-here"\n'})}),"\n",(0,d.jsx)(n.h4,{id:"4-run-the-application",children:"4. Run the Application"}),"\n",(0,d.jsx)(n.p,{children:"Before starting application make sure KEYCLOAK server should be up and running."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"npm run start:dev\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Steps to install on server (Should have a docker compose file)","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Recommended Infrastructure (should cover Dev & Prod)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}}}]);