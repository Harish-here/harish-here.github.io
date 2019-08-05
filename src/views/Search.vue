<template>
  <div class="flex flex-column flex-auto items-center">
    <!-- first section of the page -->
    <section class='flex flex-column align-stretch w-60'>
      <div class='b purple mb2' v-if='true'>
        New Booking
      </div>
      <!--Tab - sub route -->
      <div class='nav-folder pa0 mb2' v-if='[view[0],view[1],view[2],view[3],view[4]].includes(currentView)'>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#menu1">Room</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">Meeting Hall</a>
            </li>
        </ul>
      </div>
      <!-- info area -->
      <div class='pt1 pb1 mb2 hide' v-show='step <= 3' :class='{"show" : [view[1],view[2],view[3]].includes(currentView)}'>
        <span>Your booking was {{currentBooking.city}}</span>
        <span v-if='step >= 2'> ({{currentBooking['locality']}})</span> 
        <span v-if='step >= 3'> on {{currentBooking.from}} to {{currentBooking.to}}</span>
      </div>

      <!-- hotel booking stripe -->
      <div class='pt1 pb1 mb2 flex flex-column ' v-if='view[5] === currentView'>
          <div class='mb3 f4 b purple'>You Successfully booked the room</div>
          <div class='flex w-80 items-basline  mb3 bg-light-gray br3 pa2'>
            <ul class='flex items-center w-90'>
              <li class="flex flex-column flex-auto">
                <div class='gray '>Hotel Name</div>
                <div class='b f6'>{{currentBooking.hotel}}</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray '>City</div>
                <div class='b f6'>{{currentBooking.city}}</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray '>Date</div>
                <div class='b f6'>{{currentBooking.from}} - {{currentBooking.to}}</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray '>Near By</div>
                <div class='b f6'>Airport</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray '>Guest</div>
                <div class='b f6'>{{currentBooking.pax}}</div>
              </li>
            </ul>
            <div class='flex flex-column items-center w-20 bt-0 bb-0 br-0  bw1 bl b--dashed b--purple'>
                <div class='gray f6'>Booking Id</div>
                <div class='b f5'>REt-ww3333</div>
            </div>
          </div>
          <div>
            <button class='btn btn-primary' @click='step = 0,flush()'>Another Booking</button>
            <button class='btn btn-outline-primary ml3' @click='step = 0,flush()'>Complete Trip</button>
          </div>
      </div>
    </section>

    <!-- second section of the page contains inputs & action buttons -->
    <section class='flex flex-columm align-stretch w-60'>
      <!-- action area / big textbox / input area -->
      <div class='mb4 flex-auto flex flex-column relative' v-if='[view[0],view[1],view[2],view[3]].includes(currentView)'>
        <!-- city text box + suggestion box -->
        <input type="search"
               v-if='currentView === view[0]'
               @keydown.down='suggestionBoxActiveIndex++'
               @keydown.up='(suggestionBoxActiveIndex < 0) ? "" : suggestionBoxActiveIndex--'
               @keydown.enter='isUserPressedEnter = true'
               @focusin='showSuggestion = true'
               @blur='(suggestionBoxActiveIndex === -1) ? showSuggestion = false: ""'
               v-model='cityInputString'
               placeholder="Type where you need to go...?"
               class="form-control form-control-xl bn f3 mb3" 
               />
          
        <!-- end of city -->
        <!-- locality search -->
        <input type="search"
               v-if='currentView === view[1]'
               @keydown.down='suggestionBoxActiveIndex++'
               @keydown.up='(suggestionBoxActiveIndex < 0) ? "" : suggestionBoxActiveIndex--'
               @keydown.enter='isUserPressedEnter = true'
               @focusin='showSuggestion = true'
               @blur='(suggestionBoxActiveIndex === -1) ? showSuggestion = false: ""'
               :placeholder='"Type where you need to go in "+currentBooking["city"] +" ...?"'
               class="form-control form-control-xl bn mb3 f3"
               />
        <input type="text" v-if='currentView === view[2]' :value='selectedDate' placeholder="when you need to go...?" class="form-control form-control-xl bn f3 mb3">
        
        <!-- suggestion box for both locality & city -->
        <div v-show='showSuggestion'
             class='absolute bg-white left-0 right-0 top-4 overflow-y-auto' style='height:450px;z-index:2000;'>
            <suggestionBox v-if='currentView === view[0]'
                           :isSearchable='true' 
                           :suggestionList='cityList'
                           :searchString='cityInputString'
                           :activeIndexPoint='suggestionBoxActiveIndex'
                           :isEnterPressed='isUserPressedEnter'
                           @newIndexChanged='setNewIndex'
                           @itemClicked='setCity'
                            />
            <suggestionBox v-else
                           :isSearchable='true' 
                           :suggestionList='localityList'
                           :searchString='localityInputString'
                           :activeIndexPoint='suggestionBoxActiveIndex'
                           :isEnterPressed='isUserPressedEnter'
                           @newIndexChanged='setNewIndex'
                           @itemClicked='setLocality'
                            />
        </div>
        
        <!-- no of person input -->
        <div class='flex items-center f3 w-40 mb3' v-if='currentView === view[3]'>
          <div><i class="fa fa-minus-circle" :class='{"light-gray": currentBooking.pax === 0 }' aria-hidden="true" @click='currentBooking.pax > 0 && currentBooking.pax--'></i></div>
          <div class='flex-auto tc'>
            <input type="text" v-model='currentBooking.pax'  placeholder="No of Persons" class="form-control form-control-xl bn f3 tc">
          </div>
          <div><i class="fa fa-plus-circle" aria-hidden="true" @click='currentBooking.pax++'></i></div>
        </div>
        <!-- progress bar -->
        <div class="progress progress-sm mb3" >
            <div class="progress-bar" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                :class='{"w-10": currentView === view[0], "w-30": currentView === view[1],"w-50": currentView === view[2],"w-75": currentView === view[3]}'>
                
            </div>
        </div>
        <!-- action buttons -->
        <div class='flex justify-between items-center' >
          <div class="flex items-center">
            <button class="btn btn-light" v-show='step > 0' @click='step--'>Back</button>
          </div>
          <div class='w-20 flex items-center justify-between'>
            <button class="btn btn-light" @click='step++'>Skip</button>
            <button class='btn btn-primary' @click='step++'>Next</button>
          </div>
        </div>

      </div>
      <!-- end -->
      <!-- search meta data -->
      <div class='pt1 pb1 mb2 flex-auto flex flex-column' v-if='view[4] === currentView'>
          <div class='mb2 fw5'>Hotel List result of</div>
          <div class='flex w-75 items-center  mb2'>
            <ul class='flex items-center w-80'>
              <li class="flex flex-column flex-auto">
                <div class='gray f6'>City</div>
                <div class='b'>{{currentBooking.city}}</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray f6'>Date</div>
                <div class='b'>{{currentBooking.from}} - {{currentBooking.to}}</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray f6'>Near By</div>
                <div class='b'>Airport</div>
              </li>
              <li class="flex flex-column flex-auto">
                <div class='gray f6'>Guest</div>
                <div class='b'>{{currentBooking.pax}}</div>
              </li>
            </ul>
            <div class='flex justify-center items-center w-20'>
              <button class="btn btn-outline-primary btn-sm" @click='step--'>Modify Search</button>
            </div>
          </div>
      </div>
      <!-- end -->
    </section>
    
    <!-- Third section  -->
    <section class='flex flex-column align-stretch flex-auto items-center  w-100'>
      <!-- hotel listing area -->
      <div class='bg-light-gray pt2 pb2 flex justify-center items-stretch w-100' v-if='view[4] === currentView'>
        <div class='flex w-60'>
          <!-- filter potion -->
          <div class='w-20 bg-white ml2 pa3'>
            <div class='pt2 pb2 b'>Filters</div>
            <!-- ratings -->
            <div class='pb2'>
              <div class='pt1 pb1 b'>Rating</div>
              <ul class='pt1 pb1'>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> 4.5 Above</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> 4 Above</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> 3 Above</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> 2 Above</span>
                </li>
              </ul>
            </div>
            <!-- amenities -->
            <div class='pb2'>
              <div class='pt1 pb1 b'>Amenities</div>
              <ul class='pt1 pb1 h-200 overflow-y-auto'>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> wifi</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> Board room</span>
                </li>
                <li class='flex items-start pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> Hallow square</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" name="" id="">
                  <span class='pl2'> Free pickup</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- hotel portion -->
          <div class='w-80 pl2 pr2'>
            <div class="tab-content ">
                  <div class="tab-pane fade active show" id="menu1">
                      <div class="nav-folder-top">
                          <div class="d-flex align-items-center">
                              <img src="../assets/validation.svg" width="30px" class="img-fluid mr-2">
                              <h5 class="m-0 px-2">
                                  Hotel <strong class="text-uppercase">Hilton</strong>
                              </h5>
                              <p class="m-0 px-2"><small>3 star Hotel</small></p>
                          </div>
                      </div>
                      <!-- hotel tabe content -->
                      <div class="nav-folder-container bg-white mb3">
                          <div class="row">
                              <div class="col">
                                  <img src="../assets/picture.svg" width="150px" class="img-fluid">
                              </div>
                              <div class="col flex flex-column">
                                  <h6 class=''>Ammenities(+16)</h6>
                                  <div class='flex flex-auto justify-center tc'>
                                    <ul class='flex flex-wrap justify-around items-start'>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-cutlery" aria-hidden="true"></i>
                                        </div>
                                        <div class='f6'>
                                          Food
                                        </div>
                                      </li>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-tint" aria-hidden="true"></i>
                                        </div>
                                        <div  class='f6'>
                                        RO
                                        </div>
                                      </li>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-car" aria-hidden="true"></i>
                                        </div>
                                        <div  class='f6'>
                                          Pickup
                                        </div>
                                      </li>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-wifi" aria-hidden="true"></i>
                                        </div>
                                        <div class='f6'>
                                          wifi
                                        </div>
                                      </li>
                
                                    </ul>
                                  </div>
                              </div>
                              <div class="col flex flex-column">
                                  <h6 class=''>Accesibility</h6>
                                  <div class='flex flex-auto  tc'>
                                    <ul class='flex flex-wrap items-start'>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-train" aria-hidden="true"></i>
                                        </div>
                                        <div class='f7'>
                                          2km 
                                        </div>
                                      </li>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-bus" aria-hidden="true"></i>
                                        </div>
                                        <div  class='f7'>
                                        2.3km
                                        </div>
                                      </li>
                                      <li class='flex pa1 gray flex-column w-50'>
                                        <div class='f4'>
                                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div class='f7'>
                                          5.2km 
                                        </div>
                                      </li>
                
                                    </ul>
                                  </div>
                              </div>
                              <div class="col flex flex-column">
                                  <h6 clas=''>Reviews</h6>
                                  <div class="rating pb2">
                                      <input type="radio" name="check" id="st1" value="1">
                                      <label for="st1"></label>
                                      <input type="radio" name="check" id="st2" value="2">
                                      <label for="st2"></label>
                                      <input type="radio" name="check" id="st3" value="3">
                                      <label for="st3"></label>
                                      <input type="radio" name="check" id="st4" value="4">
                                      <label for="st4"></label>
                                      <input type="radio" name="check" id="st5" value="5">
                                      <label for="st5"></label>
                                  </div>
                                  <div class="red f7 pb2">3 rooms remaining</div>
                                  <div class='pb2'>
                                    <button class="btn btn-primary btn-sm" @click='currentBooking.hotel = "Hilton",step++'>Get Approve</button>
                                  </div>
                                  <div class=''>
                                    <button class="btn btn-outline-primary btn-sm" @click='step = 6'>View Details</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- city listing area -->
      <div class='flex flex-column w-60' v-if='currentView === view[0]'>
        <div class='pt2 pb2 b'>often Destination</div>
        <suggestionBox :isSearchable="false"
                       :suggestionList='oftenList'
                       @itemClicked='setCity' 
                       />
      </div>

      <!-- locality listing area -->
      <div class='flex flex-column w-60' v-if='currentView === view[1]'>
        <div class='pt2 pb2 b'>locality of {{currentBooking["city"]}}</div>
        <suggestionBox :isSearchable="false"
                       :suggestionList='localityList'
                       @itemClicked='setLocality'  
                       />
      </div>
      <!-- calender -->
      <div class=' flex align-stretch w-60 justify-center' v-if='currentView === view[2]'>
        <div clas='flex mt3 justify-center flex-auto'>
        
          <VRangeSelector :start-date.sync='currentBooking.fromDateObj' :disabled-dates='{to: (new Date())}' :end-date.sync='currentBooking.toDateObj' />
        </div>
      </div>
      <!-- employee listing area -->
      <div class='flex flex-column w-60' v-if='currentView === view[3]'>
        <div class='pt2 pb2 b fw5'>Guest with you</div>
        <div class='flex items-stretch '>
          <div class='flex flex-column w-25 bg-light-gray'>
            <div class='mt3 '>
              <button class="btn btn-outline-primary btn-sm ml4" @click='currentBooking["pax"] = 1'>For me</button>
            </div>
            <!-- department listing panel -->
            <ul class='gray flex flex-column mt3'>
              <li class='white bg-purple tl pa1 pl4'>Marketing</li>
              <li class='tl pa1 pl4'>Sales Team</li>
              <li class='tl pa1 pl4'>Manager</li>
            </ul>
          </div>
          <div class='flex flex-column flex-auto'>
            <div class=' green f6 flex justify-end'>
                <span class='tc w-20'>select all</span> 
            </div>
            <!-- employee card -->
            <ul class='flex flex-column'>
              <li class='flex'>
                <div class='pa2'>
                  <img class='ba b--light-silver' width='100' height='100' src="https://robohash.org/search?set=2&size=100x100" alt="">
                </div>
                <div class='flex-auto flex flex-column pa2'>
                  <div class='pa1'>Suresh</div>
                  <div class='pa1 f6'>Senior marketing</div>
                  <div class='pa1 green'>Team 1</div>
                </div>
                <div class='flex flex-column justify-center f3 w-10'>
                  <i class="fa fa-check-circle light-gray" aria-hidden="true"></i>
                </div>
              </li>
              <li class='flex'>
                <div class='pa2'>
                  <img class='ba b--light-silver'  width='100' height='100' src="https://robohash.org/searchs?set=2&size=100x100" alt="">
                </div>
                <div class='flex-auto flex flex-column pa2'>
                  <div class='pa1'>Ram</div>
                  <div class='pa1 f6'>Senior Associate</div>
                  <div class='pa1 green'>Team 11</div>
                </div>
                <div class='flex flex-column justify-center f3  w-10'>
                  <i class="fa fa-check-circle light-gray" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    
    
    <!-- hotel profile page -->
    <div class='flex bg-light-gray h-400 align-stretch' v-if='view[6] === currentView'>
      <div class=' w-5 flex justify-center items-center'>
        <div class='purple'> < Pre</div>
      </div>
      <!-- hotel card section -->
      <div class='w-45 pa2 flex align-stretch'>
        <div class='bg-white flex flex-column align-stretch w-100 pa3'>
          <div class='flex flex-column h-half'>
            <div class='b'>Hotel Details</div>
            <div>
              <ul class='flex flex-column items-center'>
                <li>
                  <div class='gray'>Hotel Name</div>
                  <div class='f5 b'>Hilton Hotel</div>
                </li>
                <li>
                  <div class='gray '>Price</div>
                  <div class='f5 b'>2500</div>                  
                </li>
              </ul>
              <ul class='flex items-center'>
                <li class='flex-auto'>
                  <div class='gray'>Hotel Range</div>
                  <div>3 Star Hotel</div>
                </li>
                <li class='flex-auto'>
                  <div class='gray '>Review</div>
                  <div>3 Star Hotel</div>
                </li>
                <li class='flex-auto'>
                  <div class='gray '>Location</div>
                  <div>3 Star Hotel</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- service -->
          <div class='flex flex-column h-half'>
            <div class="b">Service</div>
            <div class='flex align-stretch'>
              <ul class='flex flex-wrap w-100'>
               <li class='flex pa1 gray flex-column w-20' >
                  <div class='f5 tc'>
                    <i class="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <div class='f7 tc'>
                    pick-up 
                  </div>
               </li>
               <li class='flex pa1 gray flex-column w-20' >
                  <div class='f5 tc'>
                    <i class="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <div class='f7 tc'>
                    pick-up 
                  </div>
               </li>
               <li class='flex pa1 gray flex-column w-20' >
                  <div class='f5 tc'>
                    <i class="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <div class='f7 tc'>
                    pick-up 
                  </div>
               </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- location amenities section -->
      <div class='w-45 pa2 flex align-stretch'>
        <div class='flex flex-column align-stretch'>
          <div class='h-half flex align-stretch pa2 bg-white'>
            <!-- photo section -->
            <div class=' flex-auto flex align-stretch'>
              <img width='250' src="../assets/picture.svg" alt="">
            </div>
            <ul class='w-20 flex flex-column'>
              <li class='flex-auto'><img src="../assets/picture.svg" alt=""></li>
              <li class='flex-auto'><img src="../assets/picture.svg" alt=""></li>
              <li class='flex-auto'><img src="../assets/picture.svg" alt=""></li>
            </ul>
          </div>
          <div class='h-half flex flex-column'>
            <!-- inline tab -->
            <div class="d-inline-block">
              <ul class="nav nav-pills nav-fill nav-menu bg-dark text-center">
                <li class="nav-item w-25">
                          <a class="nav-link active" data-toggle="tab" href="#menu1">Location</a>
                </li>
                <li class="nav-item w-25">
                  <a class="nav-link" data-toggle="tab" href="#menu2">Facilities</a>
                </li>
                <li class="nav-item w-25">
                    <a class="nav-link" data-toggle="tab" href="#menu3">Rating</a>
                </li>
                <li class="nav-item w-25">
                    <a class="nav-link" data-toggle="tab" href="#menu1">Policies</a>
                </li>
              </ul>
            </div>
            <!-- tab place -->
            <div class='flex align-stretch'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class='w-5 flex justify-center items-center'>
        <div class='purple'> Next ></div>
      </div>

    </div>

    

  </div>
