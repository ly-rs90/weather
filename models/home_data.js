/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    var g = {
        type: 'group',
        left: '20%',
        top: '30%',
        children: [
            {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: {
                    width: 110,
                    height: 50
                },
                style: {
                    fill: '#fff',
                    stroke: '#555',
                    lineWidth: 2,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: 'rgba(0,0,0,0.3)'
                }
            },
            {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                    fill: '#333',
                    text: [
                        '温度：21~32℃',
                        '风速：2.4m/s'
                    ].join('\n'),
                    font: '14px Microsoft YaHei'
                }
            }
        ]
    };
    var option = {
        title: {
            text: '金华市各地区天气实况',
            textStyle: {
                color: '#1280ec'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        backgroundColor: 'rgba(108,175,204,.2)',
        // graphic: (function () {
        //     var graphics = [];
        //     graphics.push(g);
        //     return graphics;
        // })(),
        series: [{
            name: '金华市各地区天气实况',
            aspectScale: 1,
            type: 'map',
            map: 'jinhua',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#81c4ec'
                },
                emphasis: {
                    areaColor: '#1ccc75',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            },
            data: [
                {name: '义乌市', value: {time: '11:24', temp: '23℃', wind_org: '北', wind: '2.1m/s', water: '60%'}},
                {name: '东阳市', value: {time: '11:24', temp: '21℃', wind_org: '东', wind: '2.2m/s', water: '50%'}},
                {name: '磐安县', value: {time: '11:24', temp: '22℃', wind_org: '南', wind: '2.3m/s', water: '40%'}},
                {name: '永康市', value: {time: '11:24', temp: '24℃', wind_org: '西', wind: '2.5m/s', water: '30%'}},
                {name: '武义县', value: {time: '11:24', temp: '21℃', wind_org: '东北', wind: '1.3m/s', water: '62%'}},
                {name: '金东区', value: {time: '11:24', temp: '25℃', wind_org: '东南', wind: '2.4m/s', water: '51%'}},
                {name: '婺城区', value: {time: '11:24', temp: '22℃', wind_org: '西北', wind: '2.2m/s', water: '53%'}},
                {name: '兰溪市', value: {time: '11:24', temp: '21℃', wind_org: '西南', wind: '1.5m/s', water: '46%'}},
                {name: '浦江县', value: {time: '11:24', temp: '20℃', wind_org: '北', wind: '2.6m/s', water: '60%'}}
            ],
            tooltip: {
                formatter: function (param) {
                    var v = param.data.value;
                    return '<span style="font-size: 18px;color: #efbc0d;font-weight: bold">' + param.name + '</span>' + ' 当前实况<br>' +
                        '发布时间：' + v.time +'<br>' +
                        '温度：' + v.temp +'<br>' +
                        '风向：' + v.wind_org + '<br>' +
                        '风速：' + v.wind+ '<br>' +
                        '湿度：' + v.water;
                }
            },
            markPoint: {
                silent: true,
                symbol: 'image://static/images/thermometer.png',
                symbolSize: [19, 47],
                label: {
                    show: true,
                    position: [10,10],
                    normal: {
                        offset: [0, 30],
                        formatter: function (a) {
                            return a.data.value;
                        },
                        textStyle: {
                            color: '#bf0a09',
                            fontWeight: 'bold'
                        }
                    }
                },
                data: [
                    {name: '温度', value: '21~35℃', x: '21%', y: '34%'}, // 兰溪市
                    {name: '温度', value: '22~31℃', x: '25%', y: '55%'}, // 婺城区
                    {name: '温度', value: '23~32℃', x: '35%', y: '70%'}, // 武义县
                    {name: '温度', value: '21~33℃', x: '45%', y: '16%'}, // 浦江县
                    {name: '温度', value: '24~34℃', x: '41%', y: '45%'}, // 金东区
                    {name: '温度', value: '25~36℃', x: '50%', y: '38%'}, // 义乌市
                    {name: '温度', value: '23~31℃', x: '53%', y: '55%'}, // 永康市
                    {name: '温度', value: '22~30℃', x: '66%', y: '40%'}, // 东阳市
                    {name: '温度', value: '20~32℃', x: '75%', y: '56%'}  // 磐安县
                ]
            }
        }]
    };
    return {
        $option: option
    };
});