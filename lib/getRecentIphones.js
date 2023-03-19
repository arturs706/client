
export default async function getRecentIphone() {
    const res = await fetch ("http://127.0.0.1:10010/api/v1/products/apple/featured")
    if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`);
    }
    return res.json();

}


  