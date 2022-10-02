module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', '@vue/prettier', 'eslint:recommended'],
    rules: {
        'no-debugger': 'warn',
        'no-unused-vars': 'off',
        'vue/no-multiple-template-root': 'off',
    },
    parserOptions: {},
};