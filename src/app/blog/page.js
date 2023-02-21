import Link from "next/link";

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/article`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

const Index = async () => {
    const {data} = await getData();
    return (
        <div className={'container mx-auto'}>
            <div className={'relative grid grid-cols-4 gap-4 '}>
                {data?.map((item) => {
                    return (
                        <div className={'bg-gray-300 my-3 p-3'}>
                            <h1 className={'h-32'}>{item.title}</h1>
                            <Link href={`/blog/${item.id}`} className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right'}>Detay</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Index;
