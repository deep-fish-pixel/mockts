// import path from "path";

export default function mockServer(options: { prefix?: string | string[]; rootPath?: string }) {
    const _options = {
        prefix: '/api',
        rootPath: './mock',
        ...options,
    };
    const prefixes = typeof _options.prefix === 'string' ? [_options.prefix] : _options.prefix;
    return function (request, response, next) {
        prefixes.some(prefix => {
            if (request.path.indexOf(prefix) === 0) {
                console.log('prefix====================')
                /*try {
                    if (validate(request, response)) {

                    }
                } catch (e) {
                    response.status(404).send(e.message);
                }*/
            } else {
                next();
            }
        });

    };
}
