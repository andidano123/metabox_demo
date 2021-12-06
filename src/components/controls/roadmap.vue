<template>    
    <div class="roadmap">
        <div class="roadmap_div" style="margin-top:90px;">
            <div class="roadmap_date" :class="{active:current_select==1}" v-on:click="click_roadmap(1)">2021/11</div>
            <div class="roadmap_date" :class="{active:current_select==2}" v-on:click="click_roadmap(2)">2021/12</div>
            <div class="roadmap_date" :class="{active:current_select==3}" v-on:click="click_roadmap(3)">2022/01</div>
            <div class="roadmap_date" :class="{active:current_select==4}" v-on:click="click_roadmap(4)">2022/05</div>
            <div class="roadmap_date" :class="{active:current_select==5}" v-on:click="click_roadmap(5)">2022/10</div>
            <div class="roadmap_date" :class="{active:current_select==6}" v-on:click="click_roadmap(6)">2022/12</div>
        </div>
        <div class="roadmap_div">                            
            <img class="roadmap_item" :class="{active:current_select==1}" v-bind:src="current_select==1?require('../../assets/circle2.png'):require('../../assets/circle1.png')" v-on:click="click_roadmap(1)"/>
            <img class="roadmap_item" :class="{active:current_select==2}" v-bind:src="current_select==2?require('../../assets/circle2.png'):require('../../assets/circle1.png')" v-on:click="click_roadmap(2)"/>
            <img class="roadmap_item" :class="{active:current_select==3}" v-bind:src="current_select==3?require('../../assets/circle2.png'):require('../../assets/circle1.png')"  v-on:click="click_roadmap(3)"/>
            <img class="roadmap_item" :class="{active:current_select==4}" v-bind:src="current_select==4?require('../../assets/circle2.png'):require('../../assets/circle1.png')"  v-on:click="click_roadmap(4)"/>
            <img class="roadmap_item" :class="{active:current_select==5}" v-bind:src="current_select==5?require('../../assets/circle2.png'):require('../../assets/circle1.png')"  v-on:click="click_roadmap(5)"/>
            <img class="roadmap_item" :class="{active:current_select==6}" v-bind:src="current_select==6?require('../../assets/circle2.png'):require('../../assets/circle1.png')" v-on:click="click_roadmap(6)"/>
            <div class="roadmap_line"></div>
        </div>
    </div>
</template>

<script>
var status = {
    current_select: 0,
};
export default {
    components: {},
    props: {
        // 是否打开
        init_select: {
            type: Number,
            default: 1
        },        
    },
    data: function () {
        return status;
    },
    computed: {        
        mainClass: function () {
            return {
                'main-show': this.display,
                'main-hide': !this.display,
                'inner': this.inner
            }
        },   
    },
    mounted() {
        if (this.inner) {
            let box = this.$el.parentNode
            box.style.position = 'relative'
        }
        this.current_select = this.init_select;
    },
    methods: {   
        click_roadmap: function(idx){
            this.current_select = idx;
            this.$emit("select_date", idx);
        },            
        circleImg: function(idx){
            return '../../assets/circle1.png';
        } 
    }
}
</script>

<style lang="css" scoped>
.roadmap{
    width:100%;
}
.roadmap_div{
    display:flex;
    align-items: center;    
    width:90%;
    height:32px;
    justify-content:space-between;
    position: relative;    
}
.roadmap_item{
    cursor: pointer;
    width:16px;
    height:16px;
}
.roadmap_item.active{
    width:32px;
    height:32px;
}
.roadmap_line{
    height:1px;
    width:100%;
    background-color:#C47BF1;
    position: absolute;
    left:0px;
    top:16px;    
}
.roadmap_date{    
    font-size: 16px;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 24px;
    cursor: pointer;
}
.roadmap_date.active{    
    font-size: 24px; 
    font-weight: 800;
    color: #C47BF1;
    line-height: 35px;
}

@media (max-width: 750px) {
    .roadmap_date{
        font-size:10px;
    }
    .roadmap_date.active{
        font-size:12px;
    }
}
</style>
