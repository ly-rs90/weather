/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    var option1 = {
        title: {
            text: '24小时温度',
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
            data: ['现在', '12点', '14点', '16点', '18点', '20点', '22点', '0点', '2点', '4点', '6点', '8点']
        },
        yAxis: {
            name: '摄氏度(℃)'
        },
        series: [
            {
                type: 'line',
                name: '温度',
                data: [21, 20, 24, 26, 23, 22, 27, 20, 19, 22, 23, 24]
            }
        ]
    };
    var option2 = {
        title: {
            text: '风力',
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
            data: ['现在', '12点', '14点', '16点', '18点', '20点', '22点', '0点', '2点', '4点', '6点', '8点']
        },
        yAxis: {
            name: '风力(级)'
        },
        series: [
            {
                type: 'line',
                name: '风力',
                data: [0, 0, 1, 0, 2, 0, 0, 0, 3, 0, 0, 0]
            }
        ]
    };
    var option3 = {
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
            name: '时间',
            data: ['现在', '12点', '14点', '16点', '18点', '20点', '22点', '0点', '2点', '4点', '6点', '8点']
        },
        yAxis: {
            name: '降水量(mm)'
        },
        series: [
            {
                type: 'line',
                name: '降水量',
                data: [0, 0, 0, 2, 0, 0.3, 0, 12, 0, 0, 0, 2]
            }
        ]
    };
    return {
        $option1: option1,
        $option2: option2,
        $option3: option3
    };
});