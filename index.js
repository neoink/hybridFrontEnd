import nkApp from './src/app'

jQuery(function() {
  nkApp.Core.InitModules({
    partials: {
      header: '#header',
      footer: '#footer'
    }
  })
})
