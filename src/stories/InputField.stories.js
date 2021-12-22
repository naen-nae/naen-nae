import InputField from 'components/input/InputField.vue';

export default {
  title: 'components/input/InputField',
  component: InputField,
};

export const Default = args => ({
  components: { InputField },
  setup: () => ({ args }),
  data: () => ({
    value: '',
  }),
  template: `<InputField v-bind="args" v-model="value" />`,
});

Default.args = {
  mask: '.*',
  MaxLength: 5,
  clearable: false,
};

export const WithPostfix = () => ({
  components: { InputField },
  data: () => ({ value: '' }),
  template: `<InputField v-model="value"><template #postfix>END</template></InputField>`,
});
