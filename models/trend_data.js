/**
 * Created by lenovo on 2017/5/22.
 */
define(function () {
    function getTrend() {
        return webix.ajax().post('/trend');
    }
    var option1 = {
        title: {
            text: '金华市2015年汛期(5~9)月降水趋势预测',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['金华', '浦江', '兰溪', '义乌', '东阳', '武义', '永康'],
            top: 30
        },
        grid: {
            x: 40,
            y: 60,
            x2: 40,
            y2: 30
        },
        xAxis: {
            name: '月份',
            data: ['5月', '6月', '7月', '8月', '9月']
        },
        yAxis: {
            name: '降水量(mm)'
        },
        series: [
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '金华',
                data: [102.1, 401.4, 307.5, 212.8, 90.3]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '浦江',
                data: [132.1, 201.4, 327.5, 190.3, 334.5]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '兰溪',
                data: [202.1, 100.3, 339.5, 242.8, 303.3]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '义乌',
                data: [347.5, 105.8, 340.5, 282.8, 110.3]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '东阳',
                data: [222.1, 451.4, 350.5, 262.8, 404.3]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '武义',
                data: [321.1, 387.5, 112.3, 331.5, 123.3]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '永康',
                data: [308.1, 311.2, 338.5, 256.8, 290.3]
            }
        ]
    };
    var option2 = {
        title: {
            text: '金华市2015年(5~9)月平均温度预测',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['金华', '浦江', '兰溪', '义乌', '东阳', '武义', '永康'],
            top: 30
        },
        grid: {
            x: 40,
            y: 60,
            x2: 40,
            y2: 30
        },
        xAxis: {
            name: '月份',
            data: ['5月', '6月', '7月', '8月', '9月']
        },
        yAxis: {
            name: '温度(℃)'
        },
        series: [
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '金华',
                data: [23, 25, 32, 27, 30]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '浦江',
                data: [22, 24, 29, 31, 28]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '兰溪',
                data: [24, 26, 28, 29, 32]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '义乌',
                data: [21, 27, 28, 31, 32]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '东阳',
                data: [25, 25, 29, 29, 30]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '武义',
                data: [22, 28, 28, 30, 32]
            },
            {
                type: 'bar',
                barMaxWidth: 30,
                name: '永康',
                data: [23, 24, 27, 29, 30]
            }
        ]
    };
    return {
        $option1: option1,
        $option2: option2,
        $getTrend: getTrend
    };
});