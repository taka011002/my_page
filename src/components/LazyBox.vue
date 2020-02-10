<template>
    <div class="lazy-box" ref="lazyBox" v-bind:class="{ active: active }">
        <slot v-bind:class="{ active: active }"></slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        data() {
            return {
                active: false,
                handleScroll: () => {
                    if (window.innerHeight - this.$refs.lazyBox.getBoundingClientRect().top > 0) {
                        this.active = true;
                    }
                }
            }
        }
    }
</script>
<style lang="sass" scoped>
    .lazy-box
        opacity: 0
        transition: opacity 2s, transform 0.5s
        @media (max-width: 1039px)
            transform: translateY(100px)
        @media (min-width: 1040px)
            transform: translateY(200px)
        &.active
            opacity: 1
            transform: translateY(0)
</style>