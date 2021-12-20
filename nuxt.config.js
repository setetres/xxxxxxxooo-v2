const autoprefixer = require("autoprefixer");
const StyleLintPlugin = require("stylelint-webpack-plugin");

export default {
    ssr: false,
    head: {
        htmlAttrs: {
            lang: "en"
        },
        title: "XXXXXXXOOO — v2",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, height=device-height, user-scalable=no, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "A knife-grinder music endeavor."
            },

            { hid: "og:type", property: "og:type", content: "website" },
            {
                hid: "og:title",
                property: "og:title",
                content: "XXXXXXXOOO — v2"
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "A knife-grinder music endeavor."
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "https://v2.xxxxxxx.ooo/images/share-xxxxxxxooo-v2.png"
            },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://v2.xxxxxxx.ooo"
            },

            {
                hid: "twitter:card",
                name: "twitter:card",
                content: "summary_large_image"
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "XXXXXXXOOO — v2"
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "A knife-grinder music endeavor."
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: "https://v2.xxxxxxx.ooo/images/share-xxxxxxxooo-v2.png"
            }
        ],
        link: [
            { rel: "canonical", href: "https://v2.xxxxxxx.ooo" },
            { rel: "stylesheet", href: "https://use.typekit.net/fdw2tau.css" },
            { rel: "icon", href: "/favicon.svg" }
        ]
    },
    css: [
        "@/node_modules/normalize.css/normalize.css",
        "@/assets/application.scss",
        "@/assets/embed.scss",
        "@/assets/footer.scss",
        "@/assets/link.scss",
        "@/assets/listen.scss",
        "@/assets/logo.scss",
        "@/assets/more.scss",
        "@/assets/music.scss",
        "@/assets/page.scss"
    ],
    loading: {
        color: "#000000",
        height: "100%",
        failedColor: "#e02020",
        throttle: 0
    },
    plugins: [
        {
            src: "~/plugins/ga.js",
            mode: "client"
        }
    ],
    modules: ["@nuxtjs/axios"],
    build: {
        postcss: {
            autoprefixer
        },
        plugins: [
            new StyleLintPlugin({
                files: ["/assets/**/*.scss"],
                configFile: "stylelintrc.json"
            })
        ],
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
