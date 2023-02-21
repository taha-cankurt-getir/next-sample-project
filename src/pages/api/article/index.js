export default async function handler(_req, res) {
    let resData = await fetch("https://jsonplaceholder.typicode.com/posts");
    resData = await resData.text();
    res.status(200).json({data:JSON.parse(resData)})
}
