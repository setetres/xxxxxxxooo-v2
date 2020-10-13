<template>
    <div class="application">
        <div class="application__page">
            <Header />
            <main class="application__page-content">
                <div class="application__page-content-embed">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CKqnuZBjsZY" frameborder="0" allowfullscreen />
                </div>
                <div class="application__music">
                    <div class="application__music-title">
                        <small>
                            Single
                        </small>
                        <h1>TRICERACOUGH</h1>
                    </div>
                    <div class="application__music-cover">
                        <img src="/images/triceracough.png" alt="TRICERACOUGH Album Cover">
                    </div>
                    <ul class="application__music-extra">
                        <li>
                            <small>
                                TRICERACOUGH (Single), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarantine.
                            </small>
                        </li>
                    </ul>
                    <ul class="application__music-tracklist">
                        <li>
                            <div>
                                <small>1.</small>
                                <small>3:34</small>
                            </div>
                            <p>
                                TRICERACOUGH
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="application__page-info">
                    <h2 class="h6">Available</h2>
                    <ul class="listen">
                        <li>
                            <a href="https://music.apple.com/br/album/triceracough-single/1514705104" class="link link--outline" target="_blank" rel="noopener">
                                Apple Music
                            </a>
                        </li>
                        <li>
                            <a href="https://deezer.com/br/album/149920012" class="link link--outline" target="_blank" rel="noopener">
                                Deezer
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/album/1o0IoOxGycM6IfD7EcYxZ9" class="link link--outline" target="_blank" rel="noopener">
                                Spotify
                            </a>
                        </li>
                        <li>
                            <a href="https://tidal.com/browse/album/142432861" class="link link--outline" target="_blank" rel="noopener">
                                Tidal
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/watch?v=CKqnuZBjsZY" class="link link--outline" target="_blank" rel="noopener">
                                YouTube
                            </a>
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
                title: 'XXXXXXXOOO — TRICERACOUGH'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
