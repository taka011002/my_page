<template>
  <b-row>
    <b-col cols="12">
      <div>
        <b-card no-body class="overflow-hidden mx-auto">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img-lazy
                fluid
                v-bind="lazyImage"
                src="tokusatsu_kaiju_black.png"
              >
                class="profile-image" alt="profile_image"></b-card-img-lazy
              >
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text style="text-align: left">
                  <h2 class="font-weight-bold">About Me</h2>

                  <p>
                    エンジニアとして活動している大学生です。<br />
                    長期インターンを複数社にて経験し、業務として約2年半ほどエンジニアとして携わっています。<br />
                    新規事業の立ち上げやスタートアップでのインターン等経験があります。<br />
                    分野としてはフロントエンド, ネイティブアプリ,
                    サーバーサイド,
                    インフラと幅広く触れていますが、サーバーサイドとインフラが得意です。<br />
                    大学では無線通信の分野へ機械学習を用いた研究を行っています。<br/>
                  </p>
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
.profile-image {
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
        blankColor: "#bbb",
      },
    };
  },
};
</script>
