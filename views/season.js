/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/season_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'season:header', height: 38,
                template: "<div style='color:#333;font-size:20px'>重要季节长期预报" +
                "<span style='font-size: 12px;color: #999'>&nbsp;&nbsp;&nbsp;&nbsp;金华气象台发布于&nbsp;#time#</span></div>",
                data: [{time: ''}]
            },
            {
                view: 'scrollview', scroll: 'y', css: 'bg',
                body: {
                    rows: [
                        {
                            view: 'template', template: '#title#', id: 'season:title1', height: 32, data: [{title: ''}]
                        },
                        {
                            view: 'template', id: 'season:t1', css: 'template-text', template: '#content#',
                            height: 200, data: [{content: ''}]
                        },
                        {height: 5},
                        {
                            view: 'datatable', css: 'table', id: 'season:table', scroll: false,
                            yCount: 3, footer: 1,
                            columns: [
                                {id: 'item', header: '', fillspace: 1, footer: {text: '', colspan: 9}},
                                {id: 'jinhua', header: '金华', fillspace: 1},
                                {id: 'yiwu', header: '义乌', fillspace: 1},
                                {id: 'dongyang', header: '东阳', fillspace: 1},
                                {id: 'yongkang', header: '永康', fillspace: 1},
                                {id: 'lanxi', header: '兰溪', fillspace: 1},
                                {id: 'wuyi', header: '武义', fillspace: 1},
                                {id: 'pujiang', header: '浦江', fillspace: 1},
                                {id: 'panan', header: '磐安', fillspace: 1}
                            ],
                            data: []
                        },
                        {
                            view: 'label', autoheight: 1, css: 'white-bg', id: 'season:mark'
                        },
                        {height: 7},
                        {
                            view: 'template', template: '#title#', id: 'season:title2', height: 32, data: [{title: ''}]
                        },
                        {
                            view: 'template', id: 'season:t2', css: 'template-text', template: '#content#',
                            height: 200, data: [{content: ''}]
                        }
                    ]
                }
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'season');
            d.$getSeason().then(function (data) {
                var temp = data.json();
                if (temp.length === 8){
                    $$('season:header').define('data', [temp[0]]);
                    $$('season:header').refresh();
                    for (var i = 1; i < 4; i++){
                        $$('season:table').add(temp[i]);
                    }
                    $$('season:table').refresh();
                    $$('season:table').config.columns[0]['footer'] = [{text: temp[4]['footer'], colspan: 9}];
                    $$('season:table').refreshColumns();

                    $$('season:mark').define('label', "<div style='text-align: center'>" + temp[5]['mark'] + "</div>");
                    $$('season:mark').refresh();

                    var t1 = temp[6];
                    $$('season:title1').define('data', [{title: t1['title1']}]);
                    $$('season:title1').refresh();
                    $$('season:t1').define('data', [{content: t1['section1']}]);
                    $$('season:t1').refresh();

                    var t2 = temp[7];
                    $$('season:title2').define('data', [{title: t2['title2']}]);
                    $$('season:title2').refresh();
                    $$('season:t2').define('data', [{content: t2['section2']}]);
                    $$('season:t2').refresh();
                }
            });
        }
    };
});