#!/usr/bin/env python
# -*-coding: utf-8-*-
import datetime
import json
import re
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class Weather3(RequestHandler):
    def post(self, *args, **kwargs):
        data = {
            'all': '',
            'pujiang': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'lanxi': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'wucheng': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'jindong': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'yiwu': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'dongyang': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'panan': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'wuyi': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
            'yongkang': {'time': '', 'weather': '', 'temp': '', 'wind': ''},
        }

        # 获取最新全市3小时天气预报
        file_three_weather = get_last_file('Ds')
        if file_three_weather:
            try:
                with open(DATA_PATH + '\\' + file_three_weather) as f:
                    for line in f:
                        temp = line.decode('gbk').strip()
                        if temp:
                            data['all'] += '<p>' + temp + '</p>'
            except Exception as e:
                print e.message
        self.write(json.dumps(data))
