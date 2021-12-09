<template>    
    <div :class="styleClass" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img class="btn_img" :style="mainStyle" v-if="hovered" src="../../assets/icon_back_on.png" />
        <img class="btn_img" :style="mainStyle" v-if="!hovered" src="../../assets/icon_back_normal.png" />
        <div class="btn_text" :class="{active:hovered}">{{$t('common.back')}}</div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {        
        text: {
            type: String,
            default: ""
        },   
        width: {
            type: Number,
            default: ""
        },   
        styleClass: {
            type: String,
            default: ""
        },        
    },
    data: function () {
        return {
            hovered: false
        };
    },
    computed: {        
        mainStyle: function () {            
            return {
                width: (this.width || 40)+"px"
            }
        }
    },
    mounted() {
    },
    methods: {   
    }
}
</script>

<style lang="css" scoped>

.btn_text{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF88;
    line-height: 22px;
    margin-left: 5px;
}
.btn_text.active{
    color: #FFFFFF;
}
</style>
