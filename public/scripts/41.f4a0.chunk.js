(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"4VDK":function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"j",function(){return c}),n.d(t,"i",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"h",function(){return u}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return f});var r=n("CrSU"),a=n("mbMT"),o=function(e,t){return a.a.get(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base,{params:{offset:e,limit:t}})},i=function(e){return a.a.get(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e)},l=function(e){return a.a.post(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base,e)},c=function(e,t){return a.a.post(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e+"/active",t)},s=function(e,t){return a.a.put(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e,t,{})},d=function(e){return a.a.delete(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e)},u=function(){return a.a.get(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.types)},p=function(e,t,n){return a.a.get(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e+"/countries",{params:{offset:t,limit:n}})},m=function(e,t){return a.a.post(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e+"/countries",t)},f=function(e,t){return a.a.delete(r.a.panel.baseUrl+r.a.panel.api.v2.thirdPartyProviders.base+"/"+e+"/countries/"+t)}},"87gR":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("mXGw");function a(e){var t=e.isAbsolute,n=e.isDropUp;return r.createElement("div",{style:{position:"absolute",left:"93%"},className:(n?"dropup-absolute":t?"dropdown-absolute":"dropdown")+" more-actions text-right"},r.createElement("button",{className:"btn btn-default dropdown-toggle","data-toggle":"dropdown",onClick:function(e){e.stopPropagation()}},r.createElement("span",{className:"icon-more"})),r.createElement("ul",{className:"dropdown-menu"},e.children))}},Wppa:function(e,t,n){"use strict";n.r(t);var r,a,s=n("mXGw"),o=n("/m4v"),d=n("thVU"),i=n("Samx"),u=n.n(i),p=n("Q7aK"),m=n("hxag"),l=n("4VDK"),f=n("bj0z"),c=n("YHpT"),h=n("ddal"),v=n("tz+R"),b=n("XdbE"),g=n("wVQu"),E=n("cemM"),y=n("87gR"),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},n=(a=s.Component,i(w,a),w.prototype.componentDidMount=function(){document.title=b.z["/third-party-providers"];var e=P({},this.state);this.initRequests(e)},w.prototype.componentWillUnmount=function(){this.componentState=!1},w.prototype.render=function(){var r=this,e=this.state,t=e.initialLoading,a=e.providers,o=e.activate,i=e.limit,l=e.offset,n=e.popup,e=e.request.pagination,c=this.props.userProfile;return s.createElement("div",{className:"box-shadow r-3x bg-white"},s.createElement(p.ToastContainer,null),s.createElement("div",{className:"content-wrapper"},s.createElement("div",{className:"container-fluid"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},s.createElement("span",{className:"text-xsl padder-t-3"},b.z["/third-party-providers"])),s.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},s.createElement("div",{className:"text-right"},c.readonly?s.createElement("button",{onClick:function(){c.readonly&&Object(h.d)("error",{title:"Read-Only admin",description:"Read-Only admin: the access to this functionality is restricted for your user role",timer:3e3,hideProgress:!0})},className:"btn btn-default btn-addon"},s.createElement("i",{className:"fa fa-plus"}),"Create provider"):s.createElement(d.a,{to:"/third-party-providers/create",className:"btn btn-default btn-addon"},s.createElement("i",{className:"fa fa-plus"}),"Create provider")))))),t?s.createElement(v.a,null):s.createElement(m.a,{hover:!0,condensed:!0,responsive:!0},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",null,"Name"),s.createElement("th",null,"Created at"),s.createElement("th",null,"Order"),s.createElement("th",null,"Active"),s.createElement("th",null))),s.createElement("tbody",null,a&&0===a.length&&s.createElement("tr",null,s.createElement("th",{colSpan:6},"No results")),a&&a.map(function(t,e){var n=l*i+e+1;return s.createElement("tr",{key:n,className:"cursor-pointer",onClick:function(){return r.handleProviderEdit(t.customerThirdPartyProviderId)}},s.createElement("td",null,n),s.createElement("td",null,t.key),s.createElement("td",null,u()(new Date(t.createdAt),"DD MMM YYYY hh:mm A")),s.createElement("td",null,t.order),s.createElement("td",null,s.createElement("input",{name:"active",type:"checkbox",disabled:o,checked:t.active,id:t.customerThirdPartyProviderId,onChange:r.handleActiveChange})),s.createElement("td",null,s.createElement(y.a,{isDropUp:e===a.length-1},s.createElement("li",null,s.createElement(d.a,{to:"/third-party-providers/"+t.customerThirdPartyProviderId},"Edit")),s.createElement("li",null,s.createElement("a",{href:"javascript:void(0);",onClick:function(e){return r.handleRemoveModalOpen(e,t.customerThirdPartyProviderId)}},"Delete")))))}))),s.createElement("div",{className:"content-wrapper"},s.createElement("div",{className:"container-fluid"},s.createElement("div",{className:"row"},!t&&s.createElement("div",{className:"hidden"},s.createElement("div",{className:"col-lg-6 col-md-6 col-xs-6 col-sm-6"}),s.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-6"},s.createElement(f.a,{offset:l,limit:i,callback:this.handleListChange,length:a.length,disabled:e})))))),s.createElement(g.a,{show:n.remove.show,message:n.remove.message,hideModal:this.handleRemoveModalClose,confirmAction:this.handleProviderDelete}))},w);function w(e){var o=a.call(this,e)||this;return o.componentState=!0,o.initRequests=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=!1);var e=t.limit,a=t.initialLoading;Object(l.g)(n,e).then(function(e){e=e.data;if(e.err)throw new Error(JSON.stringify(e));a&&(t.initialLoading=!1),r&&(t.request.pagination=!1,t.offset=n),t.providers=e.result||[],o.componentState&&o.setState(t)}).catch(function(e){console.log(e),o.componentState&&(a&&(t.initialLoading=!1),r&&(t.request.pagination=!1),Object(h.d)("error",{title:"You got an error!",description:"Can not get providers",timer:3e3}),o.setState(t))})},o.handleListChange=function(e){var t=o.state.offset,n=P({},o.state),t=Object(c.i)(t,e);n.request.pagination=!0,o.setState(n),o.initRequests(n,t,!0)},o.handleActiveChange=function(e){var e=e.currentTarget,t=e.id,n=e.checked,e={status:n},r=document.getElementById(t),a=(r.disabled=!0,parseInt(t));Object(l.j)(a,e).then(function(e){var t=P({},o.state);e.data.err?Object(h.d)("error",{title:"You got an error!",description:"Error during active or deactivate provider",timer:3e3}):(t.providers.map(function(e){e.customerThirdPartyProviderId===a&&(e.active=n)}),r.disabled=!1),o.componentState&&o.setState(t)}).catch(function(e){return console.log(e)})},o.handleRemoveModalOpen=function(e,t){e.stopPropagation();e=P({},o.state);e.popup.remove.show=!0,e.providerId=t,e.providerKey=e.providers.find(function(e){return e.customerThirdPartyProviderId===t}).key,e.popup.remove.message={title:"Are you sure delete "+e.providerKey+" provider?",apply:"Apply",cancel:"Cancel"},o.setState(e)},o.handleRemoveModalClose=function(){var e=P({},o.state);e.popup.remove.show=!1,e.popup.remove.message={},e.provider=null,o.setState(e)},o.handleProviderEdit=function(e){var t=o.props,n=t.history;t.userProfile.readonly?Object(h.d)("error",{title:"Read-Only admin",description:"Read-Only admin: the access to this functionality is restricted for your user role",timer:3e3,hideProgress:!0}):n&&n.push("/third-party-providers/"+e)},o.handleProviderDelete=function(e){e.preventDefault();var e=o.state,t=e.request,n=e.providerId,r=P({},o.state),a=Object(h.d)("info",{title:"Deleting...",description:""});t.deleted||(r.request.deleted=!0,r.popup.show=!1,o.setState(r),Object(l.d)(n).then(function(e){e.data.err?Object(h.d)("error",{title:"You got an error!",description:"This provider is not deleted",id:a}):(Object(h.d)("success",{title:"Success!",description:"This provider was deleted",id:a}),r.providers=r.providers.filter(function(e){return e.customerThirdPartyProviderId!==n})),r.request.deleted=!1,r.provider=null,o.componentState&&o.setState(r)}).catch(function(e){return console.log(e)}))},o.state={initialLoading:!0,offset:0,limit:20,providers:[],activate:!1,popup:{remove:{show:!1,message:{}}},providerId:null,providerKey:null,request:{deleted:!1,pagination:!1}},o}t.default=Object(o.b)(function(e){return Object(E.a)(e)},function(){return{}})(n)},bj0z:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n("mXGw"),d=n("O6wh"),u=n("YHpT"),p=n("XdbE");function r(e){var t=e.offset,n=e.limit,r=e.callback,a=e.data,o=e.length,i=e.count,e=e.disabled,e=void 0!==e&&e,l=Object(u.v)(a,t,n,o),c=l.start,l=l.end;return s.createElement("ul",{className:"list-inline text-right"},0!==t&&s.createElement("li",null,s.createElement(d.a,{"data-action":p.r.ACTION.RESET,onClick:r,disabled:e},s.createElement("i",{className:"fa fa-step-backward"}))),s.createElement("li",null,s.createElement("span",null,c+"-"+l)),s.createElement("li",null,s.createElement(d.a,{disabled:0===t||e,"data-action":p.r.ACTION.PREVIOUS,bsClass:"btn btn-default b-t-l b-b-l",onClick:r},s.createElement("i",{className:"fa fa-chevron-left"}))),s.createElement("li",null,s.createElement(d.a,{disabled:(o||a&&Object.keys(a).length)<n||e||(t+1)*n===i,"data-action":p.r.ACTION.NEXT,bsClass:"btn btn-default b-t-r b-b-r",onClick:r},s.createElement("i",{className:"fa fa-chevron-right"}))))}},ddal:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s});var l=n("mXGw"),c=n("Q7aK"),r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=function(e,t){var t=t.name,n=new FormData;return n.append("file",e,t+".png"),e=n.get("file")},o=function(e,t){function n(e){var t=e.title,e=e.description;return l.createElement("div",null,l.createElement("span",{className:"block text-md font-bold"},t),l.createElement("span",{className:"block"},e))}var r=t.title,a=t.description,o=t.id,t=t.timer,t=void 0!==t&&t,i=null;return o?c.toast.update(o,{render:l.createElement(n,{title:r,description:a}),transition:c.Slide,position:c.toast.POSITION.TOP_RIGHT,autoClose:3e3,closeOnClick:!0,draggable:!0,hideProgressBar:!0,className:"toast-container toast-container-"+e,bodyClassName:"toast-body",type:e}):i=Object(c.toast)(l.createElement(n,{title:r,description:a}),{transition:c.Slide,position:c.toast.POSITION.TOP_RIGHT,autoClose:t,closeOnClick:!0,draggable:!0,hideProgressBar:!0,className:"toast-container toast-container-"+e,bodyClassName:"toast-body",type:e}),i},i={menu:function(e){return r(r({},e),{zIndex:999})},container:function(e){return r(r({},e),{minHeight:"34px"})},valueContainer:function(e){return r(r({},e),{minHeight:"34px",padding:"0 8px"})},placeholder:function(e){return r(r({},e),{top:"46%"})},input:function(e){return r(r({},e),{paddingTop:"0"})},indicatorsContainer:function(e){return r(r({},e),{minHeight:"34px"})},dropdownIndicator:function(e){return r(r({},e),{padding:"7px"})},control:function(e){return e["&:hover"].borderColor="#d2dcee",r(r({},e),{minHeight:"34px",height:"34px",border:"1px solid #d2dcee",transition:"box-shadow 150ms ease",boxShadow:"0 1px 3px 0 #e5e5e5"})}},s={menu:function(e){return r(r({},e),{zIndex:999})},container:function(e){return r(r({},e),{minHeight:"34px"})},valueContainer:function(e){return r(r({},e),{minHeight:"34px"})},control:function(e){return e["&:hover"].borderColor="#d2dcee",r(r({},e),{minHeight:"34px",border:"1px solid #d2dcee",transition:"box-shadow 150ms ease",boxShadow:"0 1px 3px 0 #e5e5e5"})}}},wVQu:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("mXGw"),l=n("ib2A"),c=n("O6wh");function r(e){var t=e.message,n=t.title,r=t.apply,t=t.cancel,a=e.hideModal,o=e.confirmAction,e=e.show;return i.createElement(l.a,{show:e,onHide:a,bsSize:"sm",style:{display:"flex",alignItems:"center"}},i.createElement(l.a.Header,{closeButton:!0}),i.createElement(l.a.Body,null,i.createElement("span",{className:"text-md"},n)),i.createElement(l.a.Footer,null,i.createElement(c.a,{onClick:a},t),i.createElement(c.a,{onClick:o,bsStyle:"info"},r)))}}}]);