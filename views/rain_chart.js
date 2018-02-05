define(['models/common'], function (c) {
    var ui = {};
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'rain_chart');
        }
    };
});