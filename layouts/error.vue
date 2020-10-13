<template>
    <div class="application">
        <div class="application__page">
            <Header />
            <main class="application__page-content">
                <h2 v-if="error.statusCode === 404">
                    Not found
                </h2>
                <h2 v-else>
                    An error occurred
                </h2>
                <small>
                    <nuxt-link to="/" class="link">
                        Go back
                    </nuxt-link>
                </small>
            </main>
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
            setTimeout(function() {
                next()
            }, 100)
        },

        props: {
            error: {
                type: Object,
                default: () => {}
            }
        },

        head() {
            return {
                title: 'XXXXXXXOOO — Error'
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        }
    }
</script>
