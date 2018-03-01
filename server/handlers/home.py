#!/usr/bin/env python
# -*-coding: utf-8-*-
import datetime
import json
import re
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class Home(RequestHandler):
    def post(self, *args, **kwargs):
        data = {'all': ''}
        # 3小时天气预报
        file_three_weather = get_last_file('Ds')
        if file_three_weather:
            num = 1
            try:
                with open(DATA_PATH + '\\' + file_three_weather) as f:
                    for line in f:
                        temp = line.decode('gbk').strip()
                        if temp and not temp.startswith('-') and not temp.startswith(u'预报员代号'):
                            if num == 1:
                                data['all'] += "<p style='font-weight: bold;color:#2f77cc'>" + temp + '</p>'
                            else:
                                data['all'] += temp + '<br>'
                            num += 1
            except Exception as e:
                print e.message
        self.write(json.dumps(data))
