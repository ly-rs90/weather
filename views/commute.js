define(['models/common'], function (c) {
    var ui = {
        rows: [
            {
                view: 'template',
                css: 'sxbtq-header-pic',
                template: "<div id='commute_container'>" +
                                "<div><img src='/static/images/sxbtq.jpg' alt='上下班天气'></div>" +
                                "<div>" +
                                    "<div><h3>#title#</h3></div>" +
                                    "<div style='word-break: break-all'>#content#</div>" +
                                    "<div>#user#</div>" +
                                "</div>" +
                                "<div></div>" +
                          "</div>",
                data: [
                    {
                        title: '金华市气象台2018年01月08日06时发布的上班时间天气预报',
                        content: '今天7点到9点，阴天，有时有小雨，偏西风2～3级，温度5～6℃。',
                        user: '预报员：范瑜越'
                    }
                ]
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'commute');
        }
    };
});