
// app => this 
// lang => ar, en
const handleLangaugeChange = (app, lang) => {
  if (localStorage) {
    localStorage.setItem('lang', lang)
  }
  if (app) {
    app.$axios.defaults.headers.common.lang = lang
    app.$i18n.setLocale(lang)
    // app.$vuetify.lang.current = lang
    // app.$vuetify.rtl = lang === 'ar'
    app.$nuxt.refresh()
  }
  if (typeof document !== 'undefined') {
    document.querySelector('html').setAttribute('lang', lang)
    document
      .querySelector('html')
      .setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  }
}
export { handleLangaugeChange }