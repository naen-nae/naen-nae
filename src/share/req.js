import store from '../store';

/**
 * request a resource
 *
 * @param {String} url resource url
 * @param {Object} options
 * @param {String} options.parseType [text|json]
 * @returns {String|Object} respond resource
 */
export default async (url, { parseType = 'text' } = {}) => {
  try {
    const resp = await fetch(url);

    if (resp.ok) {
      return await resp[parseType]();
    }

    throw new Error();
  } catch {
    store.commit('createSnackbar', '인터넷 연결을 확인해주세요');
  }
};
