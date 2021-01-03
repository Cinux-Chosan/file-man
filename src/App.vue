<template>
  <div id="nav">
    <router-link to="/">Files</router-link> |
    <router-link to="/upload">Upload</router-link>
  </div>

  <router-view #default="{ Component }">
    <keep-alive :include="keepAliveInclude">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      keepAliveInclude: ["files", "upload"],
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
