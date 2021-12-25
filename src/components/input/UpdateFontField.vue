<template>
  <InputListPanel>
    <SearchField class="flex-[2]" />
    <UpdateFontSizeField class="flex-[2] <md:hidden" />
    <ResetButton class="<md:hidden" />
  </InputListPanel>
</template>

<script lang="ts" setup>
import SearchField from './SearchField.vue';
import UpdateFontSizeField from './UpdateFontSizeField.vue';
import ResetButton from '../buttons/ResetButton.vue';
import InputListPanel from '../section/InputListPanel.vue';
</script>
