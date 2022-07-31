const accessor = ({ app }) => {
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {};
};
export default accessor;
