/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/overall_data', 'models/common'], function (d, c) {
    var todayData;
    var tomorrowData;
    var ui = {
        rows: [
            {
                cols: [
                    {
                        view: 'segmented', value: 1, width: 200, css: 'white-bg overall-seg',
                        options: [
                            {id: 1, value: '今天'},
                            {id: 2, value: '明天'}
                        ],
                        on:{
                            'onAfterTabClick': function(id){
                                $$('overall:list').clearAll();
                                if (id === '1'){
                                    $$('overall:list').define('data', todayData);
                                }
                                else {
                                    $$('overall:list').define('data', tomorrowData);
                                }
                                $$('overall:list').refresh();
                            }
                        }
                    },
                    {css: 'white-bg'}
                ]
            },
            {height: 2},
            {
                view: 'dataview',
                scroll: 'y',
                xCount: 2,
                id: 'overall:list',
                type: {
                    height: '200',
                    width: 'auto',
                    template: "<div id='overall_container'>" +
                    "<div class='overall-pic #pic#'></div>" +
                    "<div style='padding-right: 0;'>" +
                        "<div class='item-container'><div>指数类型：</div><div style='color:#0598e3'>#type#</div></div>" +
                        "<div class='item-container'><div>预报时间：</div><div>#time#</div></div>" +
                        "<div class='item-container'><div>等级：</div><div style='color:#cc1206'>#lev#</div></div>" +
                        "<div class='item-container'><div>温馨提示：</div><div>#tips#</div></div>" +
                    "</div>" +
                    "</div>"
                },
                data: [
                    // {id: 1, type: '洗车指数', pic: 'pic1', time: '2018/1/8 06:00', lev: '四级', tips: '不适宜，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。'},
                    // {id: 2, type: '晾晒指数', pic: 'pic2', time: '2018/1/8 06:00', lev: '一级', tips: '不适宜晾晒。'},
                    // {id: 3, type: '晨练指数', pic: 'pic3', time: '2018/1/8 06:00', lev: '五级', tips: '不适宜晨练，最好不要晨练。'},
                    // {id: 4, type: '穿衣指数', pic: 'pic4', time: '2018/1/8 06:00', lev: '八级', tips: '寒冷，将明显变冷，请你加衣，建议穿毛衣加羽绒服、裘皮。'},
                    // {id: 5, type: '感冒指数', pic: 'pic5', time: '2018/1/8 06:00', lev: '二级', tips: '较易感冒，体质较弱的朋友注意加强自我保护。'},
                    // {id: 6, type: '霉变指数', pic: 'pic6', time: '2018/1/8 06:00', lev: '二级', tips: '霉变指数偏小，空气较干燥，不太容易发生霉变。'},
                    // {id: 7, type: '舒适度指数', pic: 'pic7', time: '2018/1/8 06:00', lev: '负三级', tips: '人体感觉冷，很不舒适，天气冷，要采取保暖措施，抵御严寒。'},
                    // {id: 8, type: '运动指数', pic: 'pic8', time: '2018/1/8 06:00', lev: '一级', tips: '气象条件很差，不适宜户外体育运动，可适当进行户内体育运动，如篮球、网球、乒乓球等。'},
                    // {id: 9, type: '中暑指数', pic: 'pic9', time: '2018/1/8 06:00', lev: '一级', tips: '不会中暑。'},
                    // {id: 10, type: '紫外线指数', pic: 'pic10', time: '2018/1/8 06:00', lev: '一级', tips: '紫外线辐射很弱，不需要防护。'}
                ]
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'overall');
            d.$getOverAll().then(function (value) {
                var data = value.json();
                todayData = data.today;
                tomorrowData = data.tomorrow;
                $$('overall:list').define('data', data.today);
            });
        }
    };
});