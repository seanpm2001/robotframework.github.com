(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bcb5325"],{"91a8":function(e,t,o){"use strict";o("e6b3")},e6b3:function(e,t,o){},ffd3:function(e,t,o){"use strict";o.r(t);var n=o("ade3"),r=o("7a23"),i=Object(r["withScopeId"])("data-v-5fa3e5a1");Object(r["pushScopeId"])("data-v-5fa3e5a1");var c={class:"editor-container",ref:"editorContainer"},a={key:0,class:"dropdown relative mr-xsmall",ref:"fileDropdown"},s={key:0,class:"dropdown-content bg-grey-darkest absolute px-small pb-none pt-small"},l={key:0,class:"flex"},d={class:"pr-3xsmall weigh-black"},u={class:"flex"},m={class:"pr-3xsmall weigh-black"},b={class:"col-sm-12 col-md-5 flex height-fit p-xsmall"},f={key:0},p=Object(r["createVNode"])("div",{class:"ml-2xsmall"}," log.html ",-1),h={key:0},j=Object(r["createVNode"])("div",{class:"ml-2xsmall"}," report.html ",-1),v={class:"row"},g={class:"col-sm-12 flex end mb-xsmall"};Object(r["popScopeId"])();var w=i((function(e,t,o,w,O,k){var N=Object(r["resolveComponent"])("chevron-icon"),S=Object(r["resolveComponent"])("play-icon"),x=Object(r["resolveComponent"])("document-icon"),y=Object(r["resolveComponent"])("close-icon");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:i((function(){var o;return[Object(r["withDirectives"])(Object(r["createVNode"])("div",null,[Object(r["createVNode"])("div",{class:["flex between bottom p-xsmall border-bottom-theme border-thin",Object(n["a"])({},"disabled",e.editorStatus.loading)]},[Object(r["createVNode"])(r["Transition"],{name:"opacity",mode:"out-in"},{default:i((function(){var o;return[e.$store.state.isMobile?(Object(r["openBlock"])(),Object(r["createBlock"])("div",a,[Object(r["createVNode"])("button",{class:"bg-grey-darkest stroke small flex middle between",onClick:t[1]||(t[1]=function(t){return e.filesDropdownOpen=!e.filesDropdownOpen})},[Object(r["createVNode"])(r["Transition"],{name:"opacity",mode:"out-in"},{default:i((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"mr-3xsmall ml-2xsmall",key:e.activeFileName},Object(r["toDisplayString"])(e.activeFileName),1))]})),_:1}),Object(r["createVNode"])(N,{size:"1.5rem",color:"white",direction:e.filesDropdownOpen?"up":"down"},null,8,["direction"])]),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:i((function(){var t;return[e.filesDropdownOpen?(Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(null===(t=e.activeProject)||void 0===t?void 0:t.files,(function(t){var o=t.fileName,n=t.hidden;return Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createBlock"])("button",{key:o,class:["block mb-xsmall color-white type-small",e.activeFileName===o?"disabled":""],onClick:function(t){k.setActiveFile(o),e.filesDropdownOpen=!1}},Object(r["toDisplayString"])(o),11,["onClick"])),[[r["vShow"],!n]])})),128))])):Object(r["createCommentVNode"])("",!0)]})),_:1})],512)):(Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:e.activeProjectName},[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(null===(o=e.activeProject)||void 0===o?void 0:o.files,(function(t){var o=t.fileName,n=t.hidden;return Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createBlock"])("button",{key:o,class:["bg-grey-darkest stroke small m-2xsmall",e.activeFileName===o?"active":"primary"],onClick:function(e){return k.setActiveFile(o)}},Object(r["toDisplayString"])(o),11,["onClick"])),[[r["vShow"],!n]])})),128))]))]})),_:1}),e.editorStatus.loading?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("div",l,[Object(r["createVNode"])("button",{class:["theme flex middle",e.editorStatus.running?"disabled":"bling"],onClick:t[2]||(t[2]=function(e){return k.runRobotTest()})},[Object(r["createVNode"])("div",d,Object(r["toDisplayString"])(e.editorStatus.running?"...":"Run"),1),Object(r["createVNode"])(S,{color:"black",size:"1.3rem"})],2)]))],2),Object(r["createVNode"])("div",{id:"monaco-container",class:(o={},Object(n["a"])(o,"tab-change-animation",e.editorStatus.changingTab),Object(n["a"])(o,"disabled",e.editorStatus.loading),Object(n["a"])(o,"full-screen-editor",k.isFullEditor),o)},null,2)],512),[[r["vShow"],!(e.editorStatus.running||e.editorStatus.runCompleted)]])]})),_:1}),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:i((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("div",{class:["row between",k.isFullEditor?"px-medium pb-small":""]},[Object(r["createVNode"])("div",null,[Object(r["createVNode"])("div",{class:["flex between bottom p-xsmall border-bottom-theme border-thin",Object(n["a"])({},"disabled",e.editorStatus.loading)]},[Object(r["createVNode"])("h4",{class:[k.isFullEditor?"px-medium":"",e.$store.state.isMobile?"ml-2xsmall":"ml-medium"]}," Console output ",2),Object(r["createVNode"])("div",u,[Object(r["createVNode"])("button",{class:["theme flex middle",e.editorStatus.running?"disabled":"bling"],onClick:t[3]||(t[3]=function(){k.setActiveFile(e.activeFileName),e.editorStatus.runCompleted=!1})},[Object(r["createVNode"])(S,{color:"black",size:"1.3rem",style:{transform:"rotate(180deg)"}}),Object(r["createVNode"])("div",m,Object(r["toDisplayString"])(e.editorStatus.running?"...":"Back"),1)],2)])],2),Object(r["createVNode"])("pre",{class:["console p-medium",Object(n["a"])({},"running",e.editorStatus.running)],ref:"console",id:"console"},[Object(r["createVNode"])("code",{id:"output",innerHTML:e.output,class:"code-xsmall",ref:"output"},null,8,["innerHTML"])],2)]),Object(r["createVNode"])("div",b,[Object(r["createVNode"])(r["Transition"],{name:"opacity"},{default:i((function(){return[e.logSrc?(Object(r["openBlock"])(),Object(r["createBlock"])("div",f,[Object(r["createVNode"])("button",{class:"bg-grey-darkest stroke small flex mr-small middle",onClick:t[4]||(t[4]=function(t){return e.showLog=!0})},[Object(r["createVNode"])(x,{color:"white",size:"1.25rem"}),p])])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(r["Transition"],{name:"opacity"},{default:i((function(){return[e.reportSrc?(Object(r["openBlock"])(),Object(r["createBlock"])("div",h,[Object(r["createVNode"])("button",{class:"bg-grey-darkest stroke small flex middle",onClick:t[5]||(t[5]=function(t){return e.showReport=!0})},[Object(r["createVNode"])(x,{color:"white",size:"1.25rem"}),j])])):Object(r["createCommentVNode"])("",!0)]})),_:1})])],2),[[r["vShow"],e.editorStatus.running||e.editorStatus.runCompleted]])]})),_:1}),Object(r["createVNode"])(r["Transition"],{name:"opacity"},{default:i((function(){return[e.showLog||e.showReport?(Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:0,class:"log-modal",onClick:t[7]||(t[7]=function(t){e.showLog=!1,e.showReport=!1})},[Object(r["createVNode"])("div",v,[Object(r["createVNode"])("div",g,[Object(r["createVNode"])("button",{onClick:t[6]||(t[6]=function(t){e.showLog=!1,e.showReport=!1}),class:"bg-white rounded"},[Object(r["createVNode"])(y,{size:"2rem",color:"black",class:"block"})])]),Object(r["createVNode"])("iframe",{id:"report",src:e.showLog?e.logSrc:e.reportSrc},null,8,["src"])])])):Object(r["createCommentVNode"])("",!0)]})),_:1})],512)})),O=o("1da1"),k=(o("96cf"),o("b0c0"),o("c740"),o("7db0"),o("d3b7"),o("d81d"),o("99af"),o("ac1f"),o("1276"),o("4160"),o("159b"),o("8f40"),o("caad"),o("2532"),o("3ca3"),o("ddb0"),o("2b3d"),o("9861"),o("4795"),o("4fad"),o("4de4"),o("466d"),o("3fb6")),N=o("1095"),S=o("cf75"),x=o("f33e"),y=o("2ffb"),V=o("3ec4"),C=o("5f9a"),F=o("9424"),R=o("3629"),L={},P=null,T={},B={},D=[{id:"python",extensions:["py"]},{id:"robotframework",extensions:["robot","resource"]},{id:"html",extensions:["html"]},{id:"javascript",extensions:["js"]},{id:"json",extensions:["json"]},{id:"xml",extensions:["xml"]},{id:"yaml",extensions:["yml","yaml"]},{id:"markdown",extensions:["md"]}],M={name:"Editor",components:{ChevronIcon:V["a"],PlayIcon:C["a"],DocumentIcon:F["a"],CloseIcon:R["a"]},data:function(){return{editorStatus:{loading:!0,running:!1,runCompleted:!1,projectModified:!1,changingTab:!1},projectsList:null,activeProjectName:null,activeProject:null,activeFileName:null,projectDropdownOpen:!1,filesDropdownOpen:!1,output:"",logSrc:null,reportSrc:null,showLog:!1,showReport:!1,copyMessage:null,RFVersions:[],selectedRFVersion:"",robotArgs:{},requirements:[],reinstallRF:!1,versionDropdownOpen:!1}},computed:{isFullEditor:function(){return"Code"===this.$route.name},nextProject:function(){var e=this;if(!this.projectsList||this.isFullEditor)return null;var t=this.projectsList.findIndex((function(t){var o=t.name;return o===e.activeProjectName}));return void 0===t||t===this.projectsList.length-1?null:this.projectsList[t+1]}},methods:{clickFn:function(e){this.$refs.fileDropdown&&!this.$refs.fileDropdown.contains(e.target)&&(this.filesDropdownOpen=!1)},setProjectFromGitHub:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(k["a"])(e);case 2:n=o.sent,t.setProject(n,"Custom code");case 4:case"end":return o.stop()}}),o)})))()},setProjectsFromURL:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function o(){var n,r,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n=y["decompressFromEncodedURIComponent"](e),r=JSON.parse(n),!r.derivedProject){o.next=11;break}return o.next=5,Object(k["b"])(t.projectsList.find((function(e){var t=e.name;return t===r.name})).dir);case 5:i=o.sent,i.files=i.files.map((function(e){var t;return{fileName:e.fileName,hidden:e.hidden,content:(null===(t=r.files.find((function(t){var o=t.fileName;return o===e.fileName})))||void 0===t?void 0:t.content)||e.content}})),i.robotVersion=r.robotVersion,t.setProject(i,i.name),o.next=12;break;case 11:t.setProject(r,"Custom code");case 12:case"end":return o.stop()}}),o)})))()},setProjectFromConfig:function(e,t,o,n){var r=this;return Object(O["a"])(regeneratorRuntime.mark((function i(){var c,a,s,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(c=e.name,a=e.dir,!r.editorStatus.projectModified||o||window.confirm("Your code modifications will be lost. Are you sure?")){i.next=3;break}return i.abrupt("return");case 3:return r.editorStatus.loading=!0,i.next=6,Object(k["b"])(a);case 6:if(s=i.sent,r.setProject(s,c,t),r.activeProjectName&&!n){i.next=10;break}return i.abrupt("return");case 10:l=r.isFullEditor?"".concat(window.location.href.split("?")[0],"?example=").concat(r.activeProjectName):"".concat(window.location.href.split("?")[0].split("#")[0],"?tab=0&example=").concat(r.activeProjectName,"#getting-started"),history.replaceState(null,null,l);case 12:case"end":return i.stop()}}),i)})))()},setProject:function(e,t,o){this.editorStatus.runCompleted=!1,T={},B={},e.files.forEach((function(e){var t,o=e.fileName,n=e.content,r=o.split(".").at(-1),i=null===(t=D.find((function(e){var t=e.extensions;return t.includes(r)})))||void 0===t?void 0:t.id,c=x["editor"].createModel(n,i);c.name=o,c.updateOptions({tabSize:4}),T[o]=c})),this.activeProjectName=t,this.activeProject=e,e.robotVersion&&(this.selectedRFVersion=e.robotVersion),e.robotArgs&&(this.robotArgs=e.robotArgs),e.requirements&&(this.requirements=e.requirements),this.setActiveFile(o||e.files[0].fileName),this.editorStatus.projectModified=!1,this.copyMessage=null,this.output="",this.logSrc=null,this.reportSrc=null,this.editorStatus.loading=!1},resetProject:function(){this.reinstallRF=!0;var e=this.projectsList,t=new URL(document.location).searchParams;if(t.get("codeProject"))this.setProjectsFromURL(t.get("codeProject"));else if(t.get("code-gh-url"))this.setProjectFromGitHub(t.get("code-gh-url"));else if(t.get("example")){var o=e.find((function(e){var o=e.name;return o===t.get("example")}));this.setProjectFromConfig(o)}else this.setProjectFromConfig(e[0],null,null,!0)},setActiveFile:function(e){var t=this;B[this.activeFileName]=L.saveViewState(),this.activeFileName=e,this.editorStatus.changingTab=!0,setTimeout((function(){L.setModel(T[e]),e in B&&L.restoreViewState(B[e]),L.getModel().onDidChangeContent((function(e){t.editorStatus.projectModified=!0,t.copyMessage=null}))}),150),setTimeout((function(){t.editorStatus.changingTab=!1}),300)},runRobotTest:function(){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";window.plausible("Run code",{props:{projectName:"".concat(this.activeProjectName).concat(this.editorStatus.projectModified?" (modified)":"")}}),this.logSrc=null,this.reportSrc=null,this.output=" ",this.editorStatus.runCompleted=!1,this.$nextTick((function(){var o=Object.entries(T).map((function(e){return{fileName:e[0],content:e[1].getValue()}}));e.editorStatus.running=!0;var n=e.reinstallRF;setTimeout((function(){Object(N["a"])(o,n,t,e.selectedRFVersion,e.robotArgs,e.requirements)}),0),e.reinstallRF=!1}))}},watch:{showLog:function(){this.showLog?document.body.style.overflow="hidden":document.body.style.overflow="visible"},showReport:function(){this.showReport?document.body.style.overflow="hidden":document.body.style.overflow="visible"},selectedRFVersion:function(){console.log(this.selectedRFVersion),this.reinstallRF=!0}},mounted:function(){var e=this,t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"rf-dark":"rf-light";L=x["editor"].create(document.getElementById("monaco-container"),{language:"robotframework",theme:t,wordWrap:"off",automaticLayout:!0,minimap:{enabled:this.$store.state.isDesktop,showSlider:"always"},scrollbar:{vertical:"hidden",alwaysConsumeMouseWheel:!1},mouseWheelZoom:!0,scrollBeyondLastLine:!1,model:null,fontSize:14}),L.addCommand(x["KeyCode"].Tab,(function(){L.trigger("keyboard","type",{text:"    "})}),"editorTextFocus && !editorHasSelection && !inSnippetMode && !suggestWidgetVisible"),L.addAction({id:"run_robot",label:"Run Suite in Robot",keybindings:[x["KeyMod"].Shift|x["KeyCode"].Enter],precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:0,run:function(t){e.runRobotTest()}});var o=L.addCommand(0,(function(t,o){e.runRobotTest(!1,o)}),""),n=L.addCommand(0,(function(t,o){e.resetProject()}),"");P=x["languages"].registerCodeLensProvider("robotframework",{provideCodeLenses:function(e,t){function r(e){return{range:{startLineNumber:e.nr,startColumn:1,endLineNumber:e.nr+1,endColumn:e.name.length},command:{id:o,title:"Run Test",tooltip:"Run: ".concat(e.name),arguments:[e.name]}}}var i=Object(S["b"])(e),c=i.map((function(e){return r(e)}));return c.push({range:{startLineNumber:1,startColumn:1,endLineNumber:2,endColumn:1},command:{id:o,title:"Run Test Suite",tooltip:"Run Full Test Suite",arguments:[]}}),c.push({range:{startLineNumber:1,startColumn:2,endLineNumber:2,endColumn:2},command:{id:n,title:"Reset Test Suite",tooltip:"Run Full Test Suite",arguments:[]}}),{lenses:c,dispose:function(){}}},resolveCodeLens:function(e,t,o){return t}}),window.addEventListener("writeOutput",(function(t){var o=t.text;e.output+=o})),window.addEventListener("clearOutput",(function(){e.output=""})),window.addEventListener("writeLog",(function(t){var o=t.src;e.logSrc=o})),window.addEventListener("writeReport",(function(t){var o=t.src;e.reportSrc=o})),window.addEventListener("finished",(function(t){t.src;e.editorStatus.running=!1,e.editorStatus.runCompleted=!0,e.$nextTick((function(){e.$refs.console.scrollTop=e.$refs.console.scrollHeight}))})),window.addEventListener("keydown",(function(t){var o=t.key;"Escape"===o&&(e.showLog=!1,e.showReport=!1)})),window.addEventListener("click",this.clickFn),window.addEventListener("addLibdoc",(function(e){var t=e.libdoc;Object(S["a"])(JSON.parse(t))})),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){x["editor"].setTheme(e.matches?"rf-dark":"rf-light")})),Object(k["c"])().then((function(t){e.projectsList=t;var o=new URL(document.location).searchParams;if(o.get("codeProject"))e.setProjectsFromURL(o.get("codeProject"));else if(o.get("code-gh-url"))e.setProjectFromGitHub(o.get("code-gh-url"));else if(o.get("example")){var n=t.find((function(e){var t=e.name;return t===o.get("example")}));e.setProjectFromConfig(n)}else e.setProjectFromConfig(t[0],null,null,!0)})),Object(k["d"])().then((function(t){e.RFVersions=t.filter((function(e){return e.match(/^(3\.[12][\d.]*|[4-9][\d.]*)$/)})),e.selectedRFVersion=e.RFVersions.at(0),e.RFVersions[0]!==t[0]&&e.RFVersions.unshift(t[0])}))},beforeUnmount:function(){P&&P.dispose(),window.removeEventListener("click",this.clickFn)}},E=(o("91a8"),o("6b0d")),A=o.n(E);const I=A()(M,[["render",w],["__scopeId","data-v-5fa3e5a1"]]);t["default"]=I}}]);