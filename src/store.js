import Vue from 'vue'
import Vuex from 'vuex'
import api from './utility/api'
import {get} from './utility/request'


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
    getCities: (state) => {
      const cities = get(api.getCity);
      cities
      .then((data) =>{
        state.citiesList = data.body;
      })
    },
    getHotels: (state) => {
      const hotels = get(api.getHotel);
      hotels
      .then((data) =>{
        state.hotelsList = data.body;
      })
    },
    getEmployees: (state,data) => {
      const employee = get(api.getEmployee);
      employee
      .then((data) => {
        state.employeeList = data.body;
      });
    },
    getLocalities: (state) => {
      const locality = get(api.getEmployee);
      locality.then(data => {
        state.localityList = data.body;
      })
    },
    getDepartments: (state) => {
      const department = get(api.getDepartment);
      department
      .then(data => {
        state.departmentList = data.body;
      })
    }

  },
  actions: {
    initiateState({commit}){
      commit('getLocalities');
      commit('getCities');
      commit('getHotels');
      commit('getEmployees');
      commit('getDepartments');
    }
  }
})
