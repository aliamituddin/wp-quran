!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.regeneratorRuntime}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(14);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(15),a=n(10);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?a(t):e}},function(t,e){function n(t,e,n,r,a,o,c){try{var u=t[o](c),i=u.value}catch(t){return void n(t)}u.done?e(i):Promise.resolve(i).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function u(t){n(c,a,o,u,i,"next",t)}function i(t){n(c,a,o,u,i,"throw",t)}u(void 0)}))}}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(11),o=n(1),c=n(3),u={quranEditions:{type:"array",default:[]},surahOptions:{type:"array",default:[]},currentEdition:{type:"string",default:"fr.hamidullah"},currentSurah:{type:"string",default:"1"},currentSurahText:{type:"string",default:""},currentAyahNum:{type:"string",default:"0"},currentAyahText:{type:"string",default:""},currentAyahTextInArabic:{type:"string",default:""},currentSurahAyahs:{type:"array",default:[]},showVerseInArabic:{type:"boolean",default:!1}},i=n(12),s=n.n(i),l=n(2),p=n.n(l),f=n(9),h=n.n(f),b=n(5),y=n.n(b),d=n(6),m=n.n(d),O=n(10),v=n.n(O),j=n(7),g=n.n(j),x=n(8),w=n.n(x),_=n(4),S=n.n(_),E=n(13);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w()(this,n)}}var P=function(t){g()(n,t);var e=A(n);function n(){return y()(this,n),e.apply(this,arguments)}return m()(n,[{key:"render",value:function(){var t=this.props,e=t.setAttributes,n=t.attributes,a=n.showVerseInArabic,u=n.currentSurahAyahs,i=t.editionSelect,s=t.surahSelect,l=t.ayahSelect;return Object(r.createElement)(E.InspectorControls,null,Object(r.createElement)(c.PanelBody,{title:"Block options"},i,s,u.length>0&&Object(r.createElement)(r.Fragment,null,l),Object(r.createElement)(c.ToggleControl,{label:Object(o.__)("Display the verse in arabic","wpquran"),help:a?Object(o.__)("Verse displayed in arabic.","wpquran"):Object(o.__)("Verse not displayed in arabic.","wpquran"),checked:a,onChange:function(t){e({showVerseInArabic:t})}})))}}]),n}(r.Component);function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w()(this,n)}}var q=function(t){g()(l,t);var e,n,a,u,i,s=T(l);function l(){var t;return y()(this,l),(t=s.apply(this,arguments)).onAyahChange=t.onAyahChange.bind(v()(t)),t.getSurahOptions(),t.getQuranEditions(),t}return m()(l,[{key:"getSurahOptions",value:(i=h()(p.a.mark((function t(){var e,n,r,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.setAttributes,n=[],t.next=4,fetch("https://api.alquran.cloud/v1/surah");case 4:return r=t.sent,t.next=7,r.json();case 7:200===(a=t.sent).code&&"OK"===a.status&&(a.data.forEach((function(t){n.push({value:""+t.number,label:t.number+" - "+t.englishName+" - "+t.name})})),e({surahOptions:n}));case 9:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"getQuranEditions",value:(u=h()(p.a.mark((function t(){var e,n,r,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.setAttributes,n=[],t.next=4,fetch("https://api.alquran.cloud/v1/edition");case 4:return r=t.sent,t.next=7,r.json();case 7:200===(a=t.sent).code&&"OK"===a.status&&(a.data.forEach((function(t,e){n.push(t),n[e].value=t.identifier,n[e].label=t.format+" - "+t.language+" - "+t.englishName})),e({quranEditions:n}));case 9:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"onSurahChange",value:(a=h()(p.a.mark((function t(e,n){var r,a,o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=n.setAttributes)({currentSurah:e}),r({currentSurahText:n.attributes.surahOptions[e-1].label}),a=[],t.next=6,fetch("https://api.alquran.cloud/v1/surah/"+e+"/"+n.attributes.currentEdition);case 6:return o=t.sent,t.next=9,o.json();case 9:200===(c=t.sent).code&&"OK"===c.status&&(c.data.ayahs.forEach((function(t,e){a.push({value:e,verseId:t.number,label:t.text})})),r({currentSurahAyahs:a}));case 11:case"end":return t.stop()}}),t)}))),function(t,e){return a.apply(this,arguments)})},{key:"onEditionChange",value:(n=h()(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,n.setAttributes)({currentEdition:e});case 2:case"end":return t.stop()}}),t)}))),function(t,e){return n.apply(this,arguments)})},{key:"onAyahChange",value:(e=h()(p.a.mark((function t(e){var n,r,a,o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.props,r=n.setAttributes,a=n.attributes,r({currentAyahNum:e}),r({currentAyahText:a.currentSurahAyahs[e].label}),t.next=5,fetch("https://api.alquran.cloud/v1/ayah/"+a.currentSurah+":"+ ++e+"/ar");case 5:return o=t.sent,t.next=8,o.json();case 8:200===(c=t.sent).code&&"OK"===c.status&&r({currentAyahTextInArabic:c.data.text});case 10:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this,e=this.props,n=e.attributes,a=n.surahOptions,u=n.quranEditions,i=n.currentSurah,s=n.currentEdition,l=n.currentSurahText,p=n.currentSurahAyahs,f=n.currentAyahNum,h=n.currentAyahText,b=n.showVerseInArabic,y=n.currentAyahTextInArabic,d=e.className,m=Object(r.createElement)(c.SelectControl,{label:Object(o.__)("Edition","wpquran"),value:s,options:u,onChange:function(e){t.onEditionChange(e,t.props)}}),O=Object(r.createElement)(c.SelectControl,{label:Object(o.__)("Surah","wpquran"),value:i,options:a,onChange:function(e){t.onSurahChange(e,t.props)}}),v=Object(r.createElement)(c.SelectControl,{label:Object(o.__)("Verse","wpquran"),value:f,options:p,onChange:this.onAyahChange}),j=Object(o.sprintf)(Object(o.__)("Verse %s, Surah %s","wp-quran"),f,l);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(P,C(C({},this.props),{},{surahSelect:O,ayahSelect:v,editionSelect:m})),Object(r.createElement)("div",{className:d},h.length<1&&Object(r.createElement)(c.Placeholder,{icon:"book",label:Object(o.__)("Qu'ran verses.","wpquran"),instructions:Object(o.__)("Please select one of the 114 surah.","wpquran")},m,O,p.length>0&&Object(r.createElement)(r.Fragment,null,v)),h.length>0&&Object(r.createElement)("div",null,Object(r.createElement)("p",{className:"translated-ayah"},h),b&&Object(r.createElement)("p",{className:"arabic-ayah"},y),Object(r.createElement)("p",{className:"translated-surah"},j))))}}]),l}(r.Component);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=S()(t);if(e){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w()(this,n)}}var N=function(t){g()(n,t);var e=R(n);function n(){return y()(this,n),e.apply(this,arguments)}return m()(n,[{key:"render",value:function(){var t=this.props,e=t.attributes,n=t.className,a=Object(o.sprintf)(Object(o.__)("Verse %s, Surah %s","wp-quran"),e.currentAyahNum,e.currentSurahText);return Object(r.createElement)("div",{className:n},e.currentAyahText.length>0&&e.currentSurahText&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("p",null,e.currentAyahText),e.showVerseInArabic&&Object(r.createElement)("p",null,e.currentAyahTextInArabic),Object(r.createElement)("p",null,a)))}}]),n}(r.Component);Object(a.registerBlockType)("wpmuslim/wp-quran",{title:Object(o.__)("Wp Quran","wpmuslim"),description:Object(o.__)("Display Quran verses with ease.","wpmuslim"),category:"common",icon:{background:"rgba(157,254,128,0.52)",src:Object(r.createElement)(c.Icon,{icon:"book",size:"24"})},keywords:[Object(o.__)("quran"),Object(o.__)("coran"),Object(o.__)("verse"),Object(o.__)("ayah"),Object(o.__)("islam"),Object(o.__)("muslim"),Object(o.__)("holy")],supports:{html:!1},attributes:u,edit:q,save:N})}]);