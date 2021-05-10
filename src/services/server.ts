import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName()
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        cratedAt() {
          return faker.date.recent(10)
        },
      }),
    },

    seeds(server) {
      server.createList('user', 150)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750 //To test loadings/spinners
      this.get('/users')
      this.post('/users')
      //Ensure avoid conflicts w/ Next.js API routes
      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
