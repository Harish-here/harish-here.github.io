<template>
  <div class="flex flex-column">
    <div class='b purple mb2' v-if='true'>
      New Booking
    </div>
    <!--Tab - sub route -->
    <div class='nav-folder pa0 mb2' v-if='[view[0],view[1],view[2],view[3]].includes(currentView)'>
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
    <div class='pt1 pb1 mb2' v-if='[view[1],view[2]].includes(currentView)'>
      <span>Your booking was {{currentBooking.city}}</span>
      <span v-if='currentView === view[2]'>on {{currentBooking.from}} to {{currentBooking.to}}</span>
    </div>

    <!-- action area / big textbox / input area -->
    <div class='mb2' v-if='[view[0],view[1],view[2]].includes(currentView)'>
      <input type="text" v-if='currentView === view[0]' placeholder="Type where you need to go...?" class="form-control form-control-xl bn f3">
      <input type="text" v-if='currentView === view[1]' placeholder="when you need to go...?" class="form-control form-control-xl bn f3">
      <!-- no of person input -->
      <div class='flex items-center f3 w-40' v-if='currentView === view[2]'>
        <div><i class="fa fa-minus-circle" :class='{"light-gray": currentBooking.pax === 0 }' aria-hidden="true" @click='currentBooking.pax > 0 && currentBooking.pax--'></i></div>
        <div class='flex-auto tc'>
          <input type="text" v-model='currentBooking.pax'  placeholder="No of Persons" class="form-control form-control-xl bn f3 tc">
        </div>
        <div><i class="fa fa-plus-circle" aria-hidden="true" @click='currentBooking.pax++'></i></div>
      </div>
      <!-- progress bar -->
      <div class="progress progress-sm mb-3" >
          <div class="progress-bar" role="progressbar"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
              :class='{"w-25": currentView === view[0],"w-50": currentView === view[1],"w-75": currentView === view[2]}'>
              
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
    
    <!-- search meta data -->
    <div class='pt1 pb1 mb2 flex flex-column' v-if='view[3] === currentView'>
        <div class='mb2'>Hotel List result of</div>
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
    <!-- hotel listing area -->
    <div class='bg-light-gray pt2 pb2 flex items-stretch' v-if='view[3] === currentView'>
      <div class='flex w-100'>
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
                                <h6 class=''>Ammenities(16)</h6>
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
                                <div clas=''>
                                  <button class="btn btn-primary btn-sm" @click='currentBooking.hotel = "Hilton",step++'>Get Approve</button>
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
    <div class='flex flex-column' v-if='currentView === view[0]'>
      <div class='pt2 pb2'>often Destination</div>
      <ul class='flex flex-column pa0 h-100 overflow-y'>
        <li class='flex justify-between items-center pt2 pb2 b fw4 gray bb b--light-gray' @click='currentBooking.city = "Banglore",step++'>
          <div>Banglore</div>
          <div class='flex flex-column tr'>
            <span>56</span>
            <span>Hotels</span>
          </div>
        </li>
        <li class='flex justify-between items-center pt2 pb2 b fw4 gray bb b--light-gray' @click='currentBooking.city = "Banglore",step++'>
          <div>Banglore</div>
          <div class='flex flex-column tr'>
            <span>56</span>
            <span>Hotels</span>
          </div>
        </li>
        <li class='flex justify-between items-center pt2 pb2 b fw4 gray bb b--light-gray' @click='currentBooking.city = "Banglore",step++'>
          <div>Banglore</div>
          <div class='flex flex-column tr'>
            <span>56</span>
            <span>Hotels</span>
          </div>
        </li>
        <li class='flex justify-between items-center pt2 pb2 b fw4 gray bb b--light-gray'>
          <div>Banglore</div>
          <div class='flex flex-column tr'>
            <span>56</span>
            <span>Hotels</span>
          </div>
        </li>
        
      </ul>
    </div>
    <!-- calender -->
    <div class='' v-if='currentView === view[1]'>
      <div clas='flex mt3'>
        <v-md-date-range-picker @change='sample'  :minDate='(new Date())' />
      </div>
    </div>
    <!-- employee listing area -->
    <div v-if='currentView === view[2]'>
      <div class='pt2 pb2 b fw5'>Guest with you</div>
      <div class='flex items-stretch '>
        <div class='flex flex-column w-25 bg-light-gray'>
          <div class='mt3 '>
            <button class="btn btn-outline-primary btn-sm ml4">For me</button>
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
    <!-- hotel profile page -->
    <div class='flex bg-light-gray h-400 align-stretch' v-if='false'>
      <div class=' w-5 flex justify-center items-center'>
        <div class='purple'> Pre</div>
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
        <div class='purple'> Next</div>
      </div>

    </div>

    <!-- hotel booking stripe -->
    <div class='pt1 pb1 mb2 flex flex-column ' v-if='view[4] === currentView'>
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

  </div>
</template>
<script>
import Vue from 'vue'
import VMdDateRangePicker from "v-md-date-range-picker";
import "v-md-date-range-picker/dist/v-md-date-range-picker.css";
// import api from '../api'

Vue.use(VMdDateRangePicker);
// a.$on('change',function(){
//   consol.log('hi')
// })
export default {
  name: 'search',
  // components : { VMdDateRangePicker },
  data: function(){
    return {
      view: ["City","Date","Person","Hotel","Complete","Hotel-Profile"],
      step: 0,
      cityList: [],
      hotelList: [],
      employeeList: [],
      currentBooking: {
        hotel:"",
        city:"",
        from:"",
        fromDateObj: {},
        toDateObj:{},
        to:"",
        pax: 0,
        locality:""
      },

    }
  },
  methods: {
    sample: function(data){
      this.currentBooking.fromDateObj = data[0]._d;
      this.currentBooking.toDateObj = data[1]._d;
      this.currentBooking.from = data[0].format("DD MMM YYYY");
      this.currentBooking.to = data[1].format("DD MMM YYYY");
    },
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
    }
  },
  computed: {
    currentView(){
      return this.view[this.step]
    }
  },
  created(){

  }

}
</script>

<style>
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
  border-color:var(--purple);
}
</style>

