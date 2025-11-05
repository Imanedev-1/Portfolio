import React from 'react';
import translations from './translations';

function translateText(text, lang) {
  if (lang === 'en' && translations[text] && translations[text].en) {
    console.log(`Translate "${text}" to "${translations[text].en}"`);
    return translations[text].en;
  }
  return text;
}

function WithTranslation({ children, lang }) {
  function recursiveTranslate(node) {
    if (typeof node === 'string') {
      return translateText(node, lang);
    }
    if (React.isValidElement(node)) {
      const newChildren = React.Children.map(node.props.children, recursiveTranslate);
      return React.cloneElement(node, { ...node.props }, newChildren);
    }
    return node;
  }

  const result = recursiveTranslate(children);
  console.log('WithTranslation result:', result);
  return <>{result}</>;
}

export default WithTranslation;
