#!/usr/bin/env python
# -*-coding: utf-8-*-
import os
from tornado.web import Application, StaticFileHandler
from tornado.ioloop import IOLoop
from tornado.options import define, options

define('port', default=80, help='server run on the given port.', type=int)

file_root = os.path.dirname(__file__)


class Weather(Application):
    def __init__(self):
        handlers = [
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
