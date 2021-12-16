import '../src/styles/index.scss';
import Container from './Container.vue';
import 'windi.css';

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
