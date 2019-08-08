<template>
 
<div class="tab-content flex-auto" >
        <div class="tab-pane fade active show" id="menu1">
            <div class="nav-folder-top">
                <div class="d-flex align-items-center">
                    <img src="../assets/validation.svg" width="30px" class="img-fluid mr-2">
                    <h5 class="m-0 px-2">
                        <strong class="text-uppercase">{{ hotelObj.hotelName }}</strong>
                    </h5>
                    <p class="m-0 px-2"><small>{{ hotelObj.startRating }} star Hotel</small></p>
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
                            <li class='flex pa1 gray flex-column w-50'
                                v-for='i in hotelObj.amenities'
                                :key='i.value'
                                >
                                <div class='f4'>
                                    <i :class="i.icon" aria-hidden="true"></i>
                                </div>
                                <div class='f7'>
                                    {{ i.label }}
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col flex flex-column">
                        <h6 class=''>Accesibility</h6>
                        <div class='flex flex-auto  tc'>
                        <ul class='flex flex-wrap items-start'>
                            <li class='flex pa1 gray flex-column w-50' 
                                v-for='i in hotelObj.accessibility'
                                :key='i.value'
                                >
                                <div class='f4'>
                                    <i :class="i.icon" aria-hidden="true"></i>
                                </div>
                                <div class='f7'>
                                    {{ stringClean(i.label) }} 
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col flex flex-column">
                        <h6 clas=''>Reviews</h6>
                        <!-- review star -->
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
                            <button v-if='hotelObj.isApproved' class="btn btn-primary btn-sm" @click='hotelClicked'>Get Approve</button>
                            <button v-else class="btn btn-primary btn-sm" @click='hotelClicked'>Choose This</button>
                        </div>
                        <div class='pb2'>
                            <button class="btn btn-outline-primary btn-sm" @click='profileClicked'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

</template>
<script>
import { stringClean } from '../utility/utility'
export default {
    name: 'hotelCard',
    props: {
        hotelObj: {
            type: Object,
            required: true,
            default: () => { 
                return { 
                    "hotelName" : "Hotel Name",
                    "hotelId":"1",
                    "locality":"sholinganallur",
                    "amenities":[{"icon":"fa fa-car","label":"pickup","value":"2"},{"icon":"fa fa-cutlery","label":"breakfast","value":"3"}],
                    "accessibility":[{"icon":"fa fa-car","label":"Bus","value":"4","distance":"2km"},{"icon":"fa fa-chev","label":"Train","value":"89","distance":"2km"}],
                    "isApproved":true,
                    "roomAvailability":"2",
                    "rating":"2",
                    "hotelAvatar":"https://robohash.org/hotel",
                    "startRating":"3"
                }
            },
        }
    },

    methods: {
        hotelClicked: function() {
            console.log({...this.hotelObj})
            this.$emit('hotelSelected',this.hotelObj)
        },

        profileClicked: function() {
            this.$emit('profileClicked',this.hotelObj)
        },
        stringClean: stringClean
    }
}
</script>

<style>

</style>

