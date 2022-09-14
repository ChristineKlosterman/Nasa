<template>
  <div class="img h-100 container-fluid view-height" :style="`background-image: url(${APOD.hdurl})`">
    <div class="row d-flex justify-content-center">
      <button class="btn btn-dark text-light col-2 m-3" @click="getApod()">get apod</button>
    </div>
    <div class="row card m-5">
      <div class="col-8 align-items-center mt-5 ">{{APOD.explanation}}</div>
      <span class="text-light mt-4 d-flex justify-content-center">-{{APOD.title}}</span>
    </div>
  </div>


</template>


<script>
import { computed, onMounted } from '@vue/runtime-core';
import { AppState } from '../AppState.js';
import { apodService } from '../services/ApodService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getApod() {
      try {
        await apodService.getApod()
      } catch (error) {
        logger.error('[getting apod]', error)
        Pop.error(error)
      }
    }


    return {
      APOD: computed(() => AppState.APOD),
      getApod
    }
  }
}

</script>


<style scoped>
.view-height {
  min-height: 100vh;
}
</style>