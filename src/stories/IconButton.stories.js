import IconButton from 'components/buttons/IconButton.vue';

export default {
  title: 'components/buttons/IconButton',
  component: IconButton,
};

export const Default = args => ({
  setup: () => {
    const isClicked = ref(false);

    let timeout;
    const handleClick = () => {
      clearInterval(timeout);
      isClicked.value = true;

      timeout = setTimeout(() => {
        isClicked.value = false;
      }, 1000);
    };

    return { args, handleClick, isClicked };
  },
  components: { IconButton },
  template: `
    <IconButton v-bind="args" @click="handleClick">replay</IconButton>
    <p>{{ isClicked ? 'clicked' : 'not clicked' }}</p>
  `,
});

Default.args = {
  disabled: false,
};
