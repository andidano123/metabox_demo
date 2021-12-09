<template>
  <div id="app">
    <router-view/>
    <FlashMessage :position="'right top'" />
  </div>
</template>

<script>

export default {
  name: 'App',  
}
</script>

<style lang="css" src="./assets/common.css"/>
  