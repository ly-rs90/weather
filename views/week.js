/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/week_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', height: 38, id: 'week:t1',
                template: "<div style='color:#333;font-size:20px'>一周天气趋势预报&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#time#</span></div>",
                data: [{time: ''}]
            },
            {
                view: 'template', height: 32, template: '#content#', css: 'template-text', id: 'week:t2',
                data: [{content: '预计未来七天前期副高边缘，多午后雷阵雨，后期副高加强控制，晴热天气。'}]},
            {height: 5},
            {view: 'template', height: 32, template: '具体分日预报'},
            {
                view: 'dataview', id: 'week:dataview', xCount: 3,
                type: {
                    height: 360,
                    width: 'auto',
                    template: function (obj) {
                        var h = "<div>" + obj.time + "</div>";
                        var p = '', img = '';
                        if (obj.w === '多云'){
                            p = "<div style='text-align: center'>" +
                                "<img src='/static/images/cloud1.png' style='max-width: 72px; max-height: 72px'>" +
                            "</div>";
                        }else if (obj.w === '小雨'){
                            p = "<div style='text-align: center'>" +
                                "<img src='/static/images/rain1.png' style='max-width: 72px; max-height: 72px'>" +
                            "</div>";
                        }else if (obj.w === '大雨'){
                            p = "<div style='text-align: center'>" +
                                "<img src='/static/images/rain2.png' style='max-width: 72px; max-height: 72px'>" +
                            "</div>";
                        }
                        else if (obj.w === '雷雨'){
                            p = "<div style='text-align: center'>" +
                                "<img src='/static/images/rain3.png' style='max-width: 72px; max-height: 72px'>" +
                            "</div>";
                        }
                        else {
                            p = "<div style='text-align: center'>" +
                                "<img src='/static/images/sun3.png' style='max-width: 72px; max-height: 72px'>" +
                            "</div>";
                        }
                        var t = '';
                        var temp = obj.temp.split('~')[1];
                        if (parseInt(temp) > 30){
                            t = "<div style='color: #cc4129;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.temp +
                                "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                        }else{
                            t = "<div style='color: #44cc7a;font-size: 60px;text-align: center;height:100px;line-height: 100px'>" + obj.temp +
                                "<sup style='font-size: 20px;color: #666'>℃</sup></div>";
                        }
                        var w1 = "<div style='font-size: 20px;text-align: center'>" + obj.detail + "</div>";
                        var c = "<div style='font-size: 20px;text-align: center'>" + obj.wind + "</div>";
                        return h + p + t + w1 + c;
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
            c.$selectItem('weather:list', 'week');
            d.$getWeek().then(function (data) {
               var temp = data.json();
               if (temp.length !== 9){
                   webix.alert('读取数据文件出错，请检查数据文件格式是否正确。');
               }else{
                   $$('week:t1').define('data', [temp[0]]);
                   $$('week:t1').refresh();
                   $$('week:t2').define('data', [{content: temp[1]['week_trend']}]);
                   $$('week:t2').refresh();

                   for (var i = 2; i < 9; i++){
                       $$('week:dataview').add(temp[i]);
                   }
                   $$('week:dataview').refresh();
               }
            });
        }
    };
});