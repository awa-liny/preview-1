var w=window.location.host;if(w=="clt.awaliny.top"){location.replace("https://collections.awaliny.top/")}
window.addEventListener('load', async () => {
    navigator.serviceWorker.register(`/service-worker.js?time=${new Date().getTime()}`)
        .then(async reg => {
            //安装成功，建议此处强刷新以立刻执行SW
            if (window.localStorage.getItem('install') != 'true') {
                window.localStorage.setItem('install', 'true');
                setTimeout(() => {
                    window.location.search = `?time=${new Date().getTime()}`
                }, 1000)
            }
        }).catch(err => {
            //安装失败，错误信息会由err传参
        })
});
