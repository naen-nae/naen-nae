/**
 * add a new stylesheet
 *
 * @param {String} src stylesheet href
 */
export default src => {
  const el = document.createElement('link');
  el.setAttribute('rel', 'stylesheet');
  el.setAttribute('href', src);

  document.querySelector('head').appendChild(el);
};
