import store from '../store';

/**
 * write to clipboard
 *
 * @param {String} contents
 */
export default async contents => {
  if (!('clipboard' in navigator)) {
    return store.commit(
      'createSnackbar',
      '복사 기능을 지원하지 않는 브라우저에요. 최신 크롬 브라우저를 사용해주세요.',
    );
  }

  return await navigator.clipboard.writeText(contents);
};
