<template>
  <div class="position-fixed top-0 end-0 bottom-0 start-0">
    <div class="d-flex flex-column h-100 bg-dark position-relative">
      <div class="text-light d-flex justify-content-end p-2 gap-1">
        <FullscreenButton @fullscreen="(s) => (state.isFullscreen = s)" />
        <ShareButton :tile-number="number" />
        <DownloadButton :tile-number="number" />
        <ColorsButton :tile-number="number" />
        <FavoriteButton :tile-number="number" />
        <PrintButton :tile-number="number" />
        <CloseButton />
      </div>
      <ZoomWrapper class="flex-grow-1" :src="src" />
      <div v-if="!state.isFullscreen" class="text-light p-2 text-center">
        {{ title }}
      </div>
      <PrevNextButton type="prev" class="position-absolute top-50 start-0 translate-middle-y" />
      <PrevNextButton type="next" class="position-absolute top-50 end-0 translate-middle-y" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import ZoomWrapper from '@/components/common/ZoomWrapper.vue'
import ShareButton from '@/components/tiles/ShareButton.vue'
import DownloadButton from '@/components/tiles/DownloadButton.vue'
import ColorsButton from '@/components/tiles/ColorsButton.vue'
import FavoriteButton from '@/components/tiles/FavoriteButton.vue'
import PrintButton from '@/components/tiles/PrintButton.vue'
import CloseButton from '@/components/tiles/CloseButton.vue'
import PrevNextButton from '@/components/tiles/PrevNextButton.vue'
import FullscreenButton from '@/components/tiles/FullscreenButton.vue'

const { t } = useI18n()
const route = useRoute()

const number = computed(() => {
  const paramsNumber = route.params.number
  if (Array.isArray(paramsNumber)) {
    return parseInt(paramsNumber[0])
  } else {
    return parseInt(paramsNumber)
  }
})
const title = computed(() =>
  t('tile-title', {
    number: number.value,
    x: number.value % 20,
    y: Math.floor(number.value / 20)
  })
)
const src = computed(
  () => new URL(`../../assets/images/templates/${number.value}-detailed.webp`, import.meta.url).href
)
const state = reactive({ isFullscreen: false })
</script>
