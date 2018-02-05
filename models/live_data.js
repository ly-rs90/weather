/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    var option_temp = {
        title: {
            text: '温度',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        backgroundColor: '#fff',
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '时间',
            data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点', '14点', '16点', '18点', '20点', '22点', '24点']
        },
        yAxis: {
            name: '摄氏度(℃)',
            scale: true
        },
        series: [
            {
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top',
                //         formatter: '{c}℃',
                //         textStyle: {
                //             color: '#666'
                //         }
                //     }
                // },
                type: 'line',
                name: '温度',
                data: [21, 20, 24, 26, 23, 22, 27, 20, 19, 22, 23, 24, 21]
            }
        ]
    };
    var option_wind = {
        title: {
            text: '风速',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '时间',
            data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点', '14点', '16点', '18点', '20点', '22点', '24点']
        },
        yAxis: {
            name: '风速(m/s)',
            scale: true
        },
        series: [
            {
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top',
                //         formatter: '{c}m/s',
                //         textStyle: {
                //             color: '#666'
                //         }
                //     }
                // },
                type: 'line',
                name: '风速',
                data: [0.4, 0.6, 1, 0.2, 2.1, 0.9, 0.7, 0.2, 3.2, 0.8, 0.5, 0.1, 0.4]
            }
        ]
    };
    var option_pm = {
        title: {
            text: 'PM值',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '时间',
            data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点', '14点', '16点', '18点', '20点', '22点', '24点']
        },
        yAxis: {
            name: 'PM(ug/m³)',
            scale: true
        },
        series: [
            {
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top',
                //         formatter: '{c}ug/m³',
                //         textStyle: {
                //             color: '#666'
                //         }
                //     }
                // },
                type: 'line',
                name: 'PM值',
                data: [12, 20, 10, 28, 20, 45, 100, 12, 80, 10, 40, 29, 34]
            }
        ]
    };
    var option_map = {
        grid: {
            x: 10,
            y: 10,
            x2: 10,
            y2: 10
        },
        series: [
            {
                type: 'map',
                map: 'jinhua',
                aspectScale: 1,

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
    return {
        $option_temp: option_temp,
        $option_wind: option_wind,
        $option_pm: option_pm,
        $option_map: option_map
    };
});