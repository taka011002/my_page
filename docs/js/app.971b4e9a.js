(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],v=0,b=[];v<i.length;v++)s=i[v],n[s]&&b.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/my_page/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"344f":function(t,e,r){"use strict";var a=r("5137"),n=r.n(a);n.a},5137:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("myHeader")],1),r("div",{attrs:{id:"nav"}}),r("b-container",[r("about-me",{staticClass:"content",attrs:{id:"about-me"}}),r("thought",{staticClass:"content",attrs:{id:"thought"}}),r("skills",{staticClass:"content",attrs:{id:"skills"}}),r("interns",{staticClass:"content",attrs:{id:"interns"}}),r("portfolio",{staticClass:"content",attrs:{id:"portfolio"}}),r("links",{staticClass:"content",attrs:{id:"links"}})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info",fixed:"top"}},[r("b-navbar-brand",{attrs:{href:"#"},on:{click:function(e){return t.smoothScroll("about-me")}}},[t._v("Taka")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-navbar-nav",[r("b-nav-item",{on:{click:function(e){return t.smoothScroll("about-me")}}},[t._v("About Me")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("thought")}}},[t._v("Thought")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("skills")}}},[t._v("Skills")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("interns")}}},[t._v("Interns")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("portfolio")}}},[t._v("Portfolio")]),r("b-nav-item",{on:{click:function(e){return t.smoothScroll("links")}}},[t._v("Links")])],1)],1)],1)],1)],1)},i=[],l={methods:{smoothScroll:function(t){this.$SmoothScroll(document.querySelector("#"+t),400,null,null,"y")}}},c=l,d=r("2877"),v=Object(d["a"])(c,s,i,!1,null,null,null),b=v.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-card-body",[r("b-card-text",{staticStyle:{"text-align":"left"}},[r("h2",{staticClass:"font-weight-bold"},[t._v("Thought")]),r("h4",{staticClass:"font-weight-bold"},[t._v("考え方")]),r("p",[t._v("「チャレンジ精神」「何故を大切に」「批判よりも提案を」を意識し、業務に取り組んでおります。\n                            仕事の環境としては、変化の激しい環境で自分の頭で考え、試行錯誤を繰り返し、自分自身成長していきたいと考えております。大切にしている事としては「迷ったらとりあえずやってみる」です。\n                        ")]),r("h4",{staticClass:"font-weight-bold"},[t._v("目標")]),r("p",[t._v("\n                            将来目指しているキャリア像としては、エンジニアとしての技術力を伸ばしつつも、ビジネスサイドの知識とスキルを身に付け、ビジネスサイドも理解し、"),r("strong",[t._v("サービス全体を設計していけるエンジニア")]),t._v("になりたいと考えております。\n                            従って、エンジニアとしてのポジション(サーバーサイド, ネイティブアプリ、フロント等)にこだわりはございません。しかし、直近としてはサーバーサイドエンジニアとして働き、インフラ寄りの知識も学ぶ事によって知識としての基盤を固めたいと考えております。\n                        ")]),r("h4",{staticClass:"font-weight-bold"},[t._v("その他")]),r("p",[t._v("\n                            エンジニアとしての長期インターン以外にも、海外ビジネスインターンへの参加や茨城から大阪までヒッチハイク等をした経験がございます。知的好奇心が強い人間の為、自分の知らない事を学ぶ事や新しい経験をする事に楽しさを感じます。\n                        ")])])],1)],1)],1)])],1)},u=[],h={},f=Object(d["a"])(h,_,u,!1,null,null,null),p=f.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-card-body",[r("b-card-text",{staticStyle:{"text-align":"left"}},[r("h2",{staticClass:"font-weight-bold"},[t._v("Skills")]),r("p",[t._v("業務にて使用したことのある技術を記述しております。")]),r("h4",{staticClass:"font-weight-bold"},[t._v("Language&Framework")]),r("p",[t._v("Ruby(Ruby on Rails) | Swift(iOS Application) | Go | Python | Kotlin(Android) | Java(Android, Spring Boot) |\n                                    C#(ASP.NET Core, Unity) | PHP | JS(jQuery, Vue, Node-RED) | HTML | CSS")]),r("h4",{staticClass:"font-weight-bold"},[t._v("Middleware")]),r("p",[t._v("PostgreSQL | MySQL | Redis | Docker")]),r("h4",{staticClass:"font-weight-bold"},[t._v("Public cloud")]),r("h5",{staticClass:"font-weight-bold"},[t._v("AWS")]),r("p",[t._v("EC2 | ECS | ECR | S3 | RDS | CodePipeline | CodeBuild | Kinesis Data Firehose | Athena | QuickSight Lambda | Cloudwatch")]),r("h5",{staticClass:"font-weight-bold"},[t._v("GCP")]),r("p",[t._v("Cloud Storage | Firebase | Cloud Firestore | Cloud Speech-to-Text")]),r("h4",{staticClass:"font-weight-bold"},[t._v("Licence")]),r("p",[t._v("基本情報技術者試験")]),r("h4",{staticClass:"font-weight-bold"},[t._v("興味あり")]),r("p",[t._v("設計パターン | Clean Architecture | DDD(ドメイン駆動開発) | Kubernetes | Microservice")])])],1)],1)],1)])],1)},m=[],w={},S=Object(d["a"])(w,g,m,!1,null,null,null),y=S.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-card-body",[r("b-card-text",{staticStyle:{"text-align":"left"}},[r("h2",{staticClass:"font-weight-bold"},[t._v("Interns")]),r("h5",{staticClass:"font-weight-bold"},[t._v("株式会社Spectra 2019年8月～現在")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("th",[t._v("期間")]),r("th",[t._v("内容")]),r("th",[t._v("担当")]),r("th",[t._v("環境・言語")])]),r("tr",[r("td",[t._v("2019年8月~現在")]),r("td",[t._v("チケット見逃し防止アプリ「Freax」の機能改善"),r("br"),t._v("\n                                    【担当業務】"),r("br"),t._v("\n                                    ・APIドキュメントの整備"),r("br"),t._v("\n                                    ・APIサーバーのレスポンススピード改善"),r("br"),t._v("\n                                    ・1日1万件近く出力されるクローラーのエラーログ分析基盤の構築"),r("br"),t._v("\n                                    ・クローラーの改修及び新規設計"),r("br")]),r("td",[t._v("サーバーサイド")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                    Ruby | Ruby on Rails "),r("br"),t._v("\n                                    【ミドルウェア】"),r("br"),t._v("\n                                    Mysql | Docker "),r("br"),t._v("\n                                    【クラウドサービス】"),r("br"),t._v("\n                                    ・AWS "),r("br"),t._v("\n                                    Cloud Watch | Kinesis | Lamda | S3 | Athena | QuickSight"),r("br")])])]),r("h5",{staticClass:"font-weight-bold"},[t._v("株式会社サイバーエージェント 2019年9月(3日間)")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("th",[t._v("期間")]),r("th",[t._v("内容")]),r("th",[t._v("担当")]),r("th",[t._v("環境・言語")])]),r("tr",[r("td",[t._v("2019年9月(3日間)")]),r("td",[t._v("AbemaTVのiOSアプリに架空の新機能を立案し、実装"),r("br")]),r("td",[t._v("ネイティブアプリ(iOS)")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Swift"),r("br")])])]),r("h5",{staticClass:"font-weight-bold"},[t._v("楽天株式会社 2019年9月(1週間)")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("th",[t._v("期間")]),r("th",[t._v("内容")]),r("th",[t._v("担当")]),r("th",[t._v("環境・言語")])]),r("tr",[r("td",[t._v("2019年9月(1週間)")]),r("td",[t._v("“Empowerment for xxxx”のテーマの元、チームで新規サービスの企画、及び実装を行い優勝"),r("br")]),r("td",[t._v("フロントエンド"),r("br"),t._v("サーバーサイド")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Java | Spring Boot\n                                    "),r("br"),t._v("\n                                    【ミドルウェア】"),r("br"),t._v("\n                                     H2 Database "),r("br"),t._v("\n                                    【PaaS】"),r("br"),t._v("\n                                     skyway"),r("br")])])]),r("h5",{staticClass:"font-weight-bold"},[t._v("フューチャー株式会社 2019年8月(2週間)")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("th",[t._v("期間")]),r("th",[t._v("内容")]),r("th",[t._v("担当")]),r("th",[t._v("環境・言語")])]),r("tr",[r("td",[t._v("2019年8月(2週間)")]),r("td",[t._v("DX(デジタルトランスフォーメーション)に関する案件に関与"),r("br"),t._v("\n\n                                    【担当業務】"),r("br"),t._v("\n                                     ・コンテナ環境の整備"),r("br"),t._v("\n                                     ・CI/CD環境構築"),r("br"),t._v("\n                                     ・フロントエンドからサーバーサイドへのエンドポイント作成及び繋ぎ込み勝"),r("br")]),r("td",[t._v("フロントエンド"),r("br"),t._v("サーバーサイド"),r("br"),t._v("インフラ")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Go | Vue.js | Typescript "),r("br"),t._v("\n                                    【ミドルウェア】"),r("br"),t._v("\n                                     Postgres | Docker\n                                    【クラウドサービス】"),r("br"),t._v("\n                                     ・AWS"),r("br"),t._v("\n                                     S3 | ECS | ECR | CodePipeline | CodeBuild | Aurora | Lamda\n\n                                ")])])]),r("h5",{staticClass:"font-weight-bold"},[t._v("Retty株式会社 2019年8月(1週間)")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("th",[t._v("期間")]),r("th",[t._v("内容")]),r("th",[t._v("担当")]),r("th",[t._v("環境・言語")])]),r("tr",[r("td",[t._v("2019年8月(1週間)")]),r("td",[t._v("iOSアプリへSiriを用いてオススメのお店を提案する新機能の実装"),r("br")]),r("td",[t._v("ネイティブアプリ(iOS)")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                    Swift"),r("br")])])]),r("h5",{staticClass:"font-weight-bold"},[t._v("株式会社ユニキャスト 2018年 5月〜2019年7月")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("th",[t._v("期間")]),r("th",[t._v("内容")]),r("th",[t._v("担当")]),r("th",[t._v("環境・言語")])]),r("tr",[r("td",[t._v("2019年1月~2019年6月")]),r("td",[t._v("中古車購入サービスのiOSアプリ(Swift)、サーバーサイド(Rails)の立ち上げ及び設計、開発")]),r("td",[t._v("サーバーサイド, ネイティブアプリ(iOS), クローラー")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Ruby | Ruby on Rails | Swift | BootStrap | HTML | CSS | JavaScript | jQuery "),r("br"),t._v("\n                                    【ミドルウェア】"),r("br"),t._v("\n                                     Postgres | Docker "),r("br"),t._v("\n                                    【クラウドサービス】"),r("br"),t._v("\n                                     Firebase | Firestore\n                                     AWS "),r("br"),t._v("\n                                     EC2 | S3\n                                ")])])]),r("table",{staticClass:"spacing-table overflow-hidden more-interns",staticStyle:{display:"none"}},[r("tr",[r("td",[t._v("2018年12月")]),r("td",[t._v("研究用ツール (Androidアプリ)のUI修正及び画像処理の機能追加")]),r("td",[t._v("ネイティブアプリ(Android)")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Java | OpenCV | Python\n                                    "),r("br")])]),r("tr",[r("td",[t._v("2018年10月~2018年11月")]),r("td",[t._v("研究用ツール(信号処理、物体検知、及び同期表示GUI)の作成")]),r("td",[t._v("研究用ツールの開発")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Python | Chainer | YoLoV3 | OpenCV | wxPython\n                                ")])]),r("tr",[r("td",[t._v("2018年9月~2018年10月")]),r("td",[t._v("普及型社会的対話ロボット「Sota」を用いた英会話チャットボットの実装")]),r("td",[t._v("ソフトウェア開発")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Kotlin | Java\n                                ")])]),r("tr",[r("td",[t._v("2018年6月~2018年7月")]),r("td",[t._v("接客ロボットアプリケーションの新機能実装")]),r("td",[t._v("ソフトウェア開発")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     Ruby | Ruby on Rails | HTML | CSS | JavaScript | jQuery | BootStrap\n                                    "),r("br"),t._v("\n                                    【ミドルウェア】"),r("br"),t._v("\n                                     Postgres | Docker\n                                ")])]),r("tr",[r("td",[t._v("2018年5月")]),r("td",[t._v("WordPressで構築されたサービスの新規ページ作成")]),r("td",[t._v("ソフトウェア開発")]),r("td",[t._v("【言語・フレームワーク】"),r("br"),t._v("\n                                     WordPress | HTML | CSS | JavaScript | jQuery\n\n                                ")])])]),r("div",{staticStyle:{"text-align":"center"}},[r("b-button",{staticClass:"intern-more-button",on:{click:function(e){return t.openClose()}}},[t._v("more")])],1)])],1)],1)],1)])],1)},x=[],k={methods:{openClose:function(){for(var t=document.getElementsByClassName("more-interns"),e=document.getElementsByClassName("intern-more-button"),r=0;r<t.length;r++)"inline-block"==t[r].style.display?(t[r].style.display="none",e.text="more"):(t[r].style.display="inline-block",e.text="hidden")}}},P=k,O=Object(d["a"])(P,C,x,!1,null,null,null),R=O.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"4"}},[r("b-card-img",{staticClass:"profile-image",staticStyle:{"max-width":"350px"},attrs:{src:"profile_image.jpg"}})],1),r("b-col",{attrs:{md:"8"}},[r("b-card-body",[r("b-card-text",{staticStyle:{"text-align":"left"}},[r("h2",{staticClass:"font-weight-bold"},[t._v("About Me")]),r("p",[t._v("\n                  大学を休学し、エンジニアとして活動している大学生です。"),r("br"),t._v("\n                  長期インターンを複数社にて経験し、業務としては約1年半エンジニアとして携わっております。"),r("br"),t._v("\n                  分野としてはフロントエンド, ネイティブアプリ, サーバーサイド, インフラと幅広く触れております。"),r("br"),t._v("\n                  現在は都内のスタートアップにてほぼフルタイムにてインターンしております。"),r("br")]),r("h4",{staticClass:"font-weight-bold"},[t._v("基本情報")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("td",[t._v("名前:")]),r("td",[t._v("石塚 崇寛")])]),r("tr",[r("td",[t._v("生年月日:")]),r("td",[t._v("1998/01/10")])]),r("tr",[r("td",[t._v("出身:")]),r("td",[t._v("茨城県")])]),r("tr",[r("td",[t._v("大学:")]),r("td",[t._v("茨城大学 電気電子工学科 学部 4年 (現在休学中)"),r("br"),t._v("\n                      大学では電気回路、電磁気、半導体といった分野を学んでおります。"),r("br")])]),r("tr",[r("td"),r("td")])]),r("h4",{staticClass:"font-weight-bold"},[t._v("得意とする分野")]),r("ul",[r("li",[t._v("\n                    Ruby及びRuby on Railsを用いたサーバーサイド開発\n                  ")]),r("p",[t._v("業務にて約1年程の開発経験があります。具体的にはAPI、管理画面、クローラー等を業務にて開発致しました。\n                    動的型付けであるRubyでのサーバーサイド開発においてテストコードは必須だと考えております。")]),r("li",[t._v("\n                    Swiftを用いたネイティブアプリ開発(iOS)\n                  ")]),r("p",[t._v("業務にて約半年程の開発経験があります。アーキテクチャとしてはVIPERを用いての開発を経験致しました。\n                     責務を層(View, API等)で適切に分割してコードを書く事を意識し、ネイティブアプリ開発を行っております。")]),r("li",[t._v("\n                    他にも複数技術の使用経験がございます。未経験の技術であっても苦手意識を持たず、短期間でのキャチアップができます。\n                  ")])])])],1)],1)],1)],1)],1)])],1)},E=[],A=(r("344f"),{}),T=Object(d["a"])(A,j,E,!1,null,"690152ca",null),M=T.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[r("b-card-body",[r("b-card-text",{staticStyle:{"text-align":"left"}},[r("h2",{staticClass:"font-weight-bold"},[t._v("Portfolio")]),r("table",{staticClass:"spacing-table overflow-hidden"},[r("tr",[r("td",[r("strong",[t._v("2019年"),r("br"),t._v(" ポートフォリオサイト(現在のページ)")])]),r("td",[t._v("Vue.jsを用いてポートフォリオサイトを制作")]),r("td",[r("a",{attrs:{href:"https://github.com/taka011002/my_page"}},[t._v("Github")])])]),r("tr",[r("td",[r("strong",[t._v("2019年"),r("br"),t._v("iOSアプリの制作")])]),r("td",[t._v("Firebase及びCloud Firestoreを学ぶために簡易的なiOSアプリの作成を行った")]),r("td",[r("a",{attrs:{href:"https://qiita.com/takahiro_ishitsuka/items/c8ed9c0aa4d3257fc7ee"}},[t._v("Qiita")])]),r("td",[r("a",{attrs:{href:"https://github.com/taka011002/monolish"}},[t._v("Github")])]),r("td",[r("a",{attrs:{href:"https://github.com/taka011002/firestore_test_ios"}},[t._v("Github")])])]),r("tr",[r("strong",[t._v("2018年4月 Shopper")])]),r("tr",[r("td",[r("b-img",{staticStyle:{"max-width":"400px"},attrs:{src:"portfolio/shopper.jpg"}})],1),r("td",[t._v("Rails Tutorialにて学んだ知識のアウトプットとして、ショッピングサイトの構築を行った。")]),r("td",[r("a",{attrs:{href:"https://github.com/taka011002/shopping-site"}},[t._v("github")])])]),r("tr",[r("strong",[t._v("2018年3月 Rails Tutorial")])]),r("tr",[r("td",[r("b-img",{staticStyle:{"max-width":"400px"},attrs:{src:"portfolio/rails_tutorial.jpg"}})],1),r("td",[t._v("Rails Tutorialにて、webアプリーケーションの大枠について学んだ。")]),r("td",[r("a",{attrs:{href:"https://github.com/taka011002/rails_tutorial"}},[t._v("github")])])])])])],1)],1)],1)])],1)},L=[],$={},I=Object(d["a"])($,D,L,!1,null,null,null),J=I.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-card-body",[r("b-card-text",[r("h2",{staticClass:"font-weight-bold"},[t._v("Links")]),r("b-row",[r("b-col",{attrs:{cols:"3"}},[r("b-link",{attrs:{href:"https://github.com/taka011002"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/github_logo.png"}})],1)],1),r("b-col",{attrs:{cols:"3"}},[r("b-link",{attrs:{href:"https://qiita.com/takahiro_ishitsuka"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/qiita-square.png"}})],1)],1),r("b-col",{attrs:{cols:"3"}},[r("b-link",{attrs:{href:"https://twitter.com/taka0110_"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/twitter_logo.png"}})],1)],1),r("b-col",{attrs:{cols:"3"}},[r("b-link",{attrs:{href:"https://www.facebook.com/takahiro.ishitsuka.9"}},[r("b-img",{staticStyle:{"max-width":"100px"},attrs:{src:"icons/facebook_logo.png"}})],1)],1)],1)],1)],1)],1)],1)])],1)},H=[],Q={},V=Object(d["a"])(Q,F,H,!1,null,null,null),B=V.exports,W={components:{myHeader:b,skills:y,thought:p,interns:R,aboutMe:M,portfolio:J,links:B},data:function(){return{msg:"Hello World!"}},methods:{clear:function(){this.msg=""}}},G=W,q=(r("5c0b"),Object(d["a"])(G,n,o,!1,null,null,null)),K=q.exports,N=r("8c4f"),U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",[r("b-card",{staticClass:"overflow-hidden mx-auto",attrs:{"no-body":""}},[r("b-card-body",{attrs:{title:"Experiences"}},[r("b-card-text",[r("h5",[t._v("2018/03")]),r("p",[t._v("Rails Tutorial等を用いてweb関連に関する知識を学ぶ")])])],1)],1)],1)])],1)},X=[],Y={},z=Object(d["a"])(Y,U,X,!1,null,null,null),Z=z.exports;a["default"].use(N["a"]);var tt=new N["a"]({mode:"history",base:"/my_page/",routes:[{path:"/",name:"about_me",component:M},{path:"/experiences",name:"experiences",component:Z}]}),et=r("2f62");a["default"].use(et["a"]);var rt=new et["a"].Store({state:{},mutations:{},actions:{}}),at=r("5f5b"),nt=(r("f9e3"),r("2dd8"),r("c4e8")),ot=r.n(nt);a["default"].use(at["a"]),a["default"].use(ot.a),a["default"].config.productionTip=!1,new a["default"]({router:tt,store:rt,render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(t,e,r){}});
//# sourceMappingURL=app.971b4e9a.js.map