#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
import re
from .settings import DATA_PATH


# 根据文件名前缀获取最新的文件（只适用于文件名仅根据日期数字就能区分的情况）
def get_last_file(prefix):
    file_name = ''
    last_time = '0'
    p = re.compile('\d+')
    for files in os.listdir(DATA_PATH):
        file_temp_name = files.decode('gbk')
        if file_temp_name.startswith(prefix):
            v = re.findall(p, file_temp_name)
            temp = '0'
            for n in v:
                temp += n
            if int(temp) > int(last_time):
                last_time = v[0]
                file_name = file_temp_name
    return file_name
