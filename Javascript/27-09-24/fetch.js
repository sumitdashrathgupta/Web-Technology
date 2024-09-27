async function fetchData() {
    let data = await window.fetch("url");
    let finalData = await data.json();
    console.log(finalData);
}
fetchData();