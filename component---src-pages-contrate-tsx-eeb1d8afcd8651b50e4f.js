(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{orv3:function(o,t,e){"use strict";e.r(t);var r=e("q1tI"),n=e("9Dj+"),a=e("OPA0"),l=e("bBLm"),i=e("WOvX"),d=e("9h5o"),s=Object(d.a)(),c=(Object(i.a)((function(o){var t=o.styles,e=o.theme,n=o.className,a=o.vertical,l=o.alignContent,i=s(t,{theme:e,className:n,alignContent:l,vertical:a});return r.createElement("div",{className:i.root},r.createElement("div",{className:i.content,role:"separator","aria-orientation":a?"vertical":"horizontal"},o.children))}),(function(o){var t=o.theme,e=o.alignContent,r=o.vertical,n=o.className,a="start"===e,l="center"===e,i="end"===e;return{root:[t.fonts.medium,{position:"relative"},e&&{textAlign:e},!e&&{textAlign:"center"},r&&(l||!e)&&{verticalAlign:"middle"},r&&a&&{verticalAlign:"top"},r&&i&&{verticalAlign:"bottom"},r&&{padding:"0 4px",height:"inherit",display:"table-cell",zIndex:1,selectors:{":after":{backgroundColor:t.palette.neutralLighter,width:"1px",content:'""',position:"absolute",top:"0",bottom:"0",left:"50%",right:"0",zIndex:-1}}},!r&&{padding:"4px 0",selectors:{":before":{backgroundColor:t.palette.neutralLighter,height:"1px",content:'""',display:"block",position:"absolute",top:"50%",bottom:"0",left:"0",right:"0"}}},n],content:[{position:"relative",display:"inline-block",padding:"0 12px",color:t.semanticColors.bodyText,background:t.semanticColors.bodyBackground},r&&{padding:"12px 0"}]}}),void 0,{scope:"Separator"}),e("tqYG")),u=function(o){var t=o.children,e=o.onClick;return r.createElement(l.a,{style:{backgroundColor:Object(c.o)().palette.white,borderRadius:2,boxShadow:"2px 2px 4px 0px rgba(0,0,0,0.2)",cursor:null!=e?"pointer":void 0,width:"100%",maxWidth:512},onClick:e},t)},b=e("hR4L"),p=e("mrSG"),g=e("7Uas"),m=e("Z4jB"),h=e("odSE"),C=e("xL1/"),B=e("k5Q5"),k=Object(C.a)((function(o,t){var e,r,n,a,l,i,d,s,u,b,g=o.effects,m=o.palette,h=o.semanticColors,C={position:"absolute",width:1,right:31,top:8,bottom:8},B={splitButtonContainer:[Object(c.k)(o,{highContrastStyle:{left:-2,top:-2,bottom:-2,right:-2,border:"none"},inset:2}),{display:"inline-flex",selectors:{".ms-Button--default":{borderTopRightRadius:"0",borderBottomRightRadius:"0",borderRight:"none"},".ms-Button--primary":{borderTopRightRadius:"0",borderBottomRightRadius:"0",border:"none",selectors:(e={},e[c.d]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},e)},".ms-Button--primary + .ms-Button":{border:"none"}}}],splitButtonContainerHovered:{selectors:{".ms-Button--primary":{selectors:(r={},r[c.d]={color:"Window",backgroundColor:"Highlight"},r)},".ms-Button.is-disabled":{color:h.buttonTextDisabled,selectors:(n={},n[c.d]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},n)}}},splitButtonContainerChecked:{selectors:{".ms-Button--primary":{selectors:(a={},a[c.d]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},a)}}},splitButtonContainerCheckedHovered:{selectors:{".ms-Button--primary":{selectors:(l={},l[c.d]={color:"Window",backgroundColor:"WindowText",MsHighContrastAdjust:"none"},l)}}},splitButtonContainerFocused:{outline:"none!important"},splitButtonMenuButton:{padding:6,height:"auto",boxSizing:"border-box",borderRadius:0,borderTopRightRadius:g.roundedCorner2,borderBottomRightRadius:g.roundedCorner2,border:"1px solid "+m.neutralSecondaryAlt,borderLeft:"none",outline:"transparent",userSelect:"none",display:"inline-block",textDecoration:"none",textAlign:"center",cursor:"pointer",verticalAlign:"top",width:32,marginLeft:-1,marginTop:0,marginRight:0,marginBottom:0},splitButtonDivider:Object(p.a)(Object(p.a)({},C),{selectors:(i={},i[c.d]={backgroundColor:"WindowText"},i)}),splitButtonDividerDisabled:Object(p.a)(Object(p.a)({},C),{selectors:(d={},d[c.d]={backgroundColor:"GrayText"},d)}),splitButtonMenuButtonDisabled:{pointerEvents:"none",border:"none",selectors:(s={":hover":{cursor:"default"},".ms-Button--primary":{selectors:(u={},u[c.d]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},u)}},s[c.d]={border:"1px solid GrayText",color:"GrayText",backgroundColor:"Window"},s)},splitButtonFlexContainer:{display:"flex",height:"100%",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"},splitButtonContainerDisabled:{outline:"none",border:"none",selectors:(b={},b[c.d]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},b)}};return Object(c.h)(B,t)})),y=e("LQdl");var x=Object(C.a)((function(o,t,e){var r=Object(B.a)(o),n=k(o),a={root:{minWidth:"80px",height:"32px"},label:{fontWeight:c.c.semibold}};return Object(c.h)(r,a,e?function(o){var t,e,r,n,a,l,i,d,s,u=o.palette,b=o.semanticColors;return{root:{backgroundColor:b.primaryButtonBackground,border:"1px solid "+b.primaryButtonBackground,color:b.primaryButtonText,selectors:(t={},t[c.d]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},t["."+y.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:u.white}}},t)},rootHovered:{backgroundColor:b.primaryButtonBackgroundHovered,border:"1px solid "+b.primaryButtonBackgroundHovered,color:b.primaryButtonTextHovered,selectors:(e={},e[c.d]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},e)},rootPressed:{backgroundColor:b.primaryButtonBackgroundPressed,border:"1px solid "+b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed,selectors:(r={},r[c.d]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},r)},rootExpanded:{backgroundColor:b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed},rootChecked:{backgroundColor:b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed},rootDisabled:{selectors:(n={},n[c.d]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},n)},splitButtonContainer:{selectors:(a={},a[c.d]={border:"none"},a)},splitButtonDivider:Object(p.a)(Object(p.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:u.white,selectors:(l={},l[c.d]={backgroundColor:"Window"},l)}),splitButtonMenuButton:{backgroundColor:b.primaryButtonBackground,color:b.primaryButtonText,selectors:(i={},i[c.d]={backgroundColor:"WindowText"},i[":hover"]={backgroundColor:b.primaryButtonBackgroundHovered,selectors:(d={},d[c.d]={color:"Highlight"},d)},i)},splitButtonMenuButtonDisabled:{backgroundColor:b.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:b.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:b.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:b.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:b.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:b.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:b.primaryButtonText},splitButtonMenuIconDisabled:{color:u.neutralTertiary,selectors:(s={},s[c.d]={color:"GrayText"},s)}}}(o):function(o){var t,e,r,n,a,l=o.semanticColors,i=o.palette,d=l.buttonBackground,s=l.buttonBackgroundPressed,u=l.buttonBackgroundHovered,b=l.buttonText,g=l.buttonTextHovered,m=l.buttonTextChecked,h=l.buttonTextCheckedHovered;return{root:{backgroundColor:d,color:b},rootHovered:{backgroundColor:u,color:g,selectors:(t={},t[c.d]={borderColor:"Highlight",color:"Highlight"},t)},rootPressed:{backgroundColor:s,color:m},rootExpanded:{backgroundColor:s,color:m},rootChecked:{backgroundColor:s,color:m},rootCheckedHovered:{backgroundColor:s,color:h},rootDisabled:{selectors:(e={},e[c.d]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},e)},splitButtonContainer:{selectors:(r={},r[c.d]={border:"none"},r)},splitButtonMenuButton:{color:i.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:i.neutralLight,selectors:(n={},n[c.d]={color:"Highlight"},n)}}},splitButtonMenuButtonDisabled:{backgroundColor:l.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:l.buttonBackgroundDisabled}}},splitButtonDivider:Object(p.a)(Object(p.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:i.neutralTertiaryAlt,selectors:(a={},a[c.d]={backgroundColor:"WindowText"},a)}),splitButtonDividerDisabled:{backgroundColor:o.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:i.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:i.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:i.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:i.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:l.buttonText},splitButtonMenuIconDisabled:{color:l.buttonTextDisabled}}}(o),n,t)})),v=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return Object(p.c)(t,o),t.prototype.render=function(){var o=this.props,t=o.primary,e=void 0!==t&&t,n=o.styles,a=o.theme;return r.createElement(h.a,Object(p.a)({},this.props,{variantClassName:e?"ms-Button--primary":"ms-Button--default",styles:x(a,n,e),onRenderDescription:g.b}))},t=Object(p.b)([Object(m.a)("DefaultButton",["theme","styles"],!0)],t)}(g.a),T=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return Object(p.c)(t,o),t.prototype.render=function(){return r.createElement(v,Object(p.a)({},this.props,{primary:!0,onRenderDescription:g.b}))},t=Object(p.b)([Object(m.a)("PrimaryButton",["theme","styles"],!0)],t)}(g.a),w=function(){return r.createElement(u,{onClick:void 0},r.createElement(l.a,{tokens:{padding:"m",childrenGap:"m"},style:{paddingBottom:8}},r.createElement(b.a,{variant:"large",style:{color:Object(c.o)().palette.themePrimary}},"Entre em contato"),r.createElement(b.a,null,"bla bla bla bla")),r.createElement(l.a,{tokens:{padding:"s1"}},r.createElement(T,{href:"https://api.whatsapp.com/send?phone=+5531986753847"},"Conversar pelo WhatsApp")))};t.default=function(){return r.createElement(n.a,{selectedKey:"contrate"},r.createElement(a.a,{bgColor:"green",title:"Tenha um ponto de recolha no seu estabalecimento",subtitle:"Deixa a gente reciclar seu lixo e recebe prêmios das empresas parceiras!"}),r.createElement(a.a,{bgColor:"white",title:"Como funciona?",subtitle:"bla bla bla bla bla bla"}),r.createElement(l.a,{tokens:{padding:"m",childrenGap:"m"},horizontalAlign:"center",style:{width:"100%",paddingTop:32,paddingBottom:32}},r.createElement(w,null)))}}}]);
//# sourceMappingURL=component---src-pages-contrate-tsx-eeb1d8afcd8651b50e4f.js.map