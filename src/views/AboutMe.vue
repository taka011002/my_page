<template>
  <b-row>
    <b-col cols="12">
      <div>
        <b-card no-body class="overflow-hidden mx-auto">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img src="profile_image.jpg" class="profile-image" style="max-width: 350px;"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text style="text-align: left">
                  <h2 class="font-weight-bold">About Me</h2>

                  <p>
                    大学を休学しエンジニアとして活動している大学生です。<br>
                    長期インターンを複数社にて経験し業務としては約1年半エンジニアとして携わっております。<br>
                    分野としてはフロントエンド, ネイティブアプリ, サーバーサイド, インフラと幅広く触れております。<br>
                    現在は都内のスタートアップにてほぼフルタイムにてインターンしております。<br>
                  </p>

                  <h4 class="font-weight-bold">基本情報</h4>
                  <table class="spacing-table overflow-hidden">
                    <tr>
                      <td>名前:</td>
                      <td>石塚 崇寛</td>
                    </tr>
                    <tr>
                      <td>生年月日:</td>
                      <td>1998/01/10</td>
                    </tr>
                    <tr>
                      <td>出身:</td>
                      <td>茨城県</td>
                    </tr>
                    <tr>
                      <td>大学:</td>
                      <td>茨城大学 電気電子工学科 学部 4年 (現在休学中)<br>
                        大学では電気回路、電磁気、半導体といった分野を学んでおります。<br>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>

                  <h4 class="font-weight-bold">得意とする分野</h4>
                  <ul>
                    <li>
                      Ruby及びRuby on Railsを用いたサーバーサイド開発
                    </li>
                    <p>業務にて約1年程の開発経験があります。具体的にはAPI、管理画面、クローラー等を業務にて開発致しました。
                      動的型付けであるRubyでのサーバーサイド開発においてテストコードは必須だと考えております。</p>
                    <li>
                      Swiftを用いたネイティブアプリ開発(iOS)
                    </li>
                    <p>業務にて約半年程の開発経験があります。アーキテクチャとしてはVIPERを用いての開発を経験致しました。
                       責務を層(View, API等)で適切に分割してコードを書く事を意識し、ネイティブアプリ開発を行っております。</p>
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
  }
</style>
