import{a as Se,d as Ie,e as ue,g as c,i as ke,o as ae}from"./chunk-ZFFOBQBW.js";import{Pa as $e,R as ye,Ta as Pe,V as we,Va as Ae,Wa as de,X as _e,Xa as ce,ea as I,qa as G,ra as Te,sa as Ne,z as Oe}from"./chunk-RHEUEVEH.js";import{$b as te,Aa as N,Ba as R,C as H,Ca as L,D as E,E as me,Gb as Q,Hb as h,Hc as ve,Ia as k,Jb as m,Kb as ee,L as U,Lb as g,Lc as B,M as Z,Ma as F,N as he,Oc as z,Sb as y,U as fe,W as J,Xb as C,Yb as v,Zb as $,_b as ne,bc as W,dc as ie,ea as K,ec as w,ed as be,fa as ze,ga as r,gc as f,hc as j,ic as _,kc as P,lb as p,lc as se,ld as le,ma as X,mb as u,mc as b,na as Me,nc as S,oc as V,pa as Y,pc as oe,q as d,qc as re,r as M,ra as ge,rb as x,sa as l,tb as O,ub as De,vb as Ce,yc as q}from"./chunk-KASFQB2P.js";var He=["nz-menu-item",""],Re=["*"],Qe=["nz-submenu-inline-child",""];function We(i,a){}var Ve=["nz-submenu-none-inline-child",""];function qe(i,a){}var Ge=["nz-submenu-title",""];function Ue(i,a){if(i&1&&$(0,"span",0),i&2){let e=f();m("nzType",e.nzIcon)}}function Ze(i,a){if(i&1&&(ne(0),C(1,"span",4),oe(2),v(),te()),i&2){let e=f();p(2),re(e.nzTitle)}}function Je(i,a){i&1&&$(0,"span",5)}function Ke(i,a){i&1&&$(0,"span",6)}function Xe(i,a){if(i&1&&(C(0,"span",2),h(1,Je,1,0,"span",5)(2,Ke,1,0,"span",6),v()),i&2){let e,t=f();p(),y((e=t.dir)==="rtl"?1:2)}}function Ye(i,a){i&1&&$(0,"span",3)}var xe=["nz-submenu",""],en=[[["","title",""]],"*"],nn=["[title]","*"];function tn(i,a){i&1&&_(0)}function sn(i,a){if(i&1&&$(0,"div",3),i&2){let e=f(),t=V(6);m("mode",e.mode)("nzOpen",e.nzOpen)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)("menuClass",e.nzMenuClassName)("templateOutlet",t)}}function on(i,a){if(i&1){let e=W();C(0,"div",6),w("subMenuMouseState",function(n){R(e);let s=f(2);return L(s.setMouseEnterState(n))}),v()}if(i&2){let e=f(2),t=V(6);m("theme",e.theme)("mode",e.mode)("nzOpen",e.nzOpen)("position",e.position)("nzDisabled",e.nzDisabled)("isMenuInsideDropDown",e.isMenuInsideDropDown)("templateOutlet",t)("menuClass",e.nzMenuClassName)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}function rn(i,a){if(i&1){let e=W();h(0,on,1,10,"ng-template",5),w("positionChange",function(n){R(e);let s=f();return L(s.onPositionChange(n))})}if(i&2){let e=f(),t=V(1);m("cdkConnectedOverlayPositions",e.overlayPositions)("cdkConnectedOverlayOrigin",t)("cdkConnectedOverlayWidth",e.triggerWidth)("cdkConnectedOverlayOpen",e.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function ln(i,a){i&1&&_(0,1)}var un=["titleElement"],an=["nz-menu-group",""],dn=["*",[["","title",""]]],cn=["*","[title]"];function pn(i,a){if(i&1&&(ne(0),oe(1),te()),i&2){let e=f();p(),re(e.nzTitle)}}function mn(i,a){i&1&&_(0,1)}var D=new Y("NzIsInDropDownMenuToken"),Le=new Y("NzMenuServiceLocalToken"),T=(()=>{class i{constructor(){this.descendantMenuItemClick$=new d,this.childMenuItemClick$=new d,this.theme$=new M("light"),this.mode$=new M("vertical"),this.inlineIndent$=new M(24),this.isChildSubMenuOpen$=new M(!1)}onDescendantMenuItemClick(e){this.descendantMenuItemClick$.next(e)}onChildMenuItemClick(e){this.childMenuItemClick$.next(e)}setMode(e){this.mode$.next(e)}setTheme(e){this.theme$.next(e)}setInlineIndent(e){this.inlineIndent$.next(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=X({token:i,factory:i.\u0275fac})}}return i})(),pe=(()=>{class i{onChildMenuItemClick(e){this.childMenuItemClick$.next(e)}setOpenStateWithoutDebounce(e){this.isCurrentSubMenuOpen$.next(e)}setMouseEnterTitleOrOverlayState(e){this.isMouseEnterTitleOrOverlay$.next(e)}constructor(e){this.nzMenuService=e,this.mode$=this.nzMenuService.mode$.pipe(H(o=>o==="inline"?"inline":o==="vertical"||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isMenuInsideDropDown=l(D),this.isCurrentSubMenuOpen$=new M(!1),this.isChildSubMenuOpen$=new M(!1),this.isMouseEnterTitleOrOverlay$=new d,this.childMenuItemClick$=new d,this.destroy$=new d,this.nzHostSubmenuService=l(i,{optional:!0,skipSelf:!0}),this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);let t=this.childMenuItemClick$.pipe(me(()=>this.mode$),Z(o=>o!=="inline"||this.isMenuInsideDropDown),fe(!1)),n=U(this.isMouseEnterTitleOrOverlay$,t);E([this.isChildSubMenuOpen$,n]).pipe(H(([o,A])=>o||A),he(150),J(),r(this.destroy$)).pipe(J()).subscribe(o=>{this.setOpenStateWithoutDebounce(o),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(o):this.nzMenuService.isChildSubMenuOpen$.next(o)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(ge(T))}}static{this.\u0275prov=X({token:i,factory:i.\u0275fac})}}return i})(),Fe=(()=>{class i{clickMenuItem(e){this.nzDisabled?(e.preventDefault(),e.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(e){this.nzSelected=e,this.selected$.next(e)}updateRouterActive(){!this.listOfRouterLink||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{let e=this.hasActiveLinks();this.nzSelected!==e&&(this.nzSelected=e,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.routerLink&&e(this.routerLink)||this.listOfRouterLink.some(e)}isLinkActive(e){return t=>e.isActive(t.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}constructor(e,t){this.nzMenuService=e,this.cdr=t,this.destroy$=new d,this.nzSubmenuService=l(pe,{optional:!0}),this.directionality=l(I),this.routerLink=l(ue,{optional:!0}),this.router=l(Ie,{optional:!0}),this.isMenuInsideDropDown=l(D),this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new d,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,this.router&&this.router.events.pipe(r(this.destroy$),Z(n=>n instanceof Se)).subscribe(()=>{this.updateRouterActive()})}ngOnInit(){E([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(r(this.destroy$)).subscribe(([e,t])=>{this.inlinePaddingLeft=e==="inline"?this.level*t:null}),this.dir=this.directionality.value,this.directionality.change?.pipe(r(this.destroy$)).subscribe(e=>{this.dir=e})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe(r(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(e){e.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(u(T),u(B))}}static{this.\u0275cmp=O({type:i,selectors:[["","nz-menu-item",""]],contentQueries:function(t,n,s){if(t&1&&P(s,ue,5),t&2){let o;b(o=S())&&(n.listOfRouterLink=o)}},hostVars:20,hostBindings:function(t,n){t&1&&w("click",function(o){return n.clickMenuItem(o)}),t&2&&(ee("padding-left",n.dir==="rtl"?null:n.nzPaddingLeft||n.inlinePaddingLeft,"px")("padding-right",n.dir==="rtl"?n.nzPaddingLeft||n.inlinePaddingLeft:null,"px"),g("ant-dropdown-menu-item",n.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",n.isMenuInsideDropDown&&n.nzSelected)("ant-dropdown-menu-item-danger",n.isMenuInsideDropDown&&n.nzDanger)("ant-dropdown-menu-item-disabled",n.isMenuInsideDropDown&&n.nzDisabled)("ant-menu-item",!n.isMenuInsideDropDown)("ant-menu-item-selected",!n.isMenuInsideDropDown&&n.nzSelected)("ant-menu-item-danger",!n.isMenuInsideDropDown&&n.nzDanger)("ant-menu-item-disabled",!n.isMenuInsideDropDown&&n.nzDisabled))},inputs:{nzPaddingLeft:[2,"nzPaddingLeft","nzPaddingLeft",Oe],nzDisabled:[2,"nzDisabled","nzDisabled",z],nzSelected:[2,"nzSelected","nzSelected",z],nzDanger:[2,"nzDanger","nzDanger",z],nzMatchRouterExact:[2,"nzMatchRouterExact","nzMatchRouterExact",z],nzMatchRouter:[2,"nzMatchRouter","nzMatchRouter",z]},exportAs:["nzMenuItem"],features:[Q,N],attrs:He,ngContentSelectors:Re,decls:2,vars:0,consts:[[1,"ant-menu-title-content"]],template:function(t,n){t&1&&(j(),C(0,"span",0),_(1),v())},encapsulation:2,changeDetection:0})}}return i})(),hn=(()=>{class i{constructor(e,t,n){this.elementRef=e,this.renderer=t,this.directionality=n,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new d}calcMotionState(){this.nzOpen?this.expandState="expanded":this.expandState="collapsed"}ngOnInit(){this.calcMotionState(),this.dir=this.directionality.value,this.directionality.change?.pipe(r(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){let{mode:t,nzOpen:n,menuClass:s}=e;(t||n)&&this.calcMotionState(),s&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(o=>!!o).forEach(o=>{this.renderer.removeClass(this.elementRef.nativeElement,o)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(o=>!!o).forEach(o=>{this.renderer.addClass(this.elementRef.nativeElement,o)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(u(F),u(x),u(I))}}static{this.\u0275cmp=O({type:i,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(t,n){t&2&&(ie("@collapseMotion",n.expandState),g("ant-menu-rtl",n.dir==="rtl"))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[N],attrs:Qe,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&h(0,We,0,0,"ng-template",0),t&2&&m("ngTemplateOutlet",n.templateOutlet)},dependencies:[le],encapsulation:2,data:{animation:[$e]},changeDetection:0})}}return i})(),fn=(()=>{class i{constructor(e){this.directionality=e,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new k,this.expandState="collapsed",this.dir="ltr",this.destroy$=new d}setMouseState(e){this.nzDisabled||this.subMenuMouseState.next(e)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?this.mode==="horizontal"?this.expandState="bottom":this.mode==="vertical"&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){this.calcMotionState(),this.dir=this.directionality.value,this.directionality.change?.pipe(r(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){let{mode:t,nzOpen:n}=e;(t||n)&&this.calcMotionState()}static{this.\u0275fac=function(t){return new(t||i)(u(I))}}static{this.\u0275cmp=O({type:i,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(t,n){t&1&&w("mouseenter",function(){return n.setMouseState(!0)})("mouseleave",function(){return n.setMouseState(!1)}),t&2&&(ie("@slideMotion",n.expandState)("@zoomBigMotion",n.expandState),g("ant-menu-light",n.theme==="light")("ant-menu-dark",n.theme==="dark")("ant-menu-submenu-placement-bottom",n.mode==="horizontal")("ant-menu-submenu-placement-right",n.mode==="vertical"&&n.position==="right")("ant-menu-submenu-placement-left",n.mode==="vertical"&&n.position==="left")("ant-menu-submenu-rtl",n.dir==="rtl"))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[N],attrs:Ve,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(t,n){t&1&&(C(0,"div",0),h(1,qe,0,0,"ng-template",1),v()),t&2&&(g("ant-dropdown-menu",n.isMenuInsideDropDown)("ant-menu",!n.isMenuInsideDropDown)("ant-dropdown-menu-vertical",n.isMenuInsideDropDown)("ant-menu-vertical",!n.isMenuInsideDropDown)("ant-dropdown-menu-sub",n.isMenuInsideDropDown)("ant-menu-sub",!n.isMenuInsideDropDown)("ant-menu-rtl",n.dir==="rtl"),m("ngClass",n.menuClass),p(),m("ngTemplateOutlet",n.templateOutlet))},dependencies:[be,le],encapsulation:2,data:{animation:[Ae,Pe]},changeDetection:0})}}return i})(),je=(()=>{class i{constructor(e,t){this.cdr=e,this.directionality=t,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new k,this.subMenuMouseState=new k,this.dir="ltr",this.destroy$=new d}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(r(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(e){this.nzDisabled||this.subMenuMouseState.next(e)}clickTitle(){this.mode==="inline"&&!this.nzDisabled&&this.toggleSubMenu.emit()}static{this.\u0275fac=function(t){return new(t||i)(u(B),u(I))}}static{this.\u0275cmp=O({type:i,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(t,n){t&1&&w("click",function(){return n.clickTitle()})("mouseenter",function(){return n.setMouseState(!0)})("mouseleave",function(){return n.setMouseState(!1)}),t&2&&(ee("padding-left",n.dir==="rtl"?null:n.paddingLeft,"px")("padding-right",n.dir==="rtl"?n.paddingLeft:null,"px"),g("ant-dropdown-menu-submenu-title",n.isMenuInsideDropDown)("ant-menu-submenu-title",!n.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:Ge,ngContentSelectors:Re,decls:5,vars:3,consts:[["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet"],[1,"ant-dropdown-menu-submenu-expand-icon"],[1,"ant-menu-submenu-arrow"],[1,"ant-menu-title-content"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"]],template:function(t,n){t&1&&(j(),h(0,Ue,1,1,"span",0)(1,Ze,3,1,"ng-container",1),_(2),h(3,Xe,3,1,"span",2)(4,Ye,1,0,"span",3)),t&2&&(y(n.nzIcon?0:-1),p(),m("nzStringTemplateOutlet",n.nzTitle),p(2),y(n.isMenuInsideDropDown?3:4))},dependencies:[_e,we,ce,de],encapsulation:2,changeDetection:0})}}return i})(),Ee=[c.rightTop,c.right,c.rightBottom,c.leftTop,c.left,c.leftBottom],zn=[c.bottomLeft,c.bottomRight,c.topRight,c.topLeft],Be=(()=>{class i{setOpenStateWithoutDebounce(e){this.nzSubmenuService.setOpenStateWithoutDebounce(e)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(e){this.isActive=e,this.mode!=="inline"&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(e)}setTriggerWidth(){this.mode==="horizontal"&&this.platform.isBrowser&&this.cdkOverlayOrigin&&this.nzPlacement==="bottomLeft"&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(e){let t=ke(e);t==="rightTop"||t==="rightBottom"||t==="right"?this.position="right":(t==="leftTop"||t==="leftBottom"||t==="left")&&(this.position="left")}constructor(e,t,n,s){this.nzMenuService=e,this.cdr=t,this.nzSubmenuService=n,this.platform=s,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzPlacement="bottomLeft",this.nzOpenChange=new k,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new d,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=Ee,this.isSelected=!1,this.isActive=!1,this.dir="ltr",this.isMenuInsideDropDown=l(D),this.noAnimation=l(ae,{optional:!0,host:!0}),this.directionality=l(I)}ngOnInit(){this.nzMenuService.theme$.pipe(r(this.destroy$)).subscribe(e=>{this.theme=e,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe(r(this.destroy$)).subscribe(e=>{this.mode=e,e==="horizontal"?this.overlayPositions=[c[this.nzPlacement],...zn]:e==="vertical"&&(this.overlayPositions=Ee),this.cdr.markForCheck()}),E([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(r(this.destroy$)).subscribe(([e,t])=>{this.inlinePaddingLeft=e==="inline"?this.level*t:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(r(this.destroy$)).subscribe(e=>{this.isActive=e,e!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=e,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,this.directionality.change?.pipe(r(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();let e=this.listOfNzMenuItemDirective,t=e.changes,n=U(t,...e.map(s=>s.selected$));t.pipe(K(e),ze(()=>n),K(!0),H(()=>e.some(s=>s.nzSelected)),r(this.destroy$)).subscribe(s=>{this.isSelected=s,this.cdr.markForCheck()})}ngOnChanges(e){let{nzOpen:t}=e;t&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(u(T),u(B),u(pe),u(ye))}}static{this.\u0275cmp=O({type:i,selectors:[["","nz-submenu",""]],contentQueries:function(t,n,s){if(t&1&&(P(s,i,5),P(s,Fe,5)),t&2){let o;b(o=S())&&(n.listOfNzSubMenuComponent=o),b(o=S())&&(n.listOfNzMenuItemDirective=o)}},viewQuery:function(t,n){if(t&1&&se(G,7,F),t&2){let s;b(s=S())&&(n.cdkOverlayOrigin=s.first)}},hostVars:34,hostBindings:function(t,n){t&2&&g("ant-dropdown-menu-submenu",n.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",n.isMenuInsideDropDown&&n.nzDisabled)("ant-dropdown-menu-submenu-open",n.isMenuInsideDropDown&&n.nzOpen)("ant-dropdown-menu-submenu-selected",n.isMenuInsideDropDown&&n.isSelected)("ant-dropdown-menu-submenu-vertical",n.isMenuInsideDropDown&&n.mode==="vertical")("ant-dropdown-menu-submenu-horizontal",n.isMenuInsideDropDown&&n.mode==="horizontal")("ant-dropdown-menu-submenu-inline",n.isMenuInsideDropDown&&n.mode==="inline")("ant-dropdown-menu-submenu-active",n.isMenuInsideDropDown&&n.isActive)("ant-menu-submenu",!n.isMenuInsideDropDown)("ant-menu-submenu-disabled",!n.isMenuInsideDropDown&&n.nzDisabled)("ant-menu-submenu-open",!n.isMenuInsideDropDown&&n.nzOpen)("ant-menu-submenu-selected",!n.isMenuInsideDropDown&&n.isSelected)("ant-menu-submenu-vertical",!n.isMenuInsideDropDown&&n.mode==="vertical")("ant-menu-submenu-horizontal",!n.isMenuInsideDropDown&&n.mode==="horizontal")("ant-menu-submenu-inline",!n.isMenuInsideDropDown&&n.mode==="inline")("ant-menu-submenu-active",!n.isMenuInsideDropDown&&n.isActive)("ant-menu-submenu-rtl",n.dir==="rtl")},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:[2,"nzOpen","nzOpen",z],nzDisabled:[2,"nzDisabled","nzDisabled",z],nzPlacement:"nzPlacement"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[q([pe]),Q,N],attrs:xe,ngContentSelectors:nn,decls:7,vars:8,consts:[["origin","cdkOverlayOrigin"],["subMenuTemplate",""],["nz-submenu-title","","cdkOverlayOrigin","",3,"subMenuMouseState","toggleSubMenu","nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn"],["cdkConnectedOverlay","",3,"positionChange","cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn"],["nz-submenu-none-inline-child","",3,"subMenuMouseState","theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation"]],template:function(t,n){if(t&1){let s=W();j(en),C(0,"div",2,0),w("subMenuMouseState",function(A){return R(s),L(n.setMouseEnterState(A))})("toggleSubMenu",function(){return R(s),L(n.toggleSubMenu())}),h(2,tn,1,0),v(),h(3,sn,1,6,"div",3)(4,rn,1,5,null,4)(5,ln,1,0,"ng-template",null,1,ve)}t&2&&(m("nzIcon",n.nzIcon)("nzTitle",n.nzTitle)("mode",n.mode)("nzDisabled",n.nzDisabled)("isMenuInsideDropDown",n.isMenuInsideDropDown)("paddingLeft",n.nzPaddingLeft||n.inlinePaddingLeft),p(2),y(n.nzTitle?-1:2),p(),y(n.mode==="inline"?3:4))},dependencies:[je,hn,ae,fn,Ne,Te,G],encapsulation:2,changeDetection:0})}}return i})();function Mn(){let i=l(T,{skipSelf:!0,optional:!0}),a=l(Le);return i??a}function gn(){return l(D,{skipSelf:!0,optional:!0})??!1}var Xn=(()=>{class i{setInlineCollapsed(e){this.nzInlineCollapsed=e,this.inlineCollapsed$.next(e)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(e=>e.nzOpen),this.listOfNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}constructor(e,t){this.nzMenuService=e,this.cdr=t,this.isMenuInsideDropDown=l(D),this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new k,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new M(this.nzInlineCollapsed),this.mode$=new M(this.nzMode),this.destroy$=new d,this.listOfOpenedNzSubMenuComponent=[],this.directionality=l(I)}ngOnInit(){E([this.inlineCollapsed$,this.mode$]).pipe(r(this.destroy$)).subscribe(([e,t])=>{this.actualMode=e?"vertical":t,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe(r(this.destroy$)).subscribe(e=>{this.nzClick.emit(e),this.nzSelectable&&!e.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(t=>t.setSelectedState(t===e))}),this.dir=this.directionality.value,this.directionality.change?.pipe(r(this.destroy$)).subscribe(e=>{this.dir=e,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe(r(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(e){let{nzInlineCollapsed:t,nzInlineIndent:n,nzTheme:s,nzMode:o}=e;t&&this.inlineCollapsed$.next(this.nzInlineCollapsed),n&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),s&&this.nzMenuService.setTheme(this.nzTheme),o&&(this.mode$.next(this.nzMode),!e.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(A=>A.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||i)(u(T),u(B))}}static{this.\u0275dir=Ce({type:i,selectors:[["","nz-menu",""]],contentQueries:function(t,n,s){if(t&1&&(P(s,Fe,5),P(s,Be,5)),t&2){let o;b(o=S())&&(n.listOfNzMenuItemDirective=o),b(o=S())&&(n.listOfNzSubMenuComponent=o)}},hostVars:34,hostBindings:function(t,n){t&2&&g("ant-dropdown-menu",n.isMenuInsideDropDown)("ant-dropdown-menu-root",n.isMenuInsideDropDown)("ant-dropdown-menu-light",n.isMenuInsideDropDown&&n.nzTheme==="light")("ant-dropdown-menu-dark",n.isMenuInsideDropDown&&n.nzTheme==="dark")("ant-dropdown-menu-vertical",n.isMenuInsideDropDown&&n.actualMode==="vertical")("ant-dropdown-menu-horizontal",n.isMenuInsideDropDown&&n.actualMode==="horizontal")("ant-dropdown-menu-inline",n.isMenuInsideDropDown&&n.actualMode==="inline")("ant-dropdown-menu-inline-collapsed",n.isMenuInsideDropDown&&n.nzInlineCollapsed)("ant-menu",!n.isMenuInsideDropDown)("ant-menu-root",!n.isMenuInsideDropDown)("ant-menu-light",!n.isMenuInsideDropDown&&n.nzTheme==="light")("ant-menu-dark",!n.isMenuInsideDropDown&&n.nzTheme==="dark")("ant-menu-vertical",!n.isMenuInsideDropDown&&n.actualMode==="vertical")("ant-menu-horizontal",!n.isMenuInsideDropDown&&n.actualMode==="horizontal")("ant-menu-inline",!n.isMenuInsideDropDown&&n.actualMode==="inline")("ant-menu-inline-collapsed",!n.isMenuInsideDropDown&&n.nzInlineCollapsed)("ant-menu-rtl",n.dir==="rtl")},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:[2,"nzInlineCollapsed","nzInlineCollapsed",z],nzSelectable:[2,"nzSelectable","nzSelectable",z]},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[q([{provide:Le,useClass:T},{provide:T,useFactory:Mn},{provide:D,useFactory:gn}]),Q,N]})}}return i})();function Dn(){return l(D,{optional:!0,skipSelf:!0})??!1}var Cn=(()=>{class i{constructor(e,t){this.elementRef=e,this.renderer=t,this.isMenuInsideDropDown=l(D);let n=this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group";this.renderer.addClass(e.nativeElement,n)}ngAfterViewInit(){let e=this.titleElement.nativeElement.nextElementSibling;if(e){let t=this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list";this.renderer.addClass(e,t)}}static{this.\u0275fac=function(t){return new(t||i)(u(F),u(x))}}static{this.\u0275cmp=O({type:i,selectors:[["","nz-menu-group",""]],viewQuery:function(t,n){if(t&1&&se(un,5),t&2){let s;b(s=S())&&(n.titleElement=s.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[q([{provide:D,useFactory:Dn}])],attrs:an,ngContentSelectors:cn,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(j(dn),C(0,"div",null,0),h(2,pn,2,1,"ng-container",1)(3,mn,1,0),v(),_(4)),t&2&&(g("ant-menu-item-group-title",!n.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",n.isMenuInsideDropDown),p(2),m("nzStringTemplateOutlet",n.nzTitle),p(),y(n.nzTitle?-1:3))},dependencies:[ce,de],encapsulation:2,changeDetection:0})}}return i})();var Yn=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=De({type:i})}static{this.\u0275inj=Me({imports:[Be,Cn,je]})}}return i})();export{D as a,T as b,Fe as c,Be as d,Xn as e,Yn as f};
