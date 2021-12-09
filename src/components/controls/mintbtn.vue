<template>    
    <div :class="styleClass" @mouseover="hovered = true" @mouseleave="hovered = false" @click="onClick">
        <img class="btn_img" v-if="hovered" src="../../assets/mint_btn_on.png" />
        <img class="btn_img" v-if="!hovered" src="../../assets/mint_btn_normal.png" />
        <div class="btn_text flex_center" :class="{active:hovered}">{{text}}</div>
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
        
    },
    mounted() {
    },
    methods: {   
        onClick: function (){
            this.$emit("onClick");
        }
    }
}
</script>

<style lang="css" scoped>
.btn_img{
    width:142px;
}
.btn_text{
    font-size: 24px;
    font-family: SourceHanSansK-Heavy, SourceHanSansK;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 36px;
    position: absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
}
.btn_text.active{
    color: #FFFFFF;
}
</style>
