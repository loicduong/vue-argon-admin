<script setup>
import DefaultInfoCard from '@/examples/Cards/DefaultInfoCard.vue'
import MasterCard from '@/examples/Cards/MasterCard.vue'
import BillingCard from './components/BillingCard.vue'
import InvoiceCard from './components/InvoiceCard.vue'
import PaymentCard from './components/PaymentCard.vue'
import TransactionCard from './components/TransactionCard.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <MasterCard />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">
                <DefaultInfoCard
                  :icon="{
                    component: 'fas fa-landmark',
                    background: 'bg-gradient-success',
                  }"
                  title="Salary"
                  description="Belong Interactive"
                  value="+$2000"
                />
              </div>
              <div class="col-md-6">
                <DefaultInfoCard
                  :icon="{
                    component: 'fab fa-paypal',
                    background: 'bg-gradient-success',
                  }"
                  title="Paypal"
                  description="Freelance Payment"
                  value="$455.00"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <PaymentCard />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <InvoiceCard class="mt-4" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <BillingCard />
      </div>
      <div class="col-md-5">
        <TransactionCard />
      </div>
    </div>
  </div>
</template>
