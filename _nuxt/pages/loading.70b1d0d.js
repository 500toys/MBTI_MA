(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(t,e,n){var content=n(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("5ff8291c",content,!0,{sourceMap:!1})},158:function(t,e){},159:function(t,e,n){"use strict";var o=n(151);n.n(o).a},160:function(t,e,n){(e=n(72)(!1)).push([t.i,".container[data-v-3260d38e]{display:flex;align-items:center;justify-content:center;height:inherit;max-width:600px;padding:0 30px;margin:auto;font-size:1.2rem;--main-point-color:#bc0000}.viewport[data-v-3260d38e]{width:100%;max-width:200px}.loading-process[data-v-3260d38e]{margin-top:50px;text-align:center;font-family:BMEULJIRO;font-size:30px;line-height:40px}",""]),t.exports=e},168:function(t,e,n){"use strict";n.r(e);var o=n(158),r=n.n(o),c={asyncData:function(){var t=JSON.parse(localStorage.getItem("responses"))||null,e=-1;return t&&(e=t.reduce((function(t,e){return t+e}))),{count:e=0===e?1:e}},data:function(){return{count:0,symbol:r.a.symbol,process:r.a.process,moveEvent:null}},mounted:function(){var t=this,e="/";this.count>-1&&(e="/result/".concat(this.count)),this.moveEvent=setTimeout((function(){return t.$router.push(e)}),1234)},beforeDestroy:function(){clearTimeout(this.moveEvent)}},l=(n(159),n(40)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"viewport"},[e("div",{staticClass:"loading-symbol",domProps:{innerHTML:this._s(this.symbol)}}),this._v(" "),this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-process"},[this._v("남친의 성 만족도"),e("br"),this._v("분석 중")])}],!1,null,"3260d38e",null);e.default=component.exports}}]);