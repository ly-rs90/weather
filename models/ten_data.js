/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    function getTen() {
        return webix.ajax().post('/ten');
    }
    return {
        $getTen: getTen
    };
});
