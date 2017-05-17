/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    var data = [
        {index: '晨练指数', lev: '五级', content: '不宜晨练，最好不要晨练。'},
        {index: '晾晒指数', lev: '一级', content: '不宜晾晒。'},
        {index: '霉变指数', lev: '二级', content: '霉变指数偏小，空气干燥，不太容易发生霉变。'},
        {index: '舒适度指数', lev: '负一级', content: '人体感觉凉爽，较舒适，天气凉爽，体质较差的朋友要适当添加衣服，防止感冒。'},
        {index: '中暑指数', lev: '一级', content: '不会中暑。'},
        {index: '紫外线指数', lev: '一级', content: '紫外线辐射强度很弱，不需要防护。'},
        {index: '感冒指数', lev: '一级', content: '较为安全，感冒不易发生。'},
        {index: '洗车指数', lev: '四级', content: '不适宜，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。'},
        {index: '运动指数', lev: '二级', content: '气象条件较差，不太适宜户外体育运动，可进行户内体育运动，如篮、网球、乒乓球等。'}
    ];
    return {
        $data: data
    };
});