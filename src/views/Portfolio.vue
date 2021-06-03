<template>
  <b-row>
    <b-col sm="12">
      <div>
        <b-card no-body class="overflow-hidden">
          <b-card-body>
            <b-card-text style="text-align: left">
              <h2 class="font-weight-bold pb-5">Portfolio</h2>

              <b-row class="pb-5">
                <b-col sm="12"
                ><strong
                >2021年<br />
                  生活習慣バトラー</strong
                ></b-col
                >
                <b-col sm="5">
                  <b-img-lazy
                      v-bind="lazyImage"
                      src="portfolio/life_style_battler.png"
                      style="max-width: 100%"
                      alt="life_style_battler"
                  ></b-img-lazy>
                </b-col>
                <b-col sm="5">
                  <p>
                    ヤフー株式会社主催<a href="https://hacku.yahoo.co.jp/hacku2020online4/">Open Hack U 2020 Online Vol.4</a>
                    にて睡眠時間などの健康データを自動で取得し、スコアを毎日算出して、その日のスコアで友人と勝負出来るサービスを開発<br />
                    主な使用技術としてはNuxt.js x Express x Typescript x MySQL x Google Fit API
                  </p>
                </b-col>
                <b-col sm="2">
                  <a href="https://drive.google.com/file/d/1P-pBY-TY6UzXTBbNJwey7sRYQRqK-wJQ/view?usp=sharing">発表資料</a
                  ><br />
                  <a href="https://github.com/yuziroppe/life_style_battler"
                  >GitHub</a
                  ><br />
                </b-col>
              </b-row>

              <b-row class="pb-5">
                <b-col sm="12"
                ><strong
                >2021年<br />
                  How To Be聖徳太子</strong
                ></b-col
                >
                <b-col sm="5">
                  <b-img-lazy
                      v-bind="lazyImage"
                      src="portfolio/how_to_be_syotokutaishi.png"
                      style="max-width: 100%"
                      alt="how_to_be_syotokutaishi"
                  ></b-img-lazy>
                </b-col>
                <b-col sm="5">
                  <p>
                    サポーターズ社主催<a href="https://talent.supporterz.jp/events/28d759c2-50b4-456d-889b-1f08abf6c053/">ウインターハッカソン〜オンラインでLVupする開発合宿vol.7〜</a>
                    にて開発テーマ「技育祭をより楽しめるアプリ」にて開発したソフトウェア。講演を複数聞けるように自分の耳をトレーニングできるサービス。<br />
                    主な使用技術としてはNext.js x Typescript x Firebase
                  </p>
                </b-col>
                <b-col sm="2">
                  <a href="https://docs.google.com/presentation/d/1DdOCS4oNI10G4QauHDD1cqR2TXWeXqxWZNPAhSKcBeg/edit?usp=sharing">発表資料</a
                  ><br />
                  <a href="https://github.com/reud/how_to_be_syotokutaishi"
                  >GitHub</a
                  ><br />
                </b-col>
              </b-row>

              <b-row class="pb-5">
                <b-col sm="12"
                  ><strong
                    >2020年<br />
                    知らない人とオンライン飲み会を気軽にできるサービス
                    Cheers!</strong
                  ></b-col
                >
                <b-col sm="5">
                  <b-img-lazy
                    v-bind="lazyImage"
                    src="portfolio/cheers.jpg"
                    style="max-width: 100%"
                    alt="cheers"
                  ></b-img-lazy>
                </b-col>
                <b-col sm="5">
                  <p>
                    オンラインハッカソンにて「知らない人とオンライン飲み会を気軽にできるサービス」を開発し、入賞<br />
                    主な使用技術としてはNext.js x Typescript x Firebase x
                    Skyway<br />
                    詳しくは<a
                      href="https://qiita.com/takahiro_ishitsuka/items/de94f3d6a6890442a132"
                      >こちら</a
                    ><br />
                  </p>
                </b-col>
                <b-col sm="2">
                  <a
                    href="https://qiita.com/takahiro_ishitsuka/items/de94f3d6a6890442a132"
                    >Qiita</a
                  ><br />
                  <a href="https://github.com/yuziroppe/we_wanna_eat_Jiro"
                    >GitHub</a
                  ><br />
                  <a href="https://cheers.reud.net/">デプロイ先</a>
                </b-col>
              </b-row>

              <div class="more-portfolios" style="display: none">
                <b-row class="pb-5">
                  <b-col sm="5">
                    <strong
                      >2019年<br />
                      ポートフォリオサイト(現在のページ)</strong
                    >
                  </b-col>
                  <b-col sm="5">
                    <p>
                      Vue.jsを用いてポートフォリオサイトを制作<br />
                      GitHub Actionsを用いたCI/CD環境<br />
                      GitHub Pagesを用いてホスティング<br />
                    </p>
                    <b-img-lazy
                      v-bind="lazyImage"
                      src="portfolio/my_page_deploy_flow.png"
                      style="max-width: 100%"
                      alt="my_page_deploy_flow"
                    ></b-img-lazy>
                  </b-col>
                  <b-col sm="2">
                    <a href="https://github.com/taka011002/my_page">GitHub</a>
                  </b-col>
                </b-row>

                <b-row class="pb-5">
                  <b-col sm="5">
                    <strong
                      ><strong>2019年<br />iOSアプリの制作</strong></strong
                    >
                  </b-col>
                  <b-col sm="5">
                    <p>
                      Firebase及びCloud
                      Firestoreを学ぶために簡易的なiOSアプリの作成を行った
                    </p>
                  </b-col>
                  <b-col sm="2">
                    <a
                      href="https://qiita.com/takahiro_ishitsuka/items/c8ed9c0aa4d3257fc7ee"
                      >Qiita</a
                    ><br />
                    <a href="https://github.com/taka011002/monolish">GitHub</a
                    ><br />
                    <a href="https://github.com/taka011002/firestore_test_ios"
                      >GitHub</a
                    ><br />
                  </b-col>
                </b-row>

                <b-row class="pb-5">
                  <b-col sm="12"><strong>2018年 4月 Shopper</strong></b-col>
                  <b-col sm="5">
                    <b-img-lazy
                      v-bind="lazyImage"
                      src="portfolio/shopper.jpg"
                      style="max-width: 100%"
                      alt="shopper"
                    ></b-img-lazy>
                  </b-col>
                  <b-col sm="5">
                    <p>
                      Rails
                      Tutorialにて学んだ知識のアウトプットとして、ショッピングサイトの構築を行った。
                    </p>
                  </b-col>
                  <b-col sm="2">
                    <a href="https://github.com/taka011002/shopping-site"
                      >GitHub</a
                    >
                  </b-col>
                </b-row>

                <b-row class="pb-5">
                  <b-col sm="12"
                    ><strong>2018年 3月 Rails Tutorial</strong></b-col
                  >
                  <b-col sm="5">
                    <b-img-lazy
                      v-bind="lazyImage"
                      src="portfolio/rails_tutorial.jpg"
                      style="max-width: 100%"
                      alt="rails_tutorial"
                    ></b-img-lazy>
                  </b-col>
                  <b-col sm="5">
                    <p>
                      Rails
                      Tutorialにて、webアプリーケーションの大枠について学んだ。
                    </p>
                  </b-col>
                  <b-col sm="2">
                    <a href="https://github.com/taka011002/rails_tutorial"
                      >GitHub</a
                    >
                  </b-col>
                </b-row>
              </div>

              <div style="text-align: center">
                <b-button class="portfolio-more-button" @click="openClose()"
                  >more</b-button
                >
              </div>
            </b-card-text>
          </b-card-body>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      lazyImage: {
        center: true,
        fluid: true,
        blank: true,
        blankColor: "#bbb",
      },
    };
  },
  methods: {
    openClose() {
      var obj = document.getElementsByClassName("more-portfolios");
      var button = document.querySelector(".portfolio-more-button");
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].style.display == "inline-block") {
          obj[i].style.display = "none";
          button.innerText = "more";
        } else {
          obj[i].style.display = "inline-block";
          button.innerText = "close";
        }
      }
    },
  },
};
</script>
