#!/usr/bin/env python
# -*-coding: utf-8-*-
import json
import os
import re
from tornado.web import RequestHandler
from ..settings import DATA_PATH


class Ten(RequestHandler):
    def post(self, *args, **kwargs):
        data = []   # 待返回的数据
        # 查询最新的寻旬预报文件
        ten_file = ''
        last_time = '0'
        for files in os.listdir(DATA_PATH):
            file_name = files.decode('gbk')
            if file_name.startswith('XUN'):
                p = re.compile('\d+[a-c]')
                t = '0'
                v = re.findall(p, file_name)
                temp = v[0]
                if temp.endswith('a'):
                    temp = temp[:len(temp)-1] + '1'
                if temp.endswith('b'):
                    temp = temp[:len(temp) - 1] + '2'
                if temp.endswith('c'):
                    temp = temp[:len(temp) - 1] + '3'

                if int(temp) > int(last_time):
                    last_time = temp
                    ten_file = file_name
        if ten_file:
            all_content = []
            with open(DATA_PATH+'\\'+ten_file) as f:
                for line in f:
                    all_content.append(line.decode('gbk'))

            summary = ''    # 前期天气概况
            summary_end = False
            trend = ''      # 本旬天气趋势
            trend_end = True
            detail = []
            detail_end = True
            re_time = ''   # 发布时间
            re_time_end = True

            for n in range(5, len(all_content)):
                temp = all_content[n].strip()
                if temp.startswith(u'二、本旬天气趋势'):
                    summary += '</p>'
                    summary_end = True
                    trend_end = False
                    continue
                if temp.startswith(u'三、具体要素预报'):
                    trend += '</p>'
                    trend_end = True
                    detail_end = False
                    continue
                if temp.startswith(u'金华市气象台'):
                    detail_end = True
                    re_time_end = False
                    continue
                if not summary_end:
                    if all_content[n].startswith(' '):
                        if summary:
                            summary += '</p><p>' + all_content[n].strip()
                        else:
                            summary += '<p>' + all_content[n].strip()
                    else:
                        summary += all_content[n].strip()
                if not trend_end:
                    if all_content[n].startswith(' '):
                        if trend:
                            trend += '</p><p>' + all_content[n].strip()
                        else:
                            trend += '<p>' + all_content[n].strip()
                    else:
                        trend += all_content[n].strip()
                if not detail_end:
                    p = re.compile('\d+')
                    v = re.findall(p, temp)
                    if len(v) == 2:
                        detail.append((v[0], v[1]))
                if not re_time_end:
                    re_time = all_content[n].strip()
                    re_time_end = True
            data.append({'title': all_content[2].strip(), 'time': re_time})
            data.append({'summary': summary, 'trend': trend})
            if len(detail) == 4:
                avg_temp = detail[0][0] + u'～' + detail[0][1] + u'℃'
                max_temp = detail[1][0] + u'～' + detail[1][1] + u'℃'
                rain_num = detail[2][0] + u'～' + detail[2][1] + u'毫米'
                rain_days = detail[3][0] + u'～' + detail[3][1] + u'日'
                data.append({'avg_temp': avg_temp, 'max_temp': max_temp, 'rain_num': rain_num, 'rain_days': rain_days})
        self.write(json.dumps(data))
