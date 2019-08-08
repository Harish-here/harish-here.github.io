<template>
    <div class='flex-auto flex'>
        <!-- filter potion -->
          <div class='w-20 bg-white ml2 pa3'>
            <div class='pt2 pb2 b'>Filters</div>
            <!-- ratings -->
            <div class='pb2'>
              <div class='pt1 pb1 b'>Rating</div>
              <ul class='pt1 pb1'>
                <li class='flex items-center pb2'>
                  <input type="checkbox" value='4.5' v-model.number='filter.rating'>
                  <span class='pl2'> 4.5 Above</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" value='4' v-model.number='filter.rating'>
                  <span class='pl2'> 4 Above</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" value='3' v-model.number='filter.rating'>
                  <span class='pl2'> 3 Above</span>
                </li>
                <li class='flex items-center pb2'>
                  <input type="checkbox" value='2' v-model.number='filter.rating'>
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
            <ul class='flex flex-column align-stretch'>
                <li class='flex'
                    v-for='i in hotelList'
                    :key='i.hotelName'
                    >
                    <hotel-card @hotelSelected='hotelSelected' @profileSelected='profileSelected' :hotelObj='i' />
                </li>
            </ul>
          </div>
          <!-- end of hotel -->
    </div>
</template>
<script>
import HotelCard from '../components/hotelCard.component'

export default {
    name: 'hotelsListing',

    components: { HotelCard },

    data: function() {
        return {
            filter: {
                rating: [],
                amenities: []
            }
        }
    },

    computed: {
        hotelList(){
          return  this.$store.state.hotelsList
        }
    },

    methods: {
        hotelSelected: function(hotel){
            this.$emit('hotelSelected', hotel)
        },
        profileSelected: function(hotel){
            this.$emit('profileSelected', hotel)
        }
    }

}
</script>
