import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const apiBlog = async (req, res) => {
  try {
    const { type } = req.body,
      urlStr = type === 'hunt' ? 'https://medium.com/feed/hoprhunt' : 'https://medium.com/feed/hoprnet',
      parser = new XMLParser();

    const response = await axios({
      method: 'GET',
      url: urlStr,
      headers: {
        Accept: 'application/xml',
      }
    });

    const data = parser.parse(response.data);
    res.status(200).json({ data: data?.rss?.channel?.item || [] });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default apiBlog;
