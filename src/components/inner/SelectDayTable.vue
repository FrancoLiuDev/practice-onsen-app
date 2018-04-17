<template>
    <div id="select-date-table">
        <span class="select-title t-center">{{$t('STR_BIRTHDAY')}}</span>
        <div class="select-display-date">
            <span class="t-center">{{$t('STR_YEAR')}}</span>
            <span class="t-center">{{$t('STR_MOUNTH')}}</span>
            <span class="t-center">{{$t('STR_DATE')}}</span>
        </div>
        <div class="select-content">
            <div class="content-rows">
                <span class="select-item t-center" @click="onYearSelect(item)" v-bind:class="{ 'selected':item.id == stYear }" v-for="item in years" :key="item.id" v-bind:value="item.id">
                    {{item.name}}
                </span>
            </div>
            <div class="content-rows ">
                <span class="select-item t-center" @click="onMonthSelect(item)" v-bind:class="{ 'selected':item.id == stMonth }" v-for="item in months" :key="item.id" v-bind:value="item.id">
                    {{item.name}}
                </span>
            </div>
            <div class="content-rows">
                <span class="select-item t-center" @click="onDateSelect(item)" v-bind:class="{ 'selected':item.id == stDay }" v-for="item in days" :key="item.id" v-bind:value="item.id">
                    {{item.name}}
                </span>
            </div>
        </div>

        <div id="" class="select-cmd shadow">
            <span @click="onDecision('cancel')" class="cancel">{{$t('STR_CANCEL')}}</span>
            <span @click="onDecision('confirm')" class="" v-bind:class="{ 'confirm': isReady==true ,'cancel': isReady==false}">{{$t('STR_CONFIRM')}}</span>
        </div>
    </div>
</template>
<script>
import monthObj from '@Models/month/month_object.json'

export default {
    props: ['onMaskDecision'],
    mounted() {
        this.years = this.makeRange(1900, 2018)
        this.months = this.makeRange(1, 12)
        this.days = this.makeRange(1, 31)
    },
    data() {
        return {
            years: [],
            months: [],
            days: [],
            selectY: null,
            selectM: null,
            selectD: null
        }
    },
    computed: {
        isReady: function() {
            if (this.selectY == null) return false
            if (this.selectM == null) return false
            if (this.selectD == null) return false
            return true
        },
        stYear: function() {
            if (this.selectY == null) return -1
            return this.selectY.id
        },
        stMonth: function() {
            if (this.selectM == null) return -1
            return this.selectM.id
        },
        stDay: function() {
            if (this.selectD == null) return -1
            return this.selectD.id
        }
    },
    methods: {
        onDecision(decision) {
            if (decision == 'cancel') {
                this.$emit('onMaskDecision', {
                    decision: 'cancel'
                })
            } else if (decision == 'confirm') {
                if (this.isReady == false) {
                    return
                }
                this.$emit('onMaskDecision', {
                    decision: 'confirm',
                    data: {
                        year: this.selectY.id,
                        month: this.selectM.id,
                        date: this.selectD.id
                    }
                })
            }
            this.reset()
        },
        reset() {
            this.selectY = null
            this.selectM = null
            this.selectD = null
        },
        reloadDate() {
            if (this.selectY == null) return
            if (this.selectM == null) return

            if (this.selectM.id == 2 && this.selectY.id % 4 == 0) {
                this.days = this.makeRange(1, 28)
                return
            }

            this.days = this.makeRange(1, monthObj[this.selectM.id].days)
        },
        makeRange(from, to) {
            var arry = []
            for (var i = from; i <= to; i++) {
                arry.push({
                    id: i,
                    name: i
                })
            }
            return arry
        },
        onYearSelect(item) {
            this.selectY = item
            this.reloadDate()
        },
        onMonthSelect(item) {
            this.selectM = item
            this.reloadDate()
        },
        onDateSelect(item) {
            this.selectD = item
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#select-date-table {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: white;
    height: 300px;
    padding-bottom: 36px;

    .select-display-date {
        display: flex;
        width: 100%;
        padding-top: 7px;
        height: 30px;
        border-bottom: 1px solid gray;

        span {
            flex: 1;
        }
    }
    .select-content {
        overflow: hidden;
        display: flex;
        div {
            flex: 1;
        }
        .content-rows {
            overflow: scroll;
            .select-item {
                padding-left: 0px;
            }
        }
    }
}
</style>
