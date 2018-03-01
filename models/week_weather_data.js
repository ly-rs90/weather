define(function () {
    function getWeek() {
        return webix.ajax().post('/week_weather');
    }
    return {
        $getWeek: getWeek
    };
});