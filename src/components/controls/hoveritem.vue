<template>    
    <div :class="styleclass" class="item" 
        @mouseover="hovered = true" @mouseleave="hovered = false" @click="clickItem">
        <img class="intro_item_pic" :style="mainClass" :src="require(`../../assets/${imageUrl}`)" />
        <div v-show="!hovered" class="intro_item_title">{{title}}</div>
        <div v-show="hovered" class="intro_item_rect2">
            <div class="intro_first_text1">rewards</div>
            <div class="intro_first_text2">内容说明，内容说明内容说明内容说明，内容说明内容说明，内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明，内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明</div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        // 是否打开
        styleclass: {
            type: String,
            default: ""
        },      
        imageUrl: {
            type: String,
            default: ""
        },   
        title: {
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
        mainClass: function () {
            if(this.hovered)
                return {'filter': "blur(5px)"}
            else
                return {}
        },   
    },
    mounted() {
    },
    methods: {   
        clickItem: function () {            
            this.$emit('clickItem');
        }
    }
}
</script>

<style lang="css" scoped>
.item{
    position: relative;    
}

.intro_item_pic{    
    width:100%;
    height:100%;
}
.intro_item_title{
    font-size: 72px;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 105px;
    position: absolute;
    bottom:15px;
    right:10px;
}
.intro_item_rect2{    
    width: 100%;
    height:100%;
    border-radius: 8px;
    border: 2px solid #C47BF1;
    background:#543132aa;  
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    padding:55px;
    box-sizing: border-box;    
    top:0px;
    left:0px;
}

.intro_first_text1{
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 24px;    
}
.intro_first_text2{
    margin-top:25px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 32px;
    overflow: hidden;    
}
@media (max-width:1000px) {
    .intro_item_rect2{
        padding:10px;
    }
}
@media (max-width:1000px) {
    .intro_item_title{
        font-size: 32px;
        bottom:5px;
    }
}
</style>
