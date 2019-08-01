<template>
<ul class='flex flex-column align-stretch pa0 h-100 overflow-y pointer'>
    <li class='flex'>
        <placeCard placeLabel = "Munnar" hotelsFound = "2" :placeData='{sample: ""}' />
    </li>
</ul>   
</template>
<script>
import placeCard from './placeCard.component'
import { isObject } from '../utility/utility'
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
    },
    
    computed: {
        placeType() {
            let arr = this.suggestionList;

            if(arr.length === 0) return ""

            if(arr.length > 0) {
                if( isObject(arr[0]) && "cityId" in arr[0] ){
                    return "City"
                }

                if( isObject(arr[0]) && "localityId" in arr[0] ){
                    return "Locality"
                }
            }
        }
    }
}
</script>


