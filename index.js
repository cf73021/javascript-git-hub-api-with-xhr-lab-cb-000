function getRepositories() {
  const name = document.getElementById("username").value
  const uri = rootURL + "/users/" + name + "/repos"
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories)
  req.open("GET", uri);
  req.send();
}
