import HeaderPanel from 'components/nav/HeaderPanel.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/HeaderPanel',
  component: HeaderPanel,
};

export const Default = () => ({
  components: { HeaderPanel },
  template: `<HeaderPanel />`,
});

Default.decorators = [vueRouter()];
