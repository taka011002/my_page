<template>
  <b-row>
    <b-col cols="12">
      <div>
        <b-card no-body class="overflow-hidden mx-auto">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img-lazy fluid v-bind="lazyImage" src="tokusatsu_kaiju_black.png"> class="profile-image" alt="profile_image"></b-card-img-lazy>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text style="text-align: left">
                  <h2 class="font-weight-bold">About Me</h2>

                  <p>
                    エンジニアとして活動している大学生です。<br>
                    長期インターンを複数社にて経験し、業務として約2年半ほどエンジニアとして携わっております。<br>
                    分野としてはフロントエンド, ネイティブアプリ, サーバーサイド, インフラと幅広く触れております。<br>
                    新規事業の立ち上げやスタートアップでのインターン等経験があります。<br>
                  </p>

                  <h4 class="font-weight-bold">得意とする分野</h4>
                  <ul>
                    <li>
                      Ruby及びRuby on Railsを用いたサーバーサイド開発<br>業務にて約1年程の開発経験があります。具体的にはAPI、管理画面、クローラー等を業務にて開発致しました。
                    </li>
                    <li>
                      Swiftを用いたネイティブアプリ開発(iOS)<br>業務にて約半年程の開発経験があります。アーキテクチャとしてはVIPERを用いての開発を経験致しました。
                    </li>
                    <li>
                        AWS上のインフラの構築
                    </li>
                    <li>
                      他にも複数技術の使用経験がございます。未経験の技術であっても苦手意識を持たず、短期間でのキャチアップができます。
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template>

<style scoped lang="scss">
  .profile-image{
    padding: 30px 30px;
    border-radius: 50%;
    max-width: 100%;
  }
</style>

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
