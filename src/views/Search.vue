<template>
  <div class="flex flex-column">
    <div>
      New Booking
    </div>
    <!--Tab - sub route -->
    <div class='nav-folder pa0'>
      <ul class="nav nav-pills">
          <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#menu1">Room</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#menu2">Meeting Hall</a>
          </li>
      </ul>
    </div>
    <!-- action area -->
    <div>
      <input type="text" placeholder="Search" class="form-control form-control-xl bn">
      <div class="progress mb-3">
          <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              50%
          </div>
      </div>
      <div class='flex justify-end items-center'>
        <div class='w-20 flex items-center justify-between'>
          <button class="btn btn-light">Skip</button>
          <button class='btn btn-primary'>Next</button>
        </div>
      </div>

    </div>
    <!-- listing area -->
    <div>

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


</style>

