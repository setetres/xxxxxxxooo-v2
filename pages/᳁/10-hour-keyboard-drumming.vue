<template>
    <div class="application">
        <div class="application__page">
            <Header />
            <main class="application__page-content">
                <div class="application__page-content-embed">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YUyrXiCl5kU" frameborder="0" allowfullscreen />
                </div>
            </main>
        </div>
        <div class="application__more">
            <div>
                <h2 class="h6">You may also like</h2>
                <ul class="application__more-scroll">
                    <li>
                        <nuxt-link to="/᳁/vaziø">
                            <img src="/images/thumbnail-vaziø.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/᳁/displaynone">
                            <img src="/images/thumbnail-displaynone.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/᳁/vingt-vingt">
                            <img src="/images/thumbnail-vingt-vingt.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/᳁/moshaxe">
                            <img src="/images/thumbnail-moshaxe.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/᳁/triceracough">
                            <img src="/images/thumbnail-triceracough.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/᳁/fein">
                            <img src="/images/thumbnail-fein.jpg">
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
    import Footer from '~/components/footer.vue'
    import Header from '~/components/header.vue'

    export default {
        components: {
            Footer,
            Header
        },

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        },

        head() {
            return {
                title: 'XXXXXXXOOO — 10-HOUR KEYBOARD DRUMMING'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
