<template>
  <div class="flex flex-column">
    <div class='b purple mb2'>
      New Booking
    </div>
    <!--Tab - sub route -->
    <div class='nav-folder pa0 mb2'>
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
    <div class='pt1 pb1 mb2' v-if='true'>
      something need to be here
    </div>
    <!-- search meta data -->
    <div class='pt1 pb1 mb2 flex flex-column'>
        <div class='mb2'>Hotel List result of</div>
        <div class='flex w-75 items-center  mb2'>
          <ul class='flex items-center w-80'>
            <li class="flex flex-column flex-auto">
              <div class='gray f6'>City</div>
              <div class='b'>Gujarat</div>
            </li>
            <li class="flex flex-column flex-auto">
              <div class='gray f6'>Date</div>
              <div class='b'>22/feb - 22/feb</div>
            </li>
            <li class="flex flex-column flex-auto">
              <div class='gray f6'>Near By</div>
              <div class='b'>Airport</div>
            </li>
            <li class="flex flex-column flex-auto">
              <div class='gray f6'>Guest</div>
              <div class='b'>2</div>
            </li>
          </ul>
          <div class='flex justify-center items-center w-20'>
            <button class="btn btn-outline-primary btn-sm">Modify Search</button>
          </div>
        </div>
    </div>
    <!-- hotel listing area -->
    <div class='bg-light-gray pt2 pb2 flex items-stretch'>
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
                                  <button class="btn btn-primary btn-sm">Get Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    <!-- action area -->
    <div class='mb2' v-if='true'>
      <input type="text" v-if='true' placeholder="Type where to go...?" class="form-control form-control-xl bn f3">
      <div class='flex items-center f3 w-40'>
        <div><i class="fa fa-minus-circle" aria-hidden="true"></i></div>
        <div class='flex-auto tc'>
          <input type="text"  placeholder="No of Persons" class="form-control form-control-xl bn f3 tc">
        </div>
        <div><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
      </div>
      <!-- progress bar -->
      <div class="progress progress-sm mb-3">
          <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              
          </div>
      </div>
      <!-- action buttons -->
      <div class='flex justify-between items-center'>
        <div class="flex items-center">
          <button class="btn btn-light">Back</button>
        </div>
        <div class='w-20 flex items-center justify-between'>
          <button class="btn btn-light">Skip</button>
          <button class='btn btn-primary'>Next</button>
        </div>
      </div>

    </div>
    <!-- city listing area -->
    <div class='flex flex-column' v-if='true'>
      <div class='pt2 pb2'>often Destination</div>
      <ul class='flex flex-column pa0 h-100 overflow-y'>
        <li class='flex justify-between items-center pt2 pb2 b fw4 gray bb b--light-gray'>
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
        <li class='flex justify-between items-center pt2 pb2 b fw4 gray bb b--light-gray'>
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
    <!-- employee listing area -->
    <div v-if='true'>
      <div class='pt2 pb2 b fw5'>Guest with you</div>
      <div class='flex items-stretch '>
        <div class='flex flex-column w-25 bg-light-gray'>
          <div class='mt3 '>
            <button class="btn btn-outline-primary btn-sm ml4">For me</button>
          </div>
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
                <img width='100' height='100' src="../assets/picture.svg" alt="">
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
                <img width='100' height='100' src="../assets/picture.svg" alt="">
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


  </div>
</template>





<style>
/* header main layout*/
#app{
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
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
/* height */
.h-200{ height: 150px;}
.f7{font-size:.675rem;}

</style>

