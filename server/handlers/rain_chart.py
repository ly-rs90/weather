#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
import base64
import json
from tornado.web import RequestHandler
from ..settings import DATA_PATH


class RainChart(RequestHandler):
    def post(self, *args, **kwargs):
        filename = self.get_argument('filename', None)
        if filename:
            data = ''
            try:
                f = open(DATA_PATH + '\\rain\\' + filename + '.jpg', 'rb')
                data = base64.b64encode(f.read())
            except Exception as e:
                data = ''
                print e.message
            self.write(json.dumps(data))
        else:
            data = []
            for files in os.listdir(DATA_PATH + '\\' + 'rain'):
                data.append(files)
            self.write(json.dumps(data))
