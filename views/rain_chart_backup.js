define(['models/common', 'models/rain_chart_data'], function (c, d) {
    var ui = {
        rows: [
            {height: 2},
            {
                cols: [
                    {
                        view: 'template', id: 'rain_chart:pic', borderless: 1, minWidth: 810,
                        template: "<div style='width:100%;height:100%'><img src='#base64#' style='height: 100%'></div>",
                        data: [{base64: ''}]
                    },
                    {
                        maxWidth: 300, css: 'white-bg',
                        rows: [
                            {
                                view: 'richselect', id: 'playInterval', label: '播放速度:', value: 1,
                                inputWidth: 160, align: 'center',
                                options: [
                                    {id: 1, value: '1秒'},
                                    {id: 2, value: '2秒'},
                                    {id: 3, value: '3秒'},
                                    {id: 4, value: '4秒'},
                                    {id: 5, value: '5秒'}
                                ]
                            },
                            {
                                cols: [
                                    {},
                                    {
                                        view: 'button', type: 'icon', icon: 'backward', width: 45, css: 'media-btn',
                                        click: function () {
                                            var list = $$('rain_chart:filename');
                                            var id = list.getPrevId(list.getSelectedId(), 1);
                                            if (id){
                                                getRainPic(list.getItem(id).value);
                                                list.select(id);
                                            }
                                        }
                                    },
                                    {
                                        view: 'button', type: 'icon', icon: 'play-circle', width: 45, css: 'media-btn',
                                        id: 'play-pause',
                                        click: function () {
                                            if (autoPlay){
                                                autoPlay = false;
                                                this.define('icon', 'play-circle');
                                                clearInterval(t);
                                            }
                                            else {
                                                autoPlay = true;
                                                this.define('icon', 'pause');
                                                play();
                                            }

                                            this.refresh();
                                        }
                                    },
                                    {
                                        view: 'button', type: 'icon', icon: 'forward', width: 45, css: 'media-btn',
                                        click: function () {
                                            var list = $$('rain_chart:filename');
                                            var id = list.getNextId(list.getSelectedId(), 1);
                                            if (id){
                                                getRainPic(list.getItem(id).value);
                                                list.select(id);
                                            }
                                        }
                                    },
                                    {}
                                ]
                            },
                            {height: 5},
                            {
                                cols: [
                                    {
                                        view: 'list', id: 'rain_chart:filename', scroll: 1, select: 1,
                                        data: [],
                                        on: {
                                            'onItemClick': function (id) {
                                                var item = this.getItem(id);
                                                getRainPic(item.value);
                                            }
                                        }
                                    },
                                    {width: 5}
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    // 是否自动播放
    var autoPlay = false;
    // 自动播放的timer
    var t;
    // 自动播放
    function play() {
        var interval = $$('playInterval').getValue();
        var list = $$('rain_chart:filename');
        list.select(list.getLastId());

        if (autoPlay){
            t = setInterval(function () {
                getRainPic(list.getItem(list.getSelectedId()).value);
                var pId = list.getPrevId(list.getSelectedId(), 1);
                if (!pId){
                    clearInterval(t);
                    autoPlay = false;
                    $$('play-pause').define('icon', 'play-circle');
                    $$('play-pause').refresh();
                }
                if (pId){
                    list.select(pId);
                }
            }, interval*1000);
        }
    }

    // 获取某一张雨量分布图
    function getRainPic(filename) {
        d.$getRainChart(filename).then(function (value) {
            var b64Str = value.json();
            $$('rain_chart:pic').define('data', [{base64: 'data:image/jpeg;base64,'+b64Str}]);
        });
    }
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'rain_chart');
            // 获取所有雨量分布图
            d.$getRainChart().then(function (value) {
                var list = $$('rain_chart:filename');
                var v = value.json();
                v.forEach(function (value2) {
                    list.add({value: value2.split('.')[0]});
                });
                list.sort('value', 'desc');
                list.select(list.getFirstId());
                if (list.getSelectedId()){
                    getRainPic(list.getItem(list.getSelectedId()).value);
                }
            });
        }
    };
});