<template>
	<div class="notice_body" style="background: linear-gradient(180deg, #6573A6 0%, #6C5993 100%);">
        <img class="notice_close_btn" src="static/icon_close.png"/>
        <div class="notice_text">普通反馈通知标题</div>        
        <div class="progress">
            <div class="color"></div>
        </div>   
	</div>
</template>

<script>
	export default {
        name: "message",
		props: {
			messageId: {
				type: Number,
				required: true
			},
            title: {
                type: String,
                default: "sinboss"
            }
		},
        data: function (){
            return {
                mymessage: 'aaaa'+this.messageId
            }
        },
        mounted: function () {
            this.$Progress.start();
        }
	}
</script>

<style scoped>
.notice_body{
    position: relative;    
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
    padding:10px;
}
.notice_close_btn{
    position: absolute;
    right:10px;
    top:10px;
    width:24px;
}
.notice_text{
    width: 136px;
    height: 22px;
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;    
}
</style>