define(function () {
    function getThreeWeather() {
        return webix.ajax().post('/three_weather');
    }
    return {
        $getThreeWeather: getThreeWeather
    };
});