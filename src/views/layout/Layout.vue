<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!--
      tabbar导航栏
      给Vant中tabbar开启路由模式:
        1 在<van-tabbar>标签中添加route属性
        2 然后在item中添加to属性,to属性值为对应组件的路径 
    -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
/**
@description:
@createTime:2021-05-16
@create:改成你自己的名字
*/
export default {
  name: "Layout",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>
<style scoped></style>
