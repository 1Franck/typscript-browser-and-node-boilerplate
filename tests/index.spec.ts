import { HelloWorld } from '../src'

test('HelloWorldTest', async () => {
  expect(HelloWorld()).toEqual('Hello World')
})
