<template>
  <div class="box">
      <header>
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
              <swiper-slide><img src="/1.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/2.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/3.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/4.jpg" alt=""></swiper-slide>
               <swiper-slide><img src="/5.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/6.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/7.jpg" alt=""></swiper-slide>
          </swiper>
      </header>
      <div class="main">
          <router-view></router-view>
      </div>
      <footer>
          <router-link to="/home">首页</router-link>
          <router-link to="/my">我的</router-link>
      </footer>
  </div>
</template>

<script>
export default {
    name:"carrousel",
    data(){
        return {
            swiperOption:{
                autoplay:true,
                loop:true
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        width: 100%;
        height: 260px;
        
        
    }
    .main{
        flex: 1
    }
    footer{
        width: 100%;
        height: 50px;
        display: flex;
        a{
            flex: 1;
            display: inline-block;
            text-align: center;
            line-height: 50px;
            color:white;
        }
    }
</style>