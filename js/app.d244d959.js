(function(t){function r(r){for(var n,e,i=r[0],l=r[1],b=r[2],v=0,_=[];v<i.length;v++)e=i[v],o[e]&&_.push(o[e][0]),o[e]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(r);while(_.length)_.shift()();return a.push.apply(a,b||[]),s()}function s(){for(var t,r=0;r<a.length;r++){for(var s=a[r],n=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(n=!1)}n&&(a.splice(r--,1),t=e(e.s=s[0]))}return t}var n={},o={app:0},a=[];function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=n,e.d=function(t,r,s){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:s})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(s,n,function(r){return t[r]}.bind(null,n));return s},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/my_page/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var b=0;b<i.length;b++)r(i[b]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,r,s){t.exports=s("56d7")},"0527":function(t,r,s){"use strict";var n=s("fa46"),o=s.n(n);o.a},"56d7":function(t,r,s){"use strict";s.r(r);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),o=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{attrs:{id:"app"}},[s("header",[s("myHeader")],1),s("div",{attrs:{id:"nav"}}),s("b-container",[s("about-me",{staticClass:"content",attrs:{id:"about-me"}}),s("skills",{staticClass:"content",attrs:{id:"skills"}}),s("interns",{staticClass:"content",attrs:{id:"interns"}}),s("portfolio",{staticClass:"content",attrs:{id:"portfolio"}}),s("other",{staticClass:"content",attrs:{id:"other"}}),s("links",{staticClass:"content",attrs:{id:"links"}})],1)],1)},a=[],e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info",fixed:"top"}},[s("b-navbar-brand",{attrs:{href:"#"},on:{click:function(r){return t.smoothScroll("about-me")}}},[t._v("Taka")]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-navbar-nav",[s("b-nav-item",{on:{click:function(r){return t.smoothScroll("about-me")}}},[t._v("About Me")]),s("b-nav-item",{on:{click:function(r){return t.smoothScroll("skills")}}},[t._v("Skills")]),s("b-nav-item",{on:{click:function(r){return t.smoothScroll("interns")}}},[t._v("Interns")]),s("b-nav-item",{on:{click:function(r){return t.smoothScroll("portfolio")}}},[t._v("Portfolio")]),s("b-nav-item",{on:{click:function(r){return t.smoothScroll("other")}}},[t._v("Other")]),s("b-nav-item",{on:{click:function(r){return t.smoothScroll("links")}}},[t._v("Links")])],1)],1)],1)],1)],1)},i=[],l={methods:{smoothScroll:function(t){this.$SmoothScroll(document.querySelector("#"+t),400,null,null,"y")}}},b=l,c=s("2877"),v=Object(c["a"])(b,e,i,!1,null,null,null),_=v.exports,u=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[s("b-card-body",[s("b-card-text",{staticStyle:{"text-align":"left"}},[s("h2",{staticClass:"font-weight-bold"},[t._v("Skills")]),s("p",[t._v("業務にて使用したことのある技術を記述しております。")]),s("h4",{staticClass:"font-weight-bold"},[t._v("Language&Framework")]),s("p",[t._v("Ruby(Ruby on Rails) | Swift(iOS Application) | Go | Python | Kotlin(Android) | Java(Android, Spring Boot) |\n                                        C#(ASP.NET Core, Unity) | PHP | JS(jQuery, Vue, Node-RED) | HTML | CSS")]),s("h4",{staticClass:"font-weight-bold"},[t._v("Middleware")]),s("p",[t._v("PostgreSQL | MySQL | Redis | Docker")]),s("h4",{staticClass:"font-weight-bold"},[t._v("Public cloud")]),s("h5",{staticClass:"font-weight-bold"},[t._v("AWS")]),s("p",[t._v("EC2 | ECS | ECR | S3 | RDS | CodePipeline | CodeBuild | Kinesis Data Firehose | Athena | QuickSight Lambda | Cloudwatch")]),s("h5",{staticClass:"font-weight-bold"},[t._v("GCP")]),s("p",[t._v("Cloud Storage | Firebase | Cloud Firestore | Cloud Speech-to-Text")]),s("h4",{staticClass:"font-weight-bold"},[t._v("Licence")]),s("p",[t._v("基本情報技術者試験")])])],1)],1)],1)])],1)},d=[],h={},p=Object(c["a"])(h,u,d,!1,null,null,null),f=p.exports,g=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[s("b-card-body",[s("b-card-text",{staticStyle:{"text-align":"left"}},[s("h2",{staticClass:"font-weight-bold pb-3"},[t._v("Interns")]),s("a",{attrs:{href:"https://spectra.tokyo/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("株式会社Spectra")])]),s("h5",[t._v("2019年8月~2019年12月")]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2019年8月~2019年12月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                    チケット見逃し防止アプリ「Freax」の機能改善"),s("br"),t._v("\n                                    【担当業務】"),s("br"),t._v("\n                                    ・APIドキュメントの整備"),s("br"),t._v("\n                                    ・APIサーバーのレスポンススピード改善"),s("br"),t._v("\n                                    ・1日1万件近く出力されるクローラーのエラーログ分析基盤の構築"),s("br"),t._v("\n                                    ・クローラーの改修及び新規設計"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                    サーバーサイド"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                    【言語・フレームワーク】"),s("br"),t._v("\n                                    Ruby | Ruby on Rails "),s("br"),t._v("\n                                    【ミドルウェア】"),s("br"),t._v("\n                                    Mysql | Docker "),s("br"),t._v("\n                                    【クラウドサービス】"),s("br"),t._v("\n                                    ・AWS "),s("br"),t._v("\n                                    Cloud Watch | Kinesis | Lamda | S3 | Athena | QuickSight"),s("br")])])],1),s("a",{attrs:{href:"https://www.cyberagent.co.jp/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("株式会社サイバーエージェント")])]),s("h5",[t._v("2019年9月(3日間)")]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2019年9月(3日間)"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                    AbemaTVのiOSアプリに架空の新機能を立案し、実装"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                    ネイティブアプリ(iOS)"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                    【言語・フレームワーク】"),s("br"),t._v("\n                                    Swift"),s("br")])])],1),s("a",{attrs:{href:"https://corp.rakuten.co.jp/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("楽天株式会社")])]),s("h5",[t._v("2019年9月(1週間)")]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2019年9月(1週間)"),s("br"),s("strong",[t._v("内容")]),s("br"),s("a",{attrs:{href:"https://corp.rakuten.co.jp/careers/graduates/engineer/commerce/intern/2019/"}},[t._v("公式ページ")]),s("br"),t._v("\n                                    “Empowerment for xxxx”のテーマの元、チームで新規サービスの企画、及び実装を行い優勝"),s("br"),t._v("\n                                    具体的には、悩みを相談したい人と人の悩みを聞いてあげたい人をマッチングし、通話できるサービスを開発した。"),s("br"),s("a",{attrs:{href:"https://github.com/taka011002/suzukisan"}},[t._v("GitHub")]),s("br"),s("a",{attrs:{href:"https://suzukisan.herokuapp.com/"}},[t._v("Demo")]),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                    フロントエンド"),s("br"),t._v("\n                                    サーバーサイド"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                    【言語・フレームワーク】"),s("br"),t._v("\n                                    Java | Spring Boot\n                                    "),s("br"),t._v("\n                                    【ミドルウェア】"),s("br"),t._v("\n                                    H2 Database "),s("br"),t._v("\n                                    【PaaS】"),s("br"),t._v("\n                                    skyway"),s("br")])])],1),s("a",{attrs:{href:"https://www.future.co.jp/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("フューチャー株式会社")])]),s("h5",[t._v("2019年8月(2週間)")]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2019年8月(2週間)"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                    DX(デジタルトランスフォーメーション)に関する案件に関与"),s("br"),t._v("\n                                    【担当業務】"),s("br"),t._v("\n                                    ・コンテナ環境の整備"),s("br"),t._v("\n                                    ・CI/CD環境構築"),s("br"),t._v("\n                                    ・フロントエンドからサーバーサイドへのエンドポイント作成及び繋ぎ込み"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                    フロントエンド"),s("br"),t._v("\n                                    サーバーサイド"),s("br"),t._v("\n                                    インフラ"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                    【言語・フレームワーク】"),s("br"),t._v("\n                                    Go | Vue.js | Typescript "),s("br"),t._v("\n                                    【ミドルウェア】"),s("br"),t._v("\n                                    Postgres | Docker "),s("br"),t._v("\n                                    【クラウドサービス】"),s("br"),t._v("\n                                    ・AWS"),s("br"),t._v("\n                                    S3 | ECS | ECR | CodePipeline | CodeBuild | Aurora | Lamda\n                                ")])])],1),s("a",{attrs:{href:"https://retty.me/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("Retty株式会社")])]),s("h5",[t._v("2019年8月(1週間)")]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2019年8月(1週間)"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                    iOSアプリへSiriを用いてオススメのお店を提案する新機能の実装"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                    ネイティブアプリ(iOS)"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                    【言語・フレームワーク】"),s("br"),t._v("\n                                    Swift"),s("br")])])],1),s("a",{attrs:{href:"https://www.unicast.ne.jp/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("株式会社ユニキャスト")])]),s("h5",[t._v("2018年 5月〜2019年7月")]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2019年1月~2019年6月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                    新規サービス(中古車購入サービス)のiOSアプリ(Swift)、サーバーサイド(Rails)の立ち上げ及び設計、開発"),s("br"),t._v("\n                                    企画にも参加し、競合調査や自分たちのサービスの強み等もサービス思考を持ち提案等行った。"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                    サーバーサイド, ネイティブアプリ(iOS), クローラー"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                    【言語・フレームワーク】"),s("br"),t._v("\n                                    Ruby | Ruby on Rails | Swift | BootStrap | HTML | CSS | JavaScript | jQuery "),s("br"),t._v("\n                                    【ミドルウェア】"),s("br"),t._v("\n                                    Postgres | Docker "),s("br"),t._v("\n                                    【クラウドサービス】"),s("br"),t._v("\n                                    Firebase | Firestore\n                                    AWS "),s("br"),t._v("\n                                    EC2 | S3\n                                ")])]),s("div",{staticClass:"more-interns",staticStyle:{display:"none"}},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                        2018年12月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                        研究用ツール (Androidアプリ)のUI修正及び画像処理の機能追加"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                        ネイティブアプリ(Android)"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                        【言語・フレームワーク】"),s("br"),t._v("\n                                        Java | OpenCV | Python\n                                    ")])]),s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                        2018年10月~2018年11月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                        研究用ツール(信号処理、物体検知、及び同期表示GUI)の作成"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                        研究用ツールの開発"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                        【言語・フレームワーク】"),s("br"),t._v("\n                                        Python | Chainer | YoLoV3 | OpenCV | wxPython\n                                    ")])]),s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                        2018年9月~2018年10月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                        普及型社会的対話ロボット「Sota」を用いた英会話チャットボットの実装"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                        ソフトウェア開発"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                        【言語・フレームワーク】"),s("br"),t._v("\n                                        Kotlin | Java\n                                    ")])]),s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                        2018年6月~2018年7月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                        接客ロボットアプリケーションの新機能実装"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                        ソフトウェア開発"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                        【言語・フレームワーク】"),s("br"),t._v("\n                                        Ruby | Ruby on Rails | HTML | CSS | JavaScript | jQuery | BootStrap\n                                        "),s("br"),t._v("\n                                        【ミドルウェア】"),s("br"),t._v("\n                                        Postgres | Docker\n                                    ")])]),s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                        2018年5月"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                        WordPressで構築されたサービスの新規ページ作成"),s("br"),s("strong",[t._v("担当")]),s("br"),t._v("\n                                        ソフトウェア開発"),s("br"),s("strong",[t._v("環境・言語")]),s("br"),t._v("\n                                        【言語・フレームワーク】"),s("br"),t._v("\n                                        WordPress | HTML | CSS | JavaScript | jQuery\n                                    ")])])],1)],1),s("div",{staticStyle:{"text-align":"center"}},[s("b-button",{staticClass:"intern-more-button",on:{click:function(r){return t.openClose()}}},[t._v("more")])],1)],1)],1)],1)],1)])],1)},m=[],w={methods:{openClose:function(){for(var t=document.getElementsByClassName("more-interns"),r=document.querySelector(".intern-more-button"),s=0;s<t.length;s++)"inline-block"==t[s].style.display?(t[s].style.display="none",r.innerText="more"):(t[s].style.display="inline-block",r.innerText="close")}}},y=w,S=Object(c["a"])(y,g,m,!1,null,null,null),C=S.exports,k=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{attrs:{md:"4"}},[s("b-card-img",{staticClass:"profile-image",staticStyle:{"max-width":"100%"},attrs:{fluid:"",src:"profile_image.jpg"}})],1),s("b-col",{attrs:{md:"8"}},[s("b-card-body",[s("b-card-text",{staticStyle:{"text-align":"left"}},[s("h2",{staticClass:"font-weight-bold"},[t._v("About Me")]),s("p",[t._v("\n                  大学を休学しエンジニアとして活動している大学生です。"),s("br"),t._v("\n                  長期インターンを複数社にて経験し、業務として約1年半エンジニアとして携わっております。"),s("br"),t._v("\n                  分野としてはフロントエンド, ネイティブアプリ, サーバーサイド, インフラと幅広く触れております。"),s("br"),t._v("\n                  新規事業の立ち上げやスタートアップでのインターン等経験があります。"),s("br")]),s("h4",{staticClass:"font-weight-bold"},[t._v("得意とする分野")]),s("ul",[s("li",[t._v("\n                    Ruby及びRuby on Railsを用いたサーバーサイド開発\n                  ")]),s("p",[t._v("業務にて約1年程の開発経験があります。具体的にはAPI、管理画面、クローラー等を業務にて開発致しました。")]),s("li",[t._v("\n                    Swiftを用いたネイティブアプリ開発(iOS)\n                  ")]),s("p",[t._v("業務にて約半年程の開発経験があります。アーキテクチャとしてはVIPERを用いての開発を経験致しました。")]),s("li",[t._v("\n                    他にも複数技術の使用経験がございます。未経験の技術であっても苦手意識を持たず、短期間でのキャチアップができます。\n                  ")])])])],1)],1)],1)],1)],1)])],1)},x=[],j=(s("0527"),{}),O=Object(c["a"])(j,k,x,!1,null,"318d91d6",null),P=O.exports,R=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{sm:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[s("b-card-body",[s("b-card-text",{staticStyle:{"text-align":"left"}},[s("h2",{staticClass:"font-weight-bold pb-5"},[t._v("Portfolio")]),s("b-row",{staticClass:"pb-5"},[s("b-col",{attrs:{sm:"5"}},[s("strong",[t._v("2019年"),s("br"),t._v(" ポートフォリオサイト(現在のページ)")])]),s("b-col",{attrs:{sm:"5"}},[s("p",[t._v("Vue.jsを用いてポートフォリオサイトを制作"),s("br"),t._v("\n                                    GitHub Actionsを用いたCI/CD環境"),s("br"),t._v("\n                                    GitHub Pagesを用いてホスティング"),s("br")]),s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"portfolio/my_page_deploy_flow.png"}})],1),s("b-col",{attrs:{sm:"2"}},[s("a",{attrs:{href:"https://github.com/taka011002/my_page"}},[t._v("GitHub")])])],1),s("b-row",{staticClass:"pb-5"},[s("b-col",{attrs:{sm:"5"}},[s("strong",[s("strong",[t._v("2019年"),s("br"),t._v("iOSアプリの制作")])])]),s("b-col",{attrs:{sm:"5"}},[s("p",[t._v("Firebase及びCloud Firestoreを学ぶために簡易的なiOSアプリの作成を行った")])]),s("b-col",{attrs:{sm:"2"}},[s("a",{attrs:{href:"https://qiita.com/takahiro_ishitsuka/items/c8ed9c0aa4d3257fc7ee"}},[t._v("Qiita")]),s("br"),s("a",{attrs:{href:"https://github.com/taka011002/monolish"}},[t._v("GitHub")]),s("br"),s("a",{attrs:{href:"https://github.com/taka011002/firestore_test_ios"}},[t._v("GitHub")]),s("br")])],1),s("b-row",{staticClass:"pb-5"},[s("b-col",{attrs:{sm:"12"}},[s("strong",[t._v("2018年 4月 Shopper")])]),s("b-col",{attrs:{sm:"5"}},[s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"portfolio/shopper.jpg"}})],1),s("b-col",{attrs:{sm:"5"}},[s("p",[t._v("Rails Tutorialにて学んだ知識のアウトプットとして、ショッピングサイトの構築を行った。")])]),s("b-col",{attrs:{sm:"2"}},[s("a",{attrs:{href:"https://github.com/taka011002/shopping-site"}},[t._v("GitHub")])])],1),s("b-row",{staticClass:"pb-5"},[s("b-col",{attrs:{sm:"12"}},[s("strong",[t._v("2018年 3月 Rails Tutorial")])]),s("b-col",{attrs:{sm:"5"}},[s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"portfolio/rails_tutorial.jpg"}})],1),s("b-col",{attrs:{sm:"5"}},[s("p",[t._v("Rails Tutorialにて、webアプリーケーションの大枠について学んだ。")])]),s("b-col",{attrs:{sm:"2"}},[s("a",{attrs:{href:"https://github.com/taka011002/rails_tutorial"}},[t._v("GitHub")])])],1)],1)],1)],1)],1)])],1)},E=[],A={},T=Object(c["a"])(A,R,E,!1,null,null,null),H=T.exports,L=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[s("b-card-body",[s("b-card-text",{staticStyle:{"text-align":"left"}},[s("h2",{staticClass:"font-weight-bold pb-3"},[t._v("Other")]),s("a",{attrs:{href:"https://mushashugyo.jp/about/"}},[s("h5",{staticClass:"font-weight-bold"},[t._v("武者修行プログラム")])]),s("b-row",{staticClass:"pb-3"},[s("b-col",{attrs:{sm:"12"}},[s("p",[s("strong",[t._v("期間")]),s("br"),t._v("\n                                    2018年8月(2週間)"),s("br"),s("strong",[t._v("内容")]),s("br"),t._v("\n                                    新興国での超実践型海外ビジネス研修"),s("br"),t._v("\n                                    ホイアン(ベトナム)にてヌードルレストランのプロモーションを企画、立案し実行した"),s("br")])])],1)],1)],1)],1)],1)])],1)},M=[],D={},G=Object(c["a"])(D,L,M,!1,null,null,null),$=G.exports,I=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[s("b-card-body",[s("b-card-text",[s("h2",{staticClass:"font-weight-bold"},[t._v("Links")]),s("b-row",[s("b-col",{attrs:{cols:"3"}},[s("b-link",{attrs:{href:"https://github.com/taka011002"}},[s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/github_logo.png"}})],1)],1),s("b-col",{attrs:{cols:"3"}},[s("b-link",{attrs:{href:"https://qiita.com/takahiro_ishitsuka"}},[s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/qiita-square.png"}})],1)],1),s("b-col",{attrs:{cols:"3"}},[s("b-link",{attrs:{href:"https://twitter.com/taka0110_"}},[s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/twitter_logo.png"}})],1)],1),s("b-col",{attrs:{cols:"3"}},[s("b-link",{attrs:{href:"https://www.facebook.com/takahiro.ishitsuka.9"}},[s("b-img",{staticStyle:{"max-width":"100%"},attrs:{src:"icons/facebook_logo.png"}})],1)],1)],1)],1)],1)],1)],1)])],1)},J=[],F={},Q=Object(c["a"])(F,I,J,!1,null,null,null),V=Q.exports,W={components:{myHeader:_,skills:f,interns:C,aboutMe:P,portfolio:H,other:$,links:V},data:function(){return{msg:"Hello World!"}},methods:{clear:function(){this.msg=""}}},q=W,B=(s("5c0b"),Object(c["a"])(q,o,a,!1,null,null,null)),K=B.exports,N=s("8c4f"),U=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("div",[s("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[s("b-card-body",{attrs:{title:"Experiences"}},[s("b-card-text",[s("h5",[t._v("2018/03")]),s("p",[t._v("Rails Tutorial等を用いてweb関連に関する知識を学ぶ")])])],1)],1)],1)])],1)},z=[],X={},Y=Object(c["a"])(X,U,z,!1,null,null,null),Z=Y.exports;n["default"].use(N["a"]);var tt=new N["a"]({mode:"history",base:"/my_page/",routes:[{path:"/",name:"about_me",component:P},{path:"/experiences",name:"experiences",component:Z}]}),rt=s("2f62");n["default"].use(rt["a"]);var st=new rt["a"].Store({state:{},mutations:{},actions:{}}),nt=s("5f5b"),ot=(s("f9e3"),s("2dd8"),s("c4e8")),at=s.n(ot);n["default"].use(nt["a"]),n["default"].use(at.a),n["default"].config.productionTip=!1,new n["default"]({router:tt,store:st,render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,r,s){"use strict";var n=s("5e27"),o=s.n(n);o.a},"5e27":function(t,r,s){},fa46:function(t,r,s){}});
//# sourceMappingURL=app.d244d959.js.map