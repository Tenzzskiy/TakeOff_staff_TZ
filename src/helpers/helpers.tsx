

export const URL = 'https://jsonplaceholder.typicode.com/users'
export function getusers() {
    return fetch(URL)
        .then(response => response.json())

}


