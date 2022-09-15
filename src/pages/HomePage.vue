<template>
  <div class="img h-100 container-fluid view-height" :style="`background-image: url(${APOD.hdurl})`">
    <div class="row d-flex justify-content-center">

    </div>
    <div class="h row d-flex justify-content-center">
      <div class="apod-card shadow-md col-md-6 p-5 card text-light">
        {{APOD.explanation}}
        <span class="text-light text-center text-light mt-4">-{{APOD.title}}</span>
      </div>
    </div>
  </div>

  <span class="selectable fw-bold" @click="changeDate"></span>


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

    async function changeDate() {
      try {
        let date = window.event.target
        await apodService.getApodByDate()
      } catch (error) {
        logger.log('[change date]', error)
        Pop.error(error)
      }
    }

    onMounted(() => getApod())

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
  max-height: 300vh;
  min-width: 120vw;
  background: url(images/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.apod-card {
  background: rgba(79, 87, 93, 0.44);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(79, 87, 93, 0.3);
  width: 60rem;
  font-size: larger;
  line-height: 0.9cm;
}

.h {
  margin-top: 10%;
  margin-right: 15%;
}
</style>