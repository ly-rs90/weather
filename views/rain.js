/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/rain_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'rain:label-header', height: 38,
                template: "<div style='color:#333;font-size:20px'>金华市各地降水概率预报&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#t#</span></div>",
                data: [{t: ''}]
            },
            {
                view: 'datatable',
                css: 'table',
                id: 'rain:table',
                yCount: 3,
                scroll: false,
                select: 'column',
                hover: 'none',
                columns: [
                    {id: 'time', header: '', adjust: 1},
                    {id: 'jinhua', header: '金华', fillspace: 1},
                    {id: 'yiwu', header: '义乌', fillspace: 1},
                    {id: 'dongyang', header: '东阳', fillspace: 1},
                    {id: 'yongkang', header: '永康', fillspace: 1},
                    {id: 'lanxi', header: '兰溪', fillspace: 1},
                    {id: 'wuyi', header: '武义', fillspace: 1},
                    {id: 'pujiang', header: '浦江', fillspace: 1}
                ],
                data: [],
                on: {
                    'onMouseMoving': function (ev) {
                        var role = ev.target.getAttribute('role');
                        if (role !== 'gridcell'){
                            return;
                        }
                        var col = parseInt(ev.target.getAttribute('aria-colindex'));
                        if (col < 2){
                            return;
                        }
                        var m = {
                            0: 'jinhua', 1: 'yiwu', 2: 'dongyang', 3: 'yongkang',
                            4: 'lanxi', 5: 'wuyi', 6: 'pujiang'
                        };
                        this.select(m[col-2]);
                        e.dispatchAction({
                            type: 'showTip',
                            dataIndex: col - 2,
                            seriesIndex: 0
                        });
                    },
                    'onMouseOut': function () {
                        this.unselectAll();
                    }
                }
            },
            {view: 'template', template: '', id: 'rain:chart'}
        ]
    };
    var e = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            var dataForDraw = [];
            e = echarts.init($$('rain:chart').getNode());
            c.$drawChart(e, d.$option);
            d.$getRain().then(function (data) {
                data.json().forEach(function (item) {
                    if (item.hasOwnProperty('pujiang')){
                        $$('rain:table').add(item);
                        dataForDraw.push([(parseFloat(item['jinhua'].split('%')[0])/100),
                            (parseFloat(item['yiwu'].split('%')[0])/100),
                            (parseFloat(item['dongyang'].split('%')[0])/100),
                            (parseFloat(item['yongkang'].split('%')[0])/100),
                            (parseFloat(item['lanxi'].split('%')[0])/100),
                            (parseFloat(item['wuyi'].split('%')[0])/100),
                            (parseFloat(item['pujiang'].split('%')[0])/100)]);
                    }else{
                        $$('rain:label-header').define('data', {t: item['time']});
                        $$('rain:label-header').refresh();
                    }
                });
                $$('rain:table').refresh();
                c.$drawChart(e, {series: [{data: dataForDraw[0]},
                    {data: dataForDraw[1]},{data: dataForDraw[2]}]});
            });
            c.$selectItem('weather:list', 'rain');
            // e.on('mouseover', function (e) {
            //     var m = {
            //         0: 'jinhua', 1: 'yiwu', 2: 'dongyang', 3: 'yongkang',
            //         4: 'lanxi', 5: 'wuyi', 6: 'pujiang'
            //     };
            //     var index = e.dataIndex;
            //     $$('rain:table').select(m[index]);
            // });
            window.onresize = function () {
                e.resize();
            };
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
            window.onresize = null;
        }
    };
});