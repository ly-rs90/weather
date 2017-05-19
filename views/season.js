/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/season_data'], function (d) {
    var ui = {
        rows: [
            {view: 'template', template: '<div style="color:#333;font-size:20px">重要气象情况汇报</div>', autoheight: 1},
            {
                view: 'template',
                autoheight: 1,
                template: "<p>今日我市出梅</p>" +
                "<p style='text-indent: 2em'>6月17日入梅以来，受江淮梅雨带影响，我市6月19日后期到28日出现了3次暴雨过程；" +
                "7月1~6日受梅雨带南缘影响，多阵雨或雷雨天气，其中2日、4日和5日部分地区出现短时强降水、强雷电" +
                "和局地7~9级雷雨大风天气。</p>" +
                "<p style='text-indent: 2em'>入梅以来，全市平均雨量412.6mm，出现500mm以上的站点有23个，最大武义金畈638.6mm，400mm以上" +
                "的站点有103个，各县(市)雨量如下：</p>"
            },
            {
                cols: [
                    {width: 50, css: 'template-left white-bg'},
                    {
                        view: 'datatable',
                        scroll: false,
                        autoheight: 1,
                        footer: 1,
                        css: 'table',
                        columns: [
                            {
                                id: 1, header: '金华', fillspace: 1, footer:
                                {text: '表1&nbsp;&nbsp;2014年6月16日至7月7日各县(市)降雨量(单位：mm)', colspan: 8}
                            },
                            {id: 2, header: '武义', fillspace: 1},
                            {id: 3, header: '永康', fillspace: 1},
                            {id: 4, header: '东阳', fillspace: 1},
                            {id: 5, header: '兰溪', fillspace: 1},
                            {id: 6, header: '义乌', fillspace: 1},
                            {id: 7, header: '磐安', fillspace: 1},
                            {id: 8, header: '浦江', fillspace: 1}
                        ],
                        data: d.$data

                    },
                    {width: 50, css: 'template-right white-bg'}
                ]
            },
            {
                view: 'template',
                css: 'forecast-t',
                template: "<p>今日我市出梅</p>" +
                "<p style='text-indent: 2em'>根据最新气象资料分析，受大陆高压控制，预计未来" +
                "3~5天我市以多云天气为主，无明显降水，午后局部有雷阵雨，最高温度将升至34~35℃。</p>"
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
        }
    };
});