(function(t){function e(e){for(var n,l,i=e[0],s=e[1],c=e[2],d=0,v=[];d<i.length;d++)l=i[d],a[l]&&v.push(a[l][0]),a[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=r[0]))}return t}var n={},a={app:0},o=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/my_page/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},2818:function(t,e,r){"use strict";var n=r("b3d5"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("myHeader")],1),r("div",{attrs:{id:"nav"}}),r("b-container",[r("about-me",{staticClass:"content",attrs:{id:"about-me"}}),r("skills",{staticClass:"content",attrs:{id:"skills"}}),r("interns",{staticClass:"content",attrs:{id:"interns"}}),r("links",{staticClass:"content",attrs:{id:"links"}})],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info",fixed:"top"}},[r("b-navbar-brand",{attrs:{href:"#"},on:{click:function(e){return t.smoothScroll("about-me")}}},[t._v("taka")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-navbar-nav",[r("b-nav-item",{on:{click:function(e){return t.smoothScroll("about-me")}}},[t._v("About Me")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("skills")}}},[t._v("Skills")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("interns")}}},[t._v("Interns")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("links")}}},[t._v("Links")])],1)],1)],1)],1)],1)},i=[],s={methods:{smoothScroll:function(t){this.$SmoothScroll(document.querySelector("#"+t),400,null,null,"y")}}},c=s,u=r("2877"),d=Object(u["a"])(c,l,i,!1,null,null,null),v=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-card-body",{attrs:{title:"Skills"}},[r("b-card-text",[r("h4",[t._v("独学&業務にて")]),r("h5",[t._v("メイン")]),r("p",[t._v("Ruby(Ruby on Rails), Swift(iOS Application)")]),r("h5",[t._v("経験あり")]),r("p",[t._v("Go, Python, Kotlin(Android), Java(Android, Spring Boot), C#(ASP.NET Core, Unity), JS(jQuery, Vue, Node-RED), HTML, CSS, Bootstrap")]),r("p",[t._v("Docker, git, PostgreSQL, MySQL, AWS, GCP, Firebase")]),r("h4",[t._v("大学にて")]),r("p",[t._v("C, Verilog-HDL")]),r("h4",[t._v("資格")]),r("p",[t._v("基本情報技術者試験")]),r("h4",[t._v("興味あり")]),r("p",[t._v("設計パターン, Clean Architecture, ドメイン駆動開発")])])],1)],1)],1)])],1)},p=[],f={},_=Object(u["a"])(f,b,p,!1,null,null,null),h=_.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-card-body",{attrs:{title:"Interns"}},[r("b-card-text",[r("table",{staticClass:"spacing-table overflow-hidden mx-auto"},[r("h5",[t._v("2018")]),r("tr",[r("td",[t._v("4月~現在")]),r("td",[t._v("株式会社ユニキャスト")]),r("td",[r("p",[t._v("長期インターンにて実際の業務に参加")]),r("ul",[r("li",[t._v("中古車購入サービスのiOSアプリ(Swift)、サーバーサイド(Rails)の立ち上げ及び設計、開発")]),r("li",[t._v("接客ロボットアプリケーションのサーバーサイド(Rails)の機能追加、修正")]),r("li",[t._v("ロボットアプリケーション(Kotlin, Java)の機能追加、修正")]),r("li",[t._v("webアプリケーションのフロント(HTML, CSS, JavaScrpt)、サーバーサイド(PHP)実装")]),r("li",[t._v("物体検知(Python, Chainer,YoLoV3, OpenCV)、信号処理、及び同期表示GUI(wxPython)ツールの作成")]),r("li",[t._v("Androidアプリ(Java)のUI修正及び画像処理(OpenCV)の機能追加")]),r("li",[t._v("Unityを用いたデモアプリケーションの作成")]),r("li",[t._v("Node-RED, Pythonを用いた計算ツールの作成")])])])]),r("h5",[t._v("2019")]),r("tr",[r("td",[t._v("8月5日~8月9日")]),r("td",[t._v("Retty株式会社")]),r("td",[t._v("iOSアプリの新機能の実装")])]),r("tr",[r("td",[t._v("8月19日~8月30日")]),r("td",[t._v("フューチャー株式会社")]),r("td",[t._v("Vue, Go, AWSを用いたアプリケーションの開発実務へ参加")])]),r("tr",[r("td",[t._v("9月2日~9月6日")]),r("td",[t._v("楽天株式会社")]),r("td",[r("p",[t._v('"Empowerment for xxxx"のテーマの元、チームで新規サービスの企画')]),r("p",[t._v("及び実装(Java, Spring Boot)を行い優勝")])])]),r("tr",[r("td",[t._v("9月9日~9月11日")]),r("td",[t._v("株式会社サイバーエージェント")]),r("td",[t._v("AbemaTVに架空の新機能を立案し、実装(iOS)")])]),r("tr",[r("td",[t._v("9月~")]),r("td",[t._v("株式会社Spectra")]),r("td",[t._v("サーバーサイド(Rails)の改修及び機能調整")])])])])],1)],1)],1)])],1)},y=[],x={},w=Object(u["a"])(x,m,y,!1,null,null,null),S=w.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"profile-image",staticStyle:{"max-width":"400px"},attrs:{src:"profile_image.gif"}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:"About Me"}},[r("b-card-text",[r("table",{staticClass:"spacing-table overflow-hidden mx-auto"},[r("tr",[r("td",[t._v("名前:")]),r("td",[t._v("石塚 崇寛")])]),r("tr",[r("td",[t._v("大学:")]),r("td",[t._v("茨城大学 電気電子工学科")])]),r("tr",[r("td"),r("td",[t._v("学部 4年 (2019年4月~現在休学中)")])])]),r("p",[t._v("\n                  大学の専攻は電子工学で非情報系の学生です。\n                ")]),r("p",[t._v("\n                  大学3年時の2018年3月よりRails Tutorial等を用いてweb関連に関する知識を学び始め、独学やインターンを通じてプログラミングの勉強してます。\n                ")]),r("p",[t._v("\n                  技術をサービス実現の手段とし、サービスを良くする為に技術を磨いていけるエンジニア、\n                  サービスをユーザ目線で考え提案、設計、開発できるエンジニアになる事を目指しています。\n                ")]),r("p",[t._v("\n                  エンジニアリング以外だと、海外ビジネスインターンでベトナムへ行ったり、茨城から大阪までヒッチハイクしたり、\n                  バンジーシャンプ飛んだりしていました。\n                ")])])],1)],1)],1)],1)],1)])],1)},k=[],C=(r("2818"),{}),O=Object(u["a"])(C,g,k,!1,null,"2fefa67a",null),j=O.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-card-body",{attrs:{title:"Links"}},[r("b-card-text",[r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-link",{attrs:{href:"https://github.com/taka011002"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/GitHub-Mark-120px-plus.png"}})],1)],1),r("b-col",{attrs:{cols:"4"}},[r("b-link",{attrs:{href:"https://twitter.com/taka0110_"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/Twitter_Social_Icon_Circle_Color.png"}})],1)],1),r("b-col",{attrs:{cols:"4"}},[r("b-link",{attrs:{href:"https://www.facebook.com/takahiro.ishitsuka.9"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/f_logo_RGB-Blue_1024.png"}})],1)],1)],1)],1)],1)],1)],1)])],1)},E=[],R={},A=Object(u["a"])(R,P,E,!1,null,null,null),M=A.exports,T={components:{myHeader:v,skills:h,interns:S,aboutMe:j,links:M},data:function(){return{msg:"Hello World!"}},methods:{clear:function(){this.msg=""}}},$=T,H=(r("5c0b"),Object(u["a"])($,a,o,!1,null,null,null)),J=H.exports,L=r("8c4f"),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-card-body",{attrs:{title:"Experiences"}},[r("b-card-text",[r("h5",[t._v("2018/03")]),r("p",[t._v("Rails Tutorial等を用いてweb関連に関する知識を学ぶ")])])],1)],1)],1)])],1)},G=[],B={},I=Object(u["a"])(B,V,G,!1,null,null,null),D=I.exports;n["default"].use(L["a"]);var U=new L["a"]({mode:"history",base:"/my_page/",routes:[{path:"/",name:"about_me",component:j},{path:"/experiences",name:"experiences",component:D}]}),N=r("2f62");n["default"].use(N["a"]);var Q=new N["a"].Store({state:{},mutations:{},actions:{}}),W=r("5f5b"),K=(r("f9e3"),r("2dd8"),r("c4e8")),q=r.n(K);n["default"].use(W["a"]),n["default"].use(q.a),n["default"].config.productionTip=!1,new n["default"]({router:U,store:Q,render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){},b3d5:function(t,e,r){}});
//# sourceMappingURL=app.da75a891.js.map