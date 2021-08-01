<template>
  <div class="detail">
    <detail-title-panel :font="targetFont" />
    <hr />
    <detail-style-panel :font="targetFont" />
    <hr />
    <detail-code-panel :font-family="targetFont.fontFamily" />
    <hr />
    <detail-license-panel
      :license-summary="targetFont.licenseSummary"
      :license="targetFont.license"
    />
  </div>
</template>

<script setup>
import DetailTitlePanel from './DetailTitlePanel.vue';
import DetailStylePanel from './DetailStylePanel/DetailStylePanel.vue';
import DetailCodePanel from './DetailCodePanel/DetailCodePanel.vue';
import DetailLicensePanel from './DetailLicensePanel/DetailLicensePanel.vue';

import { toRefs } from 'vue';
import { useStore } from 'vuex';

const { fontName } = defineProps({
  fontName: {
    type: String,
  },
});

const store = useStore();
const { fonts } = toRefs(store.state);
const targetFont = fonts.value.find(
  ({ fontFamily }) => fontFamily === fontName,
);

if (targetFont.enable === undefined || !targetFont.enable) {
  store.dispatch('reqFontFace', [targetFont]);
}
</script>

<style lang="scss" scoped>
.detail {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  hr {
    margin: 28px 0;
  }
}
</style>
