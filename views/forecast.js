/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/forecast_data'], function (d) {
    var ui = {
        cols: [
            {
                width: 250,
                rows: [
                    {
                        view: 'template',
                        css: 'forecast-t',
                        template: "<div style='color: #aaa;font-size: 14px'>#t#</div>",
                        autoheight: 1,
                        data: [{t: '5月18日 周四'}]
                    },
                    {
                        css: 'forecast-t',
                        template: function (obj) {
                            if (obj.v >= 85){
                                return "<div style='color: #aaa;font-size: 14px'>空气质量："+ obj.v +
                                    "(<span style='color: #0ccf00'>优</span>)</div>";
                            }else if (obj.v >= 60){
                                return "<div style='color: #aaa;font-size: 14px'>空气质量："+ obj.v +
                                    "(<span style='color: #1260b4'>良</span>)</div>";
                            }else{
                                return "<div style='color: #aaa;font-size: 14px'>空气质量："+ obj.v +
                                    "(<span style='color: #d70100'>差</span>)</div>";
                            }
                        },
                        autoheight: 1,
                        data: [{v: 30}]
                    },
                    {
                        height: 72,
                        css: 'forecast-t',
                        template: "<div style='text-align: center'><img src='#w#' style='max-width: 72px;max-height: 72px;'>" +
                        "<div style='font-size: 14px;line-height: 10px;width: 30px;height: 20px;float: right;'>#info#</div></div>",
                        data: [{w: '/static/images/cloud.png', info: '多云'}]
                    },
                    {
                        height: 100,
                        css: 'forecast-t',
                        template: function (obj) {
                            var t = obj.t;
                            if (t >= 30){
                                return "<div style='text-align: center;line-height: 100px;color: #cc0016'>" +
                                    "<span style='font-size: 60px'>" + t + "</span>" +
                                    "<span style='font-size: 40px'>℃</span>" + "</div>";
                            }else if (t >= 10){
                                return "<div style='text-align: center;line-height: 100px;color: #0077cc'>" +
                                    "<span style='font-size: 60px'>" + t + "</span>" +
                                    "<span style='font-size: 40px'>℃</span>" + "</div>";
                            }else {
                                return "<div style='text-align: center;line-height: 100px;color: #00cc8b'>" +
                                    "<span style='font-size: 60px'>" + t + "</span>" +
                                    "<span style='font-size: 40px'>℃</span>" + "</div>";
                            }
                        },
                        data: [{t: 26}]
                    },
                    {

                    }
                ]
            },
            {
                template: 'aa'
            }
        ]
    };
    var e = undefined;
    function drawChart(o) {
        if (e){
            e.setOption(o);
        }
    }
    var t = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
        }
    };
});