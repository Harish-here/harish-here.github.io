import Vue from 'vue'
import Vuex from 'vuex'
import api from './utility/api'


Vue.use(Vuex)

export default new Vuex.Store({
  // all major state share acrossed the app
  state: {
    citiesList: [],
    hotelsList: [],
    employeeList: [],
    localityList: [],
    departmentList: []
  },
  mutations: {
    getCities: (state,cityQuery) => {

    },
    getHotels: (state,cityDetails) => {

    },
    getEmployees: (state) => {
      const employee = get(api.getEmployee);
      employee
      .then((data) => {
        state.employeeList = data.body;
      });
    },
    getLocalities: (state,cityDetails) => {

    },
    getDepartments: (state) => {

    }

  },
  actions: {

  }
})
