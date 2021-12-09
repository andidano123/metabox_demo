export default function show_message (self, type, text) {
    /* 
        type
        0: notice
        1: success
        2: error
    */

    var background = "";
    var icon = "";    
    var progress = "";
    var color = "";
    if(type == 0){
        background = "linear-gradient(180deg, #6573A6 0%, #6C5993 100%);";        
        progress = "progress1";
        color = "color1";
    }else if(type == 1){
        background = "#326263;";
        icon = '<img class="notice_icon" src="static/icon_yes.png"/>';
        progress = "progress2";
        color = "color2";
    }else if(type == 2){
        background = "#713E57;";
        icon = '<img class="notice_icon" src="static/icon_no.png"/>';
        progress = "progress3";
        color = "color3";
    }
    var variable = '' + 
        '<div class="notice_body" style="background: '+ background +'">' + 
        '    <img class="notice_close_btn" src="static/icon_close.png"/>' + 
        '    <div class="notice_text">' + icon + text + '</div>' + 
        '    <div class="progress">' + 
        '        <div class="color '+color+'"></div>' + 
        '    </div>   ' + 
        '</div>' + 
        '';
    
    self.flashMessage.show({
        html: variable,
        clickable: true,
        time: 4000,
        blockClass: 'notice_dialog',        
    });
}
