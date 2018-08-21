module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
      ? '/merchaholics/'
      : '/',

  pwa: {
    name: 'Merchaholics',
    themeColor: '#ff7e29',
    msTileColor: '#ff7e29',
    appleMobileWebAppStatusBarStyle: '#ff7e29'
  }
}