import TheButton from 'components/buttons/TheButton.vue';

export default {
  title: 'components/buttons/TheButton',
  component: TheButton,
};

export const Default = () => ({
  components: { TheButton },
  template: '<TheButton icon="file_download">폰트 다운로드</TheButton>',
});
