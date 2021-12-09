<template>
<div >    
   <navbar :selected="'mine'" />       
    <div class="main" :style="fitHeight">
        <div class="title2 top_title">{{$t('nav.wode')}}</div>
        <div class="connect_btn" v-if="!isWalletConnected" v-on:click="connectWallet">
            {{$t('nav.lianjieqianbao')}}
        </div>
        <div class="connect_btn" v-if="isWalletConnected"  v-on:click="coomSoon">
            {{ethAddress}}
        </div>
        <div class="empty_text">
            <p>{{$t('mine.empty_text1')}}</p>
            <p>{{$t('mine.empty_text2')}}</p>
        </div>
        <div class="openbox_btn">{{$t('mine.openbox')}}</div>
        <img class="empty_icon" src="../../../assets/icon_empty.png"/>
    </div>
</div>
</template>

<script>

import navbar from '../../controls/navbar'
import hoveritem from '../../controls/hoveritem'
import show_message from '../../controls/notice.js'
import {
    mapGetters,
    mapActions
} from "vuex"
export default {
    components: { navbar, hoveritem},
    name: 'mine',
    props: {
    },
    data: function () {
        return {
            screenHeight: (document.documentElement.clientHeight || document.body.clientHeight)
        };
    },
    mounted() {
        // const that = this
        // window.onresize = () => {
        //     return (() => {
        //         window.screenHeight = document.documentElement.clientHeight || document.body.clientHeight
        //         that.screenHeight = window.screenHeight
        //     })()
        // }
    },
    computed: {         
       ...mapGetters([            
            "isWalletConnected",
            "ethAddress",
        ]),
        fitHeight: function () {
            return {
                height: (document.documentElement.clientHeight || document.body.clientHeight) + "px",                                
            }
        }
    },
    methods: {
        ...mapActions([
            "connectWallet",
        ]),
        coomSoon: function(){
            show_message(this, 0, this.$t('index.comesoon'));
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./index.css"/>

