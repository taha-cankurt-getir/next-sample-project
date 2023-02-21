export default async function articleHandler(req, res) {
    const {query} = req
    const {id} = query
    let resData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    resData = await resData.text();
    res.status(200).json({data: JSON.parse(resData)})
}
