(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"72ca":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-split-layout",{attrs:{title:t.$route.name},scopedSlots:t._u([{key:"side",fn:function(){return[s("q-list",[s("q-item-label",{attrs:{header:""}},[t._v("\n        "+t._s(t.projects.length)+" Projects\n      ")])],1),t.projects.length?s("q-list",{staticClass:"q-px-sm column q-gutter-y-sm"},t._l(t.projects,(function(e){return s("project-item",{key:e.id,staticClass:"q-py-md",attrs:{"no-breakdown":"",project:e},on:{click:function(s){t.selectedProject=e}},scopedSlots:t._u([{key:"title",fn:function(e){var a=e.project;return[s("div",{staticClass:"text-subtitle2 text-black ellipsis"},[t._v("\n            "+t._s(a.name)+"\n          ")])]}},{key:"actions",fn:function(){return[s("div",{staticClass:"text-h5 text-weight-light"},[t._v("\n            "+t._s(t.tasks(e).length)+"\n            "),1===t.tasks(e).length?s("span",{staticClass:"text-caption"},[t._v("task")]):s("span",{staticClass:"text-caption"},[t._v("tasks")])])]},proxy:!0}],null,!0)})})),1):s("opus-img-caption",{attrs:{width:"170px",caption:"You currently have 0 Projects",src:"solution_mindset.svg"}}),s("q-page-sticky",{staticStyle:{"z-index":"2001"},attrs:{offset:[18,-18],position:"bottom-right"}},[s("opus-fab",{attrs:{size:"md",show:!t.hasOpenDialog},on:{click:t.showNewProjectDialog}})],1)]},proxy:!0}])},[s("q-page",{staticClass:"bg-grey-1 fit"},[t.selectedProject?s("project-details",{staticClass:"absolute-center",attrs:{project:t.selectedProject},on:{delete:t.confirmDelete,edit:t.showEditProjectDialog}}):s("opus-img-caption",{attrs:{src:"art_museum.svg",caption:"Select a project to view details","content-classes":"absolute-center text-center z-top"}})],1)],1)},o=[],n=s("45de"),i=s("b1cd"),r=s("8d3d"),c=s("ba2d"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"bg-white shadow-light rounded-borders q-pa-sm",staticStyle:{width:"80%"}},[s("div",{staticClass:"absolute-top-right z-top q-gutter-x-xs",staticStyle:{"margin-top":"-8px"}},[s("q-btn",{staticClass:"shadow-light",attrs:{size:"xs",icon:"edit",color:"blue",round:"",unelevated:""},on:{click:function(e){return t.$emit("edit",t.project)}}}),s("q-btn",{staticClass:"shadow-light",attrs:{size:"xs",icon:"delete",color:"negative",round:"",unelevated:""},on:{click:function(e){return t.$emit("delete",t.project)}}})],1),s("q-card-section",{staticClass:"q-pb-xs"},[s("div",{staticClass:"text-primary text-h6 text-weight-bold"},[t._v("\n      "+t._s(t.project.name)+"\n    ")]),s("div",{staticClass:"text-caption"},[t._v("\n      "+t._s(t.tasks("completed").length)+" done / "+t._s(t.tasks("ongoing").length)+" in progress / "+t._s(t.tasks("todo").length)+" to do\n    ")]),s("div",{staticClass:"bg-grey-3 rounded-borders q-mt-sm q-mb-sm"},[s("q-linear-progress",{attrs:{value:t.completedProgress,buffer:t.ongoingProgress,rounded:"",color:"primary","track-color":"secondary"}})],1),s("div",{staticClass:"text-subtitle2 text-grey"},[t._v(t._s(t.project.description))])]),s("q-card-section",[s("div",{staticClass:"row justify-between items-center"},[s("opus-btn-toggle",{staticClass:"q-gutter-x-sm",attrs:{options:t.filters},model:{value:t.selectedFilter,callback:function(e){t.selectedFilter=e},expression:"selectedFilter"}}),s("div",{staticClass:"text-grey"},[t._v("\n        "+t._s(t.selectedTasks.length)+" tasks\n      ")])],1),s("q-scroll-area",{staticClass:"q-mt-md",staticStyle:{height:"40vh","max-width":"100%"},attrs:{"thumb-style":t.thumbStyle}},[t.selectedTasks.length?s("task-list",{attrs:{tasks:t.selectedTasks,flat:!1,"no-side":""},on:{click:t.showTaskDetailsDialog},scopedSlots:t._u([{key:"title",fn:function(e){var a=e.task;return[s("div",{staticClass:"text-subtitle2 ellipsis"},[t._v("\n            "+t._s(a.name)+"\n          ")])]}},{key:"actions",fn:function(e){var a=e.task;return[s("div",{staticClass:"row q-gutter-x-xs"},[s("q-btn",{attrs:{size:"xs",unelevated:"",round:"",icon:"edit",color:"blue"},on:{click:function(e){return e.stopPropagation(),t.showEditTaskDialog(a)}}}),s("q-btn",{attrs:{size:"xs",unelevated:"",round:"",icon:"delete",color:"negative"},on:{click:function(e){return e.stopPropagation(),t.deleteTask(a)}}})],1)]}}],null,!1,176716977)}):s("opus-img-caption",{staticClass:"q-mt-xl",attrs:{width:"170px",src:"taken.svg",caption:"Nothing  to see here..","content-style":"margin-top: 5rem"}})],1)],1)],1)},d=[],u=s("f95e"),p=s("9e80"),g=s("753b"),m=s("f668"),h={name:"ProjectDetails",mixins:[u["a"],p["a"]],props:{project:{type:Object,required:!0}},components:{OpusBtnToggle:g["a"],OpusImgCaption:r["a"],TaskList:m["a"]},data:function(){return{thumbStyle:{right:"2px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75}}},computed:{ongoingProgress:function(){var t=this.tasks("ongoing").length;return 0===t?0:t/this.tasks("all").length+this.completedProgress},completedProgress:function(){var t=this.tasks("completed").length;return 0===t?0:t/this.tasks("all").length}}},b=h,k=s("2877"),v=s("f09f"),x=s("9c40"),f=s("a370"),y=s("6b1d"),j=s("4983"),_=s("eebe"),C=s.n(_),q=Object(k["a"])(b,l,d,!1,null,null,null),w=q.exports;C()(q,"components",{QCard:v["a"],QBtn:x["a"],QCardSection:f["a"],QLinearProgress:y["a"],QScrollArea:j["a"]});var P={name:"Projects",mixins:[n["a"]],components:{ProjectItem:c["a"],ProjectDetails:w,OpusFab:i["a"],OpusImgCaption:r["a"]},data:function(){return{selectedProject:null}}},S=P,D=s("1c1c"),Q=s("0170"),z=s("de5e"),O=s("9989"),T=Object(k["a"])(S,a,o,!1,null,null,null);e["default"]=T.exports;C()(T,"components",{QList:D["a"],QItemLabel:Q["a"],QPageSticky:z["a"],QPage:O["a"]})}}]);