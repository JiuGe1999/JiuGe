module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/recommended", '@vue/prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    //-- es config --
    'prettier/prettier': 'error',
    'no-console': 2,
    'no-debugger': 2,
    'array-bracket-spacing': 2,
    'no-var': 2,
    'no-eval': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'comma-dangle': 0, // 禁用:和 prettier 冲突
    'object-curly-spacing': [2, 'always'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],

    //-- vue config --
    'vue/camelcase': 2,
    'vue/require-component-is': 0,
    'vue/require-default-prop': 2,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': 0, // 禁用:和 prettier 冲突
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'any',
          normal: 'never',
        },
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
