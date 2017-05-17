/**
 * Created by lenovo on 2017/5/17.
 */
define(['libs/webix-jet-core/core'], function (core) {
    return core.create({
        id: 'weather',
        name: '天气预报',
        debug: true,
        start: '/weather/forecast',
        version: '1.0'
    });
});