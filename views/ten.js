/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/ten_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'ten:header', height: 38,
                template: "<div style='color:#333;font-size:20px'>#title#&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#time#</span></div>",
                data: [{title: '金华气象旬报', time: ''}]
            },
            {view: 'template', template: '要素预报', height: 32},
            {
                view: 'datatable', id: 'ten:table', css: 'table', scroll: false, yCount: 1,
                columns: [
                    {id: 'avg_temp', header: '旬平均气温', fillspace: 1},
                    {id: 'max_temp', header: '旬极端最高温度', fillspace: 1},
                    {id: 'rain_num', header: '旬雨量', fillspace: 1},
                    {id: 'rain_days', header: '旬雨日', fillspace: 1}
                ],
                data: []

            },
            {height: 5},
            {view: 'template', template: '天气概况', height: 32},
            {
                view: 'template', id: 'ten:summary', template: '#content#', css: 'template-text',
                data: [{content: ''}]
            },
            {height: 5},
            {view: 'template', template: '天气趋势', height: 32},
            {
                view: 'template', id: 'ten:trend', template: '#content#', css: 'template-text',
                data: [{content: ''}]
            }
        ]
    };

    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'ten');
            d.$getTen().then(function (data) {
               var temp = data.json();
               if (temp.length > 0){
                   $$('ten:header').define('data', temp[0]);
                   $$('ten:header').refresh();
               }
               if (temp.length > 1){
                   $$('ten:summary').define('data', [{content: temp[1]['summary']}]);
                   $$('ten:trend').define('data', [{content: temp[1]['trend']}]);
                   $$('ten:summary').refresh();
                   $$('ten:trend').refresh();
               }
               if (temp.length > 2){
                   $$('ten:table').add(temp[2]);
                   $$('ten:table').refresh();
               }
            });
        }
    };
});
