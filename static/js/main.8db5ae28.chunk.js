(this["webpackJsonptable-sample"]=this["webpackJsonptable-sample"]||[]).push([[0],{178:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(28),l=a.n(c),i=(a(177),a(14)),o=a(71),r=a(72),d=a(83),j=a(80),h=a(87),b=a(46),x=a(261),p=a(69),O=(a(178),a(272)),g=a(277),u=a(275),m=a(278),f=a(279),y=a(280),C=a(24),k=a(269),w=a(270),S=a(267),v=a(271),M=a(32),U=a(263),z=a(262),I=a(127),T=a(273),V=a(103),R=a.n(V),F=a(6),L=[{key:"1",logo:Object(F.jsx)(k.a,{size:"large",src:"https://karboom.io/storage/employers/logo_thumb/Ob9MbyafIafUYtQYa0ypHAwIzURnH1zZ9er7k3PH.png"}),name:"John Brown",age:32,address:"New York No. 1 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"error",children:Object(F.jsx)("strong",{children:"\u0628\u062f\u0648\u0646 \u0636\u0628\u0637"})})},{key:"2",logo:Object(F.jsx)(k.a,{size:"large",icon:Object(F.jsx)(O.a,{})}),name:"Jim Green",age:42,address:"London No. 2 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})},{key:"3",logo:Object(F.jsx)(k.a,{size:"large",src:"https://media-exp1.licdn.com/dms/image/C4D0BAQEOo13_hCFylA/company-logo_200_200/0/1548337352822?e=2159024400&v=beta&t=7AholjoKLToFr1xxjkLamtU0gaaDjXUg3uraQKATrJk"}),name:"Joe Black",age:32,address:"London No. 3 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})},{key:"4",logo:Object(F.jsx)(k.a,{size:"large",icon:Object(F.jsx)(O.a,{})}),name:"Jim Red",age:32,address:"London No. 4 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})},{key:"5",logo:Object(F.jsx)(k.a,{size:"large",icon:Object(F.jsx)(O.a,{})}),name:"Jim Red",age:32,address:"London No. 5 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})},{key:"6",logo:Object(F.jsx)(k.a,{size:"large",icon:Object(F.jsx)(O.a,{})}),name:"Jim Red",age:32,address:"London No. 6 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})},{key:"7",logo:Object(F.jsx)(k.a,{size:"large",icon:Object(F.jsx)(O.a,{})}),name:"Jim Red",age:32,address:"London No. 1 Lake Park",tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})}],D=(n.a.Component,a(140)),N=a(163),P=a(166),Y=a(268),J=a(265),A=a(266),H=a(264),_=a(169),B=a(276),E=a(158),K=a.n(E),q=a(136),Q=a.n(q),G=a(159),W=a.n(G),X=a(119),Z=a(274),$=a(170),ee=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(h.a,{children:[Object(F.jsx)(M.a,{style:{backgroundColor:"#10239e"},shape:"circle",icon:Object(F.jsx)(X.a,{style:{color:"white"}})}),Object(F.jsx)(M.a,{style:{backgroundColor:"#fa8c16",marginRight:"5px"},onClick:function(){return e.showUpdateModal(e.id,e.timestamp)},shape:"circle",icon:Object(F.jsx)(Z.a,{style:{color:"white"}})}),Object(F.jsx)(M.a,{danger:!0,style:{marginRight:"5px"},shape:"circle",icon:Object(F.jsx)($.a,{})}),Object(F.jsx)(M.a,{shape:"round",style:{marginRight:"8px"},children:"\u0627\u062a\u0627\u0642 \u0647\u0627"}),Object(F.jsx)(M.a,{shape:"round",style:{marginRight:"8px",color:"blue",borderColor:"blue"},children:"\u062c\u0644\u0633\u0627\u062a"})]})})},te=a(152).convertCSVToArray,ae=(a(152),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).cleanDate=function(e){return K.a.convertEnToPe(W()(Q()(e).format("HH:mm:ss YYYY-MM-DD")).format("HH:mm:ss jYYYY-jM-jD"))},e.state={tempFileForUpdate:{},file:null,address:"",logo:"",online:0,filteredInfo:"",sortedInfo:"",searchText:"",searchedColumn:"",isCreateModalVisible:!1,isUploadModalVisible:!1,isUpdateModalVisible:!1,data:[]},e.createModal=function(t){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isCreateModalVisible:!1,data:[].concat(Object(D.a)(e.state.data),[{tempData:Object(C.a)({},t),id:e.state.data.length+1,key:e.state.data.length+1,logo:Object(F.jsx)(k.a,{size:"large",src:t.logo}),address:t.address,created_at:e.cleanDate((new Date).getTime()),timestamp:(new Date).getTime(),actions:Object(F.jsx)(ee,{id:e.state.data.length+1,timestamp:(new Date).getTime(),showUpdateModal:e.showUpdateModal}),online:Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{children:t.online}),Object(F.jsx)(N.a,{percent:t.online,status:"active"})]}),tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})}])}))},e.showUpdateModal=function(t,a){var s=e.state.data.filter((function(e,a){if(e.id===t)return e}));e.setState(Object(C.a)(Object(C.a)({},e.state),{},{tempFileForUpdate:Object(C.a)(Object(C.a)({},s[0].tempData),{},{id:t,timestamp:a}),isUpdateModalVisible:!0}))},e.updateModal=function(t){var a=e.state.tempFileForUpdate,s=a.id,n=a.timestamp;e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isUpdateModalVisible:!1,data:[].concat(Object(D.a)(e.state.data.filter((function(e){if(e.id!==s)return e}))),[{tempData:Object(C.a)({},t),id:s,key:s,logo:Object(F.jsx)(k.a,{size:"large",src:t.logo}),address:t.address,created_at:e.cleanDate(n),timestamp:n,actions:Object(F.jsx)(ee,{id:s,timestamp:n,showUpdateModal:e.showUpdateModal}),online:Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{children:t.online}),Object(F.jsx)(N.a,{percent:t.online,status:"active"})]}),tag:Object(F.jsx)(w.a,{style:{fontSize:"12px"},color:"processing",children:Object(F.jsx)("strong",{children:"\u0636\u0628\u0637 \u0641\u0648\u0631\u06cc"})})}])}))},e.showCreateModal=function(){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isCreateModalVisible:!0}))},e.showUploadModal=function(){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isUploadModalVisible:!0}))},e.handleCreateOk=function(){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isCreateModalVisible:!1}))},e.handleCreateCancel=function(){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isCreateModalVisible:!1}))},e.handleUploadCancel=function(){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isUploadModalVisible:!1}))},e.handleUpdateCancel=function(){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isUpdateModalVisible:!1}))},e.getColumnSearchProps=function(t){return{filterDropdown:function(a){var s=a.setSelectedKeys,n=a.selectedKeys,c=a.confirm,l=a.clearFilters;return Object(F.jsxs)("div",{style:{padding:8},children:[Object(F.jsx)(S.a,{ref:function(t){e.searchInput=t},placeholder:"Search ".concat(t),value:n[0],onChange:function(e){return s(e.target.value?[e.target.value]:[])},onPressEnter:function(){return e.handleSearch(n,c,t)},style:{marginBottom:8,display:"block"}}),Object(F.jsxs)(v.b,{children:[Object(F.jsx)(M.a,{type:"primary",onClick:function(){return e.handleSearch(n,c,t)},icon:Object(F.jsx)(I.a,{}),size:"small",style:{width:90,paddingBottom:"10px",paddingTop:"0px",paddingRight:"3px"},children:Object(F.jsx)("p",{style:{display:"inline"},children:"\u062c\u0633\u062a \u0648 \u062c\u0648"})}),Object(F.jsx)(M.a,{onClick:function(){return e.handleReset(l)},size:"small",style:{width:90},children:"\u0631\u06cc\u0633\u062a"}),Object(F.jsx)(M.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),e.setState({searchText:n[0],searchedColumn:t})},children:"\u0641\u06cc\u0644\u062a\u0631"})]})]})},filterIcon:function(e){return Object(F.jsx)(I.a,{style:{fontSize:"18px",color:e?"#1890ff":void 0}})},onFilter:function(e,a){return a[t]?a[t].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(t){t&&setTimeout((function(){return e.searchInput.select()}),100)},render:function(a){return e.state.searchedColumn===t?Object(F.jsx)(R.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[e.state.searchText],autoEscape:!0,textToHighlight:a?a.toString():""}):a}}},e.handleSearch=function(t,a,s){a(),e.setState({searchText:t[0],searchedColumn:s})},e.createByCSV=function(){var t=te(e.state.file,{separator:","});if(t[0].includes("logo")&&t[0].includes("address")&&t[0].includes("logo"))for(var a=1;a<t.length;a++)e.createModal(t[a]);else P.b.error("\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0627\u06cc\u0644 csv \u0634\u0645\u0627 \u0628\u0627 \u0627\u0644\u06af\u0648 \u0645\u0637\u0627\u0628\u0642\u062a \u0646\u062f\u0627\u0631\u062f");e.setState(Object(C.a)(Object(C.a)({},e.state),{},{isUploadModalVisible:!1}))},e.handleReset=function(t){t(),e.setState({searchText:""})},e.handleChange=function(t,a,s){console.log("Various parameters",t,a,s),e.setState({filteredInfo:a,sortedInfo:s})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state.sortedInfo;t=t||{};var a=[{title:"\u0644\u0648\u06af\u0648",dataIndex:"logo",key:"logo",width:"80px",ellipsis:!0},Object(C.a)({title:"\u0622\u062f\u0631\u0633",dataIndex:"address",key:"address",width:"160px"},this.getColumnSearchProps("address")),{title:"\u062a\u06af \u0647\u0627",dataIndex:"tag",width:"100px",key:"tag",ellipsis:!0},{title:"\u0622\u0646\u0644\u0627\u06cc\u0646",dataIndex:"online",key:"online",width:"170px"},{title:"\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u062c\u0627\u062f",dataIndex:"created_at",key:"created_at",width:"150px",sorter:function(e,t){return t.timestamp-e.timestamp},sortOrder:"created_at"===t.columnKey&&t.order},{title:"\u0639\u0645\u0644\u06cc\u0627\u062a",dataIndex:"actions",key:"actions",width:"250px"}];return Object(F.jsxs)(U.a,{style:{borderRadius:"10px",overflow:"auto"},children:[Object(F.jsx)("div",{className:"table-header",children:Object(F.jsxs)(h.a,{justify:"space-between",children:[Object(F.jsxs)(b.a,{children:[Object(F.jsx)("span",{children:Object(F.jsx)(T.a,{style:{fontSize:"16px"}})}),Object(F.jsx)("span",{style:{marginRight:"8px",fontSize:"16px"},children:Object(F.jsx)("strong",{children:"\u0627\u0634\u062a\u0631\u0627\u06a9"})})]}),Object(F.jsxs)(b.a,{children:[Object(F.jsx)(M.a,{shape:"round",icon:Object(F.jsx)(_.a,{}),style:{marginRight:"8px",color:"white",backgroundColor:"#389e0d"},onClick:this.showCreateModal,children:"\u0627\u06cc\u062c\u0627\u062f"}),Object(F.jsx)(Y.a,{destroyOnClose:!0,title:"\u0633\u0627\u062e\u062a \u0622\u06cc\u062a\u0645 \u062c\u062f\u06cc\u062f",visible:this.state.isCreateModalVisible,onCancel:this.handleCreateCancel,footer:null,children:Object(F.jsxs)(J.a,{initialValues:{online:0},onFinish:this.createModal,children:[Object(F.jsx)("label",{children:Object(F.jsx)("strong",{children:"url \u0628\u0631\u0627\u06cc \u0644\u0648\u06af\u0648:"})}),Object(F.jsx)(J.a.Item,{name:"logo",children:Object(F.jsx)(S.a,{style:{marginTop:"5px"},placeholder:"\u0622\u062f\u0631\u0633 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc \u0644\u0648\u06af\u0648 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)"})}),Object(F.jsx)("label",{children:Object(F.jsx)("strong",{children:"\u0622\u062f\u0631\u0633:"})}),Object(F.jsx)(J.a.Item,{name:"address",rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0622\u062f\u0631\u0633 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}],children:Object(F.jsx)(S.a,{style:{marginTop:"5px"},placeholder:"\u0622\u062f\u0631\u0633"})}),Object(F.jsx)("label",{children:Object(F.jsx)("strong",{children:"\u062a\u0639\u062f\u0627\u062f \u0622\u0646\u0644\u0627\u06cc\u0646: (\u067e\u06cc\u0634 \u0641\u0631\u0636 \u0635\u0641\u0631)"})}),Object(F.jsx)(J.a.Item,{name:"online",rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0645\u0642\u062f\u0627\u0631 \u0639\u062f\u062f\u06cc \u0622\u0646\u0644\u0627\u06cc\u0646 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}],children:Object(F.jsx)(A.a,{style:{marginTop:"5px"}})}),Object(F.jsxs)(J.a.Item,{children:[Object(F.jsx)(M.a,{style:{marginLeft:"8px"},onClick:this.handleCreateCancel,children:"\u0627\u0646\u0635\u0631\u0627\u0641"}),Object(F.jsx)(M.a,{type:"primary",htmlType:"submit",children:"\u062b\u0628\u062a"})]})]})}),Object(F.jsx)(M.a,{onClick:this.showUploadModal,shape:"round",icon:Object(F.jsx)(u.a,{style:{fontSize:"16px"}}),style:{marginRight:"8px",color:"white",backgroundColor:"#1890ff"},children:"\u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0646"}),Object(F.jsx)(Y.a,{destroyOnClose:!0,title:"\u0627\u06cc\u062c\u0627\u062f \u0622\u06cc\u062a\u0645 \u0628\u0627 \u0622\u067e\u0644\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a",visible:this.state.isUploadModalVisible,onCancel:this.handleUploadCancel,footer:[null],children:Object(F.jsx)(H.a,{accept:".csv,.txt",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:function(t){var a=new FileReader;return a.readAsText(t),a.onloadend=function(t){e.setState(Object(C.a)(Object(C.a)({},e.state),{},{file:t.target.result})),e.createByCSV()},!1},children:Object(F.jsxs)(M.a,{children:[Object(F.jsx)(B.a,{type:"upload",style:{fontSize:"16px"}}),"\u0641\u0627\u06cc\u0644 csv \u062e\u0648\u062f \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0622\u067e\u0644\u0648\u062f \u06a9\u0646\u06cc\u062f"]})})}),Object(F.jsx)(Y.a,{destroyOnClose:!0,title:"\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0622\u06cc\u062a\u0645",visible:this.state.isUpdateModalVisible,onCancel:this.handleUpdateCancel,footer:null,children:Object(F.jsxs)(J.a,{initialValues:{logo:this.state.tempFileForUpdate.logo,address:this.state.tempFileForUpdate.address,online:this.state.tempFileForUpdate.online},onFinish:this.updateModal,children:[Object(F.jsx)("label",{children:Object(F.jsx)("strong",{children:"url \u0628\u0631\u0627\u06cc \u0644\u0648\u06af\u0648:"})}),Object(F.jsx)(J.a.Item,{name:"logo",children:Object(F.jsx)(S.a,{style:{marginTop:"5px"},placeholder:"\u0622\u062f\u0631\u0633 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc \u0644\u0648\u06af\u0648 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)"})}),Object(F.jsx)("label",{children:Object(F.jsx)("strong",{children:"\u0622\u062f\u0631\u0633:"})}),Object(F.jsx)(J.a.Item,{name:"address",rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0622\u062f\u0631\u0633 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}],children:Object(F.jsx)(S.a,{style:{marginTop:"5px"},placeholder:"\u0622\u062f\u0631\u0633"})}),Object(F.jsx)("label",{children:Object(F.jsx)("strong",{children:"\u062a\u0639\u062f\u0627\u062f \u0622\u0646\u0644\u0627\u06cc\u0646: (\u067e\u06cc\u0634 \u0641\u0631\u0636 \u0635\u0641\u0631)"})}),Object(F.jsx)(J.a.Item,{name:"online",rules:[{required:!0,message:"\u0644\u0637\u0641\u0627 \u0645\u0642\u062f\u0627\u0631 \u0639\u062f\u062f\u06cc \u0622\u0646\u0644\u0627\u06cc\u0646 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}],children:Object(F.jsx)(A.a,{style:{marginTop:"5px"}})}),Object(F.jsxs)(J.a.Item,{children:[Object(F.jsx)(M.a,{style:{marginLeft:"8px"},onClick:this.handleUpdateCancel,children:"\u0627\u0646\u0635\u0631\u0627\u0641"}),Object(F.jsx)(M.a,{type:"primary",htmlType:"submit",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634"})]})]})})]})]})}),Object(F.jsx)(z.a,{columns:a,dataSource:this.state.data,bordered:!0,onChange:this.handleChange})]})}}]),a}(n.a.Component)),se=x.a.Header,ne=x.a.Sider,ce=x.a.Content,le=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={collapsed:!0},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(F.jsxs)(x.a,{children:[Object(F.jsxs)(ne,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(F.jsx)("div",{className:"logo"}),Object(F.jsxs)(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(F.jsx)(p.a.Item,{icon:Object(F.jsx)(O.a,{}),children:"nav 1"},"1"),Object(F.jsx)(p.a.Item,{icon:Object(F.jsx)(g.a,{}),children:"nav 2"},"2"),Object(F.jsx)(p.a.Item,{icon:Object(F.jsx)(u.a,{}),children:"nav 3"},"3")]})]}),Object(F.jsxs)(x.a,{className:"site-layout",children:[Object(F.jsx)(se,{className:"site-layout-background",style:{padding:0,backgroundColor:"#391085"},children:Object(F.jsxs)(h.a,{justify:"space-between",children:[Object(F.jsxs)(b.a,{children:[n.a.createElement(this.state.collapsed?m.a:f.a,{className:"trigger",style:{marginRight:"36px",color:"white",fontSize:"18px",backgroundColor:"#fa8c16",padding:"8px",borderRadius:"50%"},onClick:this.toggle}),Object(F.jsx)(y.a,{style:{color:"white",marginRight:"24px",fontSize:"18px"}}),Object(F.jsx)("span",{style:{color:"white",marginRight:"16px",overflow:"scroll"},children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"})]}),Object(F.jsxs)(b.a,{children:[Object(F.jsx)(O.a,{style:{color:"white",marginLeft:"4px"}}),Object(F.jsx)("span",{style:{color:"white",marginRight:"4px",marginLeft:"14px"},children:"User"})]})]})}),Object(F.jsx)("div",{className:"background-content",children:Object(F.jsx)(ce,{className:"site-layout-background content-height",theme:"dark",style:{padding:24},children:Object(F.jsx)(ae,{})})})]})]})}}]),a}(n.a.Component);l.a.render(Object(F.jsx)(i.a,{direction:"rtl",children:Object(F.jsx)(le,{})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.8db5ae28.chunk.js.map