webpackJsonp([28],{ZWqA:function(t,e){},dIFQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("woOf"),a=i.n(l),n=i("M9A7"),s=i("STSY"),o=i("xT6B"),c={pageNum:1,pageSize:10,keyword:null},r={id:null,username:null,password:null,nickName:null,email:null,note:null,status:1},u={name:"adminList",data:function(){return{listQuery:a()({},c),list:null,total:null,listLoading:!1,dialogVisible:!1,admin:a()({},r),isEdit:!1,allocDialogVisible:!1,allocRoleIds:[],allRoleList:[],allocAdminId:null}},created:function(){this.getList(),this.getAllRoleList()},filters:{formatDateTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(o.a)(e,"yyyy-MM-dd hh:mm:ss")}},methods:{handleResetSearch:function(){this.listQuery=a()({},c)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleAdd:function(){this.dialogVisible=!0,this.isEdit=!1,this.admin=a()({},r)},handleStatusChange:function(t,e){var i=this;this.$confirm("是否要修改该状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.j)(e.id,{status:e.status}).then(function(t){i.$message({type:"success",message:"修改成功!"})})}).catch(function(){i.$message({type:"info",message:"取消修改"}),i.getList()})},handleDelete:function(t,e){var i=this;this.$confirm("是否要删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.c)(e.id).then(function(t){i.$message({type:"success",message:"删除成功!"}),i.getList()})})},handleUpdate:function(t,e){this.dialogVisible=!0,this.isEdit=!0,this.admin=a()({},e)},handleDialogConfirm:function(){var t=this;this.$confirm("是否要确认?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.isEdit?Object(n.i)(t.admin.id,t.admin).then(function(e){t.$message({message:"修改成功！",type:"success"}),t.dialogVisible=!1,t.getList()}):Object(n.b)(t.admin).then(function(e){t.$message({message:"添加成功！",type:"success"}),t.dialogVisible=!1,t.getList()})})},handleAllocDialogConfirm:function(){var t=this;this.$confirm("是否要确认?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=new URLSearchParams;e.append("adminId",t.allocAdminId),e.append("roleIds",t.allocRoleIds),Object(n.a)(e).then(function(e){t.$message({message:"分配成功！",type:"success"}),t.allocDialogVisible=!1})})},handleSelectRole:function(t,e){this.allocAdminId=e.id,this.allocDialogVisible=!0,this.getRoleListByAdmin(e.id)},getList:function(){var t=this;this.listLoading=!0,Object(n.d)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total})},getAllRoleList:function(){var t=this;Object(s.e)().then(function(e){t.allRoleList=e.data})},getRoleListByAdmin:function(t){var e=this;Object(n.f)(t).then(function(t){var i=t.data;if(e.allocRoleIds=[],null!=i&&i.length>0)for(var l=0;l<i.length;l++)e.allocRoleIds.push(i[l].id)})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[i("div",[i("i",{staticClass:"el-icon-search"}),t._v(" "),i("span",[t._v("筛选搜索")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),i("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),i("div",{staticStyle:{"margin-top":"15px"}},[i("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[i("el-form-item",{attrs:{label:"输入搜索："}},[i("el-input",{staticClass:"input-width",attrs:{placeholder:"帐号/姓名",clearable:""},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1)],1)],1)]),t._v(" "),i("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[i("i",{staticClass:"el-icon-tickets"}),t._v(" "),i("span",[t._v("数据列表")]),t._v(" "),i("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(e){t.handleAdd()}}},[t._v("添加")])],1),t._v(" "),i("div",{staticClass:"table-container"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"adminTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[i("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"帐号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.username))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"姓名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.nickName))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"邮箱",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.email))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"添加时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDateTime")(e.row.createTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"最后登录",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDateTime")(e.row.loginTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"是否启用",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(i){t.handleStatusChange(e.$index,e.row)}},model:{value:e.row.status,callback:function(i){t.$set(e.row,"status",i)},expression:"scope.row.status"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){t.handleSelectRole(e.$index,e.row)}}},[t._v("分配角色\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){t.handleUpdate(e.$index,e.row)}}},[t._v("\n            编辑\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(i){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),i("div",{staticClass:"pagination-container"},[i("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageSize,"page-sizes":[10,15,20],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"pageNum",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{title:t.isEdit?"编辑用户":"添加用户",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"adminForm",attrs:{model:t.admin,"label-width":"150px",size:"small"}},[i("el-form-item",{attrs:{label:"帐号："}},[i("el-input",{staticStyle:{width:"250px"},model:{value:t.admin.username,callback:function(e){t.$set(t.admin,"username",e)},expression:"admin.username"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"姓名："}},[i("el-input",{staticStyle:{width:"250px"},model:{value:t.admin.nickName,callback:function(e){t.$set(t.admin,"nickName",e)},expression:"admin.nickName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"邮箱："}},[i("el-input",{staticStyle:{width:"250px"},model:{value:t.admin.email,callback:function(e){t.$set(t.admin,"email",e)},expression:"admin.email"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"密码："}},[i("el-input",{staticStyle:{width:"250px"},attrs:{type:"password"},model:{value:t.admin.password,callback:function(e){t.$set(t.admin,"password",e)},expression:"admin.password"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注："}},[i("el-input",{staticStyle:{width:"250px"},attrs:{type:"textarea",rows:5},model:{value:t.admin.note,callback:function(e){t.$set(t.admin,"note",e)},expression:"admin.note"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"是否启用："}},[i("el-radio-group",{model:{value:t.admin.status,callback:function(e){t.$set(t.admin,"status",e)},expression:"admin.status"}},[i("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),i("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleDialogConfirm()}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"分配角色",visible:t.allocDialogVisible,width:"30%"},on:{"update:visible":function(e){t.allocDialogVisible=e}}},[i("el-select",{staticStyle:{width:"80%"},attrs:{multiple:"",placeholder:"请选择",size:"small"},model:{value:t.allocRoleIds,callback:function(e){t.allocRoleIds=e},expression:"allocRoleIds"}},t._l(t.allRoleList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.allocDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleAllocDialogConfirm()}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var m=i("VU/8")(u,d,!1,function(t){i("ZWqA")},null,null);e.default=m.exports}});
//# sourceMappingURL=28.f61b6dedffe16e0a9e86.js.map