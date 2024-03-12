import {getWriting} from "@/libs/contentful";
import {notFound} from "next/navigation";
import {isDevelopment} from "@/libs/utils";
import Section from "@/components/section";
import {RichText} from "@/components/contentful/rich-text";

const fetchData = async (slug) => {
    const data = await getWriting(slug, isDevelopment)
    if (!data) notFound()
    return data
}

const WritingPage = async ({params}) => {
    const w = await fetchData(params.slug)
    return (
        <Section>
            {w.title} <br/>
            <RichText content={w.content}/>
        </Section>
    );
}

export default WritingPage;
