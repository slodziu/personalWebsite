
class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    put(endpoint, body) {
        return this.#send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this.#send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this.#send("delete", endpoint, body);
    }

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

const gitURL = "https://api.github.com";
const profileName = 'slodziu'
const repoList = document.querySelector('#repo-list');
const render = () => {
    const fetchWrapper = new FetchWrapper(gitURL);
    fetchWrapper.get(`/users/${profileName}`)
        .then(data => {
            const nameField = document.querySelector('#name');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                nameField.textContent = repo.name;
                listItem.textContent = repo.name;
                repoList.appendChild(listItem);
            })
        });
}
document.addEventListener('DOMContentLoaded', render);