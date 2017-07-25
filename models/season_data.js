/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    function getSeason() {
        return webix.ajax().post('/season');
    }
    return {
        $getSeason: getSeason
    };
});