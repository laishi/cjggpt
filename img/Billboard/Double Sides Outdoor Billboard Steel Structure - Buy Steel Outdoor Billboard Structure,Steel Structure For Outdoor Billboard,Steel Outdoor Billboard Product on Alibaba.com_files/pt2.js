/* 2017-01-13 18:54:40 */
!function e(t,r,n){function o(i,u){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!u&&s)return s(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return o(r?r:e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){t.exports=e("./src/grey")},{"./src/grey":2}],2:[function(e,t,r){function n(e){if(e)try{var t=m.createElement("script");t.appendChild(m.createTextNode(e)),y.parentNode.insertBefore(t,y)}catch(r){(p.execScript||function(e){p.eval.call(p,e)})(e)}}function o(e,t,r){var n,o="GET",a=!1,i=function(){a||(n.responseText?t(n.responseText):r(),a=!0)},u=function(){a||(r(),a=!0)};d?(n=new XMLHttpRequest,n.open(o,e,!0)):(n=new XDomainRequest,n.open(o,e)),n.onload=i,n.onerror=u,n.timeout=b.timeout,n.ontimeout=u,n.onreadystatechange=function(){n.responseText&&!a&&(t(n.responseText),a=!0)},setTimeout(u,b.timeout),n.send()}function a(e,t){var r=m.createElement("script");r.async=!0,i(r,t),r.src=e,y.parentNode.insertBefore(r,y)}function i(e,t){function r(){e.onreadystatechange=e.onload=null,e=null,x(t)&&t({from:"script"})}if("onload"in e)e.onload=r;else{var n=function(){/loaded|complete/.test(e.readyState)&&r()};e.onreadystatechange=n,n()}}function u(e,t){return e+Math.floor(Math.random()*(t-e+1))}function s(e,t){return u(1,t)<=e}function c(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function f(e,t){return function(r){return e.call(null,c(t,r||{}))}}function l(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}var p=window,m=document,y=m.getElementsByTagName("script")[0],g=p.XDomainRequest,d=p.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,h=function(){},b={base:1e4,timeout:1e4},v={_config:b};v.load=function(e){e=c({stable:"",stableKey:"",stableHash:"",grey:"",greyKey:"",greyHash:"",base:b.base},e);var t,r,i,u,l=e.hash,p={};if(e.ratio>=e.base||s(e.ratio,e.base)?(t=e.greyKey,r=e.grey,u=e.greyHash,p.type="grey"):(t=e.stableKey,r=e.stable,u=e.stableHash,p.type="stable"),p.url=r,p.key=t,p.hash=u,x(e.before)&&e.before(p),e.after=x(e.after)?f(e.after,p):h,t&&(d||g)&&x(l))try{i=localStorage.getItem(t)||"",i&&u===l(i,p)?(n(i),e.after({from:"local"})):o(r,function(r){localStorage.setItem(t,r),n(r),e.after({from:"cors"})},function(t){a(r,e.after)})}catch(m){a(r,e.after)}else a(r,e.after);return this},v.config=function(e){return c(b,e||{}),this};var x=(Array.isArray||l("Array"),l("Function"));t.exports=v},{}],3:[function(e,t,r){function n(){var e,t,r=h.length;for(e=0;r>e;e++)t=h.shift(),t&&t[0]&&("um"!==t[0]&&"umx"!==t[0]||"function"!=typeof t[1]?h.push(t):t[1](p.umx||p.um))}function o(e){var t="//g.alicdn.com";if(!e)return t;if(/aliexpress/.test(location.href))return"//aeis.alicdn.com";var r=g.exec(e);return r?"//"+r[3]+(r[4]?":"+r[4]:""):t}function a(){for(var e,t=m.getElementsByTagName("script"),r=/sd\/pointman\/js\/pt\d?\.js/,n=0;n<t.length;n++)if(e=i(t[n]),r.test(e))return t[n];return m.currentScript?m.currentScript:t[t.length-1]}function i(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function u(e,t){return e.replace(/\\?\{\{\s*([^{}\s]+)\s*\}\}/g,function(e,r){return null==t[r]?"":t[r]})}var s="3.3.4",c="3.3.5",f=100,l=100,p=window,m=p.document,y=e("@ali/grey-publish"),g=new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),d="_pointman_q",h=p[d]=p[d]||[],b=i(a()),v=o(b),x=/f=m/.test(b)?"um-m":"um",w=v+"/security/umscript/{{ version }}/"+x+".js";p.umx?n():p.__pt2||(p.__pt2=1,y.load({stable:u(w,{version:s}),grey:u(w,{version:c}),ratio:f,base:l,after:function(){n()}}))},{"@ali/grey-publish":1}]},{},[3]);