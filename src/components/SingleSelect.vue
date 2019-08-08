<template>
  <div id="dropdown" @click.self="closeDropdown">
    <div class="custom-dropdown">
      <div class="dd-btn" @click="onOpenDropdown">
        <h3 v-if="!isDropdownOpen">▼</h3>
        <div class="dd-item dd-search" v-if="isDropdownOpen">
          <input type="text" placeholder="Search" @keyup="getSearchText($event)" ref="searchInput" />
        </div>
      </div>
      <div class="dropdown-list" :class="dropdownObject()">
        <div class="dd-item" v-for="(choice, index) in choices" :key="index" @click="updateSelectedStatus(choice.name)">
          <p>{{ choice.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SingleSelect',
  computed: {
    ...mapGetters(['isDropdownOpen', 'choices', 'selectedItems']),
  },
  methods: {
    ...mapActions(['openDropdown', 'updateSelectedStatus', 'closeDropdown', 'resetChoices']),
    dropdownObject() {
      return this.isDropdownOpen ? 'dropdown-open' : '';
    },
    getSearchText(e) {
      this.resetChoices();

      const searchInput = e.currentTarget.value;
      const updatedChoices = this.choices.filter(choice => choice.name.includes(searchInput));

      this.$store.commit('setChoices', updatedChoices);
    },
    async onOpenDropdown() {
      await this.openDropdown();
      this.focusSearchInput();
    },
    focusSearchInput() {
      this.$refs['searchInput'].focus();
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
    transition: 0.2s;
    padding: 0.5rem 1rem;

    h3 {
      text-align: right;
      margin: 0;
    }

    &:hover {
      cursor: pointer;
      // background-color: $main-blue;
      // color: $main-white;
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
      input[type="text"] {
        padding: 0.5rem;
        font-size: 1rem;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
      }
    }

  }
  
  .dd-search {
    padding: 0;

    &:hover {
      background-color: $main-white;
      color: $main-blue;
      cursor: pointer;
    }

    input[type="text"] {
      padding: 0.5rem;
      font-size: 1.2rem;
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
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

