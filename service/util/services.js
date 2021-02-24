export const fetchPrice = async () => {
  const oResult = await fetch(
    'https://api.etherscan.io/api?module=proxy&action=eth_call&to=0xb249e00c0d861aaad716f46a47a340c22cd941fd&data=0x15e84af90000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000f5581dfefd8fb0e4aec526be659cfab1f8c781da&tag=latest',
    {
      method: 'GET',
    },
  );

  if (oResult.ok) {
    const oJson = await oResult.json();
    const data = parseInt(oJson.result, 16) / 1e18;

    return data;
  }
};
