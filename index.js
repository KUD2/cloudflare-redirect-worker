const Router = require('./router')
const Routes = require('./routes')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const r = new Router()
    for (const path in Routes) {
        r.get(`/${path}`.toLowerCase(), () => {
            url = request.url.split('?');
            url[0] = Routes[path];
            return Response.redirect(url.join('?'), 301)
        });
    }

    const resp = await r.route(request)
    return resp
}
