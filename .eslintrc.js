module.exports = {
    env: {
      'node': true,
    },
    extends: [
      '@fueled/frontend-web/lib/vue',
    ],
    settings: {
      'import/ignore': [
        'node_modules/',
      ],
      'import/resolver': {
        webpack: {
          config: require.resolve('@vue/cli-service/webpack.config.js')
        },
      },
    },
    'rules': {
      "no-process-env": 0,
      "vue/no-multiple-template-root": 0,
      "vue/component-definition-name-casing": 0,
      "no-console": 0,
    },
  };
