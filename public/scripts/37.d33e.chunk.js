(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2Fcx":function(e,t,a){"use strict";var o=a("z3IF"),c=a("3ejq"),n=a("ZHeO"),r=a("8Jek"),l=a.n(r),r=a("mXGw"),s=a.n(r),r=a("W0B4"),r=a.n(r),i=(a("Og1j"),a("kjvt")),a={htmlFor:r.a.string,srOnly:r.a.bool},r={$bs_formGroup:r.a.object},d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.context.$bs_formGroup,e=e&&e.controlId,t=this.props,a=t.htmlFor,e=void 0===a?e:a,a=t.srOnly,n=t.className,t=Object(c.a)(t,["htmlFor","srOnly","className"]),t=Object(i.f)(t),r=t[0],t=t[1],r=Object(o.a)({},Object(i.d)(r),{"sr-only":a});return s.a.createElement("label",Object(o.a)({},t,{htmlFor:e,className:l()(n,r)}))},t}(s.a.Component);d.propTypes=a,d.defaultProps={srOnly:!1},d.contextTypes=r,t.a=Object(i.a)("control-label",d)},"44nO":function(e,t,a){"use strict";var o=a("z3IF"),c=a("3ejq"),n=a("ZHeO"),r=a("8Jek"),l=a.n(r),r=a("mXGw"),s=a.n(r),r=a("W0B4"),r=a.n(r),i=a("kjvt"),d=a("qEYh"),m=a("m56K"),a={controlId:r.a.string,validationState:r.a.oneOf(["success","warning","error",null])},r={$bs_formGroup:r.a.object.isRequired},u=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},a.hasFeedback=function(e){var t=this;return m.a.some(e,function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)})},a.render=function(){var e=this.props,t=e.validationState,a=e.className,n=e.children,e=Object(c.a)(e,["validationState","className","children"]),e=Object(i.g)(e,["controlId"]),r=e[0],e=e[1],r=Object(o.a)({},Object(i.d)(r),{"has-feedback":this.hasFeedback(n)});return t&&(r["has-"+t]=!0),s.a.createElement("div",Object(o.a)({},e,{className:l()(a,r)}),n)},t}(s.a.Component);u.propTypes=a,u.childContextTypes=r,t.a=Object(i.a)("form-group",Object(i.b)([d.b.LARGE,d.b.SMALL],u))},IbnU:function(e,t,a){"use strict";var i=a("z3IF"),d=a("3ejq"),n=a("ZHeO"),r=a("8Jek"),m=a.n(r),r=a("mXGw"),u=a.n(r),r=a("W0B4"),r=a.n(r),o=a("4ZsV"),o=a.n(o),p=(a("Og1j"),a("kjvt")),c={glyph:r.a.string.isRequired},l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.glyph,n=t.className,t=Object(d.a)(t,["glyph","className"]),t=Object(p.f)(t),r=t[0],t=t[1],r=Object(i.a)({},Object(p.d)(r),((e={})[Object(p.e)(r,a)]=!0,e));return u.a.createElement("span",Object(i.a)({},t,{className:m()(n,r)}))},t}(u.a.Component),s=(l.propTypes=c,Object(p.a)("glyphicon",l)),c={$bs_formGroup:r.a.object},l=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},a.renderDefaultFeedback=function(e,t,a,n){e=this.getGlyph(e&&e.validationState);return e?u.a.createElement(s,Object(i.a)({},n,{glyph:e,className:m()(t,a)})):null},a.render=function(){var e=this.props,t=e.className,a=e.children,e=Object(d.a)(e,["className","children"]),e=Object(p.f)(e),n=e[0],e=e[1],n=Object(p.d)(n);if(!a)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,n,e);a=u.a.Children.only(a);return u.a.cloneElement(a,Object(i.a)({},e,{className:m()(a.props.className,t,n)}))},t}(u.a.Component),c=(l.defaultProps={bsRole:"feedback"},l.contextTypes=c,Object(p.a)("form-control-feedback",l)),l={componentClass:o.a},f=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,a=e.className,e=Object(d.a)(e,["componentClass","className"]),e=Object(p.f)(e),n=e[0],e=e[1],n=Object(p.d)(n);return u.a.createElement(t,Object(i.a)({},e,{className:m()(a,n)}))},t}(u.a.Component),l=(f.propTypes=l,f.defaultProps={componentClass:"p"},Object(p.a)("form-control-static",f)),h=a("qEYh"),f={componentClass:o.a,type:r.a.string,id:r.a.string,inputRef:r.a.func},a={$bs_formGroup:r.a.object},o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,t=t&&t.controlId,a=this.props,n=a.componentClass,r=a.type,o=a.id,t=void 0===o?t:o,o=a.inputRef,c=a.className,l=a.bsSize,a=Object(d.a)(a,["componentClass","type","id","inputRef","className","bsSize"]),a=Object(p.f)(a),s=a[0],a=a[1];return"file"!==r&&(e=Object(p.d)(s)),l&&(s=h.a[l]||l,e[Object(p.e)({bsClass:"input"},s)]=!0),u.a.createElement(n,Object(i.a)({},a,{type:r,id:t,ref:o,className:m()(c,e)}))},t}(u.a.Component);o.propTypes=f,o.defaultProps={componentClass:"input"},o.contextTypes=a,o.Feedback=c,o.Static=l,t.a=Object(p.a)("form-control",Object(p.b)([h.b.SMALL,h.b.LARGE],o))},KNA3:function(e,t,a){"use strict";a.r(t);var n,r,l=a("mXGw"),s=a("thVU"),i=a("b2Cp"),d=a("ib2A"),m=a("Q7aK"),u=a("44nO"),p=a("IbnU"),f=a("2Fcx"),c=a("Sha/"),h=a("XdbE"),b=a("ddal"),a=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),v=function(){return(v=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=(r=l.Component,a(o,r),o.prototype.componentWillMount=function(){document.title=h.z["/chat-bots/create"]},o.prototype.componentWillUnmount=function(){this.componentState=!1},o.prototype.render=function(){var e=this.state,t=e.validation,a=e.chatBot,n=e.chatBotId,e=e.request,r=e.create,e=e.upload,o=a.avatar.file,c=a.avatar.blobUrl;return l.createElement("div",null,l.createElement("div",{className:"box-shadow r-3x bg-white m-b-md"},l.createElement(m.ToastContainer,null),l.createElement("div",{className:"content-wrapper"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.createElement("span",{className:"text-xsl padder-t-3"},h.z["/chat-bots/create"]))))),l.createElement("hr",null),l.createElement("div",{className:"content-wrapper"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.createElement("form",{className:"form-horizontal"},l.createElement(u.a,{validationState:t.nickname.value},l.createElement("label",{htmlFor:"nickname",className:"col-lg-4 col-md-4 col-sm-4 col-xs-12 control-label"},"Nick name"),l.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},l.createElement(p.a,{name:"nickname",id:"nickname",placeholder:"Nick name",value:a.nickname,disabled:!!n,onChange:this.handleChange}))),l.createElement(u.a,{validationState:t.description.value},l.createElement("label",{htmlFor:"description",className:"col-lg-4 col-md-4 col-sm-4 col-xs-12 control-label"},"Description"),l.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},l.createElement(p.a,{name:"description",id:"description",placeholder:"Description",disabled:!!n,value:a.description,onChange:this.handleChange}))),l.createElement(u.a,{validationState:t.name.value},l.createElement("label",{htmlFor:"name",className:"col-lg-4 col-md-4 col-sm-4 col-xs-12 control-label"},"Name"),l.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},l.createElement(p.a,{name:"name",id:"name",placeholder:"Name",disabled:!!n,value:a.name,onChange:this.handleChange})))))))),l.createElement("hr",null),l.createElement("div",{className:"content-wrapper"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.createElement("div",{className:"text-right flex-end"},l.createElement("button",{type:"submit",className:"btn btn-info m-r-xs",disabled:r.disabled||r.processing||!!n,onClick:this.handleSubmit},"Create ",r.processing&&l.createElement("i",{className:"fa fa-spinner fa-spin m-l-xs"})),l.createElement(s.a,{className:"btn btn-default",to:"/chat-bots"},"Cancel"))))))),l.createElement("div",{className:"box-shadow r-3x bg-white"},l.createElement("div",{className:"content-wrapper"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.createElement("span",{className:"text-xsl padder-t-3"},"Chat Bot Avatar"))))),l.createElement("hr",null),l.createElement("div",{className:"content-wrapper"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.createElement("form",{className:"form-horizontal"},l.createElement(u.a,null,l.createElement("label",{htmlFor:"avatar",className:"col-lg-4 col-md-4 col-sm-4 col-xs-12 control-label"},"Avatar"),l.createElement("div",{className:"col-lg-4 col-md-4 col-sm-6 col-xs-12"},l.createElement(f.a,{htmlFor:"avatar",bsClass:"btn btn-default btn-file"},o&&0<o.size?o.name:"Choose file ..."),l.createElement(p.a,{type:"file",name:"avatar",onChange:this.handleAvatarChange,className:"hidden",id:"avatar",disabled:!n||e.processing,accept:".png,.jpg,.jpeg"})),l.createElement("div",{className:"col-lg-offset-4 col-lg-8 col-md-offset-4 col-md-8 col-sm-8 col-sm-offset-4 col-xs-12"},""!==c&&l.createElement("img",{className:"img-responsive contain m-b-md m-t-md",src:c,alt:"Avatar",style:{width:"100px",height:"100px"}})))))))),l.createElement("hr",null),l.createElement("div",{className:"content-wrapper"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.createElement("div",{className:"text-right"},l.createElement("button",{className:"btn btn-info",disabled:e.disabled||e.processing,onClick:this.handleAvatarUpload},"Upload ",e.processing&&l.createElement("i",{className:"fa fa-spinner fa-spin m-l-xs"})))))))),l.createElement(d.a,{show:e.complete,onHide:this.handleModalClose,bsSize:"small"},l.createElement(d.a.Header,{closeButton:!0}),l.createElement(d.a.Body,null,l.createElement(i.a,{className:"wrapper-md text-center"},l.createElement("button",{className:"btn btn-info btn-block",onClick:this.handleModalClose},"Finish")))))},o);function o(e){var o=r.call(this,e)||this;return o.componentState=!0,o.handleChange=function(e){var e=e.currentTarget,t=e.name,e=e.value,a=o.state.request.create.complete,n=v({},o.state);a&&(n.request.create.complete=!1),n.chatBot[t]=e,n.validation[t].value=""===e?"error":"success",n.request.create.disabled=!Object.keys(n.chatBot).every(function(e){return""!==n.chatBot[e]}),o.setState(n)},o.handleAvatarChange=function(e){var t,e=e.currentTarget,e=(e.name,e.files);e&&0<e.length&&(e=e[0],h.n.includes(e.type)?0===e.size?Object(b.d)("error",{title:"You got an error!",description:"Attached file size is zero",timer:3e3,hideProgress:!0}):((t=v({},o.state)).chatBot.avatar.file=e,t.chatBot.avatar.blobUrl=window.URL.createObjectURL(e),t.request.upload.complete=!1,t.request.upload.disabled=!1,o.setState(t)):Object(b.d)("error",{title:"You got an error!",description:"Not supported file type",timer:3e3,hideProgress:!0}))},o.handleAvatarUpload=function(e){e.preventDefault();var e=o.state,t=e.chatBot.avatar,e=e.chatBotId,a=v({},o.state),n=(a.request.upload.processing=!0,o.setState(a),new FormData),r=(n.append("avatar",t.file),Object(b.d)("info",{title:"Processing...",description:""}));Object(c.i)(e,n).then(function(e){e=e.data;if(e.err)throw new Error(JSON.stringify(e));a.request.upload.complete=!0,a.request.upload.processing=!1,a.request.upload.disabled=!0,o.componentState&&(m.toast.dismiss(r),o.setState(a))}).catch(function(e){console.log(e),a.request.upload.processing=!1,o.componentState&&(o.setState(a),Object(b.d)("error",{title:"You got an error!",description:"Can not upload avatar for unknown reason",id:r}))})},o.handleSubmit=function(e){e.preventDefault();var a=v({},o.state),e={nickname:a.chatBot.nickname,description:a.chatBot.description,name:a.chatBot.name},n=Object(b.d)("info",{title:"Processing...",description:""});a.request.create.processing=!0,o.setState(a),Object(c.a)(e).then(function(e){var t,e=e.data;if(e.err)throw new Error(JSON.stringify(e));for(t in a.chatBotId=e.result.chatBotId||null,a.validation)a.validation.hasOwnProperty(t)&&(a.validation[t]={value:null,error:""});a.request.create.complete=!0,a.request.create.processing=!1,a.request.create.disabled=!1,o.componentState&&(Object(b.d)("success",{title:"Success!",description:"Chat bot was successfully created",id:n}),o.setState(a))}).catch(function(e){console.log(e),a.request.create.complete=!0,a.request.create.processing=!1,a.request.create.disabled=!1,o.componentState&&(o.setState(a),Object(b.d)("error",{title:"You got an error!",description:"Can not create chat bot for unknown reason",id:n}))})},o.handleModalClose=function(){var e=o.props.history,t=v({},o.state);t.request.upload.complete=!1,o.setState(t),e.push("/chat-bots")},o.state={chatBot:{nickname:"",description:"",name:"",avatar:{file:null,blobUrl:""}},chatBotId:null,validation:{nickname:{value:null,message:""},description:{value:null,message:""},name:{value:null,message:""}},request:{create:{processing:!1,complete:!1,disabled:!0},upload:{processing:!1,complete:!1,disabled:!0}}},o}t.default=a},"Sha/":function(e,t,a){"use strict";a.d(t,"g",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"a",function(){return l}),a.d(t,"i",function(){return s}),a.d(t,"h",function(){return i}),a.d(t,"c",function(){return d}),a.d(t,"f",function(){return m}),a.d(t,"b",function(){return u}),a.d(t,"d",function(){return p});var n=a("CrSU"),r=a("mbMT"),o=function(e,t){return r.a.get(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base,{params:{offset:e,limit:t}})},c=function(e){return r.a.get(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e)},l=function(e){return r.a.post(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base,e)},s=function(e,t){return r.a.post(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e+"/avatar",t)},i=function(e,t){return r.a.put(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e,t)},d=function(e){return r.a.delete(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e)},m=function(e,t,a){return r.a.get(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e+"/credentials",{params:{offset:t,limit:a}})},u=function(e){return r.a.post(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e+"/credentials",{})},p=function(e,t){return r.a.delete(n.a.panel.baseUrl+n.a.panel.api.v2.chatBots.base+"/"+e+"/credentials/"+t)}},b2Cp:function(e,t,a){"use strict";var l=a("z3IF"),s=a("3ejq"),n=a("ZHeO"),r=a("8Jek"),i=a.n(r),r=a("mXGw"),d=a.n(r),r=a("W0B4"),r=a.n(r),o=a("4ZsV"),o=a.n(o),m=a("kjvt"),a={horizontal:r.a.bool,inline:r.a.bool,componentClass:o.a},r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.horizontal,a=e.inline,n=e.componentClass,r=e.className,e=Object(s.a)(e,["horizontal","inline","componentClass","className"]),e=Object(m.f)(e),o=e[0],e=e[1],c=[];return t&&c.push(Object(m.e)(o,"horizontal")),a&&c.push(Object(m.e)(o,"inline")),d.a.createElement(n,Object(l.a)({},e,{className:i()(r,c)}))},t}(d.a.Component);r.propTypes=a,r.defaultProps={horizontal:!1,inline:!1,componentClass:"form"},t.a=Object(m.a)("form",r)},ddal:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"b",function(){return i});var l=a("mXGw"),s=a("Q7aK"),n=function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(e,t){var t=t.name,a=new FormData;return a.append("file",e,t+".png"),e=a.get("file")},o=function(e,t){function a(e){var t=e.title,e=e.description;return l.createElement("div",null,l.createElement("span",{className:"block text-md font-bold"},t),l.createElement("span",{className:"block"},e))}var n=t.title,r=t.description,o=t.id,t=t.timer,t=void 0!==t&&t,c=null;return o?s.toast.update(o,{render:l.createElement(a,{title:n,description:r}),transition:s.Slide,position:s.toast.POSITION.TOP_RIGHT,autoClose:3e3,closeOnClick:!0,draggable:!0,hideProgressBar:!0,className:"toast-container toast-container-"+e,bodyClassName:"toast-body",type:e}):c=Object(s.toast)(l.createElement(a,{title:n,description:r}),{transition:s.Slide,position:s.toast.POSITION.TOP_RIGHT,autoClose:t,closeOnClick:!0,draggable:!0,hideProgressBar:!0,className:"toast-container toast-container-"+e,bodyClassName:"toast-body",type:e}),c},c={menu:function(e){return n(n({},e),{zIndex:999})},container:function(e){return n(n({},e),{minHeight:"34px"})},valueContainer:function(e){return n(n({},e),{minHeight:"34px",padding:"0 8px"})},placeholder:function(e){return n(n({},e),{top:"46%"})},input:function(e){return n(n({},e),{paddingTop:"0"})},indicatorsContainer:function(e){return n(n({},e),{minHeight:"34px"})},dropdownIndicator:function(e){return n(n({},e),{padding:"7px"})},control:function(e){return e["&:hover"].borderColor="#d2dcee",n(n({},e),{minHeight:"34px",height:"34px",border:"1px solid #d2dcee",transition:"box-shadow 150ms ease",boxShadow:"0 1px 3px 0 #e5e5e5"})}},i={menu:function(e){return n(n({},e),{zIndex:999})},container:function(e){return n(n({},e),{minHeight:"34px"})},valueContainer:function(e){return n(n({},e),{minHeight:"34px"})},control:function(e){return e["&:hover"].borderColor="#d2dcee",n(n({},e),{minHeight:"34px",border:"1px solid #d2dcee",transition:"box-shadow 150ms ease",boxShadow:"0 1px 3px 0 #e5e5e5"})}}},m56K:function(e,t,a){"use strict";var n=a("mXGw"),o=a.n(n);t.a={map:function(e,t,a){var n=0;return o.a.Children.map(e,function(e){return o.a.isValidElement(e)?t.call(a,e,n++):e})},forEach:function(e,t,a){var n=0;o.a.Children.forEach(e,function(e){o.a.isValidElement(e)&&t.call(a,e,n++)})},count:function(e){var t=0;return o.a.Children.forEach(e,function(e){o.a.isValidElement(e)&&++t}),t},find:function(e,t,a){var n,r=0;return o.a.Children.forEach(e,function(e){n||o.a.isValidElement(e)&&t.call(a,e,r++)&&(n=e)}),n},filter:function(e,t,a){var n=0,r=[];return o.a.Children.forEach(e,function(e){o.a.isValidElement(e)&&t.call(a,e,n++)&&r.push(e)}),r},every:function(e,t,a){var n=0,r=!0;return o.a.Children.forEach(e,function(e){!r||o.a.isValidElement(e)&&!t.call(a,e,n++)&&(r=!1)}),r},some:function(e,t,a){var n=0,r=!1;return o.a.Children.forEach(e,function(e){r||o.a.isValidElement(e)&&t.call(a,e,n++)&&(r=!0)}),r},toArray:function(e){var t=[];return o.a.Children.forEach(e,function(e){o.a.isValidElement(e)&&t.push(e)}),t}}}}]);