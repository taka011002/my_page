<template>
    <b-row>
        <b-col cols="12">
            <div>
                <b-card no-body class="overflow-hidden mx-auto">
                    <b-card-body>
                        <b-card-text>
                            <h2 class="font-weight-bold">Links</h2>
                            <b-row>
                                <b-col cols="3">
                                    <b-link href="https://github.com/taka011002">
                                        <b-img-lazy v-bind="lazyImage" src="icons/github_logo.png" style="max-width: 100%;" alt="github"></b-img-lazy>
                                    </b-link>
                                </b-col>
                                <b-col cols="3">
                                    <b-link href="https://qiita.com/takahiro_ishitsuka">
                                        <b-img-lazy src="icons/qiita-square.png" style="max-width: 100%;" alt="qiita"></b-img-lazy>
                                    </b-link>
                                </b-col>
                                <b-col cols="3">
                                    <b-link href="https://twitter.com/taka0110_">
                                        <b-img-lazy v-bind="lazyImage" src="icons/twitter_logo.png" style="max-width: 100%;" alt="twitter"></b-img-lazy>
                                    </b-link>
                                </b-col>
                                <b-col cols="3">
                                    <b-link href="https://www.facebook.com/takahiro.ishitsuka.9">
                                        <b-img-lazy v-bind="lazyImage" src="icons/facebook_logo.png" style="max-width: 100%;" alt="facebok"></b-img-lazy>
                                    </b-link>
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
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                }
            }
        }
    }
</script>