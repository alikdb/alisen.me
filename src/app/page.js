import AboutComponent from "@/components/about";
import Writing from "@/components/home/writing";

export const metadata = {
    title: "alisen.me",
    description: "My personal website",
};
export default function Home() {
    return (
        <>
            <AboutComponent/>
            <Writing/>
        </>
    );
}
