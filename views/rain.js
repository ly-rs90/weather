/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/rain_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template',
                template: "<div style='color:#333;font-size:20px'>金华市各地降水概率预报&nbsp;&nbsp;<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#t#</span></div>",
                autoheight: 1,
                data: [{t: '2017/5/19 9:26:12'}]
            },
            {
                view: 'datatable',
                css: 'table',
                yCount: 3,
                scroll: false,
                autoheight: 1,
                columns: [
                    {id: 1, header: '', adjust: 1},
                    {id: 2, header: '金华', fillspace: 1},
                    {id: 3, header: '浦江', fillspace: 1},
                    {id: 4, header: '兰溪', fillspace: 1},
                    {id: 5, header: '义乌', fillspace: 1},
                    {id: 6, header: '东阳', fillspace: 1},
                    {id: 7, header: '武义', fillspace: 1},
                    {id: 8, header: '永康', fillspace: 1}
                ],
                data: [
                    {1: '今天白天', 2: '90%', 3: '90%', 4: '100%', 5: '90%', 6: '90%', 7: '90%', 8: '90%'},
                    {1: '今天夜里', 2: '70%', 3: '80%', 4: '70%', 5: '70%', 6: '70%', 7: '80%', 8: '80%'},
                    {1: '24小时', 2: '97%', 3: '98%', 4: '100%', 5: '97%', 6: '97%', 7: '98%', 8: '98%'}
                ]
            },
            {view: 'template', template: '', css: 'chart', id: 'rain:chart'}
        ]
    };
    var e = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'rain');
            e = echarts.init($$('rain:chart').getNode());
            c.$drawChart(e, d.$option);
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
        }
    };
});