#!/usr/bin/env python
# -*-coding: utf-8-*-
import re
import json
from tornado.web import RequestHandler
from ..tools import get_last_file
from ..settings import DATA_PATH


class Trend(RequestHandler):
    def post(self, *args, **kwargs):
        data = []
        all_data = []
        # 获取发布日期的正则表达式
        p1 = re.compile(u'\s+(\d+\u5e74\d+\u6708\d+\u65e5)\s')
        # 获取发布期数
        p2 = re.compile(u'\s+\u7b2c\d+\u671f')
        trend_file = get_last_file('CQY')
        if trend_file:
            with open(DATA_PATH + '\\' + trend_file) as f:
                for line in f:
                    all_data.append(line.decode('gbk'))
            for n in all_data:
                v = re.findall(p1, n)
                v1 = re.findall(p2, n)
                if len(v) == 1 and len(v1) == 1:
                    data.append({'time': v[0], 'title': all_data[0], 'num': v1[0]})
                    break
        self.write(json.dumps(data))
