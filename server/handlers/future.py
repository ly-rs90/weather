#!/usr/bin/env python
# -*-coding: utf-8-*-
import re
import json
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class Future(RequestHandler):
    def post(self, *args, **kwargs):
        data = []
        all_data = []
        p = re.compile('\d+')
        # 获取最新文件
        future_file = get_last_file('YD')
        if future_file:
            with open(DATA_PATH + '\\' + future_file) as f:
                for line in f:
                    all_data.append(line.decode('gbk'))

            # 获取发布时间
            v = re.findall(p, all_data[0])
            re_time = v[0] + u'年' + v[1] + u'月' + v[2] + u'日' + v[3] + u'时'
            data.append({'time': re_time})
            # 获取天气情况
            for x in range(1, 4):
                temp = all_data[x].split(':')
                if temp[1].strip().endswith(u'多云'):
                    w = u'多云'
                elif temp[1].strip().endswith(u'雨'):
                    if temp[1].strip().endswith(u'大雨'):
                        w = u'大雨'
                    elif temp[1].strip().endswith(u'小雨'):
                        w = u'小雨'
                    elif temp[1].strip().endswith(u'雷阵雨'):
                        w = u'雷阵雨'
                    else:
                        w = u'小雨'
                else:
                    w = u'晴'
                data.append({'type': 'weather', 'value': w, 'title': temp[0], 'detail': temp[1].strip()})
            # 获取温度情况
            temp = all_data[4].split(':')
            v = re.findall(p, temp[1])
            data.append({'type': 'temperature-high', 'value': v[0], 'title': temp[0]})

            temp = all_data[5].split(':')
            v = re.findall(p, temp[1])
            data.append({'type': 'temperature-low', 'value': v[0], 'title': temp[0]})

            temp = all_data[6].split(':')
            v = re.findall(p, temp[1])
            data.append({'type': 'temperature-avg', 'value': v[0], 'title': temp[0]})
            # 获取湿度信息
            temp = all_data[7].split(':')
            v = re.findall(p, temp[1])
            data.append({'type': 'dampness', 'value': v[0] + '%', 'title': temp[0]})
        self.write(json.dumps(data))
