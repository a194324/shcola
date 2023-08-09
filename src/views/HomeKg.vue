<template>
  <div class="home">
    <MainContainer>
    <VvodKurs/>
    <HtoGovorit :propeuData="propeuData"/>
    <OsnHcol/>
    </MainContainer>
  </div>
</template>

<script>
import { propeuData } from '../data/data.dummy'
import VvodKurs from '@/components/VvodKurs.vue';
import HtoGovorit from '../components/HtoGovorit.vue'
import OsnHcol from '../components/OsnHcol.vue'





export default {
  name: 'HomeKg',
  components:{
    VvodKurs,
   HtoGovorit,
   OsnHcol
  },
  data() {
    return {

      propeuData: propeuData,


    }
  }
}
</script>
<style >
</style>