define(['models/common', 'models/rain_chart_data'], function (c, d) {
    var ui = {
        rows: [
            {view: 'template', template: '', id: 'rain:chart'}
        ]
    };
    var e;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'rain_chart');
            e = echarts.init($$('rain:chart').getNode());
            e.setOption(d.$optionMap);
            window.onresize = function () {
                e.resize();
            };
            d.$getData().then(function (value) {
                var data = value.json();
                var maxValue = 0;
                data.data.forEach(function (item) {
                    if (item.value > maxValue){
                        maxValue = item.value
                    }
                });
                e.setOption({
                    title: {
                        text: data.title,
                        textStyle: {
                            color: '#008fcc'
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: maxValue + 1,
                        left: 'left',
                        top: 'bottom',
                        text: ['高','低'],
                        calculable: true
                    },
                    series: [{data: data.data}]
                });
            });
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
            window.onresize = null;
        }
    };
});