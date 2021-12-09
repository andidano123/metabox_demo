<template>
    <div :class="styleClass" :style="parentStyle" @mouseover="hovered = true" @mouseleave="hovered = false" v-on:click="onClick">
        <img class="btn_img" :style="imgWidth" v-if="hovered" :src="require(`../../assets/${imageUrlOn}`)" />
        <img class="btn_img" :style="imgWidth" v-if="!hovered" :src="require(`../../assets/${imageUrlNormal}`)" />
        <div class="btn_text" :class="{active:hovered}">{{text}}</div>
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
        imageUrlOn: {
            type: String,
            default: ""
        },
        imageUrlNormal: {
            type: String,
            default: ""
        },
        styleClass: {
            type: String,
            default: ""
        },
        textPos: {
            type: String,
            default: "left"
        },
    },
    data: function () {
        return {
            hovered: false
        };
    },
    computed: {        
        imgWidth: function () {            
            return {
                width: (this.width || 40)+"px"
            }
        },
        parentStyle: function () {            
            return {};
            // if(this.textPos == "left"){
            //     return {
            //         display: 'flex'
            //     }
            // }else if(this.textPos == "right"){
                
            // }                
        }
    },
    mounted() {
    },
    methods: {   
        onClick: function () {
            this.$emit('onClick', '');
        }
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
