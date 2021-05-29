import cors from 'cors'
import helmet from 'helmet'

import { Router } from 'express'
import AuthController from './controllers/AuthController'
import recoveyController from './controllers/recoveyController'
import UserController from './controllers/UserController'
import checkCredentials from './middlewares/checkCredentials'

const routes = new Router()

routes.use(cors())
routes.use(helmet())

routes.post('/auth', AuthController.store)
routes.post('/users', UserController.store)

routes.post('/recovery', recoveyController.store)
routes.put('/recovery', recoveyController.update)

routes.use(checkCredentials)
routes.get('/users', UserController.show)
routes.put('/users', UserController.update)
routes.delete('/users', UserController.delete)

export default routes
