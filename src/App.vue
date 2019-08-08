<template>
  <div id="app" @click.self="closeDropdown">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Custom Stuff"/>
    <radio-buttons />
    <!-- <dropdown /> -->
    <single-select />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HelloWorld from './components/HelloWorld.vue';
import RadioButtons from './components/RadioButtons.vue';
import Dropdown from './components/Dropdown.vue';
import SingleSelect from './components/SingleSelect.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    RadioButtons,
    Dropdown,
    SingleSelect,
  },
  methods: mapActions(['closeDropdown']),
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
#app img {
  width: 100px;
}
</style>
