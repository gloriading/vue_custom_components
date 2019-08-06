import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operators: {
      If: 'IF',
      andIf: 'AND IF',
      orIf: 'OR IF',
    },
    selected: 'If',
    choices: [
      {
       name: 'apples',
       selected: false,
      },
      {
       name: 'bananas',
       selected: false,
      },
      {
       name: 'corn dogs',
       selected: false,
      },
      {
       name: 'dumplings',
       selected: false,
      },
    ],
    isDropdownOpen: false,
    selectedItems: [],
  },
  getters: {
    operators: state => state.operators,
    selected: state => state.selected,
    choices: state => state.choices,
    selectedItems: state => state.selectedItems,
    isDropdownOpen: state => state.isDropdownOpen,
  },
  mutations: {
    setSelected: (state, selected) => state.selected = selected,
    setDropdownStatus: (state, status) => state.isDropdownOpen = status,
    setChoices: (state, choices) => state.choices = choices,
    setSelectedItems: (state, selectedItems) => state.selectedItems = selectedItems,
  },
  actions: {
    toggleDropdown({ commit, state }) {
      commit('setDropdownStatus', !state.isDropdownOpen);
    },
    updateSelectedStatus({ commit, state, dispatch }, prop) {
      const updatedChoices = state.choices.map(choice => {
        if (choice.name === prop) {
          choice.selected = !choice.selected;
        }
        return choice;
      });

      commit('setChoices', updatedChoices);
      dispatch('updateSelectedItems');
    },
    updateSelectedItems({ commit, state }) {
      const updatedSelectedItems = state.choices.filter(item => item.selected === true).map(obj => obj.name);

      commit('setSelectedItems', updatedSelectedItems);
    },
    closeDropdown({ commit }) {
      commit('setDropdownStatus', false);
    },
  }
})
