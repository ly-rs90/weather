#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
import json
import re
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class Week(RequestHandler):
    def post(self, *args, **kwargs):
        pattern = re.compile('\d+')
        data = []
        # 获取一周天气预报最新文件
        week_file = get_last_file('zb')
        if week_file:
            all_data = []
            with open(DATA_PATH + '\\' + week_file) as f:
                for line in f:
                    all_data.append(line.decode('gbk'))
            # 获取发布时间
            v = re.findall(pattern, all_data[1])
            if len(v) == 4:
                data.append({'time': v[0] + u'年' + v[1] + u'月' + v[2] + u'日' + v[3] + u'时'})
            else:
                data.append({'time': '-' + u'年' + '-' + u'月' + '-' + u'日' + '-' + u'时'})
            # 获取趋势描述
            data.append({'week_trend': all_data[5].strip()})
            # 获取具体分日预报
            detail_end = True
            for n in range(0, len(all_data)):
                temp = all_data[n].strip()
                if not temp:
                    detail_end = True
                if temp == u'具体分日预报：':
                    detail_end = False
                    continue
                if not detail_end:
                    temp = temp.split(u'，')
                    # 风力
                    wind = temp[len(temp) - 1]
                    # 温度
                    t = temp[len(temp) - 2]
                    v = re.findall(pattern, t)
                    t = v[0] + '~' + v[1]
                    # 日期
                    tm = temp[0].split(u'：')[0]
                    # 天气
                    w = temp[0].split(u'：')[1]
                    if w.endswith(u'多云'):
                        w = u'多云'
                    elif w.endswith(u'雨'):
                        if w.endswith(u'小雨'):
                            w = u'小雨'
                        elif w.endswith(u'大雨'):
                            w = u'大雨'
                        else:
                            w = u'小雨'
                    else:
                        w = u'晴'
                    # 天气描述
                    w1 = temp[1:len(temp) - 2]
                    detail = ''
                    for x in w1:
                        detail += x + u'，'
                    detail = temp[0].split(u'：')[1] + u'，' + detail
                    if detail.endswith(u'，'):
                        detail = detail[:len(detail)-1]
                    data.append({'time': tm, 'w': w, 'detail': detail, 'temp': t, 'wind': wind})
        self.write(json.dumps(data))
