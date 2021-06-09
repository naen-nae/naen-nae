import store from '../store';

/**
 * request a resource
 *
 * @param {String} url resource url
 * @returns {Promise<Response>} respond object
 */
export default async url => {
  try {
    const resp = await fetch(url);

    if (resp.ok) {
      return resp;
    }

    throw new Error();
  } catch {
    store.commit('createSnackbar', '인터넷 연결을 확인해주세요');
  }
};
