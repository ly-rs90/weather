define(function () {
    var option_map = {
        grid: {
            x: 10,
            y: 10,
            x2: 10,
            y2: 10
        },
        backgroundColor: 'fff',
        series: [
            {
                type: 'map',
                map: 'jinhua',
                aspectScale: 1,
                selectedMode: 'single',

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
                }
            }
        ]
    };

    var option_48 = {
        title: {
            text: '金东区逐3小时天气(2018/2/27 20发布)'
        },
        grid: {
            x: 30,
            y: 60,
            x2: 30,
            y2: 30
        },
        legend: {data: ['温度', '降水'], top: 25},
        tooltip: {trigger: 'axis'},
        yAxis: [{scale: true, name: '℃', nameGap: 10},{scale: true, name: 'mm', nameGap: 10}],
        xAxis: {data: ['20时', '23时', '02时', '05时', '08时', '11时', '14时', '17时', '20时', '23时', '02时', '05时', '08时', '11时']},
        series: [
            {
                name: '温度',
                type: 'line',
                data: [14.9, 13.3, 12.9, 12.9, 13.2, 17.2, 18, 16.6, 12.6, 10.1, 8.8, 7.5, 9.7, 18]
            },
            {
                name: '降水',
                type: 'bar',
                yAxisIndex: 1,
                barMaxWidth: 10,
                data: ['', 0.3, 0, 0, 7.4, 0, 0, 0, 0, 0.1, 0.8, 0.5, 0, 0]
            }
        ]
    };
    var option_week = {
        title: {
            text: '金东区未来7天天气(2018/2/27 20发布)'
        },
        grid: {
            x: 30,
            y: 60,
            x2: 30,
            y2: 30
        },
        legend: {data: ['最高温度', '最低温度', '降水'], top: 25},
        tooltip: {trigger: 'axis'},
        yAxis: [{scale: true, name: '℃', nameGap: 10},{scale: true, name: 'mm', nameGap: 10}],
        xAxis: {data: ['27日', '28日', '01日', '02日', '03日', '04日', '05日']},
        series: [
            {
                name: '最高温度',
                type: 'line',
                data: [14.9, 13.3, 12.9, 12.9, 13.2, 17.2, 18]
            },
            {
                name: '最低温度',
                type: 'line',
                data: [16.6, 12.6, 10.1, 8.8, 7.5, 9.7, 18]
            },
            {
                name: '降水',
                type: 'bar',
                yAxisIndex: 1,
                barMaxWidth: 10,
                data: ['', 0.3, 0, 0, 7.4, 0, 0, 0, 0, 0.1, 0.8, 0.5, 0, 0]
            }
        ]
    };
    return {
        $option_map: option_map,
        $option_48: option_48,
        $option_week: option_week
    };
});