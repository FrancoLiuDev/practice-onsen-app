<template>
    <v-ons-page id="loading">
        <div class="background"></div>
        <div class="content">
            <v-ons-progress-circular indeterminate></v-ons-progress-circular>
        </div>
    </v-ons-page>
</template>

<script>
export default {
    name: 'LoadingView'
}
</script>

<style lang="less">
#loading {
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .background {
        background: rgba(0, 0, 0, 0.5);
    }
}
</style>
