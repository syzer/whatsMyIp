import test from 'ava'
import whatsMyIp from './whatsMyIp'

test('Assert type', async t => {
  t.deepEqual(typeof whatsMyIp, 'function') // Object.is doesn't support Function... yet
})

test('Can get Ips', async t => {
  const myIps = await whatsMyIp(666)

  return Promise
    .all(myIps)
    // .then(console.warn)
    .then(ips =>
      ips.map(([url, qrCode]) =>{
        t.regex(url, /http:/)
        t.regex(url, /666/)
      }))
})

test('Can get Ips with default port', async t => {
  const myIps = await whatsMyIp()

  return Promise
    .all(myIps)
    // .then(console.warn)
    .then(ips =>
      ips.map(([url, qrCode]) =>{
        t.regex(url, /http:/)
        t.regex(url, /3000/)
      }))
})

test('Can with es2015', async t => {
  const whatsMyIps = require('./whatsMyIp.compiled').default
  const myIps = await whatsMyIps()

  return Promise
    .all(myIps)
    // .then(console.warn)
    .then(ips =>
      ips.map(([url, qrCode]) =>{
        t.regex(url, /http:/)
        t.regex(url, /3000/)
      }))
})

// TODO cli usage
