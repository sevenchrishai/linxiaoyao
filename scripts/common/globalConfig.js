if (!window.location.origin){
    window.location.origin = window.location.protocol + "//" +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '')
}
var _Origin = document.location.origin,
    globalConfig = {
        httpPath: _Origin + '/',
        statichttpPath: _Origin + '/linxiaoyao/'
    };
requirejs.config({
    baseUrl: globalConfig.statichttpPath + 'scripts/',
    paths: {
        'common': 'common',
        'pages': 'pages',
        'libs': 'libs',
        'jquery': 'libs/core',
        'avalon': 'libs/avalon'
    },

    shim: {
    }
});