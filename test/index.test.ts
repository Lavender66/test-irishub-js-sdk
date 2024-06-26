import * as iris from '../src';

test('Init Client', () => {
  const node = 'http://192.168.150.33:26657';

  const client = iris.newClient({ node });
  console.log('=======', client)
  // expect(client.config.chainId).toBe('iris');
  // expect(client.config.fee).toBe('600000000000000000');
  // expect(client.config.gas).toBe('200000');
  expect(client.config.network).toBe(iris.types.Network.Mainnet);
  expect(client.config.node).toBe(node);

  const chainId = 'test';
  const fee = { amount: '0.3', denom: 'iris' };
  const gas = '50000';
  const network = iris.types.Network.Testnet;

  client
    .withChainId(chainId)
    .withFee(fee)
    .withGas(gas)
    .withNetwork(network);
  expect(client.config.chainId).toBe(chainId);
  expect(client.config.fee).toBe(fee);
  expect(client.config.gas).toBe(gas);
  expect(client.config.network).toBe(network);
  expect(client.config.node).toBe(node);
});
