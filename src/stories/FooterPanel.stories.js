import FooterPanel from 'components/nav/FooterPanel.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'components/nav/FooterPanel',
  component: FooterPanel,
};

export const Default = () => ({
  components: { FooterPanel },
  template: `<FooterPanel />`,
});

Default.decorators = [vueRouter()];
