#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
import base64
import re
import json
import datetime
from tornado.web import RequestHandler
from ..settings import DATA_PATH


class RainChart(RequestHandler):
    def post(self, *args, **kwargs):
        data = {'title': '', 'data': []}
        now = datetime.datetime.now()       # 当前时间
        last_day = now + datetime.timedelta(days=-1)    # 昨天
        year = now.year
        month = now.month
        day = last_day.day
        hour = now.hour

        if hour >= 16:
            day = now.day

        if month < 10:
            month_str = '0' + str(month)
        else:
            month_str = str(month)
        if day < 10:
            day_str = '0' + str(day)
        else:
            day_str = str(day)

        try:
            with open(DATA_PATH + '\\myl' + month_str + day_str + '16.txt') as f:
                temp = []
                pattern = re.compile('(\d+)')   # 搜索数字
                for line in f:
                    temp.append(line.decode('gbk'))

                if len(temp) == 9:
                    y = re.findall(pattern, temp[0])    # 查看文件的发布年份
                    if y and int(y[0]) == year:         # 发布年是今年
                        data['title'] = temp[0].strip()
                        for n in range(1, 9):
                            area = temp[n].split(u'：')[0]
                            value = float(temp[n].split(u'：')[1].strip())
                            if area == u'金华':
                                data['data'].append({'name': u'金东区', 'value': value})
                                data['data'].append({'name': u'婺城区', 'value': value})
                            elif area == u'兰溪':
                                data['data'].append({'name': u'兰溪市', 'value': value})
                            elif area == u'义乌':
                                data['data'].append({'name': u'义乌市', 'value': value})
                            elif area == u'东阳':
                                data['data'].append({'name': u'东阳市', 'value': value})
                            elif area == u'浦江':
                                data['data'].append({'name': u'浦江县', 'value': value})
                            elif area == u'永康':
                                data['data'].append({'name': u'永康市', 'value': value})
                            elif area == u'武义':
                                data['data'].append({'name': u'武义县', 'value': value})
                            elif area == u'磐安':
                                data['data'].append({'name': u'磐安县', 'value': value})
        except IOError as e:
            print e.args[1]
        self.write(json.dumps(data))
        # filename = self.get_argument('filename', None)
        # if filename:
        #     data = ''
        #     try:
        #         f = open(DATA_PATH + '\\rain\\' + filename + '.jpg', 'rb')
        #         data = base64.b64encode(f.read())
        #     except Exception as e:
        #         data = ''
        #         print e.message
        #     self.write(json.dumps(data))
        # else:
        #     data = []
        #     for files in os.listdir(DATA_PATH + '\\' + 'rain'):
        #         data.append(files)
        #     self.write(json.dumps(data))
