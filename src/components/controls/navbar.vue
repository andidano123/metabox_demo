<template>
    <div class="navbar" >
        <div class="topbar" :style="mainStyle">
            <img class="logo" src="../../assets/logo.png" alt="logo" />
            <div class="expand"></div>
            <div class="nav_item active" v-on:click="changeLang($i18n)">
                <img src="../../assets/icon_world.png" alt="world" />
                {{LANG}}
            </div>
            
            <div class="nav_item only_pc" :class="{active:selected=='home'}" @click="gotoHome">{{$t('nav.shouye')}}</div>
            <div class="nav_item only_pc" :class="{active:selected=='swap'}" @click="coomSoon">{{$t('nav.duihuan')}}</div>
            <div class="nav_item only_pc" :class="{active:selected=='mine'}" @click="gotoMine">{{$t('nav.wode')}}</div>

            <div class="nav_item only_pc" v-if="!isWalletConnected" v-on:click="connectWallet">
                {{$t('nav.lianjieqianbao')}}
            </div>
            <div class="nav_item address only_pc" v-if="isWalletConnected" >
                {{displayEthAddress}}
            </div>
            <img class="mobile_menu only_mobile" @click="display = true"
            src="../../assets/icon_menu.png"/>
            
            
        </div>
        <drawer title="我是一个抽屉组件" 
            :display.sync="display" :inner="false" 
            :width="drawerWidth" :mask="true">
            <div class="drawer_nav_item" :class="{active:selected=='home'}" @click="gotoHome">{{$t('nav.shouye')}}</div>
            <div class="drawer_nav_item" :class="{active:selected=='swap'}" @click="coomSoon">{{$t('nav.duihuan')}}</div>
            <div class="drawer_nav_item" :class="{active:selected=='mine'}" @click="gotoMine">{{$t('nav.wode')}}</div>
            <div class="drawer_nav_item" v-if="!isWalletConnected" v-on:click="connectWallet">
                {{$t('nav.lianjieqianbao')}}
            </div>
            <div class="drawer_nav_item address" v-if="isWalletConnected" >
                {{displayEthAddress}}
            </div>
        </drawer>
    </div>
</template>

<script>
import drawer from './drawer'
import show_message from './notice.js'
import {
    mapGetters,
    mapActions
} from "vuex"
export default {
    components: { drawer},
    props: { 
        selected :{
            type: String,
            default: 'home'
        },
        showDialog :{
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            display: false,
            drawerWidth: '60%',            
        };
    },
    computed: {
        //这个是留给template 使用
       ...mapGetters([
            "LANG",
            "isWalletConnected",
            "displayEthAddress",
        ]),
        mainStyle: function () {            
            return {
                filter: this.showDialog?'blur(5px)':'blur(0px)'
            };
        }
    },
    created() {
        
    },
    mounted() {
        if (this.inner) {
            let box = this.$el.parentNode
            box.style.position = 'relative'
        }
    },
    methods: {    
        ...mapActions([
            "changeLang",
            "connectWallet",
        ]),    
        // conectarWalletEthereum : function(){            
        //     // this.$emit("conectarWalletEthereum");            
        // },
        coomSoon: function(){
            show_message(this, 0, this.$t('index.comesoon'));
        },
        gotoMine: function(){
            if(this.selected != "mine")
                this.$router.push("/mine");
        },
        gotoHome: function(){
            if(this.selected != "home")
                this.$router.push("/");
        }
    }
}
</script>

<style lang="css" scoped>
.navbar{
    position: absolute !important;
    top: 0px;
    width:100%;    
    z-index: 100;
}
.logo{
   height: 36px;
}

.nav_item{
    cursor: pointer;
    width:120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#ffffffaa;    
    font-size: 16px;
}
.nav_item.address{
    color:#c081e7;    
}
.nav_item img{
    width:24px;
    height:24px;
    margin-right:10px;
}
.nav_item.active{
    font-weight: 600;
    color:#ffffff;    
}

.topbar{
    height: 96px;
    display: flex;
    align-items: center;    
    padding:0px 80px;
}
@media (max-width: 750px) {
    .topbar{    
        padding:0 20px;
        box-sizing: border-box;        
    }
    .logo{
        height:24px;
    }    
    .mobile_menu{
        width:24px;
    }
    .drawer_nav_item{
        cursor: pointer;
        color:#ffffff88;
        font-size: 18px;
        width:100%;
        height:80px;        
        font-weight: 500;
        align-items: center;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .drawer_nav_item.address{        
        color:#c081e7;
    }
    .drawer_nav_item.active{
        color:#ffffff;
    }
}
</style>
