<template>
    <div class="application">
        <div class="application__page">
            <Header />
            <main class="application__page-content">
                <div class="application__page-content-embed">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Bv3jI_nFQEw" frameborder="0" allowfullscreen />
                </div>
                <div class="application__music">
                    <div class="application__music-title">
                        <small>
                            Short Film
                        </small>
                        <h1>VAZIØ</h1>
                    </div>
                    <div class="application__music-cover">
                        <img src="/images/vaziø.png" alt="VAZIØ Album Cover">
                    </div>
                    <ul class="application__music-extra">
                        <li>
                            <small>
                                VAZIØ (Short Film), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarantine.
                            </small>
                        </li>
                    </ul>
                    <ul class="application__music-tracklist">
                        <li>
                            <div>
                                <small>1.</small>
                                <small>7:03</small>
                            </div>
                            <p>
                                VAZIØ
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="application__page-info">
                    <h2 class="h6">Available</h2>
                    <ul class="listen first">
                        <li>
                            <a href="https://music.apple.com/br/album/vazi%C3%B8-single/1534502526" class="link link--outline" target="_blank" rel="noopener">
                                Apple Music
                            </a>
                        </li>
                        <li>
                            <a href="https://xxxxxxxooo.bandcamp.com/track/vazi" class="link link--outline" target="_blank" rel="noopener">
                                Bandcamp
                            </a>
                        </li>
                        <li>
                            <a href="https://deezer.com/br/album/177544912" class="link link--outline" target="_blank" rel="noopener">
                                Deezer
                            </a>
                        </li>
                    </ul>
                    <ul class="listen">
                        <li>
                            <a href="https://open.spotify.com/album/2ooPMxZyHDTq8ltMm6UdqB" class="link link--outline" target="_blank" rel="noopener">
                                Spotify
                            </a>
                        </li>
                        <li>
                            <a href="https://tidal.com/browse/album/157442782" class="link link--outline" target="_blank" rel="noopener">
                                Tidal
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/watch?v=Bv3jI_nFQEw" class="link link--outline" target="_blank" rel="noopener">
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
                        <nuxt-link to="/⩐/ijwgh">
                            <img src="/images/thumbnail-ijwgh.jpg" alt="I.J.W.G.H Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/28kbps">
                            <img src="/images/thumbnail-28kbps.jpg" alt="28kbps Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/56kbps">
                            <img src="/images/thumbnail-56kbps.jpg" alt="56kbps Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/untitled">
                            <img src="/images/thumbnail-untitled.jpg" alt="Untitled Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/nief">
                            <img src="/images/thumbnail-nief.jpg" alt="NIEF Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/displaynone">
                            <img src="/images/thumbnail-displaynone.jpg" alt="DISPLAYNONE Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/vingt-vingt">
                            <img src="/images/thumbnail-vingt-vingt.jpg" alt="VINGT-VINGT Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/10-hour-keyboard-drumming">
                            <img src="/images/thumbnail-10-hour-keyboard-drumming.jpg" alt="10 HOUR KEYBOARD DRUMMING Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/moshaxe">
                            <img src="/images/thumbnail-moshaxe.jpg" alt="MOSHAXÉ Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/triceracough">
                            <img src="/images/thumbnail-triceracough.jpg" alt="TRICERACOUGH Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/fein">
                            <img src="/images/thumbnail-fein.jpg" alt="FEIN Thumbnail">
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
                title: 'XXXXXXXOOO — VAZIØ'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
