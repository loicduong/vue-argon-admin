<script setup lang="ts">
import Chart from 'chart.js/auto'

defineOptions({
  name: 'ComsumptionByDayChart',
})

onMounted(() => {
  // Chart Consumption by day
  const ctx = (document.getElementById('chart-cons-week') as HTMLCanvasElement).getContext('2d')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Watts',
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: '#3A416F',
          data: [150, 230, 380, 220, 420, 200, 70],
          maxBarThickness: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#9ca2b7',
          },
        },

        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: '#9ca2b7',
          },
        },
      },
    },
  })
})
</script>

<template>
  <div class="card h-100">
    <div class="p-3 card-body">
      <h6>Consumption per day</h6>
      <div class="pt-3 chart">
        <canvas id="chart-cons-week" class="chart-canvas" height="170" />
      </div>
    </div>
  </div>
</template>
