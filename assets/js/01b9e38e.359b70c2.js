"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[2836],{32144:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>S,contentTitle:()=>m,default:()=>B,frontMatter:()=>b,metadata:()=>i,toc:()=>F});const i=JSON.parse('{"id":"user-service/apis/fields-controller-search-fields","title":"Search Field","description":"Search Field","source":"@site/docs/user-service/apis/fields-controller-search-fields.api.mdx","sourceDirName":"user-service/apis","slug":"/user-service/apis/fields-controller-search-fields","permalink":"/docs/user-service/apis/fields-controller-search-fields","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","lastUpdatedBy":"Manoj","lastUpdatedAt":1734087546000,"frontMatter":{"id":"fields-controller-search-fields","title":"Search Field","description":"Search Field","sidebar_label":"Search Field","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVMtu2zAQ/BVjz0xstz3pliYNELRAgjg5GUaxltYRY4pUSMqNK/DfiyVlWY7VohfB3hdnZ4ZswdRk0Uuj7wrI4FaSKty10d4apcj+dIQ2L1MYBNRosSJP1kG2bEFjRZCBJ43aywIESA0ZlIQFWRDg8pIqhKwFv6+50nkr9QuEsBJg6a0h57+aYs8V/FdaKiDztiEBudGetOcU1rWSeUQ5fXVGc+xstFm/Uu4Zo+WdvCTHWSUr6QdluqnWEVtBLrey5qGQwY9YFgSYzcbRfzR04SBgI1UipP1QctslBKBS95vI2L/Bxp3f/QhhfAypgkUaySUdRhJJmdEuzkqvqFc9wb3xBsKKs0dBlgdWVh97FtEesSekHlcb7dI2n2bzMVK4b6Kk85eM8Mvs80iRsWtZFKQTTHxhu3WtDMJR3ljp95FSzHNy7sKbLWnIliv21um4hHIS+0FARb407PbauKgB+hIymDaO7HQ3n0am3TRZn11MdpccPzh6wf5Le54C6InGWn6n/dmd6O7MVeNLY+Xv6Oq4Jjv78Xgnvr1jVSsaeHh2dOfsxHa9bQ7iDtxyDHUH9/+P3hh6QuqNiUt0Oi9KuXUlTh4U+o2x1dlFuH58vplcPdyBAGYpBeeXM0hXGHO2M09mtiuMDHVQPuhyMrenkTeb1gqlZrs0VnEuSbYElowPnh9WdlGvKNxKQMkCZ0to2zU6erYqBA6/NWT3Sc4dWolr3nS5CuKgEtuqkI4TBWQbVI7O4PXvEzCXY1i3tD99HHeoGi6DINoue52mXDzxgGPF2YvHpu59+3C/eAIB6+7lrEzBPRZ/gYjfCMlEpNEfMdaCQv3S4AvXppmsCjbM5NC022ja7sfgzUK9HyA89e9hWf7ycqMtbZuuRAh9fUr9taO/NKmaaV2FEP4AW4pIRw==","sidebar_class_name":"post api-method","info_path":"docs/user-service/apis/shiksha-platform","custom_edit_url":null},"sidebar":"tutorialSidebar","previous":{"title":"Search Field Values","permalink":"/docs/user-service/apis/fields-controller-search-field-values"},"next":{"title":"Update Field","permalink":"/docs/user-service/apis/fields-controller-update-fields"}}');var r=t(74848),d=t(28453),l=t(57742),a=t.n(l),n=t(78178),c=t.n(n),o=t(19624),p=t.n(o),h=t(96226),u=t.n(h),f=(t(77675),t(19365),t(51107));const b={id:"fields-controller-search-fields",title:"Search Field",description:"Search Field",sidebar_label:"Search Field",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMtu2zAQ/BVjz0xstz3pliYNELRAgjg5GUaxltYRY4pUSMqNK/DfiyVlWY7VohfB3hdnZ4ZswdRk0Uuj7wrI4FaSKty10d4apcj+dIQ2L1MYBNRosSJP1kG2bEFjRZCBJ43aywIESA0ZlIQFWRDg8pIqhKwFv6+50nkr9QuEsBJg6a0h57+aYs8V/FdaKiDztiEBudGetOcU1rWSeUQ5fXVGc+xstFm/Uu4Zo+WdvCTHWSUr6QdluqnWEVtBLrey5qGQwY9YFgSYzcbRfzR04SBgI1UipP1QctslBKBS95vI2L/Bxp3f/QhhfAypgkUaySUdRhJJmdEuzkqvqFc9wb3xBsKKs0dBlgdWVh97FtEesSekHlcb7dI2n2bzMVK4b6Kk85eM8Mvs80iRsWtZFKQTTHxhu3WtDMJR3ljp95FSzHNy7sKbLWnIliv21um4hHIS+0FARb407PbauKgB+hIymDaO7HQ3n0am3TRZn11MdpccPzh6wf5Le54C6InGWn6n/dmd6O7MVeNLY+Xv6Oq4Jjv78Xgnvr1jVSsaeHh2dOfsxHa9bQ7iDtxyDHUH9/+P3hh6QuqNiUt0Oi9KuXUlTh4U+o2x1dlFuH58vplcPdyBAGYpBeeXM0hXGHO2M09mtiuMDHVQPuhyMrenkTeb1gqlZrs0VnEuSbYElowPnh9WdlGvKNxKQMkCZ0to2zU6erYqBA6/NWT3Sc4dWolr3nS5CuKgEtuqkI4TBWQbVI7O4PXvEzCXY1i3tD99HHeoGi6DINoue52mXDzxgGPF2YvHpu59+3C/eAIB6+7lrEzBPRZ/gYjfCMlEpNEfMdaCQv3S4AvXppmsCjbM5NC022ja7sfgzUK9HyA89e9hWf7ycqMtbZuuRAh9fUr9taO/NKmaaV2FEP4AW4pIRw==",sidebar_class_name:"post api-method",info_path:"docs/user-service/apis/shiksha-platform",custom_edit_url:null},m=void 0,S={},F=[];function v(e){const s={p:"p",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Search Field"}),"\n",(0,r.jsx)(a(),{method:"post",path:"/user/v1/fields/search",context:"endpoint"}),"\n",(0,r.jsx)(s.p,{children:"Search Field"}),"\n",(0,r.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"tenantid",in:"header",schema:{type:"string"}}]}),"\n",(0,r.jsx)(p(),{title:"Body",body:{required:!0,content:{"application/json":{schema:{type:"object",properties:{limit:{type:"number",description:"Limit"},offset:{type:"number",description:"number"},filters:{description:"Filters",allOf:[{type:"object",properties:{context:{type:"string"},fieldId:{type:"string"},name:{type:"string"},tenantId:{type:"string"}},title:"FieldsFilterDto"}]}},required:["offset"],title:"FieldsSearchDto"}}}}}),"\n",(0,r.jsx)(u(),{id:void 0,label:void 0,responses:{201:{description:"Fields list."},403:{description:"Forbidden"}}})]})}function B(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}}}]);