/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/ten_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'datatable',
                scroll: 'y',
                id: 'ten:t',
                select: 'row',
                css: 'table',
                yCount: 7,
                columns: [
                    {id: 1, header: '日期', adjust: 1},
                    {id: 2, header: '日平均温度(℃)', fillspace: 1},
                    {id: 3, header: '日最高温度(℃)', fillspace: 1},
                    {id: 4, header: '日最低温度(℃)', fillspace: 1},
                    {id: 5, header: '降水量(mm)', fillspace: 1},
                    {id: 6, header: '风力', fillspace: 1},
                    {id: 7, header: '风向', fillspace: 1}
                ],
                data: d.$data
            },
            {
                css: 'white-bg month-toolbar',
                cols: [
                    {
                        view: 'button', label: '平均温度', width: 80, id: 'ten:btn1',
                        click: function () {
                            webix.html.removeCss($$('ten:btn1').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn2').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn3').getNode(), 'btn-selected');
                            webix.html.addCss(this.getNode(), 'btn-selected');
                            c.$drawChart(e, d.$option1);
                            var data = [];
                            d.$data.forEach(function (item) {
                                data.push([new Date(item[1]).getTime(), item[2]]);
                            });
                            c.$drawChart(e, {series: [{data: data}]});
                        }
                    },
                    {
                        view: 'button', label: '最高温度', width: 80, id: 'ten:btn2',
                        click: function () {
                            webix.html.removeCss($$('ten:btn1').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn2').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn3').getNode(), 'btn-selected');
                            webix.html.addCss(this.getNode(), 'btn-selected');
                            c.$drawChart(e, d.$option2);
                            var data = [];
                            d.$data.forEach(function (item) {
                                data.push([new Date(item[1]).getTime(), item[3]]);
                            });
                            c.$drawChart(e, { series: [{data: data}]});
                        }
                    },
                    {
                        view: 'button', label: '最低温度', width: 80, id: 'ten:btn3',
                        click: function () {
                            webix.html.removeCss($$('ten:btn1').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn2').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn3').getNode(), 'btn-selected');
                            webix.html.addCss(this.getNode(), 'btn-selected');
                            c.$drawChart(e, d.$option3);
                            var data = [];
                            d.$data.forEach(function (item) {
                                data.push([new Date(item[1]).getTime(), item[4]]);
                            });
                            c.$drawChart(e, {series: [{data: data}]});
                        }
                    },
                    {
                        view: 'button', label: '降水量', width: 80, id: 'ten:btn4',
                        click: function () {
                            webix.html.removeCss($$('ten:btn1').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn2').getNode(), 'btn-selected');
                            webix.html.removeCss($$('ten:btn3').getNode(), 'btn-selected');
                            webix.html.addCss(this.getNode(), 'btn-selected');
                            c.$drawChart(e, d.$option4);
                            var data = [];
                            d.$data.forEach(function (item) {
                                data.push([new Date(item[1]).getTime(), item[5]]);
                            });
                            c.$drawChart(e, {series: [{data: data}]});
                        }
                    },
                    {}
                ]
            },
            {
                view: 'template',
                css: 'chart ten-chart',
                id: 'ten:chart'
            }
        ]
    };
    var e = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            webix.html.removeCss($$('ten:btn2').getNode(), 'btn-selected');
            webix.html.removeCss($$('ten:btn3').getNode(), 'btn-selected');
            webix.html.removeCss($$('ten:btn4').getNode(), 'btn-selected');
            webix.html.addCss($$('ten:btn1').getNode(), 'btn-selected');
            e = echarts.init($$('ten:chart').getNode());
            c.$drawChart(e, d.$option1);
            var data = [];
            d.$data.forEach(function (item) {
                data.push([new Date(item[1]).getTime(), item[2]]);
            });
            c.$drawChart(e, {series: [{data: data}]});

            $$('ten:t').attachEvent('onBlur', function (v) {
                this.unselectAll();
            });
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
        }
    };
});