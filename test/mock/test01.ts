import {defineConfig, Method} from '../../src/main';

export default defineConfig({
    path: '',
    method: Method.GET,
    headers: {
        cookie: {
            required: true,
            _gid: {
                required: true,
                regExp: /xxx/,
            }
        }
    },
    delay: 1000,
    query: {

    },
    params: {

    },
    body: {

    },
    paramAll: {

    },
    validates: {
        method: Method.GET,
        query: {

        },
        params: {

        },
        body: {

        },
        paramAll: {

        },
        headers: {

        },
    },
    /*response: {
      body: {

      },
    },*/
    /*responseHeaders: {

    },
    responseStatus: '',
    responseStatusText: 'OK',
    responseJson: {

    },
    responseText: '',*/
    response: {},
    /*response(req, res) {
      return {

      };
    },*/

});
