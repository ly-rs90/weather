define(function () {
    function getRainChart(filename) {
        if (filename){
            return webix.ajax().post('/rain_chart', {filename: filename});
        }
        return webix.ajax().post('/rain_chart');
    }
    return {
        $getRainChart: getRainChart
    };
});