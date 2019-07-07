// this function will be used to get a search parameter from the url of current page

export default function getInfoFromURL() {
  const pathname = window.location.pathname;
  const splitPathname = pathname.split('/')
  const info = splitPathname[splitPathname.length-1];
  return info;
}