<script setup lang="ts">
import { CountUp } from 'countup.js'

defineOptions({
  name: 'TempCard',
})

interface Props {
  status?: string
  unit?: string
  title?: string
  desc?: string
  id?: string
}

defineProps<Props>()

onMounted(() => {
  ['status1', 'status2', 'status3', 'status4', 'status5', 'status6'].forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      const countUp = new CountUp(
        id,
        Number(document.getElementById(id)?.getAttribute('countTo')),
      )
      if (!countUp.error) {
        countUp.start()
      }
      else {
        console.error(countUp.error)
      }
    }
  })
})
</script>

<template>
  <div class="card">
    <div class="text-center card-body">
      <h1 class="text-gradient text-success">
        <span :id="id" :countTo="status">{{ status }}</span>
        <span class="text-lg ms-n1">{{ unit }}</span>
      </h1>
      <h6 class="mb-0 font-weight-bolder">
        {{ title }}
      </h6>
      <p class="mb-0 text-sm opacity-8">
        {{ desc }}
      </p>
    </div>
  </div>
</template>
