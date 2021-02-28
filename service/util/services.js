export const fetchPrice = async () => {
  const oResult = await fetch(
    'https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x92c2fC5F306405eaB0fF0958f6D85d7F8892CF4D&tag=latest&data=0902f1ac',
    {
      method: 'GET',
    }
  );

  if (oResult.ok) {
    const oJson = await oResult.json();
    const data = oJson.result.slice(2);
    const reserve0 = parseInt(data.slice(0, 64), 16);
    const reserve1 = parseInt(data.slice(64, 64 * 2), 16);

    return reserve0 / reserve1;
  }
};
