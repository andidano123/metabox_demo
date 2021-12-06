<template>    
    <div class="navbar">
        <div class="topbar">
            <img class="logo" src="../../assets/logo.png" alt="logo" />
            <div class="expand"></div>
            <div class="nav_item active" v-on:click="switchLanguage">
                <img src="../../assets/icon_world.png" alt="world" />
                {{LANG}}
            </div>
            
            <div class="nav_item active only_pc">                
                {{$t('nav.shouye')}}
            </div>
            <div class="nav_item only_pc" @click="coomSoon">{{$t('nav.duihuan')}}</div>
            <div class="nav_item only_pc" @click="coomSoon">{{$t('nav.wode')}}</div>

            <div class="nav_item only_pc" v-if="!isWalletConnected" v-on:click="conectarWalletEthereum">
                {{$t('nav.lianjieqianbao')}}
            </div>
            <div class="nav_item address only_pc" v-if="isWalletConnected" >
                {{displayEthAddress}}
            </div>
            <img class="mobile_menu only_mobile" @click="display = true"
            src="../../assets/icon_menu.png"/>
            
            
        </div>
        <drawer title="我是一个抽屉组件" 
            :display.sync="display" :inner="true" 
            :width="drawerWidth" :mask="true">
            <div class="drawer_nav_item active">{{$t('nav.shouye')}}</div>
            <div class="drawer_nav_item">{{$t('nav.duihuan')}}</div>
            <div class="drawer_nav_item">{{$t('nav.wode')}}</div>
            <div class="drawer_nav_item" v-if="!isWalletConnected" v-on:click="conectarWalletEthereum">
                {{$t('nav.lianjieqianbao')}}
            </div>
            <div class="drawer_nav_item address" v-if="isWalletConnected" >
                {{displayEthAddress}}
            </div>
        </drawer>
    </div>
</template>

<script>
var status = {
    display: false,
    drawerWidth: '60%',
    LANG: "CN",
};
import drawer from './drawer'

export default {
    components: { drawer},
    props: {
        // 是否打开
        isWalletConnected: {
            type: Boolean,
            default: false
        },      
        displayEthAddress: {
            type: String,
            default: 'No Connected'
        }
    },
    data: function () {
        return status;
    },
    computed: {
        maskClass: function () {
            return {
                'mask-show': (this.mask && this.display),
                'mask-hide': !(this.mask && this.display),
                'inner': this.inner
            }
        },
        mainClass: function () {
            return {
                'main-show': this.display,
                'main-hide': !this.display,
                'inner': this.inner
            }
        },
        mainStyle: function () {
            return {
                display: this.display ? 'block' : 'none',
                width: this.width,
                right: this.display ? '0' : `-${this.width}`,
                borderLeft: this.mask ? 'none' : '1px solid #eee'
            }
        }
    },
    mounted() {
        if (this.inner) {
            let box = this.$el.parentNode
            box.style.position = 'relative'
        }
    },
    methods: {        
        switchLanguage : function (){
            if(this.$i18n.locale=="chs")
            {
                this.$i18n.locale="en";
                this.LANG = "EN";
            }
            else{
                this.$i18n.locale="chs";            
                this.LANG = "CN";
            }                
            // this.$i18n.locale = this.lang;
        },        
        conectarWalletEthereum : function(){            
            this.$emit("conectarWalletEthereum");            
        },
        coomSoon: function(){
            this.$toast.center(this.$t('index.comesoon'));
        }
    }
}
</script>

<style lang="css" scoped>
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
.navbar{
    position: absolute !important;
    top: 0px;
    width:100%;
    height: 100%;
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
