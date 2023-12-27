export default function toElement(HTMLString) {
  const template = document.createElement('template');
  template.innerHTML = HTMLString;
  return template.content.firstChild;
}
