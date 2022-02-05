import axios from 'axios';
require('dotenv').config();

const apiBlog = async (req, res) => {
  const { type } = req.body,
    huntToken = process.env.BLOG_HUNT_TOKEN,
    urlStr = type === 'hunt' ?
      'https://api.medium.com/v1/users/1d748625f832f58bf6dba2a895a78c2f39bed9a861f0030d35438df48d68af93f/publications' : '';

  const response = await axios({
    method: 'GET',
    url: urlStr,
    headers: {
      Accept: 'application/json',
      'Authorization': `Bearer ${type === 'hunt' ? huntToken : ''}`,
    }
  });

  res.status(200).json(response.data);
};

export default apiBlog;
