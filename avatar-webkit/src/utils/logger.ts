export const logger = (str: string) =>
  fetch('https://rrp-reasons-san-manufacturer.trycloudflare.com/logs', {
    method: 'post',
    body: str,
  })
