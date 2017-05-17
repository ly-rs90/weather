/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    var data_temp = [
        {1: '2017/5/1', 2: 23, 3: 28, 4: 18, 5: 0, 6: '微风', 7: '无'},
        {1: '2017/5/2', 2: 22, 3: 27, 4: 17, 5: 0.1, 6: '微风', 7: '无'},
        {1: '2017/5/3', 2: 25, 3: 26, 4: 19, 5: 0, 6: '2级', 7: '南风'},
        {1: '2017/5/4', 2: 21, 3: 24, 4: 16, 5: 0.3, 6: '微风', 7: '无'},
        {1: '2017/5/5', 2: 26, 3: 29, 4: 17, 5: 0, 6: '微风', 7: '无'},
        {1: '2017/5/6', 2: 22, 3: 25, 4: 21, 5: 0, 6: '2级', 7: '东南风'},
        {1: '2017/5/7', 2: 23, 3: 27, 4: 19, 5: 0, 6: '微风', 7: '无'},
        {1: '2017/5/8', 2: 24, 3: 29, 4: 17, 5: 0, 6: '1级', 7: '西北风'},
        {1: '2017/5/9', 2: 22, 3: 26, 4: 16, 5: 0, 6: '微风', 7: '无'},
        {1: '2017/5/10', 2: 24, 3: 29, 4: 18, 5: 0.12, 6: '微风', 7: '无'}
    ];
    var option1 = {
        title: {
            text: '日平均温度',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '日期',
            type: 'time',
            splitNumber: (function () {
                return data_temp.length;
            })(),
            min: new Date('2017/5/1').getTime(),
            max: new Date('2017/5/10').getTime(),
            axisLabel: {
                formatter: function(value,index){
                    return index+1;
                }
            }
        },
        yAxis: {
            name: '摄氏度(℃)'
        },
        series: [
            {
                type: 'line',
                name: '日平均温度',
                data: []
            }
        ]

    };
    var option2 = {
        title: {
            text: '日最高温度',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '日期',
            type: 'time',
            splitNumber: (function () {
                return data_temp.length;
            })(),
            min: new Date('2017/5/1').getTime(),
            max: new Date('2017/5/10').getTime(),
            axisLabel: {
                formatter: function(value,index){
                    return index+1;
                }
            }
        },
        yAxis: {
            name: '摄氏度(℃)'
        },
        series: [
            {
                type: 'line',
                name: '日最高温度',
                data: []
            }
        ]

    };
    var option3 = {
        title: {
            text: '日最低温度',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '日期',
            type: 'time',
            splitNumber: (function () {
                return data_temp.length;
            })(),
            min: new Date('2017/5/1').getTime(),
            max: new Date('2017/5/10').getTime(),
            axisLabel: {
                formatter: function(value,index){
                    return index+1;
                }
            }
        },
        yAxis: {
            name: '摄氏度(℃)'
        },
        series: [
            {
                type: 'line',
                name: '日最低温度',
                data: []
            }
        ]

    };
    var option4 = {
        title: {
            text: '降水量',
            left: 'center'
        },
        tooltip: {trigger: 'axis'},
        grid: {
            x: 35,
            x2: 45,
            y2: 30
        },
        xAxis: {
            name: '日期',
            type: 'time',
            splitNumber: (function () {
                return data_temp.length;
            })(),
            min: new Date('2017/5/1').getTime(),
            max: new Date('2017/5/10').getTime(),
            axisLabel: {
                formatter: function(value,index){
                    return index+1;
                }
            }
        },
        yAxis: {
            name: '毫米(mm)'
        },
        series: [
            {
                type: 'line',
                name: '降水量',
                data: []
            }
        ]

    };
    return {
        $data: data_temp,
        $option1: option1,
        $option2: option2,
        $option3: option3,
        $option4: option4
    };
});