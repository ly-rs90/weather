/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/live_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                cols: [
                    {
                        gravity: 1.5,
                        rows: [
                            {
                                template: "<div>#t#</div>", css: 'forecast-t',
                                data: [{t: '5月19日 星期五'}], autoheight: 1
                            },
                            {
                                template: function (obj) {
                                    var v = obj.v;
                                    if (v <= 50){
                                        return "<div>实时空气质量：<span style='background: #1ecc13;color:#fff'>"+v+"&nbsp;优</span></div>";
                                    }else if (v > 50 && v <= 100){
                                        return "<div>实时空气质量：<span style='background: #77cc03;color:#fff'>"+v+"&nbsp;良好</span></div>";
                                    }else if (v > 100 && v <= 200){
                                        return "<div>实时空气质量：<span style='background: #e1c803;color:#fff'>"+v+"&nbsp;轻度污染</span></div>";
                                    }else{
                                        return "<div>实时空气质量：<span style='background: #cc290b;color:#fff'>"+v+"&nbsp;重度污染</span></div>";
                                    }
                                },
                                css: 'forecast-t',
                                data: [{v: 202}], autoheight: 1
                            },
                            {
                                css: 'forecast-t',
                                height: 80,
                                template: "<div style='text-align: center'><img src='#pic#' style='max-height: 72px;max-width: 72px'></div>",
                                data: [{pic: '/static/images/sun3.png'}]
                            },
                            {
                                template: "<div style='height: 60px'>" +
                                "<div style='width:50%;float:left;font-size:45px;text-align:right;color:#0080dc'>#v#</div>" +
                                "<div style='width:50%;float:left'>" +
                                "<div style='font-size:16px;margin-top:8px'>℃</div>" +
                                "<div style='font-size:14px'>#v1#</div>" +
                                "</div>" +
                                "</div>",
                                css: 'forecast-t',
                                autoheight: 1,
                                data: [{v: 28, v1: '晴(实时)'}]
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '20~31℃'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '晴转阵雨'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '南风微风'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {view: 'template', template: '', css: 'template-bottom', autoheight: 1}
                        ]
                    },
                    {
                        rows: [
                            {
                                template: "<div style='text-align: center'>" +
                                "<div>#v1#</div>" +
                                "<div style='color: #999'>#v2#</div>" +
                                "</div>",
                                css: 'forecast-t',
                                data: [{v1: '周六', v2: '5月20日'}],
                                autoheight: 1
                            },
                            {view: 'template', template: '', css: 'forecast-t', height: 38},
                            {
                                css: 'forecast-t',
                                height: 80,
                                template: "<div style='text-align: center'><img src='#pic#' style='max-height: 72px;max-width: 72px'></div>",
                                data: [{pic: '/static/images/cloud1.png'}]
                            },
                            {view: 'template', template: '', css: 'forecast-t'},
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '20~28℃'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '多云转小雨'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '南风微风'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {view: 'template', template: '', css: 'template-bottom', autoheight: 1}
                        ]
                    },
                    {
                        rows: [
                            {
                                template: "<div style='text-align: center'>" +
                                "<div>#v1#</div>" +
                                "<div style='color: #999'>#v2#</div>" +
                                "</div>",
                                css: 'forecast-t',
                                data: [{v1: '周日', v2: '5月21日'}],
                                autoheight: 1
                            },
                            {view: 'template', template: '', css: 'forecast-t', height: 38},
                            {
                                css: 'forecast-t',
                                height: 80,
                                template: "<div style='text-align: center'><img src='#pic#' style='max-height: 72px;max-width: 72px'></div>",
                                data: [{pic: '/static/images/rain1.png'}]
                            },
                            {view: 'template', template: '', css: 'forecast-t'},
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '19~23℃'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '小雨'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '北风微风'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {view: 'template', template: '', css: 'template-bottom', autoheight: 1}
                        ]
                    },
                    {
                        rows: [
                            {
                                template: "<div style='text-align: center'>" +
                                    "<div>#v1#</div>" +
                                    "<div style='color: #999'>#v2#</div>" +
                                "</div>",
                                css: 'forecast-t',
                                data: [{v1: '周一', v2: '5月22日'}],
                                autoheight: 1
                            },
                            {view: 'template', template: '', css: 'forecast-t', height: 38},
                            {
                                css: 'forecast-t',
                                height: 80,
                                template: "<div style='text-align: center'><img src='#pic#' style='max-height: 72px;max-width: 72px'></div>",
                                data: [{pic: '/static/images/rain1.png'}]
                            },
                            {view: 'template', template: '', css: 'forecast-t'},
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '18~28℃'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '小雨'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '微风'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {view: 'template', template: '', css: 'template-bottom', autoheight: 1}
                        ]
                    },
                    {
                        rows: [
                            {
                                template: "<div style='text-align: center'>" +
                                    "<div>#v1#</div>" +
                                    "<div style='color: #999'>#v2#</div>" +
                                "</div>",
                                css: 'forecast-t',
                                data: [{v1: '周二', v2: '5月23日'}],
                                autoheight: 1
                            },
                            {view: 'template', template: '', css: 'forecast-t', height: 38},
                            {
                                css: 'forecast-t',
                                height: 80,
                                template: "<div style='text-align: center'><img src='#pic#' style='max-height: 72px;max-width: 72px'></div>",
                                data: [{pic: '/static/images/rain1.png'}]
                            },
                            {view: 'template', template: '', css: 'forecast-t'},
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '19~27℃'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '小雨转多云'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {
                                template: "<div style='text-align: center'>#v#</div>",
                                data: [{v: '微风'}],
                                autoheight: 1,
                                css: 'forecast-t'
                            },
                            {view: 'template', template: '', css: 'template-bottom', autoheight: 1}
                        ]
                    }
                ]
            },
            {
                rows: [
                    {
                        css: 'white-bg live-toolbar',
                        cols: [
                            {
                                view: 'button', label: '24小时温度', width: 100, id: 'live:btn1',
                                click: function () {
                                    webix.html.removeCss($$('live:btn2').getNode(), 'btn-selected');
                                    webix.html.removeCss($$('live:btn3').getNode(), 'btn-selected');
                                    webix.html.addCss(this.getNode(), 'btn-selected');
                                    c.$drawChart(e, d.$option1);
                                }
                            },
                            {
                                view: 'button', label: '风力', width: 100, id: 'live:btn2',
                                click: function () {
                                    webix.html.removeCss($$('live:btn1').getNode(), 'btn-selected');
                                    webix.html.removeCss($$('live:btn3').getNode(), 'btn-selected');
                                    webix.html.addCss(this.getNode(), 'btn-selected');
                                    c.$drawChart(e, d.$option2);
                                }
                            },
                            {
                                view: 'button', label: '降水量', width: 100, id: 'live:btn3',
                                click: function () {
                                    webix.html.removeCss($$('live:btn1').getNode(), 'btn-selected');
                                    webix.html.removeCss($$('live:btn2').getNode(), 'btn-selected');
                                    webix.html.addCss(this.getNode(), 'btn-selected');
                                    c.$drawChart(e, d.$option3);
                                }
                            },
                            {}
                        ]
                    },
                    {
                        view: 'template',
                        id: 'live:chart',
                        css: 'chart forecast-t',
                        template: ''
                    }
                ]
            }
        ]
    };
    var e = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            webix.html.removeCss($$('live:btn2').getNode(), 'btn-selected');
            webix.html.removeCss($$('live:btn3').getNode(), 'btn-selected');
            webix.html.addCss($$('live:btn1').getNode(), 'btn-selected');

            e = echarts.init($$('live:chart').getNode());
            c.$drawChart(e, d.$option1);
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
        }
    };
});