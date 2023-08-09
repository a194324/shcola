<template>
  <main-container>
    <template v-slot:header>
    <HeaderKg />
    </template>
    <main>
      <router-view />
    </main>
    <template v-slot:footer>
      <FooterKg/>
    </template>
  </main-container>
</template>

<script>
import HeaderKg from './components/HeaderKg'
 import FooterKg from './components/Footer/FooterKg'
import MainContainer from './components/MainContainer'
export default {
  components: {
    MainContainer,
    HeaderKg,
    FooterKg,

  },
}
</script>

