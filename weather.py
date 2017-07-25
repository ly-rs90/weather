#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
from tornado.web import Application, StaticFileHandler
from tornado.ioloop import IOLoop
from tornado.options import define, options
from server.handlers.rain import Rain
from server.handlers.ten import Ten
from server.handlers.week import Week
from server.handlers.month import Month
from server.handlers.future import Future
from server.handlers.trend import Trend
from server.handlers.season import Season

define('port', default=80, help='server run on the given port.', type=int)

file_root = os.path.dirname(__file__)


class Weather(Application):
    def __init__(self):
        handlers = [
            (r'/rain', Rain),
            (r'/ten', Ten),
            (r'/week', Week),
            (r'/month', Month),
            (r'/future', Future),
            (r'/trend', Trend),
            (r'/season', Season),
            (r'/(.*)', StaticFileHandler, {'path': file_root, 'default_filename': 'index.html'})
        ]
        settings = dict(
            debug=True,
            cookie_secret='MY5qf2/oSCeLqtlelHFEEVTeII1mZE/KobHmruHkcVw='
        )
        Application.__init__(self, handlers, **settings)


def main():
    options.parse_command_line()
    w = Weather()
    w.listen(options.port)
    IOLoop.current().start()

if __name__ == '__main__':
    main()
