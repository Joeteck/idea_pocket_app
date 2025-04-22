
async function Album() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/albums');
    if(!response) throw new Error ('Failed to fetch Albums');

    const album = await response.json();

    return {
        <div></div>
    }
};

export default Album;
