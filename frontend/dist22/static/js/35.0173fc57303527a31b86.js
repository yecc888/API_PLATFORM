webpackJsonp([35],{BZgd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("woOf"),l=t.n(s),r=t("P9l9"),o=t("gVv3"),i=t("zL8q"),n={name:null,url:"",method:"",protocol:"",status:null,sign:null,operator:null,model:null,env:null,desc:null,headers:[{name:"",value:"",raw:""}],paramars:[{name:"",value:"",raw:""}]},c=[{value:1,label:"可用"},{value:2,label:"禁用"}],d=[{value:1,label:"不加密"},{value:2,label:"加密"}],p=[{value:"HTTP",label:"HTTP"},{value:"HTTPS",label:"HTTPS"}],u=[{value:"POST",label:"POST"},{value:"GET",label:"GET"},{value:"PUT",label:"PUT"},{value:"DELETE",label:"DELETE"}],m={name:"ApiDetail",props:{isEdit:{type:Boolean,default:!1}},components:{vueJsonEditor:o.a},data:function(){return{apiForm:l()({},n),statsuOptions:l()({},c),signOptions:l()({},d),operatorOptions:[],modelOptions:[],evnOptions:[],headertempOptions:[],methodOption:l()({},u),protocolOption:l()({},p),rules:{},activeNames:["1","2","3"],radioHeader:"1",radioParam:"1",headerRaw:"",paramarsRaw:"",statusCode:!0,changeHeadValue:"1",changeParamValue:"1",res:{},isActive:!1,sendloading:!1,selectHeaderOptions:[],seachloding:!0}},created:function(){var e=this;this.getEnv(),this.getUser(),this.getModel(),this.getHeaderTemp(),Object(r.m)(this.$route.query.id).then(function(a){e.apiForm=a,e.apiForm.operator=a.operator.id,e.apiForm.model=a.model.id,e.apiForm.env=a.env.id,e.headerRaw=a.headers[0].raw,e.paramarsRaw=a.paramars[0].raw,e.apiForm.response=""})},mounted:function(){this.selectHeaderOptions=this.getHeaderOptions()},methods:{send:function(){var e=this;if(""!=this.apiForm.url&&""!==this.apiForm.method)this.sendloading=!0,this.doHeader(),this.doParam(),Object(r.s)(this.apiForm).then(function(a){e.res=a,e.isActive=!0,200!==a.status_code?e.statusCode=!1:e.statusCode=!0,e.sendloading=!1,e.activeNames=["4"]});else if(""!=this.apiForm.url&&""!==this.apiForm.method&&""!==this.apiForm.name){this.sendloading=!0,this.doHeader(),this.doParam();var a=this.$route.query.id;this.apiForm[id]=a,console.log(this.apiForm),Object(r.s)(this.apiForm).then(function(a){e.res=a,e.isActive=!0,200!==a.status_code?e.statusCode=!1:e.statusCode=!0,e.sendloading=!1,e.activeNames=["4"]})}else this.$message({message:"请输入相关参数",type:"warning"})},onJsonChange:function(e){console.log("value:",e)},doHeader:function(){if(2==this.changeHeadValue){var e=[{name:"",value:"",raw:this.headerRaw}];this.apiForm.headers=e,console.log(this.apiForm.headers)}else 1==this.changeHeadValue&&""!==this.apiForm.headers[0].raw&&(this.apiForm.headers[0].raw="")},doParam:function(){if(2==this.changeParamValue){var e=[{name:"",value:"",raw:this.paramarsRaw}];this.apiForm.paramars=e}else 1==this.changeParamValue&&""!==this.apiForm.paramars[0].raw&&(this.apiForm.headers[0].raw="")},save:function(){var e=this;this.doHeader(),this.doParam(),this.$refs.apiForm.validate(function(a){if(!a)return!1;Object(r.b)(e.apiForm).then(function(a){"id"in a?(e.$message({message:"添加成功！",type:"success",center:!0}),e.$refs.apiForm.resetFields(),e.$router.back()):Object(i.Message)({message:a.data,type:"error",duration:3e3})})})},getHeaderOptions:function(){var e=this;this.seachloding=!0,Object(r.l)({pageNum:1,pageSize:100}).then(function(a){e.seachloding=!1;var t=a.data;e.selectHeaderOptions=[];for(var s=0;s<t.length;s++){var l=t[s];e.selectHeaderOptions.push({headerId:l.id,value:l.value})}})},searchHeaderMethod:function(e){var a=this;""!==e?(this.seachloding=!0,Object(r.l)({value:e}).then(function(e){a.seachloding=!1;var t=e.data;a.selectHeaderOptions=[];for(var s=0;s<t.length;s++){var l=t[s];a.selectHeaderOptions.push({headerId:l.id,value:l.value})}})):this.selectHeaderOptions=[]},querySearch:function(e,a){var t=this.selectHeaderOptions;a(e?t.filter(this.createFilter(e)):t)},createFilter:function(e){return function(a){return 0===a.value.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){console.log(e)},resetForm:function(e){this.$refs[e].resetFields(),this.apiForm=l()({},n)},changeHandler:function(e){console.log("改变之后的值是:"+e),this.changeHeadValue=e},addHead:function(){this.apiForm.headers.push({name:"",value:"",raw:""}),this.apiForm=l()({},n)},delHead:function(e){this.apiForm.headers.splice(e,1),0===this.apiForm.headers.length&&this.apiForm.headers.push({name:"",value:"",raw:""})},addParamas:function(){this.apiForm.paramars.push({name:"",value:"",raw:""}),console.log(this.apiForm.paramars)},delParamas:function(e){this.apiForm.paramars.splice(e,1),0===this.apiForm.paramars.length&&this.apiForm.paramars.push({name:"",value:"",raw:""})},getEnv:function(){var e=this;this.evnOptions.length?console.log("存在用户数据"):Object(r.k)({pageSize:100}).then(function(a){e.evnOptions=a.data})},getUser:function(){var e=this;this.operatorOptions.length?console.log("存在用户数据"):Object(r.r)({pageSize:100}).then(function(a){e.operatorOptions=a.data})},getModel:function(){var e=this;this.modelOptions.length?console.log("存在用户数据"):Object(r.o)({pageSize:100}).then(function(a){e.modelOptions=a.data})},getHeaderTemp:function(){var e=this;this.headertempOptions.length?console.log("存在用户数据"):Object(r.l)({pageSize:100}).then(function(a){e.headertempOptions=a.data})},handleChange:function(e){console.log(e)}}},h={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container1"},[t("el-form",{ref:"apiForm",staticStyle:{width:"100% margin:auto"},attrs:{model:e.apiForm,rules:e.rules,"label-width":"100px"}},[t("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(a){e.activeNames=a},expression:"activeNames"}},[t("div",{staticClass:"base1"},[t("el-collapse-item",{attrs:{title:"接口基本信息",name:"1"}},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"接口名称: "}},[t("el-input",{staticClass:"input-width",attrs:{size:"medium",placeholder:"请输入接口名称"},model:{value:e.apiForm.name,callback:function(a){e.$set(e.apiForm,"name",a)},expression:"apiForm.name"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"所属模块: "}},[t("el-select",{staticStyle:{width:"200px"},attrs:{clearable:"",size:"medium",placeholder:"请选择模块"},model:{value:e.apiForm.model,callback:function(a){e.$set(e.apiForm,"model",a)},expression:"apiForm.model"}},e._l(e.modelOptions,function(e,a){return t("el-option",{key:a,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"环境: "}},[t("el-select",{staticStyle:{width:"200px"},attrs:{clearable:"",size:"medium",placeholder:"请选择环境"},model:{value:e.apiForm.env,callback:function(a){e.$set(e.apiForm,"env",a)},expression:"apiForm.env"}},e._l(e.evnOptions,function(e,a){return t("el-option",{key:a,attrs:{label:e.name,value:e.id}})}))],1)],1)],1),e._v(" "),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:6}},[t("div",[t("el-form-item",{attrs:{label:"接口状态: "}},[t("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"medium",placeholder:"请选择接口状态"},model:{value:e.apiForm.status,callback:function(a){e.$set(e.apiForm,"status",a)},expression:"apiForm.status"}},e._l(e.statsuOptions,function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})}))],1)],1)]),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"是否加密: "}},[t("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"medium",placeholder:"请选择是否加密"},model:{value:e.apiForm.sign,callback:function(a){e.$set(e.apiForm,"sign",a)},expression:"apiForm.sign"}},e._l(e.signOptions,function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),t("el-col",{attrs:{span:6}},[t("el-form-item",{attrs:{label:"添加人: "}},[t("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",size:"medium",placeholder:"请选择添加人"},model:{value:e.apiForm.operator,callback:function(a){e.$set(e.apiForm,"operator",a)},expression:"apiForm.operator"}},e._l(e.operatorOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}))],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"接口详情: "}},[t("el-input",{attrs:{type:"textarea",maxlength:"300",autosize:"",placeholder:"请输入接口详情","show-word-limit":""},model:{value:e.apiForm.desc,callback:function(a){e.$set(e.apiForm,"desc",a)},expression:"apiForm.desc"}})],1)],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"base2"},[t("el-select",{staticClass:"el-select1",attrs:{filterable:"",placeholder:"协议类型"},model:{value:e.apiForm.protocol,callback:function(a){e.$set(e.apiForm,"protocol",a)},expression:"apiForm.protocol"}},e._l(e.protocolOption,function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("el-select",{staticClass:"el-select1",attrs:{filterable:"",placeholder:"请求方法"},model:{value:e.apiForm.method,callback:function(a){e.$set(e.apiForm,"method",a)},expression:"apiForm.method"}},e._l(e.methodOption,function(e,a){return t("el-option",{key:a,attrs:{label:e.label,value:e.value}})})),e._v(" "),t("el-input",{staticStyle:{width:"60%"},attrs:{placeholder:"http://",size:"large",clearable:""},model:{value:e.apiForm.url,callback:function(a){e.$set(e.apiForm,"url",a)},expression:"apiForm.url"}}),e._v(" "),t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[t("div",{attrs:{slot:"content"},slot:"content"},[e._v("提示: 接口基本信息不输，"),t("br"),e._v("可快速测试，但不会保存所有数据！")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.sendloading},on:{click:function(a){e.send()}}},[t("i",[t("svg-icon",{attrs:{"icon-class":"send"}})],1),e._v("Send\n          ")])],1),e._v(" "),t("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(a){e.save()}}},[e._v("Save")])],1),e._v(" "),t("div",{staticClass:"base3",staticStyle:{"margin-top":"10px"}},[t("el-collapse-item",{attrs:{title:"Header",name:"2"}},[t("div",{staticStyle:{"margin-left":"337px","margin-bottom":"10px"}},[t("el-row",[t("el-radio-group",{on:{change:e.changeHandler},model:{value:e.radioHeader,callback:function(a){e.radioHeader=a},expression:"radioHeader"}},[t("el-radio-button",{staticClass:"radio",attrs:{label:"1"}},[e._v("表单Form")]),e._v(" "),t("el-radio-button",{staticClass:"radio",attrs:{label:"2"}},[e._v("源数据Raw")])],1)],1)],1),e._v(" "),t("el-table",{class:"1"===e.radioHeader?"form":"raw",attrs:{data:e.apiForm.headers,"highlight-current-row":""}},[t("el-table-column",{attrs:{label:"Header名称",align:"center","min-width":"40%"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{staticStyle:{width:"200px"},attrs:{value:a.row.name,clearable:"",placeholder:"请输入内容"},model:{value:a.row.name,callback:function(t){e.$set(a.row,"name","string"==typeof t?t.trim():t)},expression:"scope.row.name"}}),e._v(" "),t("el-select",{attrs:{placeholder:"head标签",filterable:""},model:{value:a.row.name,callback:function(t){e.$set(a.row,"name",t)},expression:"scope.row.name"}},e._l(e.headertempOptions,function(e,a){return t("el-option",{key:a+"",attrs:{label:e.name,value:e.name}})}))]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"Header内容",align:"center","min-width":"40%"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{value:a.row.value,"fetch-suggestions":e.querySearch,placeholder:"请输入Header值"},on:{select:e.handleSelect},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value",t)},expression:"scope.row.value"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center","min-width":"20%"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.$index===e.apiForm.headers.length-1?t("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:e.addHead}},[e._v("Add header")]):e._e(),e._v(" "),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.delHead(a.$index)}}},[e._v("删除\n                ")])]}}])})],1),e._v(" "),[t("div",{staticStyle:{"margin-left":"68px",width:"900px"}},[t("el-input",{class:"1"===e.radioHeader?"raw":"form",attrs:{type:"textarea",rows:5,clearable:"",placeholder:"请输入Headers{}"},model:{value:e.headerRaw,callback:function(a){e.headerRaw=a},expression:"headerRaw"}})],1)]],2)],1),e._v(" "),t("div",{staticClass:"base4",staticStyle:{"margin-top":"10px"}},[t("el-collapse-item",{attrs:{title:"Parameters ",name:"3"}},[t("div",{staticStyle:{"margin-left":"337px","margin-bottom":"10px"}},[t("el-row",[t("el-radio-group",{on:{change:e.changeHandler},model:{value:e.radioParam,callback:function(a){e.radioParam=a},expression:"radioParam"}},[t("el-radio-button",{staticClass:"radio",attrs:{label:"1"}},[e._v("表单Form")]),e._v(" "),t("el-radio-button",{staticClass:"radio",attrs:{label:"2"}},[e._v("源数据Raw")])],1)],1)],1),e._v(" "),t("el-table",{class:"1"===e.radioParam?"form":"raw",attrs:{data:e.apiForm.paramars,"highlight-current-row":""}},[t("el-table-column",{attrs:{label:"参数名称",align:"center","min-width":"40%"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{staticStyle:{width:"200px"},attrs:{value:a.row.name,clearable:"",placeholder:"name"},model:{value:a.row.name,callback:function(t){e.$set(a.row,"name","string"==typeof t?t.trim():t)},expression:"scope.row.name"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"参数值",align:"center","min-width":"40%"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{type:"textarea",autosize:"",clearable:"",value:a.row.value,placeholder:"value"},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value","string"==typeof t?t.trim():t)},expression:"scope.row.value"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center","min-width":"20%"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.$index===e.apiForm.paramars.length-1?t("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:e.addParamas}},[e._v("Add parameter")]):e._e(),e._v(" "),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){e.delParamas(a.$index)}}},[e._v("删除\n                ")])]}}])})],1),e._v(" "),[t("div",{staticStyle:{"margin-left":"68px",width:"900px"}},[t("el-input",{class:"1"===e.radioParam?"raw":"form",attrs:{type:"textarea",rows:5,placeholder:"请输入参数{}"},model:{value:e.paramarsRaw,callback:function(a){e.paramarsRaw=a},expression:"paramarsRaw"}})],1)]],2)],1),e._v(" "),t("div",{staticClass:"base5",staticStyle:{"margin-top":"10px"}},[t("el-collapse-item",{attrs:{title:"RESPONES",name:"4"}},[t("div",{staticClass:"respones-header"},[t("span",[e._v("Respones")]),e._v("s\n               "),t("div",{class:[e.isActive?"form":"raw"],staticStyle:{float:"right"}},[t("span",{staticClass:"el-time"},[e._v("Elapsed time: "+e._s(e.res.time)+"ms")])])]),e._v(" "),t("div",{staticClass:"content"},[t("div",{class:[e.isActive?"raw":"form"]},[t("p",[e._v("Not available, a request has not been sent yet.")])]),e._v(" "),t("div",{class:[e.isActive?"form":"raw"]},[t("div",{class:[e.statusCode?"response-status-line response-status-ok":"response-status-line response-status-failure"]},[t("div",{staticClass:"status"},[t("a",[e._v(e._s(e.res.status_code))])])]),e._v(" "),t("div",{staticClass:"layout-for-headers-and-body"},[t("div",{staticClass:"header",staticStyle:{width:"35%"}},[t("div",{staticClass:"header-title"},[t("span",[e._v("HEADERS")])]),e._v(" "),t("vue-json-editor",{attrs:{showBtns:!1,lang:"zh"},on:{"json-change":e.onJsonChange},model:{value:e.res.response_header,callback:function(a){e.$set(e.res,"response_header",a)},expression:"res.response_header"}})],1),e._v(" "),t("div",{staticClass:"middle"}),e._v(" "),t("div",{staticClass:"body",staticStyle:{width:"65%"}},[t("div",{staticClass:"body-title"},[t("span",[e._v("BODY")])]),e._v(" "),t("div",{staticStyle:{"margin-left":"3px"}},[t("vue-json-editor",{attrs:{showBtns:!1,mode:"code",lang:"zh"},on:{"json-change":e.onJsonChange},model:{value:e.res.response_content,callback:function(a){e.$set(e.res,"response_content",a)},expression:"res.response_content"}})],1)])])])])])],1)])],1)],1)},staticRenderFns:[]};var v=t("VU/8")(m,h,!1,function(e){t("SXQY")},null,null);a.default=v.exports},SXQY:function(e,a){}});
//# sourceMappingURL=35.0173fc57303527a31b86.js.map