<template>
    <div class="application">
        <div class="application__page">
            <Header />
            <main class="application__page-content">
                <div class="application__music">
                    <div class="application__music-title">
                        <small>
                            EP
                        </small>
                        <h1>NIEF</h1>
                    </div>
                    <div class="application__music-cover">
                        <img src="/images/nief.png" alt="NIEF Album Cover">
                        <small>
                            NIEF (EP), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarantine.
                        </small>
                    </div>
                    <ul class="application__music-extra">
                        <li>
                            <div>
                                Lyrics
                            </div>
                            <small>
                                Redouane Aouameur
                            </small>
                        </li>
                        <li>
                            <div>
                                Vocals
                            </div>
                            <small>
                                Redouane Aouameur
                            </small>
                        </li>
                        <li>
                            <small>
                                Collaboration via Fiverr® Gig®
                            </small>
                        </li>
                    </ul>
                    <ul class="application__music-tracklist">
                        <li>
                            <div>
                                <small>1.</small>
                                <small>2:38</small>
                            </div>
                            <p>
                                QUATRE-VINGT-DIX-NEUF
                            </p>
                        </li>
                        <li>
                            <div>
                                <small>2.</small>
                                <small>2:19</small>
                            </div>
                            <p>
                                COWEED-19
                            </p>
                        </li>
                        <li>
                            <div>
                                <small>3.</small>
                                <small>2:34</small>
                            </div>
                            <p>
                                XD
                            </p>
                        </li>
                        <li>
                            <div>
                                <small>5.</small>
                                <small>2:45</small>
                            </div>
                            <p>
                                BANJO
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
        <div class="application__more">
            <div>
                <h2 class="h6">You may also like</h2>
                <ul class="application__more-scroll">
                    <li>
                        <nuxt-link to="/⩐/vaziø">
                            <img src="/images/thumbnail-vaziø.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/displaynone">
                            <img src="/images/thumbnail-displaynone.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/vingt-vingt">
                            <img src="/images/thumbnail-vingt-vingt.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/10-hour-keyboard-drumming">
                            <img src="/images/thumbnail-10-hour-keyboard-drumming.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/moshaxe">
                            <img src="/images/thumbnail-moshaxe.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/triceracough">
                            <img src="/images/thumbnail-triceracough.jpg">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/fein">
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
                title: 'XXXXXXXOOO — NIEF'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
