'use strict'

// had enabled by egg
// exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}

exports.controllerValidate = {
  enable: true,
  package: '@jdcloud/egg-controller-validate'
}
