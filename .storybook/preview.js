import '../src/styles/index.scss';
import { app } from '@storybook/vue3';
import Container from './Container.vue';
import 'windi.css';
import { createPinia } from 'pinia';

const pinia = createPinia();
app.use(pinia);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  story => ({
    components: { story, Container },
    template: `
      <Container>
        <story />
      </Container>
    `,
  }),
];