</template>
<script>
// import DatePicker from 'vuejs-datepicker';
import VRangeSelector from 'vuelendar/components/vl-range-selector';
import { format, startOfTomorrow, addDays } from 'date-fns';
import { isEmptyString, formatDate } from '../utility/utility'
import api from '../utility/api'
import "vuelendar/scss/vuelendar.scss"
import suggestionBox from '../components/suggestionBox.component'

export default {
  name: 'search',
  components : {  VRangeSelector, suggestionBox },
  data: function(){
    return {
      view: ["City","locality","Date","Person","Hotel","Complete","Hotel-Profile"],
      step: 0,
      cityInputString: "",
      localityInputString: "",
      isUserPressedEnter: false,
      currentBooking: {
        hotel: "",
        hotelId: "",
        city: "",
        cityId: "",
        locality:"",
        localityId:"",
        from:"",
        fromDateObj: startOfTomorrow(),
        toDateObj: addDays(startOfTomorrow(),1),
        to:"",
        pax: "",
        guest: []
      },
      suggestionBoxActiveIndex: -1,
      showSuggestion: false,
    }
  },
  watch: {
    'currentBooking.fromDateObj': function(val){
      this.currentBooking.from = formatDate(new Date(val));
    },

    'currentBooking.toDateObj': function(val){
      this.currentBooking.to = formatDate(new Date(val));
    },

    'showSuggestion': function(){
      //make the suggestion index = -1
      this.suggestionBoxActiveIndex = -1;
    }
  },
  
  methods: {
    
    flush: function(){
      for(let i in this.currentBooking){
        if(i === "fromDateObj" || i === "toDateObj" ){
          this.currentBooking[i] = {};
          continue;
        }
        if(i === 'pax'){
          this.currentBooking['pax'] = 0;
          continue;
        }
        this.currentBooking[i] = ""
      }
    },

    setCity: function({ cityName, cityId }) {
      this.isUserPressedEnter = false;//reset the enter button pressed state
      this.showSuggestion = false;
      this.currentBooking.city = cityName;
      this.currentBooking.cityId = cityId;
      this.step = 1;
    },

    setLocality: function({ localityName, localityId}) {
      this.isUserPressedEnter = false;//reset the enter button pressed state
      this.showSuggestion = false;
      this.currentBooking.locality = localityName;
      this.currentBooking.localityId = localityId;
      this.step = 2;
    },

    setNewIndex: function(newIndex){
      this.suggestionBoxActiveIndex = newIndex;
    }


  },
  computed: {
    currentView(){
      return this.view[this.step]
    },
    // This is to show the selected date
    selectedDate(){
      let selectedDate = '';

      if(isEmptyString(this.currentBooking.from)){
        return ""
      }
      
      selectedDate += formatDate(new Date(this.currentBooking.fromDateObj))

      if(isEmptyString(this.currentBooking.to)){
        return selectedDate
      }
      
      
      selectedDate += ' - ' + formatDate(new Date(this.currentBooking.toDateObj))

      return selectedDate
    },

    hotelsList(){
      return this.$store.state.hotelsList
    },

    cityList(){
      return this.$store.state.citiesList
    },

    employeeList(){
      return this.$store.state.employeesList
    },

    localityList(){
      return this.$store.state.localityList
    },

    oftenList(){
      return this.$store.state.citiesList.slice(24)
    }

  },
  created(){
     this.$store.dispatch('initiateState')
  }

}
</script>

<style >
/* header main layout*/
:root{
  font-size: 16px;
}
#app{
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
  font-size:0.875rem;
}
#nav{
  height: 70px;
}
#action-area{
  max-height: calc(100% - 70px);
  overflow-y: auto;
}
/* --- end -- */

/* utility | some of them are written to override the default boostrap style*/
.bn{
  border:none !important;
}
.f3{
  font-size: 1.5rem;
}
input:focus,input:active{
  outline: none !important;
  border: none;
}
ul{
  padding:0px;
  list-style: none;
}
.rating label:before{ font-size: 1rem;}
.rating label:before{ margin:4px; }

/* width */
.w-5{ width:5%; }
.w-45{ width:45%; }
/* height */
.h-half{height:50%;}
.h-200{ height: 150px;}
.f7{font-size:.675rem;}
.h-400{height:450px;}
.b--purple{
  border-color: var(--purple);
}
.hide{
  visibility: hidden;
}
.show{
  visibility: visible;
}

.bg-aliceblue{
  background-color: aliceblue;
}

/* sugesstion box wrapper position */
.top-4{
  top: 5rem;
}
</style>

