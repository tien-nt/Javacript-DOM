const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is:',banner.nodeType);
console.log('#page-banner node Name is:',banner.nodeName);
console.log('#page-banner node child nodes is:',banner.hasChildNodes());

console.log('#page-banner node child nodes is:',banner.cloneNode(true));
