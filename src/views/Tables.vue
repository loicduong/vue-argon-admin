<script setup lang="ts">
import AuthorsTable from './components/AuthorsTable.vue'
import ProjectsTable from './components/ProjectsTable.vue'
</script>

<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <AuthorsTable />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ProjectsTable />
      </div>
    </div>
  </div>
</template>
