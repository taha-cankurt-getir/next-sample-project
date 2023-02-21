const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getData({id}) {
    let resData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    resData = await resData.text();
    return JSON.parse(resData);
}

const Index = async ({params}) => {
    const data = await getData({id:params.id});
    return (
        <div className={'container mx-auto'}>
            <div>
                <h1 className={'bl'}>{data.title}</h1>
            </div>
        </div>
    )
}

export default Index;
