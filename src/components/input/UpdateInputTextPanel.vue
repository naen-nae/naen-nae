<template>
  <InputListPanel>
    <InputField class="flex-[2]" v-model="inputText" />
    <UpdateFontSizeField class="flex-[1] <md:hidden" />
    <ResetButton class="<md:hidden" />
  </InputListPanel>
</template>

<script lang="ts" setup>
import { useFontStore } from 'src/store/font';
import InputListPanel from 'components/section/InputListPanel.vue';
import InputField from 'components/input/InputField.vue';
import UpdateFontSizeField from './UpdateFontSizeField.vue';
import ResetButton from 'components/buttons/ResetButton.vue';

const store = useFontStore();
const { inputText } = storeToRefs(store);
</script>
