export default (env) => {
  if (env !== 'production') {
    return process.env.VUE_APP_LOCAL || 'http://192.168.10.2:3000'
  } else {
    return process.env.VUE_APP_REMOTE || window.location.origin
  }
}
