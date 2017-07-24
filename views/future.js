/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/future_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'future:header', height: 38,
                template: "<div style='color:#333;font-size:20px'>电业局专业预报&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#time#</span></div>",
                data: [{time: ''}]
            },
            {
                view: 'dataview', id: 'future:dataview', xCount: 3,
                type: {
                    height: 280,
                    width: 'auto',
                    template: function (obj) {
                        var h = "<div style='height: 60px'>" + obj.title + "</div>";
                        var p = '', img = '';
                        if (obj.type === 'weather'){
                            if (obj.value === '多云'){
                                p = "<div style='text-align: center'>" +
                                    "<img src='/static/images/cloud1.png' style='max-width: 72px; max-height: 72px'>" +
                                    "</div>";
                            }else if (obj.value === '小雨'){
                                p = "<div style='text-align: center'>" +
                                    "<img src='/static/images/rain1.png' style='max-width: 72px; max-height: 72px'>" +
                                    "</div>";
                            }else if (obj.value === '大雨'){
                                p = "<div style='text-align: center'>" +
                                    "<img src='/static/images/rain2.png' style='max-width: 72px; max-height: 72px'>" +
                                    "</div>";
                            }
                            else if (obj.value === '雷阵雨'){
                                p = "<div style='text-align: center'>" +
                                    "<img src='/static/images/rain3.png' style='max-width: 72px; max-height: 72px'>" +
                                    "</div>";
                            }
                            else {
                                p = "<div style='text-align: center'>" +
                                    "<img src='/static/images/sun3.png' style='max-width: 72px; max-height: 72px'>" +
                                    "</div>";
                            }
                            var w = "<div style='font-size: 50px;text-align: center;height:100px;line-height: 100px'>" + obj.detail +
                                "</div>";
                            return h + p + w;
                        }else if (obj.type === 'temperature-high'){
                            var temp = obj.value;
                            p = "<div style='height: 72px;text-align: center'><span class='webix_icon fa-thermometer' style='font-size: 72px;color: #cc4129'></span></div>";
                            var t = '';
                            if (parseFloat(temp) > 30){
                                t = "<div style='color: #cc4129;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                    "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                            }else{
                                t = "<div style='color: #44cc7a;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                    "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                            }
                            return h + p + t;
                        }else if (obj.type === 'temperature-low'){
                            var temp1 = obj.value;
                            p = "<div style='height: 72px;text-align: center'><span class='webix_icon fa-thermometer-1' style='font-size: 72px;color: #06cccb'></span></div>";
                            var t1 = '';
                            if (parseFloat(temp1) > 30){
                                t1 = "<div style='color: #cc4129;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                    "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                            }else{
                                t1 = "<div style='color: #44cc7a;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                    "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                            }
                            return h + p + t1;
                        }else if (obj.type === 'temperature-avg'){
                            var temp2 = obj.value;
                            p = "<div style='height: 72px;text-align: center'><span class='webix_icon fa-thermometer-3' style='font-size: 72px;color: #1c7ecc'></span></div>";
                            var t2 = '';
                            if (parseFloat(temp2) > 30){
                                t2 = "<div style='color: #cc4129;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                    "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                            }else{
                                t2 = "<div style='color: #44cc7a;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                    "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                            }
                            return h + p + t2;
                        }else{
                            p = "<div style='height: 72px;text-align: center'><span class='webix_icon fa-tint' style='font-size: 72px;color: #00b4cc'></span></div>";
                            var d = "<div style='color: #277fcc;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.value +
                                "</div>";
                            return h + p + d;
                        }
                    }
                },
                data: []
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'future');
            d.$getFuture().then(function (data) {
                var temp = data.json();
                if (temp.length === 8){
                    $$('future:header').define('data', [temp[0]]);
                    $$('future:header').refresh();
                    for (var i = 1; i < 8; i++){
                        $$('future:dataview').add(temp[i]);
                    }
                    $$('future:dataview').refresh();
                }
            });
        }
    };
});