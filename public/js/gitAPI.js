
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
    fetchWrapper.get(`/users/${profileName}/repos`).then(data=>{
            data.forEach(datum=>{
                console.log(datum)
                repoList.insertAdjacentHTML('beforeend', `<li><a href=${datum.clone_url} target="_blank"><h2>${datum.full_name}</h2></a><p>${datum.description}</p></li>`)
            })
    })
}   
document.addEventListener('DOMContentLoaded', render);