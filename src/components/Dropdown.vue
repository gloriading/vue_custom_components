<template>
  <div id="dropdown" @click.self="closeDropdown">
    <div class="custom-dropdown">
      <div class="dd-btn" @click="toggleDropdown">
        <h3>▼</h3>
      </div>
      <div class="dropdown-list" :class="dropdownObject()">
        <div class="dd-item" v-for="(choice, index) in choices" :key="index" @click="updateSelectedStatus(choice.name)">
          <p>{{ choice.name }}</p>
          <p>{{ choice.selected ? 'selected' : ''}}</p>
        </div>
      </div>
    </div>
    <div class="display-area">
      <h3>Selected:</h3>
      <p v-for="(name, index) in selectedItems" :key="index">{{ name }}</p>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Dropdown',
  computed: {
    ...mapGetters(['isDropdownOpen', 'choices', 'selectedItems']),
  },
  methods: {
    ...mapActions(['toggleDropdown', 'updateSelectedStatus', 'closeDropdown']),
    dropdownObject() {
      return this.isDropdownOpen ? 'dropdown-open' : '';
    },
  }
};
</script>

<style lang="scss" scoped>
  $main-dark: #333333;
  $main-blue: rgba(0, 87, 142, 1);
  $main-white: #F2F4F4;

  #dropdown {
   margin-top: 2rem; 
  }
  .custom-dropdown {
    border: 1px solid $main-blue;
    display: inline-block;
    width: 300px;
  }
  .dd-btn {
    transition: 0.3s;
    padding: 0.5rem 1rem;

    h3 {
      text-align: right;
      margin: 0;
    }

    &:hover {
      cursor: pointer;
      background-color: $main-blue;
      color: $main-white;
    }
  }
  .dropdown-list {
    display: none;

    .dd-item {
      padding: 1rem;
      border-top: 1px dotted $main-dark;
      display: flex;
      justify-content: space-between;
      letter-spacing: 1px;
      text-align: left;
      
      p {
        margin: 0;
      }
      &:hover {
        background-color: $main-blue;
        color: $main-white;
        cursor: pointer;
      }
    }
  }
  .dropdown-open {
    display: block;
  }

  .display-area {
    margin-top: 1rem;

    p {
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
</style>

