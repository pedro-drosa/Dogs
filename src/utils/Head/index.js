const Head = ({ title, description }) => {
  document.title = `${title} | Dogs`;
  document
    .querySelector('[name=description]')
    .setAttribute('description', description || '');

  return null;
};

export default Head;
