import InputPanel from 'components/input/InputPanel.vue';

export default {
  title: 'components/input/InputPanel',
  component: InputPanel,
};

const Template = args => ({
  components: { InputPanel },
  setup: () => ({ args }),
  data: () => ({
    value: '',
  }),
  template: `<InputPanel v-bind="args" v-model="value" />`,
});

export const Default = Template.bind({});

export const Mask = Template.bind({});
Mask.args = {
  mask: '[0-9]',
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  MaxLength: 5,
};

export const ClearButton = Template.bind({});
ClearButton.args = {
  clearable: false,
};

export const WithPostfix = () => ({
  components: { InputPanel },
  data: () => ({ value: '' }),
  template: `<InputPanel v-model="value"><template #postfix>END</template></InputPanel>`,
});
