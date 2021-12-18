import InputPanel from 'components/input/InputPanel.vue';

export default {
  title: 'components/input/InputPanel',
  component: InputPanel,
};

export const Default = args => ({
  components: { InputPanel },
  setup: () => ({ args }),
  data: () => ({
    value: '',
  }),
  template: `<InputPanel v-bind="args" v-model="value" />`,
});

Default.args = {
  mask: '.*',
  MaxLength: 5,
  clearable: false,
};

export const WithPostfix = () => ({
  components: { InputPanel },
  data: () => ({ value: '' }),
  template: `<InputPanel v-model="value"><template #postfix>END</template></InputPanel>`,
});
