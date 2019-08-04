<template>
  <b-row>
    <b-col cols="12">
      <div>
        <b-card no-body class="overflow-hidden mx-auto">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="profile_image.gif" class="profile-image" style="max-width: 400px;"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="About Me">
                <b-card-text>
                  <table class="spacing-table overflow-hidden mx-auto">
                    <tr>
                      <td>名前:</td>
                      <td>石塚 崇寛</td>
                    </tr>

                    <tr>
                      <td>大学:</td>
                      <td>茨城大学 電気電子工学科</td>
                    </tr>

                  </table>
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
