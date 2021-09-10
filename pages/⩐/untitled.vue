<template>
    <div class="application">
        <div class="application__page">
            <Header />
            <main class="application__page-content">
                <div class="application__page-content-embed">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NTZcILhcNa8" frameborder="0" allowfullscreen />
                </div>
                <div class="application__music">
                    <div class="application__music-title">
                        <small>
                            Single
                        </small>
                        <h1>Untitled</h1>
                    </div>
                    <div class="application__music-cover">
                        <img src="/images/untitled.png" alt="Untitled Album Cover">
                    </div>
                    <ul class="application__music-extra">
                        <li>
                            <small>
                                Untitled (Single), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarantine.
                            </small>
                        </li>
                    </ul>
                    <ul class="application__music-tracklist">
                        <li>
                            <div>
                                <small>1.</small>
                                <small>3:06</small>
                            </div>
                            <p>
                                Untitled
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="application__page-info">
                    <h2 class="h6">Available</h2>
                    <ul class="listen first">
                        <li>
                            <a href="https://music.apple.com/br/album/untitled-single/1561012200" class="link link--outline" target="_blank" rel="noopener">
                                Apple Music
                            </a>
                        </li>
                        <li>
                            <a href="https://xxxxxxxooo.bandcamp.com/track/untitled" class="link link--outline" target="_blank" rel="noopener">
                                Bandcamp
                            </a>
                        </li>
                        <li>
                            <a href="https://deezer.com/br/album/219148382" class="link link--outline" target="_blank" rel="noopener">
                                Deezer
                            </a>
                        </li>
                    </ul>
                    <ul class="listen">
                        <li>
                            <a href="https://open.spotify.com/album/4rGuP76giFpYMfbzn730PW" class="link link--outline" target="_blank" rel="noopener">
                                Spotify
                            </a>
                        </li>
                        <li>
                            <a href="https://tidal.com/browse/album/179082981" class="link link--outline" target="_blank" rel="noopener">
                                Tidal
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/watch?v=NTZcILhcNa8" class="link link--outline" target="_blank" rel="noopener">
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
        <div class="application__more">
            <div>
                <h2 class="h6">Everything</h2>
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
                        <nuxt-link to="/⩐/nief">
                            <img src="/images/thumbnail-nief.jpg" alt="NIEF Thumbnail">
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/⩐/vaziø">
                            <img src="/images/thumbnail-vaziø.jpg" alt="VAZIØ Thumbnail">
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
                title: 'XXXXXXXOOO — Untitled'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
