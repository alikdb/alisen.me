import Navbar from "@/components/header/navbar";

const Header = () => {
    return (
        <div
            className="sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2 dark:border-neutral-900 dark:bg-black/75 sm:py-3 backdrop-blur-xl">
            <Navbar/>
        </div>

    )
}
export default Header;