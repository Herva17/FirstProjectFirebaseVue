const { configure } = require('quasar/wrappers');

module.exports = configure(function (ctx) {
  return {
    css: ['app.scss'],
    boot: ['firebase'], // ← ici
    build: {
      vueRouterMode: 'history',
    },

    devServer: {
      https: false,
      open: true // ouvre le navigateur automatiquement
    },

    framework: {
      config: {},
      plugins: []
    }
  };
});
