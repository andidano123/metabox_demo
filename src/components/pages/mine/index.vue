<template>
<div>
    <div class="topsection">
        <div class="topbar">
            <img class="logo" src="../../../assets/logo.png" alt="logo" />
            <div class="expand"></div>
            <div class="nav_item active" v-on:click="switchLanguage">
                <img src="../../../assets/icon_world.png" alt="world" />
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
            src="../../../assets/icon_menu.png"/>
        </div>
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
        
};
export default {
    components: { Navbar },
    name: 'mine',
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
        },
        coomSoon: function(){
            this.$toast.center(this.$t('index.comesoon'));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="./index.css"/>