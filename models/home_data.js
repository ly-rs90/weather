/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    var option = {
        series: [{
            name: '气温',
            type: 'gauge',
            min: -50,
            max: 50,
            radius: '80%',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '70%'],
            splitNumber: 5,
            detail: {show: false},
            axisLine: {lineStyle: {width: 10, color: [
                [0.2, '#00bfcc'],
                [0.4, '#16cc81'],
                [0.6, '#0dcc04'],
                [0.8, '#2a73cc'],
                [1, '#cc1400']]}
            },
            splitLine: {length: 16, lineStyle: {color: '#000'}},
            axisTick: {lineStyle: {color: '#000'}},
            pointer: {length: '90%', width: 3},
            data: [{value: 0, name: '℃'}]
        }]
    };
    return {
        $option: option
    };
});