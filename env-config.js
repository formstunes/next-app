const prod = process.env.NODE_ENV === 'production'

// conditionally set environment variables (no need to change them during production)
// apparently we need to send
module.exports = {
  'process.env.BACKEND_URL': prod ? '' : '',
}
