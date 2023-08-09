<template>
 <div class="row mb-5">
  <div class="col-md-12">
    <img class="kj" src="../assets/images/hkola/heder.png" alt="">
  </div>
 </div>
</template>

<script>
import  {menuList} from '../constants/menuLinks'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      headerMenuList: menuList,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/layouts/index';

.navbar {
  height: 90px;
}

.navbar-nav {
  height: 90px;
}

.logo {
  padding-right: 180px;
}

.collapse-fontsize {
  font-size: 18px;
}

.menu-link {
  padding: 25px 30px;

  &:hover {
    background: grey;
  }
}

.icons {
  a {
    width: 20px;
    height: 20px;
    text-align: center;
    border: 1px solid grey;
    border-radius: 50%;
    margin-right: 7px;
    display: inline-block;
  }
}
.kj{
 object-fit: cover;
        width: 100%;
        height: 100%;
        transition: 1s;
        &:hover{
          transform: scale(1.2);
        }
}
</style>