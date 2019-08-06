<template>
  <div>

    <div class="basic">
      <div v-for="(value, name, index) in operators" :key="index"
      :class="classObject(name)"
      @click="select(name)">
        {{ value }}
      </div>
    </div>
    <!-- <div class="basic">
      <div v-for="(value, name, index) in operators" :key="index"
      :class="[name === selected ? 'btn-radio-select': 'btn-radio']"
      @click="select(name)">
        {{ value }}
      </div>
    </div> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { debuglog } from 'util';

export default {
  name: 'RadioButtons',
  computed: {
    ...mapGetters(['operators', 'selected']),
  },
  methods: {
    select(prop) {
      this.$store.commit('setSelected', prop);
    },
    classObject(prop) {
      return prop === this.selected ? 'btn-radio-select': 'btn-radio';
    },
  }
};
</script>

<style lang="scss" scoped>
  $main-dark: #333333;
  $main-blue: rgba(0, 87, 142, 1);
  $main-white: #F2F4F4;


  .btn-radio, .btn-radio-select {
    font-weight: 600;
    display: inline-block;
    padding: 0.5rem;
    border: 1px solid $main-blue;
    width: 100px;
    margin-right: 10px;
    transition: 0.2s ease-in-out;
  }
  .btn-radio:hover {
    background-color: $main-blue;
    color: $main-white;
    cursor: pointer;
  }
  .btn-radio:active {
    transform: translateX(2px);
  }
  .btn-radio-select {
    background-color: $main-blue;
    border: 1px solid $main-dark;
    color: $main-white;
  }
</style>
