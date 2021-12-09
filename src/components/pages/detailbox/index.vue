<template>
<div style="position:relative">
    <navbar :selected="'detail'" :showDialog="showDialog" />
    <div class="main" :style="mainStyle">
        <div class="content">
            <!-- <backbtn :styleClass="'backbtn'" :width="40"/> -->
            <hoverbtn :styleClass="'backbtn'" :width="40" :imageUrlOn="'icon_back_on.png'" 
                :imageUrlNormal="'icon_back_normal.png'" :text="$t('common.back')" @onClick="onBack"/>
            
            <div class="title2 top_title">XXX系列盲盒:{{boxid}}</div>
            <div class="detail_content">
                <div class="detail_dashboard flex_center column">
                    <div class="dashboard1 flex_center column">
                        <div class="flex1">
                            <div class="desc1">4</div>
                            <div class="desc2">{{$t('detail.mint_count')}}</div>
                        </div>
                        <div class="line"></div>
                        <div class="flex2">
                            <div class="desc3">4</div>
                            <div class="desc4">{{$t('detail.total_count')}}</div>
                        </div>
                    </div>
                    <div class="dashboard2 flex_center">
                        <div class="price">200 ETH</div>
                        <div class="back"></div>
                    </div>
                    <div class="dashboard3 flex_center column">
                        <div class="desc1">{{$t('detail.contract')}}</div>
                        <div class="desc1">08c564…78ct</div>
                        <div class="flex row">
                            <mintbtn :text="$t('detail.mint')" :styleClass="'mint_btn'" @onClick="onClickMint"/>
                            <div class="mint_status flex flex_center column">
                                <div class="mint_status_top">
                                    <div class="mint_status_text text">不可使用</div>                                    
                                    <div class="text">需等待</div>
                                </div>
                                <div class="timer">20:12:32</div>
                            </div>
                        </div>                        
                        <div class="back"></div>
                    </div>
                </div>
                <img class="box_img" src="../../../assets/intro2.png">                
                
            </div>
        </div>        
    </div>
    <div class="dialog" v-if="showDialog">
        <div class="dialog_content flex row flex">
            <div class="flex column flex_center">
                <div class="dialog_title">{{$t('detail.success_buy_nft')}}</div>
                <div class="dialog_body">
                    <img class="dialog_pic" src="../../../assets/intro2.png"/>
                    <div class="nft_detail">
                        <div class="dialog_nftname">{{$t('detail.nftname')}}</div>
                        <div class="flex row">
                            <div class="dialog_label">{{$t('detail.box_series')}}</div>
                            <div class="dialog_label">XXX盲盒</div>
                        </div>
                        <div class="flex row rowspace1">
                            <div class="dialog_label">{{$t('detail.tokenid')}}</div>
                            <div class="dialog_label">1231</div>
                        </div>
                    </div>
                </div>
                <div class="next_btn">{{$t('detail.next')}}</div>
            </div>
            <div>
                <div class="dialog_space"></div>
                <hoverbtn :styleClass="'dialog_closebtn'" :width="32" :imageUrlOn="'icon_close1_on.png'" 
                :imageUrlNormal="'icon_close1_normal.png'" @onClick="onCloseDialog"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from '../../controls/navbar'
import backbtn from '../../controls/backbtn'
import hoverbtn from '../../controls/hoverbtn'
import mintbtn from '../../controls/mintbtn'
import show_message from '../../controls/notice.js'
import {
    mapGetters,
    mapActions
} from "vuex"
export default {
    components: {
        navbar,
        backbtn,
        mintbtn,
        hoverbtn
    },
    name: 'detailbox',
    props: {},
    data: function () {
        return {
            showDialog: false,
            // boxid: this.$route.params.boxid
            boxid: this.$route.query.boxid
        };
    },
    mounted() {},
    computed: {
        ...mapGetters([
            "isWalletConnected",
            "ethAddress",
        ]),
        mainStyle: function () {
            if(document.documentElement.clientWidth > 1000){
                return {
                    height: (document.documentElement.clientHeight || document.body.clientHeight) + "px",                                
                    filter: this.showDialog?'blur(5px)':'blur(0px)'
                }    
            }else{
                return {                    
                    filter: this.showDialog?'blur(5px)':'blur(0px)'
                }    
            }
        }
    },
    methods: {
        ...mapActions([
            "connectWallet",
        ]),
        coomSoon: function () {
            show_message(this, 0, this.$t('index.comesoon'));
        },
        onBack: function () {
            this.$router.go(-1);
        },
        onClickMint: function () {
            this.showDialog = true;
        },
        onCloseDialog: function () {
            this.showDialog = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./index.css"/>
