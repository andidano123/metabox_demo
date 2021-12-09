<template>
<div>
    <navbar :selected="'home'"/>
    <div class="topsection">
        <img class="top_hidden_back" :style="fitHeight" src="../../../assets/top_back.png" />
        <div class="flex top_content">
            <div class="expand only_pc"></div>
            <div class="top_button_div">
                <div class="welcome_text">{{$t('index.slogan')}}</div>
                <div class="flex_center" style="margin-top:35px;">
                    <div class="top_button flex_center" style="margin-right:30px" @click="coomSoon">{{$t('index.about_more')}}</div>
                    <div class="top_button flex_center" @click="coomSoon">{{$t('index.white_paper')}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="second_section flex">
        <div class="second_head_pic_div">
            <img class="second_head_pic" src="../../../assets/woman.png" />
        </div>
        <div class="second_content">
            <img class="second_head_pic only_mobile" src="../../../assets/woman.png">
            <div class="second_text1">{{$t('index.about_us')}}</div>
            <div class="second_text2">{{$t('index.ad1')}}</div>
            <div class="second_text2">{{$t('index.ad2')}}</div>
            <div class="second_text3">
                {{$t('index.ad3')}}
            </div>
            <roadmap :init_select="current_roadmap" @select_date="select_date" />
            <div class="second_text4">{{$t('index.plan_step')}}</div>
            <div class="second_text5" v-if="current_roadmap==1">{{$t('index.plan_content1')}}</div>
            <div class="second_text5" v-if="current_roadmap==2">{{$t('index.plan_content2')}}</div>
            <div class="second_text5" v-if="current_roadmap==3">{{$t('index.plan_content3')}}</div>
            <div class="second_text5" v-if="current_roadmap==4">{{$t('index.plan_content4')}}</div>
            <div class="second_text5" v-if="current_roadmap==5">{{$t('index.plan_content5')}}</div>
            <div class="second_text5" v-if="current_roadmap==6">{{$t('index.plan_content6')}}</div>
        </div>
    </div>
    <div class="intro_section">
        <div class="intro_text1">{{$t('index.blindbox')}}</div>
        <div class="intro_pic_div">
            <!-- <div class="intro_item">
                <img style="visibility: hidden; width:100%; height:100%;" src="../../../assets/intro2.png"/>
                <div class="intro_item_rect1"></div>
                <div class="intro_item_rect2">
                    <div class="intro_first_text1">rewards</div>
                    <div class="intro_first_text2">内容说明，内容说明内容说明内容说明，内容说明内容说明，内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明，内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明</div>
                </div>
            </div> -->
            <hoveritem id="item1" :imageUrl="'intro2.png'" :title="'Artist'" :styleclass="'intro_item'" @clickItem="clickItem(1)"/>
            <hoveritem id="item2" :imageUrl="'intro3.png'" :title="'Box'" :styleclass="'intro_item'" @clickItem="clickItem(2)"/>
            <hoveritem id="item3" :imageUrl="'intro2.png'" :title="'Artist'" :styleclass="'intro_item'" @clickItem="clickItem(3)"/>
        </div>
        <div class="intro_company">
            <img src="../../../assets/company.png" />
        </div>
    </div>
    <div class="copyright">
        <div class="about">
            <div class="title1">{{$t('index.contact_us')}}</div>
            <div class="contact_list">
                <img src="../../../assets/twitter.svg" />
                <img src="../../../assets/telegram.svg" />
                <img src="../../../assets/discord.svg" />
            </div>
        </div>
        <div class="about" style="display:none">
            <div class="title1">{{$t('index.start')}}</div>
            <div class="about_list">
                <div class="text1">{{$t('index.head_box')}}</div>
                <div class="text1">{{$t('index.art_box')}}</div>
            </div>
        </div>
        <div class="copyright_text">Copyright Ⓒ 2021 the Meta Box</div>
    </div>
    
</div>
</template>

<script>
import navbar from '../../controls/navbar'
import roadmap from '../../controls/roadmap'
import hoveritem from '../../controls/hoveritem'
import show_message from '../../controls/notice.js'

import {
    mapGetters,
    mapActions
} from "vuex"

export default {
    components: {
        navbar,
        roadmap,
        hoveritem
    },
    name: 'home',
    props: {
        msg: String,
        eth_addr: String
    },
    data: function () {
        return {
            current_roadmap: 2
        };
    },
    mounted() {
        this.flashMessage.setStrategy('multiple');
    },
    created() {      
        console.log(this.$store.state.home.homeList);
    },
    computed: {
        ...mapGetters([
            "homeList",
            "num",           
            "LANG",
            "isWalletConnected",
            "displayEthAddress",        
        ]),
        fitHeight: function () {
            return {
                height: (document.documentElement.clientHeight || document.body.clientHeight) + "px",                                
            }    
        }
    },
    methods: {
        ...mapActions([
            "homeLists",
            "change",
        ]),
        coomSoon: function () {
            show_message(this, 0, this.$t('index.comesoon'));
        },
        select_date: function(idx) {
            console.log(idx);
            this.current_roadmap = idx;
        },
        test: function(){
            this.$store.dispatch('homeLists', "kkg");
        },
        clickItem: function(idx){
            // this.$router.push({name:"detailbox", params:{boxid:idx}});
            this.$router.push({path:"/detailbox", query:{boxid:idx}});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./index.css"/>
