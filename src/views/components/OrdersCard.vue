<script setup lang="ts">
defineOptions({
  name: 'OrdersCard',
})

interface Props {
  title?: string
  text?: string
  order?: string
  date?: string
  newOrder?: string
  orderDate?: string
  payment?: string
  paymentDate?: string
  newCard?: string
  newCardDate?: string
  unlockPackages?: string
  unlockPackagesDate?: string
  newOrder2?: string
  newOrder2Date?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Orders overview',
  text: 'this month',
  order: '$2400, Design changes',
  date: '22 DEC 7:20 PM',
  newOrder: 'New order #1832412',
  orderDate: '21 DEC 11 PM',
  payment: 'Server payments for April',
  paymentDate: '21 DEC 9:34 PM',
  newCard: 'New card added for order #4395133',
  newCardDate: '20 DEC 2:20 AM',
  unlockPackages: 'Unlock packages for development',
  unlockPackagesDate: '18 DEC 4:54 AM',
})
</script>

<template>
  <div class="card h-100">
    <div class="card-header pb-0">
      <h6>{{ title }}</h6>
      <p class="text-sm">
        <i class="fa fa-arrow-up text-success" aria-hidden="true" />
        <span class="font-weight-bold">24%</span> {{ text }}
      </p>
    </div>
    <div class="card-body p-3">
      <div class="timeline timeline-one-side">
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-bell-55 text-success text-gradient" />
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ order }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ date }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-html5 text-danger text-gradient" />
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ newOrder }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ orderDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-cart text-info text-gradient" />
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ payment }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ paymentDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-credit-card text-warning text-gradient" />
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ newCard }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ newCardDate }}
            </p>
          </div>
        </div>
        <div class="timeline-block mb-3">
          <span class="timeline-step">
            <i class="ni ni-key-25 text-primary text-gradient" />
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ unlockPackages }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ unlockPackagesDate }}
            </p>
          </div>
        </div>
        <div v-if="newOrder2" class="timeline-block">
          <span class="timeline-step">
            <i class="ni ni-money-coins text-dark text-gradient" />
          </span>
          <div class="timeline-content">
            <h6 class="text-dark text-sm font-weight-bold mb-0">
              {{ newOrder2 }}
            </h6>
            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
              {{ newOrder2Date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
