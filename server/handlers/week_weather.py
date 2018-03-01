#!/usr/bin/env python
# -*-coding: utf-8-*-
import json
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class WeekWeather(RequestHandler):
    def post(self, *args, **kwargs):
        data = {'all': ''}
        # 获取一周天气预报最新文件
        week_file = get_last_file('zb')

        if week_file:
            try:
                with open(DATA_PATH + '\\' + week_file) as f:
                    for line in f:
                        temp = line.decode('gbk').strip()
                        if temp:
                            data['all'] += '<p>' + temp + '</p>'
            except Exception as e:
                data = ''
                print e.message
        self.write(json.dumps(data))
