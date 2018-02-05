#!/usr/bin/env python
# -*-coding: utf-8-*-
import datetime
import json
import re
from tornado.web import RequestHandler
from ..settings import DATA_PATH


class OverAll(RequestHandler):
    def post(self, *args, **kwargs):
        over_all = {'today': [], 'tomorrow': []}
        now = datetime.datetime.now()
        year = now.year
        month = now.month
        day = now.day

        month_str = str(month)
        day_str = str(day)
        if month < 10:
            month_str = '0' + str(month)
        if day < 10:
            day_str = '0' + str(day)

        # 今天生活指数
        try:
            with open(DATA_PATH + '\\SHZS' + month_str + day_str + '.06') as f:
                line_num = 0
                for line in f:
                    if line_num == 0:
                        pattern = re.compile('(\d+)')
                        first_line = line.decode('gbk')
                        num = re.findall(pattern, first_line)
                        if num and int(num[0]) != year:
                            break
                        line_num += 1

                    temp = line.decode('gbk').strip()
                    if temp:
                        temp_list = temp.split(u'，')
                        if len(temp_list) < 3:
                            continue

                        lev = temp_list[1]
                        info = u'，'.join(temp_list[2:])
                        if temp_list[0].endswith(u'洗车指数'):
                            over_all['today'].append({
                                'id': 1, 'type': u'洗车指数', 'pic': 'pic1',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'晾晒指数'):
                            over_all['today'].append({
                                'id': 2, 'type': u'晾晒指数', 'pic': 'pic2',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'晨练指数'):
                            over_all['today'].append({
                                'id': 3, 'type': u'晨练指数', 'pic': 'pic3',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'穿衣指数'):
                            over_all['today'].append({
                                'id': 4, 'type': u'穿衣指数', 'pic': 'pic4',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'感冒指数'):
                            over_all['today'].append({
                                'id': 5, 'type': u'感冒指数', 'pic': 'pic5',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'霉变指数'):
                            over_all['today'].append({
                                'id': 6, 'type': u'霉变指数', 'pic': 'pic6',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'舒适度指数'):
                            over_all['today'].append({
                                'id': 7, 'type': u'舒适度指数', 'pic': 'pic7',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'运动指数'):
                            over_all['today'].append({
                                'id': 8, 'type': u'运动指数', 'pic': 'pic8',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'中暑指数'):
                            over_all['today'].append({
                                'id': 9, 'type': u'中暑指数', 'pic': 'pic9',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'紫外线指数'):
                            over_all['today'].append({
                                'id': 10, 'type': u'紫外线指数', 'pic': 'pic10',
                                'time': str(year)+'/'+str(month)+'/'+str(day)+' '+'06:00',
                                'lev': lev, 'tips': info
                            })

        except Exception as e:
            print e.message

        # 明天生活指数
        try:
            with open(DATA_PATH + '\\SHZS' + month_str + day_str + '.16') as f:
                line_num = 0
                for line in f:
                    if line_num == 0:
                        pattern = re.compile('(\d+)')
                        first_line = line.decode('gbk')
                        num = re.findall(pattern, first_line)
                        if num and int(num[0]) != year:
                            break
                        line_num += 1

                    temp = line.decode('gbk').strip()
                    if temp:
                        temp_list = temp.split(u'，')
                        if len(temp_list) < 3:
                            continue

                        lev = temp_list[1]
                        info = u'，'.join(temp_list[2:])
                        if temp_list[0].endswith(u'洗车指数'):
                            over_all['tomorrow'].append({
                                'id': 1, 'type': u'洗车指数', 'pic': 'pic1',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'晾晒指数'):
                            over_all['tomorrow'].append({
                                'id': 2, 'type': u'晾晒指数', 'pic': 'pic2',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'晨练指数'):
                            over_all['tomorrow'].append({
                                'id': 3, 'type': u'晨练指数', 'pic': 'pic3',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'穿衣指数'):
                            over_all['tomorrow'].append({
                                'id': 4, 'type': u'穿衣指数', 'pic': 'pic4',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'感冒指数'):
                            over_all['tomorrow'].append({
                                'id': 5, 'type': u'感冒指数', 'pic': 'pic5',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'霉变指数'):
                            over_all['tomorrow'].append({
                                'id': 6, 'type': u'霉变指数', 'pic': 'pic6',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'舒适度指数'):
                            over_all['tomorrow'].append({
                                'id': 7, 'type': u'舒适度指数', 'pic': 'pic7',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'运动指数'):
                            over_all['tomorrow'].append({
                                'id': 8, 'type': u'运动指数', 'pic': 'pic8',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                                })
                        elif temp_list[0].endswith(u'中暑指数'):
                            over_all['tomorrow'].append({
                                'id': 9, 'type': u'中暑指数', 'pic': 'pic9',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
                        elif temp_list[0].endswith(u'紫外线指数'):
                            over_all['tomorrow'].append({
                                'id': 10, 'type': u'紫外线指数', 'pic': 'pic10',
                                'time': str(year) + '/' + str(month) + '/' + str(day) + ' ' + '16:00',
                                'lev': lev, 'tips': info
                            })
        except Exception as e:
            print e.message
        self.write(json.dumps(over_all))
