(function(t){function r(r){for(var s,e,i=r[0],l=r[1],b=r[2],v=0,_=[];v<i.length;v++)e=i[v],o[e]&&_.push(o[e][0]),o[e]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(r);while(_.length)_.shift()();return a.push.apply(a,b||[]),n()}function n(){for(var t,r=0;r<a.length;r++){for(var n=a[r],s=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(s=!1)}s&&(a.splice(r--,1),t=e(e.s=n[0]))}return t}var s={},o={app:0},a=[];function e(r){if(s[r])return s[r].exports;var n=s[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=s,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var s in t)e.d(n,s,function(r){return t[r]}.bind(null,s));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/my_page/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var b=0;b<i.length;b++)r(i[b]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,r,n){t.exports=n("56d7")},"0527":function(t,r,n){"use strict";var s=n("fa46"),o=n.n(s);o.a},"50e0":function(t,r,n){},"56d7":function(t,r,n){"use strict";n.r(r);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"app"}},[n("header",[n("myHeader")],1),n("div",{attrs:{id:"nav"}}),n("b-container",[n("about-me",{staticClass:"content",attrs:{id:"about-me"}}),n("lazyBox",[n("skills",{staticClass:"content",attrs:{id:"skills"}})],1),n("lazyBox",[n("interns",{staticClass:"content",attrs:{id:"interns"}})],1),n("lazyBox",[n("portfolio",{staticClass:"content",attrs:{id:"portfolio"}})],1),n("lazyBox",[n("other",{staticClass:"content",attrs:{id:"other"}})],1),n("lazyBox",[n("links",{staticClass:"content",attrs:{id:"links"}})],1)],1)],1)},a=[],e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#"},on:{click:function(r){return t.smoothScroll("about-me")}}},[t._v("Taka")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-navbar-nav",[n("b-nav-item",{on:{click:function(r){return t.smoothScroll("about-me")}}},[t._v("About Me")]),n("b-nav-item",{on:{click:function(r){return t.smoothScroll("skills")}}},[t._v("Skills")]),n("b-nav-item",{on:{click:function(r){return t.smoothScroll("interns")}}},[t._v("Interns")]),n("b-nav-item",{on:{click:function(r){return t.smoothScroll("portfolio")}}},[t._v("Portfolio")]),n("b-nav-item",{on:{click:function(r){return t.smoothScroll("other")}}},[t._v("Other")]),n("b-nav-item",{on:{click:function(r){return t.smoothScroll("links")}}},[t._v("Links")])],1)],1)],1)],1)],1)},i=[],l={methods:{smoothScroll:function(t){this.$SmoothScroll(document.querySelector("#"+t),400,null,null,"y")}}},b=l,c=n("2877"),v=Object(c["a"])(b,e,i,!1,null,null,null),_=v.exports,u=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{ref:"lazyBox",staticClass:"lazy-box",class:{active:t.active}},[t._t("default")],2)},d=[],h={mounted:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},data:function(){var t=this;return{active:!1,handleScroll:function(r){window.innerHeight-t.$refs.lazyBox.getBoundingClientRect().top>0&&(t.active=!0)}}}},p=h,f=(n("9fc2"),Object(c["a"])(p,u,d,!1,null,"3f41f5c8",null)),g=f.exports,m=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-text",{staticStyle:{"text-align":"left"}},[n("h2",{staticClass:"font-weight-bold"},[t._v("Skills")]),n("p",[t._v("業務にて使用したことのある技術を記述しております。")]),n("h4",{staticClass:"font-weight-bold"},[t._v("Language&Framework")]),n("p",[t._v("Ruby(Ruby on Rails) | Swift(iOS Application) | Go | Python | Kotlin(Android) | Java(Android, Spring Boot) |\n                                        C#(ASP.NET Core, Unity) | PHP | JS(jQuery, Vue, Node-RED) | HTML | CSS")]),n("h4",{staticClass:"font-weight-bold"},[t._v("Middleware")]),n("p",[t._v("PostgreSQL | MySQL | Redis | Docker")]),n("h4",{staticClass:"font-weight-bold"},[t._v("Public cloud")]),n("h5",{staticClass:"font-weight-bold"},[t._v("AWS")]),n("p",[t._v("EC2 | ECS | ECR | S3 | RDS | CodePipeline | CodeBuild | Kinesis Data Firehose | Athena | QuickSight Lambda | Cloudwatch")]),n("h5",{staticClass:"font-weight-bold"},[t._v("GCP")]),n("p",[t._v("Cloud Storage | Firebase | Cloud Firestore | Cloud Speech-to-Text")]),n("h4",{staticClass:"font-weight-bold"},[t._v("Licence")]),n("p",[t._v("基本情報技術者試験")])])],1)],1)],1)])],1)},y=[],w={},S=Object(c["a"])(w,m,y,!1,null,null,null),C=S.exports,k=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-text",{staticStyle:{"text-align":"left"}},[n("h2",{staticClass:"font-weight-bold pb-3"},[t._v("Interns")]),n("a",{attrs:{href:"https://spectra.tokyo/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("株式会社Spectra")])]),n("h5",[t._v("2019年8月~2019年12月")]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2019年8月~2019年12月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                    チケット見逃し防止アプリ「Freax」の機能改善"),n("br"),t._v("\n                                    【担当業務】"),n("br"),t._v("\n                                    ・APIドキュメントの整備"),n("br"),t._v("\n                                    ・APIサーバーのレスポンススピード改善"),n("br"),t._v("\n                                    ・1日1万件近く出力されるクローラーのエラーログ分析基盤の構築"),n("br"),t._v("\n                                    ・クローラーの改修及び新規設計"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                    サーバーサイド"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                    【言語・フレームワーク】"),n("br"),t._v("\n                                    Ruby | Ruby on Rails "),n("br"),t._v("\n                                    【ミドルウェア】"),n("br"),t._v("\n                                    Mysql | Docker "),n("br"),t._v("\n                                    【クラウドサービス】"),n("br"),t._v("\n                                    ・AWS "),n("br"),t._v("\n                                    Cloud Watch | Kinesis | Lamda | S3 | Athena | QuickSight"),n("br")])])],1),n("a",{attrs:{href:"https://www.cyberagent.co.jp/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("株式会社サイバーエージェント")])]),n("h5",[t._v("2019年9月(3日間)")]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2019年9月(3日間)"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                    AbemaTVのiOSアプリに架空の新機能を立案し、実装"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                    ネイティブアプリ(iOS)"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                    【言語・フレームワーク】"),n("br"),t._v("\n                                    Swift"),n("br")])])],1),n("a",{attrs:{href:"https://corp.rakuten.co.jp/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("楽天株式会社")])]),n("h5",[t._v("2019年9月(1週間)")]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2019年9月(1週間)"),n("br"),n("strong",[t._v("内容")]),n("br"),n("a",{attrs:{href:"https://corp.rakuten.co.jp/careers/graduates/engineer/commerce/intern/2019/"}},[t._v("公式ページ")]),n("br"),t._v("\n                                    “Empowerment for xxxx”のテーマの元、チームで新規サービスの企画、及び実装を行い優勝"),n("br"),t._v("\n                                    具体的には、悩みを相談したい人と人の悩みを聞いてあげたい人をマッチングし、通話できるサービスを開発した。"),n("br"),n("a",{attrs:{href:"https://github.com/taka011002/suzukisan"}},[t._v("GitHub")]),n("br"),n("a",{attrs:{href:"https://suzukisan.herokuapp.com/"}},[t._v("Demo")]),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                    フロントエンド"),n("br"),t._v("\n                                    サーバーサイド"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                    【言語・フレームワーク】"),n("br"),t._v("\n                                    Java | Spring Boot\n                                    "),n("br"),t._v("\n                                    【ミドルウェア】"),n("br"),t._v("\n                                    H2 Database "),n("br"),t._v("\n                                    【PaaS】"),n("br"),t._v("\n                                    skyway"),n("br")])])],1),n("a",{attrs:{href:"https://www.future.co.jp/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("フューチャー株式会社")])]),n("h5",[t._v("2019年8月(2週間)")]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2019年8月(2週間)"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                    DX(デジタルトランスフォーメーション)に関する案件に関与"),n("br"),t._v("\n                                    【担当業務】"),n("br"),t._v("\n                                    ・コンテナ環境の整備"),n("br"),t._v("\n                                    ・CI/CD環境構築"),n("br"),t._v("\n                                    ・フロントエンドからサーバーサイドへのエンドポイント作成及び繋ぎ込み"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                    フロントエンド"),n("br"),t._v("\n                                    サーバーサイド"),n("br"),t._v("\n                                    インフラ"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                    【言語・フレームワーク】"),n("br"),t._v("\n                                    Go | Vue.js | Typescript "),n("br"),t._v("\n                                    【ミドルウェア】"),n("br"),t._v("\n                                    Postgres | Docker "),n("br"),t._v("\n                                    【クラウドサービス】"),n("br"),t._v("\n                                    ・AWS"),n("br"),t._v("\n                                    S3 | ECS | ECR | CodePipeline | CodeBuild | Aurora | Lamda\n                                ")])])],1),n("a",{attrs:{href:"https://retty.me/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("Retty株式会社")])]),n("h5",[t._v("2019年8月(1週間)")]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2019年8月(1週間)"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                    iOSアプリへSiriを用いてオススメのお店を提案する新機能の実装"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                    ネイティブアプリ(iOS)"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                    【言語・フレームワーク】"),n("br"),t._v("\n                                    Swift"),n("br")])])],1),n("a",{attrs:{href:"https://www.unicast.ne.jp/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("株式会社ユニキャスト")])]),n("h5",[t._v("2018年 5月〜2019年7月")]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2019年1月~2019年6月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                    新規サービス(中古車購入サービス)のiOSアプリ(Swift)、サーバーサイド(Rails)の立ち上げ及び設計、開発"),n("br"),t._v("\n                                    企画にも参加し、競合調査や自分たちのサービスの強み等もサービス思考を持ち提案等行った。"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                    サーバーサイド, ネイティブアプリ(iOS), クローラー"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                    【言語・フレームワーク】"),n("br"),t._v("\n                                    Ruby | Ruby on Rails | Swift | BootStrap | HTML | CSS | JavaScript | jQuery "),n("br"),t._v("\n                                    【ミドルウェア】"),n("br"),t._v("\n                                    Postgres | Docker "),n("br"),t._v("\n                                    【クラウドサービス】"),n("br"),t._v("\n                                    Firebase | Firestore\n                                    AWS "),n("br"),t._v("\n                                    EC2 | S3\n                                ")])]),n("div",{staticClass:"more-interns",staticStyle:{display:"none"}},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                        2018年12月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                        研究用ツール (Androidアプリ)のUI修正及び画像処理の機能追加"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                        ネイティブアプリ(Android)"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                        【言語・フレームワーク】"),n("br"),t._v("\n                                        Java | OpenCV | Python\n                                    ")])]),n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                        2018年10月~2018年11月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                        研究用ツール(信号処理、物体検知、及び同期表示GUI)の作成"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                        研究用ツールの開発"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                        【言語・フレームワーク】"),n("br"),t._v("\n                                        Python | Chainer | YoLoV3 | OpenCV | wxPython\n                                    ")])]),n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                        2018年9月~2018年10月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                        普及型社会的対話ロボット「Sota」を用いた英会話チャットボットの実装"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                        ソフトウェア開発"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                        【言語・フレームワーク】"),n("br"),t._v("\n                                        Kotlin | Java\n                                    ")])]),n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                        2018年6月~2018年7月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                        接客ロボットアプリケーションの新機能実装"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                        ソフトウェア開発"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                        【言語・フレームワーク】"),n("br"),t._v("\n                                        Ruby | Ruby on Rails | HTML | CSS | JavaScript | jQuery | BootStrap\n                                        "),n("br"),t._v("\n                                        【ミドルウェア】"),n("br"),t._v("\n                                        Postgres | Docker\n                                    ")])]),n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                        2018年5月"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                        WordPressで構築されたサービスの新規ページ作成"),n("br"),n("strong",[t._v("担当")]),n("br"),t._v("\n                                        ソフトウェア開発"),n("br"),n("strong",[t._v("環境・言語")]),n("br"),t._v("\n                                        【言語・フレームワーク】"),n("br"),t._v("\n                                        WordPress | HTML | CSS | JavaScript | jQuery\n                                    ")])])],1)],1),n("div",{staticStyle:{"text-align":"center"}},[n("b-button",{staticClass:"intern-more-button",on:{click:function(r){return t.openClose()}}},[t._v("more")])],1)],1)],1)],1)],1)])],1)},x=[],j={methods:{openClose:function(){for(var t=document.getElementsByClassName("more-interns"),r=document.querySelector(".intern-more-button"),n=0;n<t.length;n++)"inline-block"==t[n].style.display?(t[n].style.display="none",r.innerText="more"):(t[n].style.display="inline-block",r.innerText="close")}}},O=j,P=Object(c["a"])(O,k,x,!1,null,null,null),R=P.exports,E=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"4"}},[n("b-card-img",{staticClass:"profile-image",staticStyle:{"max-width":"100%"},attrs:{fluid:"",src:"profile_image.jpg"}})],1),n("b-col",{attrs:{md:"8"}},[n("b-card-body",[n("b-card-text",{staticStyle:{"text-align":"left"}},[n("h2",{staticClass:"font-weight-bold"},[t._v("About Me")]),n("p",[t._v("\n                  大学を休学しエンジニアとして活動している大学生です。"),n("br"),t._v("\n                  長期インターンを複数社にて経験し、業務として約1年半エンジニアとして携わっております。"),n("br"),t._v("\n                  分野としてはフロントエンド, ネイティブアプリ, サーバーサイド, インフラと幅広く触れております。"),n("br"),t._v("\n                  新規事業の立ち上げやスタートアップでのインターン等経験があります。"),n("br")]),n("h4",{staticClass:"font-weight-bold"},[t._v("得意とする分野")]),n("ul",[n("li",[t._v("\n                    Ruby及びRuby on Railsを用いたサーバーサイド開発\n                  ")]),n("p",[t._v("業務にて約1年程の開発経験があります。具体的にはAPI、管理画面、クローラー等を業務にて開発致しました。")]),n("li",[t._v("\n                    Swiftを用いたネイティブアプリ開発(iOS)\n                  ")]),n("p",[t._v("業務にて約半年程の開発経験があります。アーキテクチャとしてはVIPERを用いての開発を経験致しました。")]),n("li",[t._v("\n                    他にも複数技術の使用経験がございます。未経験の技術であっても苦手意識を持たず、短期間でのキャチアップができます。\n                  ")])])])],1)],1)],1)],1)],1)])],1)},A=[],H=(n("0527"),{}),T=Object(c["a"])(H,E,A,!1,null,"318d91d6",null),B=T.exports,L=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-text",{staticStyle:{"text-align":"left"}},[n("h2",{staticClass:"font-weight-bold pb-5"},[t._v("Portfolio")]),n("b-row",{staticClass:"pb-5"},[n("b-col",{attrs:{sm:"5"}},[n("strong",[t._v("2019年"),n("br"),t._v(" ポートフォリオサイト(現在のページ)")])]),n("b-col",{attrs:{sm:"5"}},[n("p",[t._v("Vue.jsを用いてポートフォリオサイトを制作"),n("br"),t._v("\n                                    GitHub Actionsを用いたCI/CD環境"),n("br"),t._v("\n                                    GitHub Pagesを用いてホスティング"),n("br")]),n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"portfolio/my_page_deploy_flow.png"}})],1),n("b-col",{attrs:{sm:"2"}},[n("a",{attrs:{href:"https://github.com/taka011002/my_page"}},[t._v("GitHub")])])],1),n("b-row",{staticClass:"pb-5"},[n("b-col",{attrs:{sm:"5"}},[n("strong",[n("strong",[t._v("2019年"),n("br"),t._v("iOSアプリの制作")])])]),n("b-col",{attrs:{sm:"5"}},[n("p",[t._v("Firebase及びCloud Firestoreを学ぶために簡易的なiOSアプリの作成を行った")])]),n("b-col",{attrs:{sm:"2"}},[n("a",{attrs:{href:"https://qiita.com/takahiro_ishitsuka/items/c8ed9c0aa4d3257fc7ee"}},[t._v("Qiita")]),n("br"),n("a",{attrs:{href:"https://github.com/taka011002/monolish"}},[t._v("GitHub")]),n("br"),n("a",{attrs:{href:"https://github.com/taka011002/firestore_test_ios"}},[t._v("GitHub")]),n("br")])],1),n("b-row",{staticClass:"pb-5"},[n("b-col",{attrs:{sm:"12"}},[n("strong",[t._v("2018年 4月 Shopper")])]),n("b-col",{attrs:{sm:"5"}},[n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"portfolio/shopper.jpg"}})],1),n("b-col",{attrs:{sm:"5"}},[n("p",[t._v("Rails Tutorialにて学んだ知識のアウトプットとして、ショッピングサイトの構築を行った。")])]),n("b-col",{attrs:{sm:"2"}},[n("a",{attrs:{href:"https://github.com/taka011002/shopping-site"}},[t._v("GitHub")])])],1),n("b-row",{staticClass:"pb-5"},[n("b-col",{attrs:{sm:"12"}},[n("strong",[t._v("2018年 3月 Rails Tutorial")])]),n("b-col",{attrs:{sm:"5"}},[n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"portfolio/rails_tutorial.jpg"}})],1),n("b-col",{attrs:{sm:"5"}},[n("p",[t._v("Rails Tutorialにて、webアプリーケーションの大枠について学んだ。")])]),n("b-col",{attrs:{sm:"2"}},[n("a",{attrs:{href:"https://github.com/taka011002/rails_tutorial"}},[t._v("GitHub")])])],1)],1)],1)],1)],1)])],1)},M=[],D={},$=Object(c["a"])(D,L,M,!1,null,null,null),G=$.exports,z=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-text",{staticStyle:{"text-align":"left"}},[n("h2",{staticClass:"font-weight-bold pb-3"},[t._v("Other")]),n("a",{attrs:{href:"https://mushashugyo.jp/about/"}},[n("h5",{staticClass:"font-weight-bold"},[t._v("武者修行プログラム")])]),n("b-row",{staticClass:"pb-3"},[n("b-col",{attrs:{sm:"12"}},[n("p",[n("strong",[t._v("期間")]),n("br"),t._v("\n                                    2018年8月(2週間)"),n("br"),n("strong",[t._v("内容")]),n("br"),t._v("\n                                    新興国での超実践型海外ビジネス研修"),n("br"),t._v("\n                                    ホイアン(ベトナム)にてヌードルレストランのプロモーションを企画、立案し実行した"),n("br")])])],1)],1)],1)],1)],1)])],1)},I=[],J={},F=Object(c["a"])(J,z,I,!1,null,null,null),Q=F.exports,V=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-text",[n("h2",{staticClass:"font-weight-bold"},[t._v("Links")]),n("b-row",[n("b-col",{attrs:{cols:"3"}},[n("b-link",{attrs:{href:"https://github.com/taka011002"}},[n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/github_logo.png"}})],1)],1),n("b-col",{attrs:{cols:"3"}},[n("b-link",{attrs:{href:"https://qiita.com/takahiro_ishitsuka"}},[n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/qiita-square.png"}})],1)],1),n("b-col",{attrs:{cols:"3"}},[n("b-link",{attrs:{href:"https://twitter.com/taka0110_"}},[n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/twitter_logo.png"}})],1)],1),n("b-col",{attrs:{cols:"3"}},[n("b-link",{attrs:{href:"https://www.facebook.com/takahiro.ishitsuka.9"}},[n("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/facebook_logo.png"}})],1)],1)],1)],1)],1)],1)],1)])],1)},W=[],q={},K=Object(c["a"])(q,V,W,!1,null,null,null),N=K.exports,U={components:{myHeader:_,skills:C,interns:R,aboutMe:B,lazyBox:g,portfolio:G,other:Q,links:N},data:function(){return{msg:"Hello World!"}},methods:{clear:function(){this.msg=""}}},X=U,Y=(n("5c0b"),Object(c["a"])(X,o,a,!1,null,null,null)),Z=Y.exports,tt=n("8c4f"),rt=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("div",[n("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[n("b-card-body",{attrs:{title:"Experiences"}},[n("b-card-text",[n("h5",[t._v("2018/03")]),n("p",[t._v("Rails Tutorial等を用いてweb関連に関する知識を学ぶ")])])],1)],1)],1)])],1)},nt=[],st={},ot=Object(c["a"])(st,rt,nt,!1,null,null,null),at=ot.exports;s["default"].use(tt["a"]);var et=new tt["a"]({mode:"history",base:"/my_page/",routes:[{path:"/",name:"about_me",component:B},{path:"/experiences",name:"experiences",component:at}]}),it=n("2f62");s["default"].use(it["a"]);var lt=new it["a"].Store({state:{},mutations:{},actions:{}}),bt=n("5f5b"),ct=(n("f9e3"),n("2dd8"),n("c4e8")),vt=n.n(ct);s["default"].use(bt["a"]),s["default"].use(vt.a),s["default"].config.productionTip=!1,new s["default"]({router:et,store:lt,render:function(t){return t(Z)}}).$mount("#app")},"5c0b":function(t,r,n){"use strict";var s=n("5e27"),o=n.n(s);o.a},"5e27":function(t,r,n){},"9fc2":function(t,r,n){"use strict";var s=n("50e0"),o=n.n(s);o.a},fa46:function(t,r,n){}});
//# sourceMappingURL=app.cbd987c2.js.map