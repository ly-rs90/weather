/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/month_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'ten:header', height: 38,
                template: "<div style='color:#333;font-size:20px'>#title#&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#time#</span></div>",
                data: [{title: '金华气象月报', time: ''}]
            },
            {
                view: 'scrollview', scroll: 'y', css: 'bg',
                body: {
                    rows: [
                        {view: 'template', template: '具体要素预报', height: 32},
                        {
                            view: 'datatable', id: 'month:summary', css: 'table', scroll: false, yCount: 1,
                            columns: [
                                {id: 'rain_num', header: '月雨量', fillspace: 1},
                                {id: 'rain_days', header: '月雨日', fillspace: 1},
                                {id: 'avg_temp', header: '月平均气温度', fillspace: 1},
                                {id: 'max_temp', header: '月极端最高温度', fillspace: 1}
                            ],
                            data: []
                        },
                        {height: 5},
                        {view: 'template', template: '前期天气气候特点', height: 32},
                        {
                            view: 'template', id: 'month:t1', css: 'template-text', template: '#content#',
                            height: 200, data: [{content: ''}]
                        },
                        {height: 5},
                        {view: 'template', template: '气候概况', height: 32},
                        {
                            view: 'template', id: 'month:t2', css: 'template-text', template: '#content#',
                            height: 200, data: [{content: ''}]
                        },
                        {height: 5},
                        {view: 'template', template: '总趋势预测', height: 32},
                        {
                            view: 'template', id: 'month:t3', css: 'template-text', template: '#content#',
                            height: 200, data: [{content: ''}]
                        }
                    ]
                }
            }
        ]
    };
    var e = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'month');
            d.$getMonth().then(function (data) {
                var temp = data.json();
                if (temp.length === 3){
                    $$('ten:header').define('data', [temp[0]]);
                    $$('ten:header').refresh();

                    $$('month:t1').define('data', [{content: temp[1]['climate_point']}]);
                    $$('month:t1').refresh();

                    $$('month:t2').define('data', [{content: temp[1]['climate_summary']}]);
                    $$('month:t2').refresh();

                    $$('month:t3').define('data', [{content: temp[1]['trend']}]);
                    $$('month:t3').refresh();

                    $$('month:summary').add(temp[2]);
                    $$('month:summary').refresh();
                }
            });
        }
    };
});