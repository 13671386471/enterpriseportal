<template>

  <!-- 路由插槽，用来展示匹配到的路由的组件 -->
  <router-view/>
</template>

<style lang="scss">
*{
  padding: 0px;
  margin: 0px;
}
/* 全局滚动条样式修改 */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: #1890ff;
}
::-webkit-scrollbar-track {
  background-color: #ccc;
}
</style>
