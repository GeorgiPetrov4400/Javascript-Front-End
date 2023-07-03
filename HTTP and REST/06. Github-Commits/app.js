function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/';
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const loader = document.getElementById('loader');
    const usernameVal = username.value;
    const repoVal = repo.value;

    loader.style.display = 'block';
    fetch(`${BASE_URL}${usernameVal}/${repoVal}/commits`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        loader.style.display = 'none';
        data.forEach(({commit}) => {
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            commits.appendChild(li);
        })
    })
    .catch((err) => {
        console.error(err);
    })
}