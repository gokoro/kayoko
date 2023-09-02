const Fastify = require('fastify')

const fastify = Fastify()

fastify.post('/logs', (res, req) => {
  console.log(res.body)
  req.send()
})

;(() => {
  fastify.listen({ host: '0.0.0.0', port: '3000' }, () => {
    console.log('ready!')
  })
})()
