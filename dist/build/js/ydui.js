/*! YDUI Touch v1.0.0 by YDCSS (c) 2016 Licensed MIT */ 
!function(t){"use strict";var e=t.$=jQuery,n=t.document,i={};e(t).on("load",function(){"function"==typeof FastClick&&FastClick.attach(n.body)}),i.util={parseOptions:function(t){if(e.isPlainObject(t))return t;var n=t?t.indexOf("{"):-1,i={};if(-1!=n)try{i=new Function("","var json = "+t.substr(n)+"; return JSON.parse(JSON.stringify(json));")()}catch(o){}return i},pageScroll:function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,n.addEventListener("touchmove",t))},unlock:function(){e=!1,n.removeEventListener("touchmove",t)}}}()},e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one("webkitTransitionEnd",function(){n=!0});var o=function(){n||e(i).trigger("webkitTransitionEnd")};setTimeout(o,t)},"function"==typeof define?define(i):t.YDUI=i}(window),!function(t){"use strict";function e(t,e){this.$element=i(t),this.closeElement=e,this.toggleClass="actionsheet-toggle"}function n(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var o=i(this),a=o.data("ydui.actionsheet");a||(o.data("ydui.actionsheet",a=new e(this,t.closeElement)),t&&"object"!=typeof t||a.open()),"string"==typeof t&&a[t]&&a[t].apply(a,n)})}var i=t.$,o=t.document,a=i(o),r=i(o.body),s=i('<div class="mask-black"></div>');e.prototype.open=function(){var t=this;r.append(s),s.on("click.ydui.actionsheet.mask",function(){t.close()}),t.closeElement&&a.on("click.ydui.actionsheet",t.closeElement,function(){t.close()}),t.$element.addClass(t.toggleClass).trigger("open.ydui.actionsheet")},e.prototype.close=function(){var t=this;s.off("click.ydui.actionsheet.mask").remove(),t.$element.removeClass(t.toggleClass).trigger("close.ydui.actionsheet")},a.on("click.ydui.actionsheet.data-api","[data-ydui-actionsheet]",function(e){e.preventDefault();var o=t.YDUI.util.parseOptions(i(this).data("ydui-actionsheet")),a=i(o.target),r=a.data("ydui.actionsheet")?"open":o;n.call(a,r)}),i.fn.actionSheet=n}(window),!function(t){t.document.addEventListener("touchstart",function(t){},!1)}(window),!function(t){var e=t.document,n=t.YDUI,i=t.navigator&&t.navigator.userAgent||"",o=!!i.match(/(iPad).*OS\s([\d_]+)/),a=!!i.match(/(iPod)(.*OS\s([\d_]+))?/),r=!o&&!!i.match(/(iPhone\sOS)\s([\d_]+)/);n.device={isMobile:!!i.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in e.documentElement,isIOS:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isAndroid:!!i.match(/(Android);?[\s\/]+([\d.]+)?/),isIpad:o,isIpod:a,isIphone:r,isWebView:(r||o||a)&&!!i.match(/.*AppleWebKit(?!.*Safari)/i),isWeixin:i.indexOf("MicroMessenger")>-1,pixelRatio:t.devicePixelRatio||1}}(window),!function(t,e){"use strict";var n=t.$,i=e.dialog=e.dialog||{},o=n(t.document.body);i.confirm=function(t,i,a){var r="YDUI_CONFRIM";n("#"+r).remove();var s=arguments.length;if(2>s)return void console.error("From YDUI's confirm: Please set two or three parameters!!!");if("function"!=typeof arguments[1]&&2==s&&!arguments[1]instanceof Array)return void console.error("From YDUI's confirm: The second parameter must be a function or array!!!");2==s&&(a=i,i=t,t="提示");var c=a;"function"==typeof a&&(c=[{txt:"取消",color:!1},{txt:"确定",color:!0,callback:function(){a&&a()}}]);var l=n('<div id="'+r+'">   <div class="mask-black"></div>   <div class="m-confirm">       <div class="confirm-hd"><strong class="confirm-title">'+t+'</strong></div>       <div class="confirm-bd">'+i+"</div>   </div></div>"),u=n('<div class="confirm-ft"></div>');n.each(c,function(t,i){var o;"boolean"==typeof i.color?o=n('<a href="javascript:;" class="confirm-btn '+(i.color?"primary":"default")+'">'+(i.txt||"")+"</a>"):"string"==typeof i.color&&(o=n('<a href="javascript:;" style="color: '+i.color+'">'+(i.txt||"")+"</a>")),function(t){o.on("click",function(){c[t].stay||(e.util.pageScroll.unlock(),l.remove()),c[t].callback&&c[t].callback()})}(t),u.append(o)}),l.find(".m-confirm").append(u),e.util.pageScroll.lock(),o.append(l)},i.alert=function(t,i){var a="YDUI_ALERT";n("#"+a).remove();var r=n('<div id="'+a+'">   <div>       <div class="mask-black"></div>       <div class="m-confirm m-alert">           <div class="confirm-bd">'+(t||"YDUI Touch")+'</div>           <div class="confirm-ft">               <a href="javascript:;" class="confirm-btn primary">确定</a>           </div>       </div>   </div></div>');e.util.pageScroll.lock(),o.append(r),r.find("a").on("click",function(){r.remove(),e.util.pageScroll.unlock(),"function"==typeof i&&i()})},i.toast=function(){var t=null;return function(i,a,r,s){clearTimeout(t);var c="YDUI_TOAST";n("#"+c).remove();var l=arguments.length;if(2>l)return void console.error("From YDUI's toast: Please set two or more parameters!!!");var u=n('<div id="'+c+'">   <div class="mask-white"></div>   <div class="m-toast">       <div class="'+("error"==a?"toast-error-ico":"toast-success-ico")+'"></div>       <p class="toast-content">'+(i||"")+"</p>   </div></div>");e.util.pageScroll.lock(),o.append(u),"function"==typeof r&&arguments.length>=3&&(s=r,r=2e3),t=setTimeout(function(){clearTimeout(t),e.util.pageScroll.unlock(),u.remove(),"function"==typeof s&&s()},(~~r||2e3)+100)}}(),i.notify=function(){var t=null;return function(e,i,a){clearTimeout(t);var r="YDUI_NOTIFY";n("#"+r).remove();var s=n('<div id="'+r+'"><div class="m-notify">'+(e||"")+"</div></div>");o.append(s);var c=function(){s.remove(),"function"==typeof a&&a()},l=function(){clearTimeout(t),s.find(".m-notify").addClass("notify-out"),s.one("webkitTransitionEnd",c).emulateTransitionEnd(150)};s.on("click",l),~~i>0&&(t=setTimeout(l,i+200))}}(),i.loading=function(){var t="YDUI_LOADING";return{open:function(i){n("#"+t).remove();var a=n('<div id="'+t+'">    <div class="mask-white"></div>    <div class="m-loading">        <div class="loading-hd">            <div class="loading-leaf loading-leaf-0"></div>            <div class="loading-leaf loading-leaf-1"></div>            <div class="loading-leaf loading-leaf-2"></div>            <div class="loading-leaf loading-leaf-3"></div>            <div class="loading-leaf loading-leaf-4"></div>            <div class="loading-leaf loading-leaf-5"></div>            <div class="loading-leaf loading-leaf-6"></div>            <div class="loading-leaf loading-leaf-7"></div>            <div class="loading-leaf loading-leaf-8"></div>            <div class="loading-leaf loading-leaf-9"></div>            <div class="loading-leaf loading-leaf-10"></div>            <div class="loading-leaf loading-leaf-11"></div>        </div>        <p class="loading-txt">'+(i||"数据加载中")+"</p>    </div></div>").remove();e.util.pageScroll.lock(),o.append(a)},close:function(){e.util.pageScroll.unlock(),n("#"+t).remove()}}}()}(window,YDUI),!function(){"use strict";function t(t,e){function n(t,e){return function(){return t.apply(e,arguments)}}var i;e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,this.tapTimeout=e.tapTimeout||700;for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,r=0,s=o.length;s>r;r++)a[o[r]]=n(a[o[r]],a);t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}var e=/iP(ad|hone|od)/.test(navigator.userAgent),n=/OS [6-7]_\d/.test(navigator.userAgent);t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if("file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.focus=function(t){var e,n=["date","time","month","number","email"];t.setSelectionRange&&-1===n.indexOf(t.type)?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,i;return t.targetTouches.length>1?!0:(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],i=window.getSelection(),i.rangeCount&&!i.isCollapsed?!0:(this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0))},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,i,o,a,r,s=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,n&&(r=t.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=s.tagName.toLowerCase(),"label"===o)e=this.findControl(s),e&&(this.focus(s),s=e);else if(this.needsFocus(s))return t.timeStamp-i>100||window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,t),"select"!==o&&(this.targetElement=null,t.preventDefault()),!1);return a=s.fastClickScrollParent,a&&a.fastClickLastScrollTop!==a.scrollTop?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.attach=function(n,i){return e?new t(n,i):void 0},window.FastClick=t}(),!function(t){"use strict";function e(t,n){this.$element=i(t),this.options=i.extend({},e.DEFAULTS,n||{}),this.init()}function n(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var o=i(this),a=o.data("ydui.keyboard");a||o.data("ydui.keyboard",a=new e(this,t)),"string"==typeof t&&a[t]&&a[t].apply(a,n)})}var i=t.$,o=i(t.document.body),a=!!(t.navigator&&t.navigator.userAgent||"").match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in t.document.documentElement,r=a?"touchstart":"click";e.DEFAULTS={disorder:!1,title:"安全键盘"},e.prototype.init=function(){function t(){for(var t="",e=0;6>e;e++)t+="<li><i></i></li>";return t}var e=this;e.inputNums="",e.toggleClass="keyboard-show";var n='<div class="keyboard-head"><strong>输入数字密码</strong></div><div class="keyboard-error"></div><ul class="keyboard-password J_FillPwdBox">'+t()+"</ul>",o='<div class="keyboard-title">'+e.options.title+'</div><ul class="keyboard-numbers"></ul>';e.$element.prepend(n).append(o),e.$numsBox=e.$element.find(".keyboard-numbers"),e.$mask=i('<div class="mask-black"></div>')},e.prototype.open=function(){var t=this,e=t.$element,n=t.$numsBox;e.addClass(t.toggleClass),(t.options.disorder||1!=n.data("loaded-nums"))&&n.data("loaded-nums",1).html(t.createNumsHtml()),o.append(t.$mask),t.bindEvent()},e.prototype.close=function(){var t=this;t.$mask.remove(),t.$element.removeClass(t.toggleClass),t.unbindEvent(),t.inputNums="",t.fillPassword(),t.clearError()},e.prototype.bindEvent=function(){var t=this,e=t.$element;t.$mask.on(r+".ydui.keyboard.mask",function(e){e.preventDefault(),t.close()}),e.on(r+".ydui.keyboard.nums",".J_Nums",function(e){e.preventDefault(),t.inputNums.length>=6||(t.inputNums=t.inputNums+i(this).html(),t.clearError(),t.fillPassword())}),e.on(r+".ydui.keyboard.backspace",".J_Backspace",function(e){e.preventDefault(),t.backspace()}),e.on(r+".ydui.keyboard.cancel",".J_Cancel",function(e){e.preventDefault(),t.close()})},e.prototype.unbindEvent=function(){this.$element.off(r+".ydui.keyboard"),i(t).off("hashchange.ydui.keyboard")},e.prototype.fillPassword=function(){var t=this,e=t.inputNums,n=e.length,o=t.$element.find(".J_FillPwdBox").find("li");o.find("i").hide(),o.filter(":lt("+n+")").find("i").show(),n>=6&&t.$element.trigger(i.Event("done.ydui.keyboard",{password:e}))},e.prototype.clearError=function(){this.$element.find(".keyboard-error").html("")},e.prototype.error=function(t){var e=this;e.$element.find(".keyboard-error").html(t),e.inputNums="",e.fillPassword()},e.prototype.backspace=function(){var t=this,e=t.inputNums;e&&(t.inputNums=e.substr(0,e.length-1)),t.fillPassword()},e.prototype.createNumsHtml=function(){var t=this,e=t.createNums();t.options.disorder&&t.upsetOrder(e);var n=[];return i.each(e,function(t){t%3==0&&(t>=e.length-2?n.push('<li><a href="javascript:;" class="J_Cancel">取消</a>'+e.slice(t,t+3).join("")+'<a href="javascript:;" class="J_Backspace"></a></li>'):n.push("<li>"+e.slice(t,t+3).join("")+"</li>"))}),n.join("")},e.prototype.createNums=function(){var t=this,e=t.options.disorder;if(e&&t.cacheNums)return t.cacheNums;for(var n=[],i=1;10>=i;i++)n.push('<a href="javascript:;" class="J_Nums">'+i%10+"</div>");return e||(t.cacheNums=n),n},e.prototype.upsetOrder=function(t){for(var e,n,i,o=Math.floor,a=Math.random,r=t.length,s=o(r/2)+1;s--;)e=o(a()*r),n=o(a()*r),e!==n&&(i=t[e],t[e]=t[n],t[n]=i);return t},i.fn.keyBoard=n}(window),!function(t,e){"use strict";function n(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i||{}),this.init()}function i(e){var i=t(this),o=i.data("ydui.lazyload");o||i.data("ydui.lazyload",new n(this,e))}n.DEFAULTS={attr:"data-url",$container:t(e),placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQIHWN4BQAA7ADrKJeAMwAAAABJRU5ErkJggg=="},n.prototype.init=function(){var n=this;n.bindImgEvent(),n.loadImg(),n.options.$container.on("scroll",function(){n.loadImg()}),t(e).on("resize",function(){n.loadImg()})},n.prototype.loadImg=function(){var n=this,i=n.options,o=i.$container.height(),a=i.$container.get(0)===e?t(e).scrollTop():i.$container.offset().top;n.$element.each(function(){var e=t(this),n=e.offset().top-a,i=n+e.height();(n>=0&&o>n||i>0&&o>=i)&&e.trigger("appear.ydui.lazyload")})},n.prototype.bindImgEvent=function(){var e=this,n=e.options;e.$element.each(function(){var e=t(this);e.is("img")&&!e.attr("src")&&e.attr("src",n.placeholder),e.one("appear.ydui.lazyload",function(){e.is("img")&&e.attr("src",e.attr(n.attr))})})},t.fn.lazyLoad=i}(jQuery,window),!function(t){"use strict";function e(t,e){this.pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",i.apply(this,arguments)}function n(t,e){this.pathTemplate="M 0,{center} L 100,{center}",i.apply(this,arguments)}function i(t,e){this.$element=a(t),this.options=a.extend({},i.DEFAULTS,e||{})}function o(t){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var o=a(this),r=o.data("ydui.progressbar");r||("line"==t.type?o.data("ydui.progressbar",r=new n(this,t)):o.data("ydui.progressbar",r=new e(this,t)),t&&"object"!=typeof t||r.appendView()),"string"==typeof t&&r[t]&&r[t].apply(r,i)})}var a=t.$,r=t.document,s=t.YDUI.util;e.prototype=new i,e.prototype.getPathString=function(t){var e=this,n=50-t/2;return e.render(e.pathTemplate,{radius:n,"2radius":2*n})},e.prototype.initSvg=function(t){t.setAttribute("viewBox","0 0 100 100"),t.style.display="block",t.style.width="100%"},n.prototype=new i,n.prototype.getPathString=function(t){var e=this;return e.render(e.pathTemplate,{center:t/2})},n.prototype.initSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none"),t.style.width="100%",t.style.height="100%"},i.DEFAULTS={type:"circle",strokeWidth:0,strokeColor:"#E5E5E5",trailWidth:0,trailColor:"#646464",fill:"",progress:0,delay:!0,container:t},i.prototype.set=function(t){var e=this,n=e.trailPath.getTotalLength();t||(t=e.options.progress),t>1&&(t=1),e.trailPath.style.strokeDashoffset=n-t*n},i.prototype.appendView=function(){var e=this,n=e.options,i=n.progress,o=e.createSvgView(),r=e.$element;e.$container=a(n.container===t||"window"==n.container?t:n.container);var s=o.trailPath,c=s.getTotalLength();s.style.strokeDasharray=c+" "+c;var l=a(o.svg);return l.one("appear.ydui.progressbar",function(){e.set(i)}),r.append(l),n.delay?(e.checkInView(l),e.$container.on("scroll",function(){e.checkInView(l)}),a(t).on("resize",function(){e.checkInView(l)})):l.trigger("appear.ydui.progressbar"),this},i.prototype.checkInView=function(e){var n=this,i=n.$container,o=i.height(),r=i.get(0)===t?a(t).scrollTop():i.offset().top,s=e.offset().top-r,c=s+e.height();(s>=0&&o>s||c>0&&o>=c)&&e.trigger("appear.ydui.progressbar")},i.prototype.createSvgView=function(){var t=this,e=t.options,n=r.createElementNS("http://www.w3.org/2000/svg","svg");t.initSvg(n,e);var i=t.createPath(e);n.appendChild(i);var o=null;return(e.trailColor||e.trailWidth)&&(o=t.createTrailPath(e),o.style.strokeDashoffset=o.getTotalLength(),n.appendChild(o)),t.svg=n,t.trailPath=o,{svg:n,trailPath:o}},i.prototype.createTrailPath=function(t){var e=this;0==t.trailWidth&&(t.trailWidth=t.strokeWidth);var n=e.getPathString(t.trailWidth);return e.createPathElement(n,t.trailColor,t.trailWidth)},i.prototype.createPath=function(t){var e=this,n=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(n=t.trailWidth);var i=e.getPathString(n);return e.createPathElement(i,t.strokeColor,t.strokeWidth,t.fill)},i.prototype.createPathElement=function(t,e,n,i){var o=r.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",t),o.setAttribute("stroke",e),o.setAttribute("stroke-width",n),i?o.setAttribute("fill",i):o.setAttribute("fill-opacity","0"),o},i.prototype.render=function(t,e){var n=t;for(var i in e)if(e.hasOwnProperty(i)){var o=e[i],a="\\{"+i+"\\}",r=new RegExp(a,"g");n=n.replace(r,o)}return n},a("[data-ydui-progressbar]").each(function(){var t=a(this);o.call(t,s.parseOptions(t.data("ydui-progressbar")))}),a.fn.progressBar=o}(window),!function(t){"use strict";function e(t,n){this.$btn=i(t),this.options=i.extend({},e.DEFAULTS,n||{})}function n(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var o=i(this),a=o.data("ydui.sendcode");a||(o.data("ydui.sendcode",a=new e(this,t)),"object"==typeof t&&t.run&&a.start()),"string"==typeof t&&a[t]&&a[t].apply(a,n)})}var i=t.$;e.DEFAULTS={run:!1,secs:60,disClass:"",runStr:"{%s}秒后重新获取",resetStr:"重新获取验证码"},e.timer=null,e.prototype.start=function(){var t=this,e=t.options,n=e.secs;t.$btn.html(t.getStr(n)).css("pointer-events","none").addClass(e.disClass),t.timer=setInterval(function(){n--,t.$btn.html(t.getStr(n)),0>=n&&(t.resetBtn(),clearInterval(t.timer))},1e3)},e.prototype.getStr=function(t){return this.options.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,t)},e.prototype.resetBtn=function(){var t=this,e=t.options;t.$btn.html(e.resetStr).css("pointer-events","auto").removeClass(e.disClass)},i.fn.sendCode=n}(window),!function(t){"use strict";function e(t,n){this.$element=i(t),this.options=i.extend({},e.DEFAULTS,n||{}),this.init()}function n(t){return this.each(function(){var n=i(this),o=n.data("ydui.slider");o||n.data("ydui.slider",new e(this,t))})}var i=t.$;e.DEFAULTS={speed:300,autoplay:3e3,lazyLoad:!1,pagination:".slider-pagination",wrapperClass:"slider-wrapper",slideClass:"slider-item",bulletClass:"slider-pagination-item",bulletActiveClass:"slider-pagination-item-active"},e.prototype.init=function(){var t=this,e=t.options,n=t.$element;t.index=1,t.autoPlayTimer=null,t.$pagination=n.find(e.pagination),t.$wrapper=n.find("."+e.wrapperClass),t.itemNums=t.$wrapper.find("."+e.slideClass).length,e.lazyLoad&&t.loadImage(0),t.createBullet(),t.cloneItem().bindEvent()},e.prototype.bindEvent=function(){var e=this,n=e.touchEvents();e.$wrapper.find("."+e.options.slideClass).on(n.start,function(t){e.onTouchStart(t)}).on(n.move,function(t){e.onTouchMove(t)}).on(n.end,function(t){e.onTouchEnd(t)}),i(t).on("resize",function(){e.setSlidesSize()}),~~e.options.autoplay>0&&e.autoPlay(),e.$wrapper.on("click",function(t){e.touches.allowClick||t.preventDefault()})},e.prototype.cloneItem=function(){var t=this,e=t.$wrapper,n=t.$wrapper.find("."+t.options.slideClass),i=n.filter(":first-child").clone(),o=n.filter(":last-child").clone();return e.prepend(o),e.append(i),t.setSlidesSize(),t},e.prototype.createBullet=function(){var t=this;if(t.$pagination[0]){var e='<span class="'+(t.options.bulletClass+" "+t.options.bulletActiveClass)+'"></span>';t.$pagination.append(e+new Array(t.itemNums).join('<span class="'+t.options.bulletClass+'"></span>'))}},e.prototype.activeBullet=function(){var t=this;if(t.$pagination[0]){var e=t.itemNums,n=t.index%e>=e?0:t.index%e-1,i=t.options.bulletActiveClass;!!t.$pagination[0]&&t.$pagination.find("."+t.options.bulletClass).removeClass(i).eq(n).addClass(i)}},e.prototype.setSlidesSize=function(){var t=this,e=t.$wrapper.width();t.$wrapper.css("transform","translate3d(-"+e+"px,0,0)"),t.$wrapper.find("."+t.options.slideClass).css({width:e})},e.prototype.autoPlay=function(){var t=this;t.autoPlayTimer=setInterval(function(){t.index>t.itemNums&&(t.index=1,t.setTranslate(0,-t.$wrapper.width())),t.setTranslate(t.options.speed,-(++t.index*t.$wrapper.width()))},t.options.autoplay)},e.prototype.stopAutoplay=function(){var t=this;return clearInterval(t.autoPlayTimer),t},e.prototype.loadImage=function(t){var e=this,n=e.$wrapper.find("."+e.options.slideClass).eq(t).find("img"),i=n.data("src");1!=n.data("load")&&!!i&&n.attr("src",i).data("load",1)},e.prototype.setTranslate=function(t,e){var n=this;n.options.lazyLoad&&n.loadImage(n.index),n.activeBullet(),n.$wrapper.css({transitionDuration:t+"ms",transform:"translate3d("+e+"px,0,0)"})},e.prototype.touches={moveTag:0,startClientX:0,moveOffset:0,touchStartTime:0,isTouchEvent:!1,allowClick:!1},e.prototype.onTouchStart=function(t){t.originalEvent.touches&&(t=t.originalEvent.touches[0]);var e=this,n=e.touches;if(n.allowClick=!0,n.isTouchEvent="touchstart"===t.type,(n.isTouchEvent||!("which"in t)||3!==t.which)&&0==n.moveTag){n.moveTag=1,n.startClientX=t.clientX,n.touchStartTime=Date.now();var i=e.itemNums;if(0==e.index)return e.index=i,void e.setTranslate(0,-i*e.$wrapper.width());e.index>i&&(e.index=1,e.setTranslate(0,-e.$wrapper.width()))}},e.prototype.onTouchMove=function(t){t.preventDefault(),t.originalEvent.touches&&(t=t.originalEvent.touches[0]);var e=this,n=e.touches;if(n.allowClick=!1,!n.isTouchEvent||"mousemove"!==t.type){var i=n.moveOffset=t.clientX-n.startClientX;0!=i&&0!=n.moveTag&&(1==n.moveTag&&(e.stopAutoplay(),n.moveTag=2),2==n.moveTag&&e.setTranslate(0,-e.index*e.$wrapper.width()+i))}},e.prototype.onTouchEnd=function(){var t=this,e=t.options.speed,n=t.$wrapper.width(),i=t.touches,o=i.moveOffset;if(setTimeout(function(){i.allowClick=!0},0),1==i.moveTag&&(i.moveTag=0),2==i.moveTag){i.moveTag=0;var a=Date.now()-i.touchStartTime;a>300&&Math.abs(o)<=.5*t.$wrapper.width()?t.setTranslate(e,-t.index*t.$wrapper.width()):t.setTranslate(e,-((o>0?--t.index:++t.index)*n))}},e.prototype.touchEvents=function(){var e=t.Modernizr&&!!t.Modernizr.touch||function(){return!!("ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch)}();return{start:e?"touchstart":"mousedown",move:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"}},i(t).on("load",function(){i("[data-ydui-slider]").each(function(){var e=i(this);e.slider(t.YDUI.util.parseOptions(e.data("ydui-slider")))})}),i.fn.slider=n}(window),!function(t){"use strict";function e(t,n){this.$element=$(t),this.options=$.extend({},e.DEFAULTS,n||{}),this.init()}function n(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=$(this),o=i.data("ydui.spinner");o||i.data("ydui.spinner",o=new e(this,t)),"string"==typeof t&&o[t]&&o[t].apply(o,n)})}e.DEFAULTS={input:".J_Input",add:".J_Add",minus:".J_Del",unit:1,max:0,callback:null},e.prototype.init=function(){var t=this,e=t.options;t.$input=$(e.input,t.$element),t.$add=$(e.add,t.$element),t.$minus=$(e.minus,t.$element),t.checkParameters(),t.initInputVal(),t.bindEvent()},e.prototype.initInputVal=function(){var t=this,e=t.options,n=t.$input.val();t.$input.val(n&&n%e.unit==0?n:e.unit)},e.prototype.isNumber=function(t){return/^\d*$/.test(t)},e.prototype.FixNumber=function(t){return parseInt(t)},e.prototype.checkParameters=function(){var t=this,e=t.options,n=[{param:"unit","default":1},{param:"max","default":0}];$.each(n,function(n,i){var o=e[i.param],a=t.$input.data(i.param);if(a)o=a,t.isNumber(a)||(o=e[i.param],"function"==typeof o&&(o=o()));else if("function"==typeof e[i.param]){var r=e[i.param]();o=r,t.isNumber(r)||(o=e[i.param])}t.isNumber(o)||(o=i["default"]),e[i.param]=t.FixNumber(o)})},e.prototype.setValue=function(t){var e=this,n=e.options,i=n.max,o=n.unit;t=e.FixNumber(t),e.isNumber(t)||(t=o),t>i&&0!=i&&(t=i),t%o>0&&(t=t-t%o+o,t>i&&0!=i&&(t-=o)),o>t&&(t=o),e.$input.val(t),"function"==typeof n.callback&&n.callback(t,e.$input)},e.prototype.bindEvent=function(){var e=this,n=e.options,i=n.unit,o=n.max,a=!!(t.navigator&&t.navigator.userAgent||"").match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in t.document.documentElement,r=a?"touchstart":"click";e.$add.on(r,function(){var t=e.$input,n=t.val(),a=e.FixNumber(n)+i;0!=o&&a>o||t.attr("readonly")||t.attr("disabled")||e.setValue(a)}),e.$minus.on(r,function(){var t=e.$input,n=t.val(),o=n-i;i>o||t.attr("readonly")||t.attr("disabled")||e.setValue(o)}),e.$input.on("change",function(){e.setValue($(this).val())}).on("keydown",function(t){return 13==t.keyCode?(e.setValue($(this).val()),!1):void 0})},$(t).on("load",function(){$("[data-ydui-spinner]").each(function(){var e=$(this);e.spinner(t.YDUI.util.parseOptions(e.data("ydui-spinner")))})}),$.fn.spinner=n}(window),!function(t){"use strict";function e(t,n){this.$element=i(t),this.options=i.extend({},e.DEFAULTS,n||{}),this.init(),this.bindEvent(),this.transitioning=!1}function n(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var o=this,a=i(o),r=a.data("ydui.tab");r||a.data("ydui.tab",r=new e(o,t)),"string"==typeof t&&r[t]&&r[t].apply(r,n)})}var i=t.$;e.TRANSITION_DURATION=150,e.DEFAULTS={nav:".tab-nav-item",panel:".tab-panel-item",activeClass:"tab-active"},e.prototype.init=function(){var t=this,e=t.$element;t.$nav=e.find(t.options.nav),t.$panel=e.find(t.options.panel)},e.prototype.bindEvent=function(){var t=this;t.$nav.each(function(e){i(this).on("click.ydui.tab",function(){t.open(e)})})},e.prototype.open=function(t){var e=this;t="number"==typeof t?t:e.$nav.filter(t).index();var n=e.$nav.eq(t);e.transitioning||n.hasClass(e.options.activeClass)||(e.transitioning=!0,n.trigger(i.Event("open.ydui.tab",{index:t})),e.active(n,e.$nav),e.active(e.$panel.eq(t),e.$panel,function(){n.trigger({type:"opened.ydui.tab",index:t}),e.transitioning=!1}))},e.prototype.active=function(t,n,i){function o(){"function"==typeof i&&i()}var a=this,r=a.options.activeClass,s=n.filter("."+r);t.one("webkitTransitionEnd",o).emulateTransitionEnd(e.TRANSITION_DURATION),s.removeClass(r),t.addClass(r)},i(t).on("load",function(){i("[data-ydui-tab]").each(function(){var e=i(this);e.tab(t.YDUI.util.parseOptions(e.data("ydui-tab")))})}),i.fn.tab=n}(window),!function(win){"use strict";function storage(t){var e=util;return{set:function(n,i){t.setItem(n,e.serialize(i))},get:function(n){return e.deserialize(t.getItem(n))},remove:function(e){t.removeItem(e)},clear:function(){t.clear()}}}var $=win.$,util=win.YDUI.util=win.YDUI.util||{},doc=win.document;util.timestampTotime=function(t,e){var n={},i=Math.floor;n.f=e%1e3,e=i(e/1e3),n.s=e%60,e=i(e/60),n.m=e%60,e=i(e/60),n.h=e%24,n.d=i(e/24);var o=function(t){return 0>=t?"":"$1"+(10>t?"0"+t:t)+"$2"};return t=t.replace(/\{([^{]*?)%d(.*?)\}/g,o(n.d)),t=t.replace(/\{([^{]*?)%h(.*?)\}/g,o(n.h)),t=t.replace(/\{([^{]*?)%m(.*?)\}/g,o(n.m)),t=t.replace(/\{([^{]*?)%s(.*?)\}/g,o(n.s)),t=t.replace(/\{([^{]*?)%f(.*?)\}/g,o(n.f))},util.countdown=function(t,e,n,i){var o=this,a=setInterval(function(){var n=e-(new Date).getTime();n>0?i(o.timestampTotime(t,n)):(clearInterval(a),"function"==typeof i&&i(""))},n)},util.calc=function(arg1,op,arg2){var ra=1,rb=1,m;try{ra=arg1.toString().split(".")[1].length}catch(e){}try{rb=arg2.toString().split(".")[1].length}catch(e){}switch(m=Math.pow(10,Math.max(ra,rb)),op){case"+":case"-":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m);break;case"*":ra=Math.pow(10,ra),rb=Math.pow(10,rb),m=ra*rb,arg1=Math.round(arg1*ra),arg2=Math.round(arg2*rb);break;case"/":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m),m=1}try{var result=eval("(("+arg1+")"+op+"("+arg2+"))/"+m)}catch(e){}return result},util.getImgBase64=function(t,e){var n=this,i="",o=t.files[0];if(o){if(!/image\/\w+/.test(o.type))return void n.tipMes("请上传图片文件","error");var a=new FileReader;a.readAsDataURL(o),a.onload=function(){i=this.result,"function"==typeof e&&e(i)}}},util.getQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=win.location.search.substr(1).match(e),i="";return null!=n&&(i=decodeURIComponent(n[2])),i},util.serialize=function(t){return"string"==typeof t?t:JSON.stringify(t)},util.deserialize=function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(e){return t||void 0}},util.localStorage=function(){return storage(win.localStorage)}(),util.sessionStorage=function(){return storage(win.sessionStorage)}(),util.cookie=function(){return{get:function(t){var e=doc.cookie.match("(?:^|;)\\s*"+t+"=([^;]*)");return e&&e[1]?decodeURIComponent(e[1]):""},set:function(t,e,n,i,o,a){var r=String(encodeURIComponent(e)),s=n;"number"==typeof s&&(s=new Date,s.setTime(s.getTime()+1e3*n)),
s instanceof Date&&(r+="; expires="+s.toUTCString()),!!i&&(r+="; domain="+i),r+="; path="+(o||"/"),a&&(r+="; secure"),doc.cookie=t+"="+r}}}()}(window);