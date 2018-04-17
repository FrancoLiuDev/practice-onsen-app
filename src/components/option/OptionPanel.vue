<template>
    <div class="options-panel">
        <span class="select-title t-center">{{title}}</span>
        <div class="select-content">
            <div class="content-rows">
                <span class="select-item" @click="onOptionSelect(item)" v-bind:class="{ 'selected':item.id == selectId }" v-for="item in options" :key="item.id" v-bind:value="item.id">
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
export default {
    props: ['onMakeDecision', 'title', 'options'],
    mounted() {},
    data() {
        return {
            selected: null
        }
    },
    computed: {
        isReady: function() {
            if (this.selected == null) return false
            return true
        },
        selectId: function() {
            if (this.selected == null) return -1
            return this.selected.id
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
                    return
                }
                this.$emit('onMakeDecision', {
                    decision: 'confirm',
                    data: this.selected
                })
            }
        },
        reset() {},
        onOptionSelect(item) {
            this.selected = item
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

.options-panel {
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: white;
    height: 300px;
    padding-bottom: 36px;

    ::-webkit-scrollbar {
        display: none;
    }
}
</style>
