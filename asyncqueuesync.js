const iterator = (hook, next) => {
    if (this.pending !== route) {
        return abort()
    }
    try {
        hook(route, current, (to) => {
            if (to === false || isError(to)) {
                this.ensureURL(true)
                abort(to)
            } else if (
                typeof to === 'string' ||
                (typeof to === 'object' && (
                typeof to.path === 'string' ||
                typeof to.name === 'string'
                ))
            ) {
                abort()
                if (typeof to === 'object' && to.replace) {
                this.replace(to)
                } else {
                this.push(to)
                }
            } else {
                next(to)
            }
        })
    } catch (e) {
        abort(e)
    }
}

function runQueue (queue, fn, cb) {
    const step = index => { 
        if (index >= queue.length) {
            cb()
        } else {
            if (queue[index]) {
                fn(queue[index], () => {
                   step(index + 1)
                })
            } else {
                step(index + 1)
            }
        }
    }
    step(0)
}
runQueue(queue, iterator, () => {
    const postEnterCbs = []
    const isValid = () => this.current === route
    const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
    const queue = enterGuards.concat(this.router.resolveHooks)
    runQueue(queue, iterator, () => { 
        if (this.pending !== route) {
        return abort()
        }
        this.pending = null
        onComplete(route)
        if (this.router.app) {
        this.router.app.$nextTick(() => {
            postEnterCbs.forEach(cb => { cb() })
        })
        }
    })
})

// https://ustbhuangyi.github.io/vue-analysis/v2/vue-router/transition-to.html#%E5%AF%BC%E8%88%AA%E5%AE%88%E5%8D%AB