const dbURL = process.env.SERVER;

export async function getData(url : string) {
    const res = await fetch(`${dbURL}/api/${url}`, {
        method: 'GET'
    });

    const data = await res.json();
    return data;
}

export async function postData(url : string) {
    const res = await fetch(`${dbURL}/api/${url}`, {
        method: 'POST'
    });

    const message = await res.json();
    return message;
}