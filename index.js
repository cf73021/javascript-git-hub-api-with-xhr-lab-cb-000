function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories)
  req.open("GET", uri);
  req.send();
}
