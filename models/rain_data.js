/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    var option = {
        title: {
            text: '金华市各地降水概率',
            left: 'center'
        },
        grid: {
            x: 30,
            y: 60,
            x2: 40,
            y2: 30
        },
        tooltip: {
            trigger: 'axis'
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        legend: {
            top: 30,
            data: ['今天白天', '今天夜里', '24小时']
        },
        xAxis: {
            name: '地区',
            data: ['金华', '浦江', '兰溪', '义乌', '东阳', '武义', '永康']
        },
        yAxis: {
            min: 0,
            max: 1,
            splitNumber: 5,
            name: '降水概率'
        },
        series: [
            {
                name: '今天白天',
                type: 'bar',
                barMaxWidth: 30,
                data: [0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '今天夜里',
                type: 'bar',
                barMaxWidth: 30,
                data: [0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: '24小时',
                type: 'bar',
                barMaxWidth: 30,
                data: [0, 0, 0, 0, 0, 0, 0]
            }
        ]
    };
    function getRain() {
        return webix.ajax().post("/rain");
    }
    return {
        $option: option,
        $getRain: getRain
    };
});