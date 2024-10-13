<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  img?: string | {
    url?: string
    overlay?: string
  }
  icon?: string | {
    component?: string
    background?: string
  }
  count?: {
    number?: number
    label?: string
  } | null
  percentage?: string | {
    label?: string
    color?: string
  }
}

withDefaults(defineProps<Props>(), {
  img: () => ({
    url: '',
    overlay: 'dark',
  }),
  icon: () => ({
    background: 'bg-white',
    component: '',
  }),
  count: () => ({}),
  percentage: () => ({
    label: '',
    color: '',
  }),
})

const showMenu = ref(false)
</script>

<template>
  <div
    class="card overflow-hidden shadow-lg"
    :style="`background-image: url(${typeof img === 'object' ? img.url : img});
  background-size: cover`"
  >
    <div class="colored-shadow" />
    <span
      :class="`mask bg-gradient-${typeof img === 'object' ? img.overlay : 'dark'
      }`"
    />
    <div class="card-body p-3 position-relative">
      <div class="row">
        <div class="col-8 text-start">
          <div
            class="icon icon-shape shadow text-center border-radius-md"
            :class="typeof icon === 'object' ? icon.background : 'bg-white'"
          >
            <i
              class="text-dark text-gradient text-lg opacity-10"
              :class="typeof icon === 'string' ? icon : icon.component"
              aria-hidden="true"
            />
          </div>
          <h5 class="text-white font-weight-bolder mb-0 mt-3">
            {{ count?.number }}
          </h5>
          <span class="text-white text-sm">{{ count?.label }}</span>
        </div>
        <div class="col-4">
          <div class="dropdown text-end mb-6">
            <a
              id="dropdownUsers1"
              href="javascript:;"
              class="cursor-pointer"
              :class="{ show: showMenu }"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <i class="fa fa-ellipsis-h text-white" aria-hidden="true" />
            </a>
            <ul class="dropdown-menu px-2 py-3" aria-labelledby="dropdownUsers1" :class="{ show: showMenu }">
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">Action</a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">Another action</a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a>
              </li>
            </ul>
          </div>
          <p
            class="text-sm text-end font-weight-bolder mt-auto mb-0"
            :class="typeof percentage === 'object' && percentage.color ? percentage.color : 'text-white'"
          >
            {{
              typeof percentage === "string"
                ? `${percentage}`
                : `${percentage.label}`
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
