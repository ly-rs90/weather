/**
 * Created by lenovo on 2017/5/17.
 */
define(function () {
    var ui = {
        css: 'bg',
        rows: [
            {
                view: 'toolbar',
                cols: [
                    {
                        view: 'button',
                        type: 'imageButton',
                        image: '/static/images/weather.ico',
                        label: '天气预报',
                        width: 100,
                        css: 'logo'
                    }
                ]
            },
            {
                cols: [
                    {
                        view: 'list',
                        css: 'list',
                        select: 1,
                        id: 'weather:list',
                        scroll: false,
                        width: 200,
                        type: {
                            template: "<span class='webix_icon fa-#icon#' style='#s#'></span>&nbsp;<span>#title#</span>"
                        },
                        data: [
                            {id: 'live', icon: "cloud", s: 'color: #ffc600', title: '天气实况'},
                            //{id: 'forecast', icon: "sun-o", s: 'color: #ffc600', title: '天气预报'},
                            //{id: 'future', icon: "snowflake-o", s: 'color: #0056ee', title: '未来9天天气预报'},
                            {id: 'month', icon: "calendar", s: 'color: #e20000', title: '月预报'},
                            {id: 'ten', icon: "calendar-check-o", s: 'color: #ffc600', title: '旬预报'},
                            {id: 'trend', icon: "line-chart", s: 'color: #0056ee', title: '长期趋势预报'},
                            {id: 'season', icon: "star", s: 'color: #e20000', title: '重要季节长期预报'},
                            {id: 'week', icon: "umbrella", s: 'color: #0056ee', title: '一周天气趋势'},
                            {id: 'rain', icon: "cloud-download", s: 'color: #e20000', title: '降水概率'},
                            {id: 'overall', icon: "thermometer", s: 'color: #ffc600', title: '综合指数'}
                        ],
                        click: function (id) {
                            this.getTopParentView().$scope.show('./' + id);
                        }
                    },
                    {width: 10},
                    {
                        rows: [
                            {$subview: true}
                        ]
                    }
                ]
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