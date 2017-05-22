/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/week_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template',
                template: '金华气象台&nbsp;&nbsp;#t#&nbsp;&nbsp;发布的一周天气趋势预报：' +
                '<p style="text-indent:2em;color:#007acc;font-size:14px">#info#</p>',
                autoheight: 1,
                data: [{t: '2017/5/1 10:23:06', info: '预计未来七天西南暖湿气流活跃，多降水天气，其中5日至6日有一次明显的阵雨或雷雨过程。'}]
            },
            {
                view: 'datatable',
                css: 'table',
                scroll: false,
                columns: [
                    {id: 1, header: '日期', adjust: 1},
                    {id: 2, header: '天气', fillspace: 1}
                ],
                data: d.$data
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'week');
        }
    };
});