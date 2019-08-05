<template>
<ul class='flex flex-column align-stretch pa0 h-100 overflow-y pointer '>
    <li class='flex' v-for='(i,index) in listItem'
        :class='{"bg-aliceblue shadow-4": index === activeIndex}'
        :key="index"
        @mouseenter="activeIndex = index"
        @mouseleave="activeIndex = -1"
        @click='activeIndex = index,triggerItemCLicked(i)'>
        <placeCard :placeLabel='i[searchField[placeType]]' :hotelsFound='i["hotelFound"]' :placeData='i' />
    </li>
    <li class='flex' v-if='isSearchable && listItem.length === 0'>
        <div class='flex-auto flex justify-center items-center pt2 pb2 pl1 pr2 b fw4 gray bb b--light-gray'>
            <span>No results for <b>'{{searchString}}'</b></span>
        </div>
    </li>
</ul>   
</template>
<script>
import placeCard from './placeCard.component'
import { isObject, isEmptyString } from '../utility/utility'

export default {
    name: 'suggestionBox',
    components: { placeCard },
    props: {
        suggestionList: {
            type: Array,
            required: true,
            default: () => [],
        },

        isSearchable: {
            type: Boolean,
            required: false,
            default: false
        },

        searchString: {
            type: String,
            required: false,
            default: ""
        },

        activeIndexPoint: {
            type: Number,
            required: false,
            default: -1
        },

        isEnterPressed: {
            type: Boolean,
            required: false,
            default: false,
        }

    },

    watch: {
       'activeIndexPoint': function(val) {
           if(val === this.activeIndex) return
           //this is to check the index should not go outside length of the listItem
           if(val > -2 && val < this.listItem.length){
               this.activeIndex = val
           }
       },
       
       'isEnterPressed': function(val) {
           
           if(val){
               this.$emit('itemClicked',this.listItem[this.activeIndex])
           }
       },

       'activeIndex': function(val) {
           if(this.activeIndexPoint === val) return

           this.$emit('newIndexChanged',val);
       }
    },

    data(){
        return {
            searchField: {
                City: 'cityName',
                Locality: 'localityName'
            },
            activeIndex: -1
        }
    },

    methods: {
        triggerItemCLicked: function(item) {
            this.$emit('itemClicked',item)
        }
    },
    
    computed: {
        placeType() {
            let arr = this.suggestionList;

            if(arr.length > 0) {
                if( isObject(arr[0]) && "cityId" in arr[0] ){
                    return "City"
                }

                if( isObject(arr[0]) && "localityId" in arr[0] ){
                    return "Locality"
                }
            }
            return ""
        },

        listItem(){
            if(this.isSearchable) {
                return this.suggestionList
                        .filter(item => {
                            return !isEmptyString(this.searchString) ?
                                   item[this.searchField[this.placeType]].toLowerCase().includes(this.searchString.toLowerCase()) :
                                   true;
                        });
            } else {
                return this.suggestionList
            }
        }
    }
}
</script>



