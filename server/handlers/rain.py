#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
import re
import json
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class Rain(RequestHandler):
    def post(self, *args, **kwargs):
        data = []   # 待返回的数据
        # 查找最新降水概率文件
        rain_file = get_last_file('pp')
        if rain_file:
            line_num = 0
            pattern = re.compile('(\d+)%')
            with open(DATA_PATH+'\\'+rain_file) as f:
                for line in f:
                    if line_num == 2:       # 发布时间
                        temp = line.decode('gbk')
                        p = re.compile('\d+')
                        v = re.findall(p, temp)
                        data.append({'time': v[0]+u'年'+v[1]+u'月'+v[2]+u'日 '+v[3]+':'+v[4]+':'+v[5]})
                    if line_num == 6:       # 白天降水概率
                        temp = line.decode('gbk')
                        v = re.findall(pattern, temp)
                        data.append({'time': u'今天白天',
                                    'jinhua': v[0]+'%', 'pujiang': v[1]+'%',
                                    'lanxi': v[2] + '%', 'yiwu': v[3]+'%',
                                    'dongyang': v[4] + '%', 'wuyi': v[5]+'%',
                                    'yongkang': v[6] + '%'})
                    if line_num == 7:       # 夜里降水概率
                        temp = line.decode('gbk')
                        v = re.findall(pattern, temp)
                        data.append({'time': u'今天夜里',
                                    'jinhua': v[0] + '%', 'pujiang': v[1] + '%',
                                    'lanxi': v[2] + '%', 'yiwu': v[3] + '%',
                                    'dongyang': v[4] + '%', 'wuyi': v[5] + '%',
                                    'yongkang': v[6] + '%'})
                    if line_num == 8:       # 24小时降水概率
                        temp = line.decode('gbk')
                        v = re.findall(pattern, temp)
                        data.append({'time': u'24小时',
                                    'jinhua': v[0] + '%', 'pujiang': v[1] + '%',
                                    'lanxi': v[2] + '%', 'yiwu': v[3] + '%',
                                    'dongyang': v[4] + '%', 'wuyi': v[5] + '%',
                                    'yongkang': v[6] + '%'})
                    line_num += 1
        self.write(json.dumps(data))
