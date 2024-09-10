<script setup lang="ts">
defineOptions({
  name: 'DefaultCounterCard',
})

interface Props {
  count: number
  prefix?: string
  suffix?: string
  title: string
  description?: string
  color?: string
}

withDefaults(defineProps<Props>(), {
  prefix: '',
  suffix: '',
  description: '',
  color: 'success',

})
</script>

<template>
  <div class="card">
    <div class="text-center card-body">
      <h1 class="text-gradient" :class="`text-${color}`">
        <span class="text-lg ms-n1">{{ prefix }}</span>

        <CountTo :start-val="0" :end-val="count" :duration="6000" />

        <span class="text-lg ms-n1">{{ suffix }}</span>
      </h1>
      <h6 class="mb-0 font-weight-bolder">
        {{ title }}
      </h6>
      <p class="mb-0 text-sm opacity-8">
        {{ description }}
      </p>
    </div>
  </div>
</template>
