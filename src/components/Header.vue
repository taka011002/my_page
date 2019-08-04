<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info" fixed="top">

            <b-navbar-brand href="#" @click="smoothScroll('about-me')">taka</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item @click="smoothScroll('about-me')">About Me</b-nav-item>
                        <b-nav-item @click="smoothScroll('skills')">Skills</b-nav-item>
                        <b-nav-item @click="smoothScroll('experiences')">Experiences</b-nav-item>
                        <b-nav-item @click="smoothScroll('portfolio')">Portfolio</b-nav-item>
                        <b-nav-item @click="smoothScroll('links')">Links</b-nav-item>
                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        methods: {
            smoothScroll(targetId) {
                this.$SmoothScroll(document.querySelector('#' + targetId), 400, null, null, 'y')
            }
        }
    }
</script>
