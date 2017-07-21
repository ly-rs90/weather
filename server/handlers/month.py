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
            climate_point_start = False
            climate_point = ''
            climate_summary_start = False
            climate_summary = ''
            trend_start = False
            trend = ''
            concrete_start = False
            concrete = []
            re_time_start = False
            re_time = ''
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
                    concrete_start = True
                    continue

                if climate_point_start:
                    if n.startswith(' '):
                        if climate_point:
                            climate_point += '</p><p>' + temp
                        else:
                            climate_point += '<p>' + temp
                    else:
                        climate_point += temp
                if climate_summary_start:
                    if n.startswith(' '):
                        if climate_summary:
                            climate_summary += '</p><p>' + temp
                        else:
                            climate_summary += '<p>' + temp
                    else:
                        climate_summary += temp
                if trend_start:
                    if n.startswith(' '):
                        if trend:
                            trend += '</p><p>' + temp
                        else:
                            trend += '<p>' + temp
                    else:
                        trend += temp
                if concrete_start:
                    p = re.compile('\d+')
                    v = re.findall(p, temp)
                    concrete.append((v[0], v[1]))
                    if len(concrete) == 4:
                        concrete_start = False
                if temp == u'金华市气象台':
                    re_time_start = True
                    continue
                if re_time_start:
                    re_time = temp
                    re_time_start = False
            # 获取月报名称
            data.append({'title': all_data[2].strip(), 'time': re_time})
            data.append({'climate_point': climate_point,
                         'climate_summary': climate_summary,
                         'trend': trend})
            data.append({'rain_num': concrete[0][0] + '~' + concrete[0][1] + u'毫米',
                         'rain_days': concrete[1][0] + '~' + concrete[1][1] + u'天',
                         'avg_temp': concrete[2][0] + '~' + concrete[2][1] + u'℃',
                         'max_temp': concrete[3][0] + '~' + concrete[3][1] + u'℃'})
        self.write(json.dumps(data))
