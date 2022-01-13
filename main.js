const speed = 15;
// buffer text in storage so don't have to read from the DOM every iteration
let log = $('#code').text();
i = 0;

$("body").append("<div class='blog-content'><article><h2 id='title'></h2><span class='meta'><ul id='menu'><a target=\"_blank\" href='#'></a><a target=\"_blank\" href='#'></a><a target=\"_blank\" href='#'></a></ul></span><div class='article-content'><div class='c' /><div class='c' /><div class='hr' /></div></article></div><pre id='code-box'></pre>");

// document.addEventListener("DOMContentLoaded", function() {
//     getBrowserPrefix();
//     tick();
// })

let tick = setInterval(function() {
    if(i >= log.length){
        clearInterval(tick);
        setTimeout(function(){
            $('#code-box').fadeOut("slow");
        }, 3000);
    }
    $("#style-box").append(log[i]);
    $("#code-box").append(log[i++]);
    $('#code-box').html($('#code-box').html().replace(/(\:(.*?)\ ;)/g, ':<em class="value">$2</em>;'));
    $('#code-box').html($('#code-box').html().replace(/(\/\*(.*?)\*\*\/)/g, '<em class="comment">/*$2*/</em>'));
    let o = document.getElementById("code-box");
    o.scrollTop = o.scrollHeight;

}, speed);

// browserPrefix = "";
// function getBrowserPrefix() {
//     try {browserPrefix = getPrefix();}
//     finally{
//     if (browserPrefix == null)
//         log = $('#code').text($('#code').text().replace(/-webkit-/g, browserPrefix));}
// }



