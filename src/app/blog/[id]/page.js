const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getData({id}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/article/${id}`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const Index = async ({params}) => {
    const {data} = await getData({id:params.id});
    return (
        <div className={'container mx-auto'}>
            <div>
                <h1 className={'bl'}>{data.title}</h1>
            </div>
        </div>
    )
}


export default Index;
