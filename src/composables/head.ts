import { MaybeRef } from '@vueuse/core';

interface TitleArgs {
  title: MaybeRef<string>;
  description: MaybeRef<string>;
  url?: MaybeRef<string>;
}

export const useTitleMeta = ({ title, description, url }: TitleArgs) =>
  useHead({
    title,
    meta: [
      {
        name: 'og:title',
        content: title,
      },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'og:url',
        content: `https://naen-nae.shj.rip/${url}`,
      },
    ],
  });
