/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/trend_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'trend:header', height: 38,
                template: "<div style='color:#333;font-size:20px'>#title#&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>&nbsp;#num#&nbsp;&nbsp;&nbsp;&nbsp;</span>" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#time#</span></div>",
                data: [{title: '长期趋势预报', time: '', num: ''}]
            },
            {
                view: 'scrollview', css: 'bg', scroll: 'y',
                body: {
                    rows: [
                        {
                            view: 'template', template: '#title#', id: 'trend:title1', height: 32, data: [{title: ''}]
                        },
                        {
                            view: 'template', id: 'trend:t1', css: 'template-text', template: '#content#',
                            autoheight: 1, data: [{content: ''}]
                        },
                        {height: 5},
                        {
                            view: 'datatable', css: 'table', id: 'trend:table1', scroll: false,
                            autoheight: 1, footer: 1,
                            columns: [
                                {id: '1', header: '', footer: {text: '', colspan: 9}, adjust: 1},
                                {id: '2', header: '金华', fillspace: 1},
                                {id: '5', header: '义乌', fillspace: 1},
                                {id: '6', header: '东阳', fillspace: 1},
                                {id: '8', header: '永康', fillspace: 1},
                                {id: '4', header: '兰溪', fillspace: 1},
                                {id: '7', header: '武义', fillspace: 1},
                                {id: '3', header: '浦江', fillspace: 1},
                                {id: '9', header: '磐安', fillspace: 1}
                            ],
                            data: []
                        },
                        {height: 5},
                        {
                            view: 'template', template: '#title#', id: 'trend:title2', height: 32, data: [{title: ''}]
                        },
                        {
                            view: 'template', id: 'trend:t2', css: 'template-text', template: '#content#',
                            autoheight: 1, data: [{content: ''}]
                        },
                        {height: 5},
                        {
                            view: 'template', template: '#title#', id: 'trend:title3', height: 32, data: [{title: ''}]
                        },
                        {
                            view: 'template', id: 'trend:t3', css: 'template-text', template: '#content#',
                            autoheight: 1, data: [{content: ''}]
                        },
                        {height: 5},
                        {
                            view: 'template', template: '#title#', id: 'trend:title4', height: 32, data: [{title: ''}]
                        },
                        {
                            view: 'template', id: 'trend:t4', css: 'template-text', template: '#content#',
                            autoheight: 1, data: [{content: ''}]
                        }
                    ]
                }
            }
        ]
    };
    var e1 = undefined;
    var e2 = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'trend');
            d.$getTrend().then(function (data) {
                var temp = data.json();

                $$('trend:header').define('data', [temp[0]]);
                $$('trend:header').refresh();

                var t1 = temp[1];
                $$('trend:title1').define('data', [{title: t1['title1']}]);
                $$('trend:title1').refresh();

                $$('trend:t1').define('data', [{content: t1['section1']}]);
                $$('trend:t1').refresh();

                var t2 = temp[2];
                $$('trend:title2').define('data', [{title: t2['title2']}]);
                $$('trend:title2').refresh();

                $$('trend:t2').define('data', [{content: t2['section2']}]);
                $$('trend:t2').refresh();

                var t3 = temp[3];
                $$('trend:title3').define('data', [{title: t3['title3']}]);
                $$('trend:title3').refresh();

                $$('trend:t3').define('data', [{content: t3['section3']}]);
                $$('trend:t3').refresh();

                var t4 = temp[4];
                $$('trend:title4').define('data', [{title: t4['title4']}]);
                $$('trend:title4').refresh();

                $$('trend:t4').define('data', [{content: t4['section4']}]);
                $$('trend:t4').refresh();

                var t5 = temp[5];
                $$('trend:table1').config.columns[0]['footer'] = [{text: t5['table1_title'], colspan: 9}];
                $$('trend:table1').refreshColumns();
                var d1 = t5['table1_data'];
                for (var i = 1; i < d1.length; i++){
                    $$('trend:table1').add(d1[i]);
                }
                $$('trend:table1').refresh();
            });
        }
    };
});