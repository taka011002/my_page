<template>
    <b-row>
        <b-col sm="12">
            <div>
                <b-card no-body class="overflow-hidden">
                    <b-card-body>
                        <b-card-text style="text-align: left">
                            <h2 class="font-weight-bold pb-5">Portfolio</h2>

                            <b-row class="pb-5">
                                <b-col sm="12"><strong>2020年<br> 知らない人とオンライン飲み会を気軽にできるサービス Cheers!</strong></b-col>
                                <b-col sm="5">
                                    <b-img-lazy v-bind="lazyImage" src="portfolio/cheers.jpg" style="max-width: 100%;" alt="cheers"></b-img-lazy>
                                </b-col>
                                <b-col sm="5">
                                    <p>オンラインハッカソンにて「知らない人とオンライン飲み会を気軽にできるサービス」を開発し、入賞<br>
                                        主な使用技術としてはNext.js x Typescript x Firebase x Skyway<br>
                                        詳しくは<a href="https://qiita.com/takahiro_ishitsuka/items/de94f3d6a6890442a132">こちら</a><br>
                                    </p>
                                </b-col>
                                <b-col sm="2">
                                    <a href="https://qiita.com/takahiro_ishitsuka/items/de94f3d6a6890442a132">Qiita</a><br>
                                    <a href="https://github.com/yuziroppe/we_wanna_eat_Jiro">GitHub</a><br>
                                    <a href="https://cheers.reud.net/">デプロイ先</a>
                                </b-col>
                            </b-row>

                            <b-row class="pb-5">
                                <b-col sm="5">
                                    <strong>2019年<br> ポートフォリオサイト(現在のページ)</strong>
                                </b-col>
                                <b-col sm="5">
                                    <p>Vue.jsを用いてポートフォリオサイトを制作<br>
                                        GitHub Actionsを用いたCI/CD環境<br>
                                        GitHub Pagesを用いてホスティング<br>
                                    </p>
                                    <b-img-lazy v-bind="lazyImage" src="portfolio/my_page_deploy_flow.png" style="max-width: 100%;" alt="my_page_deploy_flow"></b-img-lazy>
                                </b-col>
                                <b-col sm="2">
                                    <a href="https://github.com/taka011002/my_page">GitHub</a>
                                </b-col>
                            </b-row>

                            <b-row class="pb-5">
                                <b-col sm="5">
                                    <strong><strong>2019年<br>iOSアプリの制作</strong></strong>
                                </b-col>
                                <b-col sm="5">
                                    <p>Firebase及びCloud Firestoreを学ぶために簡易的なiOSアプリの作成を行った</p>
                                </b-col>
                                <b-col sm="2">
                                    <a href="https://qiita.com/takahiro_ishitsuka/items/c8ed9c0aa4d3257fc7ee">Qiita</a><br>
                                    <a href="https://github.com/taka011002/monolish">GitHub</a><br>
                                    <a href="https://github.com/taka011002/firestore_test_ios">GitHub</a><br>
                                </b-col>
                            </b-row>

                            <b-row class="pb-5">
                                <b-col sm="12"><strong>2018年 4月 Shopper</strong></b-col>
                                <b-col sm="5">
                                    <b-img-lazy v-bind="lazyImage" src="portfolio/shopper.jpg" style="max-width: 100%;" alt="shopper"></b-img-lazy>
                                </b-col>
                                <b-col sm="5">
                                    <p>Rails Tutorialにて学んだ知識のアウトプットとして、ショッピングサイトの構築を行った。</p>
                                </b-col>
                                <b-col sm="2">
                                    <a href="https://github.com/taka011002/shopping-site">GitHub</a>
                                </b-col>
                            </b-row>

                            <b-row class="pb-5">
                                <b-col sm="12"><strong>2018年 3月 Rails Tutorial</strong></b-col>
                                <b-col sm="5">
                                    <b-img-lazy v-bind="lazyImage" src="portfolio/rails_tutorial.jpg" style="max-width: 100%;" alt="rails_tutorial"></b-img-lazy>
                                </b-col>
                                <b-col sm="5">
                                    <p>Rails Tutorialにて、webアプリーケーションの大枠について学んだ。</p>
                                </b-col>
                                <b-col sm="2">
                                    <a href="https://github.com/taka011002/rails_tutorial">GitHub</a>
                                </b-col>
                            </b-row>
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
                    blankColor: '#bbb',
                }
            }
        }
    }
</script>
