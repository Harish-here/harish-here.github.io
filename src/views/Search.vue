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
    <div class='pt1 pb1 mb2'>
      something need to be here
    </div>
    <!-- action area -->
    <div class='mb2'>
      <input type="text" v-if='false' placeholder="Type where to go...?" class="form-control form-control-xl bn f3">
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
    <div class='flex flex-column' v-if='false'>
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
    <div>
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
  height: calc(100% - 70px);
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

</style>

