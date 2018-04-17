<template>
    <div id="select-eare-table">
        <span class="select-title t-center">{{$t('STR_LIVING_LOCATION')}}</span>
        <div class="select-display">
            <span>{{provinceName}}</span>
            <span>{{cityName}}</span>
            <span>{{areaName}}</span>
        </div>
        <div class="select-content" v-show="selectStep==0">
            <span class="select-item" v-bind:class="{ 'selected':item.id == provinceId }" @click="onProvinceSelect(item)" v-for="item in selProvince" :key="item.id" v-bind:value="item.id">
                {{item.name}}
            </span>
        </div>
        <div class="select-content" v-show="selectStep==1">
            <span class="select-item" v-bind:class="{ 'selected':item.id == cityId }" @click="onCitySelect(item)" v-for="item in selCitys" :key="item.id" v-bind:value="item.id">
                {{item.name}}
            </span>
        </div>
        <div class="select-content" v-show="selectStep==2">
            <span class="select-item" v-bind:class="{ 'selected':item.id == areaId }" @click="onAreaSelect(item)" v-for="item in selAreas" :key="item.id" v-bind:value="item.id">
                {{item.name}}
            </span>
        </div>
        <div id="" class="select-cmd shadow">
            <span @click="onDecision('cancel')" class="cancel">{{$t('STR_CANCEL')}}</span>
            <span @click="onDecision('confirm')" class="" v-bind:class="{ 'confirm': isReady==true ,'cancel': isReady==false}">{{$t('STR_CONFIRM')}}</span>
        </div>
    </div>
</template>

<script>
import ListProvince from '@Models/location/province.json'
import ProvinceObj from '@Models/location/province_object.json'
import ListCity from '@Models/location/city.json'
import CityObj from '@Models/location/city_object.json'
import ListArea from '@Models/location/area.json'
import AreaObj from '@Models/location/area_object.json'
import LocationModel from '@Models/LocationModel.js'

export default {
    props: ['onMakeDecision'],
    data() {
        return {
            selProvince: ListProvince,
            selCitys: [],
            selAreas: [],
            selectProvince: null,
            selectCity: null,
            selectArea: null,
            selectStep: 0
        }
    },
    computed: {
        provinceId: function() {
            if (this.selectProvince == null) return -1
            return this.selectProvince.id
        },
        provinceName: function() {
            if (this.selectProvince == null) return this.$t('STR_PROVINCE')
            return this.selectProvince.name
        },
        cityId: function() {
            if (this.selectCity == null) return -1
            return this.selectCity.id
        },
        cityName: function() {
            if (this.selectCity == null) return this.$t('STR_CITY')
            return this.selectCity.name
        },
        areaId: function() {
            if (this.selectArea == null) return -1
            return this.selectArea.id
        },
        areaName: function() {
            if (this.selectArea == null) return this.$t('STR_AREA')
            return this.selectArea.name
        },
        isReady: function() {
            if (this.selectProvince == null) return false
            if (this.selectCity == null) return false
            if (this.selectArea == null) return false

            return true
        }
    },
    methods: {
        onDecision(decision) {
            if (decision == 'cancel') {
                this.$emit('onMakeDecision', {
                    decision: 'cancel'
                })
            } else if (decision == 'confirm') {
                if (this.isReady == false) {
                    return true
                }
                this.$emit('onMakeDecision', {
                    decision: 'confirm',
                    data: {
                        province: this.selectProvince,
                        city: this.selectCity,
                        area: this.selectArea
                    }
                })
            }
            this.reset()
        },
        onProvinceSelect(item) {
            this.selectProvince = item
            this.selCitys = ListCity[this.selectProvince.id]
            this.selectStep++
        },
        onCitySelect(item) {
            this.selectCity = item
            this.selAreas = ListArea[this.selectCity.id]
            this.selectStep++
        },
        onAreaSelect(item) {
            this.selectArea = item
        },
        reset() {
            this.selectProvince = null
            this.selectCity = null
            this.selectArea = null
            this.selectStep = 0
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#select-eare-table {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: white;
    height: 400px;
    padding-bottom: 36px;
}
</style>
