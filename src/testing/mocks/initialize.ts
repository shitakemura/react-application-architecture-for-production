import { IS_SERVER } from '@/config/constants'

const initializeMocks = async () => {
  if (IS_SERVER) {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start()
  }
}

initializeMocks()
