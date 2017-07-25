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
            # 提取第1段
            title1 = ''
            section1 = ''
            section1_start = False
            table_start = False
            for n in all_data:
                p = re.compile(u'一、(\S+)')
                p1 = re.compile(u'二、')
                p2 = re.compile(u'\s+表1\s+')
                p3 = re.compile(u'2、')
                v = re.findall(p, n)
                if len(v) == 1:
                    title1 = v[0]
                    section1_start = True
                    continue
                v = re.findall(p1, n)
                if len(v) == 1:
                    break
                v = re.findall(p2, n)
                v1 = re.findall(p3, n)
                if len(v) == 1:
                    table_start = True
                if len(v1) == 1:
                    table_start = False
                if table_start:
                    continue
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
            section1 += '</p>'
            data.append({'title1': title1, 'section1': section1})
            # 提取第2段
            title2 = ''
            section2 = ''
            section2_start = False
            for n in all_data:
                p = re.compile(u'二、(\S+)')
                p1 = re.compile(u'三、')
                v = re.findall(p, n)
                if len(v) == 1:
                    title2 = v[0]
                    section2_start = True
                    continue
                v = re.findall(p1, n)
                if len(v) == 1:
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
            section2 += '</p>'
            data.append({'title2': title2, 'section2': section2})
            # 提取第3段
            title3 = ''
            section3 = ''
            section3_start = False
            for n in all_data:
                p = re.compile(u'三、(\S+)')
                p1 = re.compile(u'四、')
                v = re.findall(p, n)
                if len(v) == 1:
                    title3 = v[0]
                    section3_start = True
                    continue
                v = re.findall(p1, n)
                if len(v) == 1:
                    break
                if section3_start:
                    if n.startswith(u' '):
                        if section3:
                            section3 += '</p><p>' + n.strip()
                        else:
                            section3 += '<p>' + n.strip()
                    else:
                        if section3:
                            section3 += n.strip()
                        else:
                            section3 += '<p>' + n.strip()
            section3 += '</p>'
            data.append({'title3': title3, 'section3': section3})
            # 提取第4段
            title4 = ''
            section4 = ''
            section4_start = False
            for n in all_data:
                p = re.compile(u'四、(\S+)')
                v = re.findall(p, n)
                if len(v) == 1:
                    title4 = v[0]
                    section4_start = True
                    continue
                if section4_start:
                    if n.startswith(u' '):
                        if section4:
                            section4 += '</p><p>' + n.strip()
                        else:
                            section4 += '<p>' + n.strip()
                    else:
                        if section4:
                            section4 += n.strip()
                        else:
                            section4 += '<p>' + n.strip()
            section4 += '</p>'
            data.append({'title4': title4, 'section4': section4})
            # 提取表1数据
            table1_start = False
            p1 = re.compile(u'\s+表1\s+(\S+)')
            table1_title = ''
            table1_data = []
            p2 = re.compile(u'2、')
            for n in all_data:
                v = re.findall(p1, n)
                if len(v) == 1:
                    table1_title = v[0]
                    table1_start = True
                    continue
                v = re.findall(p2, n)
                if len(v) == 1:
                    table1_start = False
                if table1_start:
                    p = re.compile('\S+')
                    v = re.findall(p, n)
                    if len(v) > 1:
                        table1_data.append({1: '', 2: '', 3: '', 4: '', 5: '',
                                            6: '', 7: '', 8: '', 9: ''})
                        for x in range(len(v)):
                            table1_data[len(table1_data) - 1][x+1] = v[x]
            data.append({'table1_title': u'表1：'+table1_title, 'table1_data': table1_data})

        self.write(json.dumps(data))
