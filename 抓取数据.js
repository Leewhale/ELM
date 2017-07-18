var script = document.createElement("script");
script.src = "https://cdn.bootcss.com/jquery/3.2.1/jquery.js";
document.head.appendChild(script).parentNode.removeChild(script);
var ele = $('.TabPage-1ti2W');
var proList = JSON.stringify(ele.map(function(i, item) {
    return {
        imgSrc: $(item).find('.DiscountFood-1fccq').find('img').attr('src'),
        zhekou: $(item).find('.DiscountFood-6EHuk').text(),
        DiscountFood3teNW: $(item).find('.DiscountFood-3teNW').find('h4').text(),
        DiscountFood30HRb: $(item).find('.DiscountFood-30HRb').text(),
        zheKouPrice: $(item).find('.Price-3D7qf').find('span').text(),
        oldPrice: $(item).find('.Price-q6Hq_').find('span').text()
    }
}));