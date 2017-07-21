#!/usr/bin/env python
# -*-coding: utf-8-*-
import re
import json
from tornado.web import RequestHandler
from ..tools import get_last_file
from ..settings import DATA_PATH


class Month(RequestHandler):
    def post(self, *args, **kwargs):
        data = []
        month_file = get_last_file('YUE')
        if month_file:
            all_data = []
            with open(DATA_PATH + '\\' + month_file) as f:
                for line in f:
                    all_data.append(line.decode('gbk'))
            # 获取月报名称
            data.append({'title': all_data[2].strip(), 'time': u'2017年6月30日'})
            climate_point_start = False
            climate_point = ''
            climate_summary_start = False
            climate_summary = ''
            trend_start = False
            trend = ''
            for n in all_data:
                temp = n.strip()
                if temp.startswith(u'一、'):
                    climate_point_start = True
                    continue
                if temp.startswith(u'二、'):
                    climate_point += '</p>'
                    climate_summary_start = True
                    climate_point_start = False
                    continue
                if temp.startswith(u'三、'):
                    trend_start = True
                    climate_summary_start = False
                    continue
                if temp.startswith(u'四、'):
                    trend_start = False
                    continue

                if climate_point_start:
                    if n.startswith(' '):
                        if climate_point:
                            climate_point += '</p><p>' + temp
                        else:
                            climate_point += '<p>' + temp
                    else:
                        climate_point += temp
        self.write(json.dumps(data))
