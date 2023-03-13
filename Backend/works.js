async function getWorks() {
    let url = "http://localhost:5678/api/works";

    let response = await fetch(url);
    return await response.json();
};