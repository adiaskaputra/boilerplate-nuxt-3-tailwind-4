module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['vue'],
  // https://eslint.vuejs.org/rules/
  rules: {
    camelcase: 'off',
    'dot-notation': 'off',
    'no-lonely-if': 'off',
    'import/no-named-as-default': 0,
    'no-console': [2, { allow: ['error', 'info', 'warn'] }],
    'no-prototype-builtins': 'off',
    'prettier/prettier': ['error', { semi: false, endOfLine: 'auto' }],
    semi: [2, 'never'],
    'tailwindcss/no-custom-classname': 'off',
    //
    //  VUE
    //
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-mutating-props': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-lone-template': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script:not([setup])', 'script[setup]', 'template', 'style'],
      },
    ],
  },
}
