<template>
  <div class="row mb-5">
    <div class="col-md-12 text-center">
 <h2>Вводный курс</h2>
    </div>
  </div>

    <div class="arrivals">
      <div class="container bn">
       <div class="el el-1">
<img class="mlp" src="../assets/images/hkola/vvodkurs.png" alt="">
       </div>
       <div class=" el el-2 d-flex text-center">
        <div class="az">
          <h5 class="aj">Формат курса:</h5>
          <p>Видеолекции в записи для <br> самостоятельного просмотра.</p>
          <h3 class="aj">Цена: Бесплатно</h3>
        </div>
        <div class="xz">
          <h5 class="aj">Доступ:</h5>
          <p>Доступ в меню сайта сразу после регистрации.</p>
          <button type="button" class="btn btn-warning rounded-circle">Смотреть курс</button>
        </div>
       </div>
       <div class="el el-3 p-4 ">
        <div class="rt mb-5">
          <a href="#">О Курсе</a>
          <a href="#">Для кого</a>
          <a href="#">Что вы узнаете</a>
          <a href="#">Программа</a>
        </div>
        <div>
          <p>
            Лично у меня все началось еще в юности.
  Так, сначала, следуя позывам моей души, я увлекся чтением оккультной литературы.
  Потом меня потянуло в религию.
  Затем я изучал восточные единоборства, Искусство Ци-гун, Йогу, буддисткую философию, а также различные дыхательные и Медитативные практики.
  А затем передо мной вдруг открылся удивительный мир тольтекской магии, и я на десятилетия погрузился в его изучение.
  За спиной остались годы духовного поиска и все только для того
          </p>
        </div>
       </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.bn{
  max-width: 1053px;
  height: 530px;
  border: 1px solid#483E64;
  background-color: #483E64;
}
</style>
<style lang="scss">
.el {
  padding: 35px 25px;
  font-size: 14px;
  color: #fff;

}

.container {
  display: grid;
  grid-template:
    'aside header header' 105px
    'aside footer footer' 105px;
  gap: 7px;
}

@media only screen and (max-width: 767px) {
  .container {
    grid-template-areas:
      "aside"
      "aside"
      "header"
      "header"
      "footer"
      "footer"
      ;
  }
}
@media only screen and (max-width: 1020px) {
  .bn{
   display: block;
   margin-bottom: 700px;
   font-size: 15px;
  }
}
.el-1 {
  grid-area: aside;
}

.el-2 {
  grid-area: header;
  margin-bottom: 30px;
  padding: 20px 30px;
}

.el-3 {
  grid-area: footer;
  margin-top: 80px;
}



.fot1 {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }
}

.fot2 {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }
}

.fot3 {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }
}

.fot4 {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }
}

.fot5 {

  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }
}

.arrivals {
  margin-bottom: 60px;
}
.bn{
  max-width: 1053px;
  height: 530px;
  border: 1PX solid blue;
 background: #483E64;
;
}
.rt a{
  text-decoration: none;
  margin-right: 50px;
  text-transform: uppercase;
  tab-size: 21px;
  color: #fff;
  font-weight: 700;
}

h2{
  color: #fff;
}
.az{
  max-width: 300px;
}
.xz{
  max-width: 300px;
}
.aj{
  color: hsl(61, 99%, 51%);
}
.mlp{

  object-fit: cover;
   transition: 1s;
        &:hover{
          transform: scale(1.2);
        }
}
</style>