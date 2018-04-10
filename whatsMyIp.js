import { map, pipe, tap } from 'ramda'
import execa from 'execa'
import ip from 'ip'
import qrcode from 'qrcode'

const defaultPort = process.env.PORT || 3000
const ipAddress = process.env.IP || ip.address()
const ipPublicAddress = execa.shell('curl ipinfo.io/ip')
  .then(({ stdout }) => stdout)
  .catch(tap(() => console.error('You are offline!')))

export default (port = defaultPort) =>
  Promise.all([ipAddress, ipPublicAddress])
    .then(pipe(
      map(e => `http://${e}:${port}`),
      tap(console.log),
      map(e => [
        e,
        qrcode.toString(e, {
          errorCorrectionLevel: 'H',
          type: 'terminal',
        })
          .then(console.log)]))) // warning not A+ promise
    .catch(console.error)
