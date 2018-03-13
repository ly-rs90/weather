define(function () {
    function getRainChart(filename) {
        if (filename){
            return webix.ajax().post('/rain_chart', {filename: filename});
        }
        return webix.ajax().post('/rain_chart');
    }
    function getData() {
        return webix.ajax().post('/rain_chart');
    }
    var option_map = {
        title: {
            text: ''
        },
        grid: {
            x: 10,
            y: 10,
            x2: 10,
            y2: 10
        },
        backgroundColor: '#fff',
        visualMap: {
            min: 0,
            max: 1,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],
            calculable: true
        },
        series: [
            {
                type: 'map',
                map: 'jinhua',
                aspectScale: 1,

                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                        formatter: function (p) {
                            return p.name + '\n' + p.value + 'mm';
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                silent: true,
                itemStyle: {
                    normal: {
                        areaColor: '#81c4ec'
                    }
                    // emphasis: {
                    //     areaColor: '#1ccc75',
                    //     shadowOffsetX: 0,
                    //     shadowOffsetY: 0,
                    //     shadowBlur: 20,
                    //     shadowColor: 'rgba(0,0,0,0.5)'
                    // }
                },
                data: []
            }
        ]
    };
    return {
        $getRainChart: getRainChart,
        $optionMap: option_map,
        $getData: getData
    };
});