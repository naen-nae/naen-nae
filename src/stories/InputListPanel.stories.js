import InputListPanel from 'components/section/InputListPanel.vue';

export default {
  title: 'components/section/InputListPanel',
  component: InputListPanel,
};

export const Default = () => ({
  components: { InputListPanel },
  template: `
  <InputListPanel>
    <div style="display: flex; align-items: center; flex: 1">a</div>
    <div style="display: flex; align-items: center; flex: 2">b</div>
    <div style="display: flex; align-items: center; flex: 1">c</div>
  </InputListPanel>
  `,
});
