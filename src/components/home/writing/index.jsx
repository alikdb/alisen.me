import Section from "@/components/section";
import Link from "next/link"
import WriteItem from "@/components/write-item";

const Writing = () => {
    return (
        <Section>
            <div>
                <Link className="group flex justify-between" href="/writings">
                    <h1 className="text-lg font-bold underline-offset-4 group-hover:underline">Writings</h1>
                    <button className="rounded bg-zinc-900 px-4 border-[1px] border-zinc-700 text-xs py-0.5">View All
                    </button>
                </Link>
            </div>
            <div>
                <ul className="grid gap-1 md:gap-3 mt-5">
                    <WriteItem type="small"/>
                </ul>
            </div>
        </Section>
    )
}
export default Writing