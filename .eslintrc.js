module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    plugins: [
        'vue'
    ],
    rules: {
        "no-unused-vars": 0,
        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": "off",
        "vue/no-v-html": 0,
        "vue/singleline-html-element-content-newline": "off",
    }
}
