<template>
<div >    
    <navbar :isWalletConnected="isWalletConnected"  
        @conectarWalletEthereum="conectarWalletEthereum" :displayEthAddress="displayEthAddress"/>    
    <div class="topsection">        
        <div class="flex" >
            <div class="expand only_pc"></div>
            <div class="top_button_div">
                <div class="welcome_text">{{$t('index.slogan')}}</div>
                <div class="flex_center" style="margin-top:35px;">
                    <div class="top_button flex_center" style="margin-right:30px">{{$t('index.about_more')}}</div>
                    <div class="top_button flex_center">{{$t('index.white_paper')}}</div>
                </div>
            </div>   
        </div>
    </div>
    <div class="second_section flex">     
        <div class="second_head_pic_div">
            <img class="second_head_pic" src="../../../assets/woman.png"/>
        </div>                 
        <div class="second_content">
            <img class="second_head_pic only_mobile" src="../../../assets/woman.png">
            <div class="second_text1">{{$t('index.about_us')}}</div>
            <div class="second_text2">{{$t('index.ad1')}}</div>
            <div class="second_text2">{{$t('index.ad2')}}</div>
            <div class="second_text3">
                {{$t('index.ad3')}}
            </div>
            <div class="roadmap_div" style="margin-top:90px;">
                <div class="roadmap_date">2021/11</div>
                <div class="roadmap_date_active">2021/12</div>
                <div class="roadmap_date">2022/01</div>
                <div class="roadmap_date">2022/05</div>
                <div class="roadmap_date">2022/10</div>
                <div class="roadmap_date">2022/12</div>
            </div>
            <div class="roadmap_div">
                <img class="roadmap_item" src="../../../assets/circle1.png"/>
                <img class="roadmap_item_active" src="../../../assets/circle2.png"/>
                <img class="roadmap_item" src="../../../assets/circle1.png"/>
                <img class="roadmap_item" src="../../../assets/circle1.png"/>
                <img class="roadmap_item" src="../../../assets/circle1.png"/>
                <img class="roadmap_item" src="../../../assets/circle1.png"/>
                <div class="roadmap_line"></div>
            </div>
            <div class="second_text4">{{$t('index.plan_step')}}</div>
            <div class="second_text5">{{$t('index.plan_content')}}</div>
        </div>        
    </div>
    <div class="intro_section" >
        <div class="intro_text1">{{$t('index.intro')}}</div>
        <div class="intro_pic_div">            
            <div class="intro_item">
                <img style="visibility: hidden; width:100%; height:100%;" src="../../../assets/intro2.png"/>
                <div class="intro_item_rect1"></div>
                <div class="intro_item_rect2">
                    <div class="intro_first_text1">rewards</div>
                    <div class="intro_first_text2">内容说明，内容说明内容说明内容说明，内容说明内容说明，内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明，内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明，内容说明内容说明内容说明内容说明内容说明内容说明内容说明</div>
                </div>
            </div>
            <div class="intro_item">
                <img class="intro_item_pic" src="../../../assets/intro2.png"/>
                <div class="intro_item_title">Artist</div>
            </div>                        
            <div class="intro_item">
                <img class="intro_item_pic" src="../../../assets/intro3.png"/>
                <div class="intro_item_title">Box</div>
            </div>                        
        </div>
        <div class="intro_company">
            <img src="../../../assets/company.png"/>
        </div>             
    </div>
    <div class="copyright" >
        <div class="about">
            <div class="title1">{{$t('index.about')}}</div>
            <div class="about_list">
                <div class="text1">{{$t('index.team')}}</div>
                <div class="text1">{{$t('index.cooperation')}}</div>
                <div class="text1">{{$t('index.society')}}</div>
                <div class="text1">{{$t('index.contact_us')}}</div>
                <div class="text1">{{$t('index.guide')}}</div>
                <div class="text1">{{$t('index.protocol')}}</div>
            </div>
        </div>
        <div class="about">
            <div class="title1" >{{$t('index.start')}}</div>
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
import { connectToEthereum } from "../../../utils/helpers.js";

var status = {    
    LANG: "CN",
    isEthereumEnabled : (window.ethereum != undefined),
    isWalletConnected: false,
    ethAddress: "None",
    displayEthAddress: "No conectado",
    web3: null,
};
export default {
    components: { navbar },
    name: 'home',
    props: {
        msg: String,
        eth_addr: String
    },
    data: function () {
        return status;
    },
    mounted() {
    },
    methods: {        
        conectarWalletEthereum: async function () {            
            this.isWalletConnected = false;
           
            console.log("conectarWalletEthereum")
            if (this.isEthereumEnabled) {
                var new_status = await connectToEthereum()
                for (const [k, v] of Object.entries(new_status)) {
                    status[k] = v
                }
                this.web3 = window.web3;
                // contracts = await setupDapp(status.dapp.token_address, this.dapp.faucet_address) // ToDO error check
                // await this.getSaldoTokens()
                this.balance = await this.web3.eth.getBalance(this.ethAddress).then(x => {
                    return x
                })
                
                if (this.balance == "0") {                    
                    this.isWalletConnected == true
                    return false;
                } else {                
                    return true;
                }
            }
            return false;
        },
        coomSoon: function(){
            this.$toast.center(this.$t('index.comesoon'));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="./index.css"/>