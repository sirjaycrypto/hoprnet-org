import parse from 'html-react-parser';
import handler from 'next-translate/useTranslation';

/**
 * Translate HTML and text
 * @returns text or React Node
 */
export function useTranslation() {
  const { t } = handler();
  function isHtml(str) {
    return /<\/?[^>]*>/.test(str);
  }
  function translate(tag) {
    let element = t(tag);
    if (isHtml(element)) {
      return parse(element);
    }
    return element;
  }
  return { t: translate };
}
