/**
 * CI scripts for middlewares
<<<<<<< HEAD
 * @module sugo-ci-middleware
=======
 * @module sugo-middleware-ci
>>>>>>> 3543838672011f96091a0fe23a7338e1851f0a1f
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get build () { return d(require('./build')) },
  get cover () { return d(require('./cover')) },
  get format () { return d(require('./format')) },
  get release () { return d(require('./release')) },
  get report () { return d(require('./report')) },
  get share () { return d(require('./share')) },
  get test () { return d(require('./test')) },
  get update () { return d(require('./update')) }
}
