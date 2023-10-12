<template>
  <Navbar></Navbar>
  <body class="hold-transition sidebar-mini layout-fixed">
    <router-view :key="$route.fullPath" />
  </body>

</template>

<script>
import Navbar from '../src/layout/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
:root {
  --primary-color: #ff0000; /* Replace with your desired color */
}

#nprogress .bar {
  background: rgb(0, 56, 128) !important;
  z-index: 99999999 !important;
  height: 3px !important;
}

* {
  font-family: 'Poppins', sans-serif;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #133db3;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

html {
  font-size: 13.5px;
}

.bg-load {
  /*background-image: url('../assets/inicio.png') !important;*/
  background-image: url('https://www.projectcounter.org/wp-content/uploads/2016/03/icon-register.png') !important;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
}


.content {
  max-height: 100% !important;
}

.content-wrapper {
  min-height: calc(100vh - calc(4rem + 1px) - calc(3.5rem + 1px)) !important;
}

.p-component {
  font-family: 'Poppins', sans-serif !important;
}


</style>

