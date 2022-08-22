<template>
  <div class="img h-100 container-fluid view-height" :style="`background-image: url(${APOD.hdurl})`">
    <div class="row">
      <button class="col-2" @click="getApod()">get apod</button>
    </div>
    <div class="row">
      <div class="col-8 align-items-center text-white mt-5">{{APOD.explanation}}</div>
  <span class="text-light mt-4">-{{APOD.title}}</span>
    </div>
  </div>


</template>


<script>
import { computed, onMounted } from '@vue/runtime-core';
import { AppState } from '../AppState.js';
import { apodService } from '../services/ApodService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default{
  setup(){
  async function getApod(){
    try {
      await apodService.getApod()
    } catch (error) {
      logger.error('[getting apod]', error)
      Pop.error(error)
    }
  }
  

  return {
    APOD: computed (() => AppState.APOD),
    getApod
  }
  }
}

</script>


<style scoped>
.view-height{
  min-height: 100vh;
}
</style>