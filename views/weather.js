/**
 * Created by lenovo on 2017/5/17.
 */
define(function () {
    var warn = webix.ui({
        view: 'window', id: 'down', head: '提示信息', width: 200, height: 200, modal: 1, position: 'center',
        body: {
            rows: [
                {
                    view: 'template',
                    template: "请先安装<a href='/installers/GoogleChromeframeStandaloneEnterprise.msi'>插件</a>"
                },
                {
                    view: 'button', label: '确定', align: 'center',
                    click: function () {
                        $$('down').hide();
                    }
                }
            ]
        }
    });
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
                            {id: 'home', icon: "home", s: 'color: #e20000', title: '首页'},
                            {id: 'live', icon: "cloud", s: 'color: #ffc600', title: '天气实况'},
                            {id: '3h_weather', icon: "cloud-download", s: 'color: #0056ee', title: '3小时天气预报'},
                            {id: '48h_weather', icon: "cloud-download", s: 'color: #e20000', title: '48小时天气预报'},
                            {id: 'week_weather', icon: "cloud-download", s: 'color: #ffc600', title: '一周天气预报'},
                            {id: 'towns', icon: "fort-awesome", s: 'color: #0056ee', title: '乡镇精细化客观预报'},
                            {id: 'rain_chart', icon: "file-photo-o", s: 'color: #e20000', title: '雨量分布图'},
                            {id: 'future', icon: "calendar-plus-o", s: 'color: #0056ee', title: '未来1~9天天气预报'},
                            {id: 'month', icon: "calendar", s: 'color: #e20000', title: '月预报'},
                            {id: 'ten', icon: "calendar-check-o", s: 'color: #ffc600', title: '旬预报'},
                            {id: 'trend', icon: "calendar-times-o", s: 'color: #0056ee', title: '长期趋势预报'},
                            // {id: 'week', icon: "calendar-minus-o", s: 'color: #e20000', title: '一周天气趋势'},
                            {id: 'season', icon: "star", s: 'color: #ffc600', title: '重要季节长期预报'},
                            {id: 'rain', icon: "cloud-download", s: 'color: #e20000', title: '降水概率'},
                            {id: 'overall', icon: "blind", s: 'color: #ffc600', title: '生活气象指数'},
                            {id: 'commute', icon: "bus", s: 'color: #0056ee', title: '上下班天气'}
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
            var link = $$('weather:download');
            var user = navigator.userAgent;
            var index = user.indexOf('MSIE');
            if (index !== -1){
                warn.show();
            }
        }
    };
});