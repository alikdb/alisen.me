import Section from "@/components/section";
import Link from "next/link"
import WriteItem from "@/components/write-item";
import {getAllWritings} from "@/libs/contentful";

const Writing = async () => {
    const writings = await getAllWritings();
    return (
        <Section>
            <div>
                <Link className="group flex justify-between" href="/writings">
                    <h1 className="text-lg font-bold underline-offset-4 group-hover:underline">Writings</h1>
                    <button
                        className="rounded bg-zinc-950 px-4 border-[1px] border-zinc-700 text-xs py-0.5 hover:bg-zinc-90    0">View
                        All
                    </button>
                </Link>
            </div>
            <div>
                <ul className="grid gap-1 md:gap-3 mt-5">
                    {writings.map((value, key) => <WriteItem key={key} items={value} type="small"/>)}
                </ul>
            </div>
        </Section>
    )
}
export default Writing