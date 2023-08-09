<template>
  <div class="handpicked">
    <div class="row mb-4 ">
      <div class="col-md-12 text-center mb-5">
        <h2 class="xd">Что говорят о нашей школе </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12 df" v-for="property in propeuData" :key="property.id">
        <div class="properties__col gh">
          <img :src="require(`../assets/images/hkola/hto/${property.image}.png`)" class="handpicked__img img-fluid mb-5"/>
          <h4 class="properties__h4">{{ property.title }}</h4>
          <p class="properties__text">{{ property.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    propeuData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
h4 {
  font-family: 'Playfair Bold';
  font-size: 29.6px;
 color: #fff;
}
.gh{

 display: block;
align-items: center;
 min-width: 465px;
 text-align: center;
 margin: 0 auto;
 background: #483E64;
}
.handpicked__img{
margin:-80px 70px 0 100px;
width: 30%;
height: 30%;
object-fit: cover;
align-items: center;
}
.properties__text{
  padding: 10px 40px;
  max-width: 480px;
  font-size: 18px;
  color: #fdf9f9;
}

@media only screen and (max-width: 1200px) {
  .df{
    display: block;
   margin-bottom: 100px;
   font-size: 15px;
  }
}
.xd{
  margin-bottom: 80px;
}
</style>