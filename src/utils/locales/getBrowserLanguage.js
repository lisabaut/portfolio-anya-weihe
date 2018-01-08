// see => https://github.com/angeloocana/gatsby-plugin-i18n/tree/master/packages/ptz-i18n

const getBrowserLanguage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const first = window.navigator.languages
    ? window.navigator.languages[0]
    : null;

  const lang = first ||
    window.navigator.language ||
    window.navigator.browserLanguage ||
    window.navigator.userLanguage;

  return lang;
};

export default getBrowserLanguage;
