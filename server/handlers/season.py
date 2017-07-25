#!/usr/bin/env python
# -*-coding: utf-8-*-
import re
import json
from tornado.web import RequestHandler
from ..settings import DATA_PATH
from ..tools import get_last_file


class Season(RequestHandler):
    def post(self, *args, **kwargs):
        data = []
        all_data = []
        season_file = get_last_file('JHZY')
        if season_file:
            with open(DATA_PATH + '\\' + season_file) as f:
                for line in f:
                    all_data.append(line.decode('gbk'))
            # 搜索发布时间
            p = re.compile(u'^\d+\u5e74\d+\u6708\d+\u65e5\d+\u65f6')
            for n in all_data:
                v = re.findall(p, n)
                if len(v) == 1:
                    data.append({'time': v[0]})
                    break
            # 提取累积雨量数据
            rain_data = []
            rain_data_start = False
            for n in all_data:
                p = re.compile(u'^\u6885\u96e8\u671f')
                v = re.findall(p, n)
                if len(v) != 1 and not rain_data_start:
                    continue
                else:
                    rain_data_start = True
                if rain_data_start:
                    p = re.compile(u'\S+')
                    v = re.findall(p, n)
                    if len(v) == 9:
                        rain_data.append({'item': v[0], 'jinhua': v[1], 'lanxi': v[2], 'dongyang': v[3],
                                          'yiwu': v[4], 'wuyi': v[5], 'yongkang': v[6], 'pujiang': v[7],
                                          'panan': v[8]})
                        if len(rain_data) == 3:
                            break
            for n in rain_data:
                data.append(n)
            # 取表名
            for n in all_data:
                p = re.compile(u'^\u88681(\S+)')
                v = re.findall(p, n)
                if len(v) == 1:
                    data.append({'footer': u'表1：' + v[0]})
                    break
            # 取备注
            mark = ''
            mark_start = False
            for n in all_data:
                p = re.compile(u'^\u6ce8\uff1a')
                p1 = re.compile(u'^\u4e8c\u3001')
                v = re.findall(p, n)
                if len(v) == 1:
                    mark_start = True
                v = re.findall(p1, n)
                if len(v) == 1:
                    break
                if mark_start:
                    mark += n.strip()
            data.append({'mark': mark})
            # 获取第一段
            title1 = ''
            section1 = ''
            section1_start = False
            for n in all_data:
                # 标题
                p = re.compile(u'^\u4e00\u3001(\S+)')
                p1 = re.compile(u'^\u88681')
                v = re.findall(p, n)
                if len(v) == 1:
                    title1 = v[0]
                    section1_start = True
                    continue
                v = re.findall(p1, n)
                if len(v) == 1:
                    section1 += '</p>'
                    break
                if section1_start:
                    if n.startswith(u' '):
                        if section1:
                            section1 += '</p><p>' + n.strip()
                        else:
                            section1 += '<p>' + n.strip()
                    else:
                        if section1:
                            section1 += n.strip()
                        else:
                            section1 += '<p>' + n.strip()
            data.append({'title1': title1, 'section1': section1})
            # 获取第二段
            title2 = ''
            section2 = ''
            section2_start = False
            for n in all_data:
                # 标题
                p = re.compile(u'^\u4e8c\u3001(\S+)')
                p1 = re.compile(u'\u91d1\u534e\u5e02\u6c14\u8c61\u53f0')
                v = re.findall(p, n)
                if len(v) == 1:
                    title2 = v[0]
                    section2_start = True
                    continue
                v = re.findall(p1, n)
                if len(v) == 1:
                    section2 += '</p>'
                    break
                if section2_start:
                    if n.startswith(u' '):
                        if section2:
                            section2 += '</p><p>' + n.strip()
                        else:
                            section2 += '<p>' + n.strip()
                    else:
                        if section2:
                            section2 += n.strip()
                        else:
                            section2 += '<p>' + n.strip()
            data.append({'title2': title2, 'section2': section2})
        self.write(json.dumps(data))
