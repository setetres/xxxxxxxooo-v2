<template>
    <div class="application">
        <div class="application__page" style="background-image: url('/images/highlight-nief.jpg')">
            <Header />
            <main class="application__page-content application__page-content--main">
                <div>
                    <h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1071.4 372.7" class="svg-title"><path d="M90.9 100.2c-3.4 9.8-4.2 19.1-3.8 28.5 1.3 26.3 11.2 49.5 26.1 70.9 9.7 13.8 20.9 26.2 33.4 37.4 19.8 17.8 41.3 33.4 64.6 46.4 9.1 5.1 18.3 10.1 27.4 15.2 1.7 1 3.2 2.3 6 4.5C161 311.6 80.7 330.7.4 349.6c-.2-1-.5-1.5-.4-1.6 9.8-11 10.8-24.9 12.7-38.5 2.8-19.1 4.9-38.4 8.2-57.4 3.3-18.7 7.4-37.3 11.7-55.8 4.1-17.8 8.6-35.4 13.3-53.1 5.4-20.3 11.2-40.4 16.6-60.6 3.4-13 6.5-26.1 9.4-39.2 1.5-6.9 2.8-13.9 3.6-20.9.9-7.9-.6-15.4-7.1-22.5 8.3.4 15.6.4 22.7 1.1 35 3.4 70 6.9 105 10.6 7.3.8 14.7 1.5 21.6 3.8 4.2 1.3 7.7 5.2 11.1 8.4 28.7 28 57.2 56.2 86 84 9.5 9.2 19.7 17.7 29.6 26.4.9.8 2.1 1.5 3.6 2.5 1.3-8.8-.6-16.6-3-24.2-6.6-21.2-19.7-38.2-34.6-54-10.8-11.5-22.8-21.7-36.2-30.1-.5-.3-.8-.9-.8-2.7 40.3 9.8 80.6 19.6 122.3 29.7-11.6 4.9-11.3 14.8-12.3 23.5-2.6 24.4-4.2 48.9-6.5 73.4-2.3 24.4-4.9 48.8-7.2 73.3-1.5 16.1-3.2 32.1-3.9 48.2-.4 8.6.7 17.4 2.1 25.9.6 3.6 3.9 6.7 6.3 10.6-1.4 0-2.7.1-3.8 0-13.5-1.9-27.1-3.6-40.5-5.8-3.3-.6-6.7-2.5-9.2-4.7-12.9-11.7-25.2-24-38.4-35.4-13.1-11.2-27-21.3-40.4-32.1-14.8-11.9-29.5-24-44.1-36.2-18.7-15.7-37.3-31.4-55.6-47.6-13.4-11.9-26.1-24.5-39.1-36.8-3.9-3.7-7.7-7.3-12.2-11.6zM1045 211.3c-24.8-14.3-52.1-17.1-80.6-18.5 1.3 7.9 2.8 15.2 3.7 22.5 3 25.8 6 51.7 8.5 77.6 1.5 15.9 1.4 32 3 48 .5 5.2 4.3 10 6.8 14.9.5 1.1 1.6 1.9 2.7 3.3-51.8 3.3-102.9 6.6-154.9 10 2.4-3.8 5.4-6.7 6.3-10.2 2.9-10.6 6.4-21.4 7.2-32.3 1.6-21.8 2.4-43.8 1.9-65.7-.7-30.6-5.1-60.9-11.1-90.9-3.8-19-8.3-37.9-13.3-56.6-1.5-5.8-5.8-10.8-9-16.6 3.7-.4 8.4-1 13.2-1.5 24.3-2.6 48.6-5.1 72.8-7.7 28.9-3.1 57.8-6.4 86.7-9.3 18.5-1.8 37.1-2.8 55.6-4.4 4.4-.4 6.3.7 7.6 5.3 3.8 12.8 8.4 25.4 12.5 38.2 2.3 7 4.3 14 6.8 22.1-18.8-12.1-38.7-19.1-59.2-24.4-20.5-5.3-41.1-8.9-63-7.6 1 7.4 1.8 14.7 3.1 21.9 1.9 10.9 4.4 21.8 6.3 32.7.6 3.4 2.1 4.1 5.1 3.4 14.6-3.5 29.4-6.4 43.8-10.6 6.1-1.8 11.5-6.3 17.2-9.6 1-.5 1.9-1.1 3.9-2.2 6.1 23 12 45.3 17.9 67.6-.5.3-1 .5-1.5.6zM583.5 92c7.2.9 14.8 1.9 22.4 2.7 17 1.7 34 4 51.1 4.7 28.4 1.2 56.8 1.6 85.2 1.7 15.7 0 31.5-1.5 47.2-2.4 3.4-.2 5 .6 5.6 4.3 2.4 16.6 5.2 33.1 7.8 49.6.1.6-.1 1.3-.2 2.9-24.9-23-54.4-31.4-87.9-31.1 1.4 17.2 2.8 33.7 4.3 51.1 19.6-2.1 38.6-3.8 54.5-19 2.8 21 5.5 41.2 8.4 62.9-18.4-13.8-38.6-16-59.9-18.1 6.3 48.1 8.4 95.7 8 144.7 33.8-5 60.9-21.4 85.7-43 0 10.4.3 20.5-.1 30.5-.4 10.6-1.8 21.2-2.1 31.9-.1 4.2-1.8 5.2-5.2 5.3-13.6.6-27.2 1.6-40.9 1.6-26.9.2-53.9 1.1-80.8-.6-30.8-2.1-61.4-6.7-92.1-10.3-1.4-.2-2.8-.7-5.1-1.3 7.1-5.6 11.8-12 13.3-20.2 1.7-9.6 3.6-19.2 4.6-28.9 4-38.6 2.5-77.1-1-115.6-1.3-13.9-2.3-27.8-4.6-41.6-2.6-15.8-5.9-31.5-9.8-46.9-1.3-5.4-5.4-9.9-8.4-14.9zM412 59.8c51.9 10.1 102.8 20 153.9 30-11.4 12.2-7.6 27.3-7.3 41.4.3 20.5 1.8 40.9 2.5 61.4.7 18.7 1.3 37.3 1.5 56 .2 20.3-.4 40.6 0 60.9.3 12.6-.7 25.5 4.5 37.6 1.3 2.9 3.1 5.6 4.3 9.1-59.5-10.6-117.1-28.6-177-41.3 3.2-2.7 5.9-4.5 8-6.9 7.7-8.4 9.9-19.1 12.4-29.6 6-25.8 10.2-51.9 11.7-78.3 1.1-20.3 2.6-40.7 2.3-61-.3-20.8-1.2-41.7-6.5-61.9-1.2-4.7-4.6-8.9-7.1-13.3-.9-1.3-1.9-2.4-3.2-4.1z" /></svg>
                    </h2>
                    <p>
                        <nuxt-link to="/⩐/nief" class="link">
                            Watch now
                        </nuxt-link>
                    </p>
                </div>
            </main>
        </div>
        <aside class="application__more">
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
        </aside>
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

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
