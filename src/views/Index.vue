<template>
  <div>
    <div>
      <swiper>
        <div />
        <swiper-slide v-for="(item, index) in slide" :key="index" class="swiper-slide"> 我是第{{ item }}个轮播图 </swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <!-- 分页 -->
        <div slot="button-prev" class="swiper-button-prev" />
        <!-- 箭头左 -->
        <div slot="button-next" class="swiper-button-next" />
        <!-- 箭头右 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: [1, 2, 3, 4, 5],
      // 设置属性
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          // 允许分页点击跳转
          clickable: true,
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // 自动轮播
        autoplay: {
          delay: 400,
        },
        // 开启循环模式
        loop: true,
        // 开启鼠标滚轮控制Swiper切换
        mousewheel: true,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.swiper-slide {
  width: 100%;
  height: 500px;
  line-height: 500px;
  font-size: 50px;
  text-align: center;
  background-color: rosybrown;
}
</style>
