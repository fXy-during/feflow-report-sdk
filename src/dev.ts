// const Report = require('./index');
// const Http = require('http');
// const report = new Report({});
import URI from './api/config';

import rp from 'request-promise';

// report.report('dev');

// Http.request({
//   host: 'http://127.0.0.1:12639',
//   path: 'http://193.112.196.252/api/v1/report/command',
//   method: 'post',

// });

rp({
  method: 'POST',
  uri: URI.REPORT_URL,
  body: { command: 'dev' },
  json: true,
  proxy: URI.REPORT_PROXY
})
  .then(res => {
    console.log('got report response', res);
  })
  .catch(e => {
    console.log('feflow report fail', e);
  });
