import PropTypes from "prop-types";
import Link from "next/link";

const WriteItem = ({type, items}) => {
    if (type === 'small') {
        return (
            <Link href="/writing/writing-title-2023"
                  className="block p-1.5 h-full w-full rounded-md transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-500 text-sm">
                <div className="flex flex-col-reverse sm:flex-row sm:items-baseline sm:gap-3">
                    <time className="opacity-60 sm:w-24">
                        Apr 22, 2023
                    </time>
                    <div
                        className="grid flex-1 grid-flow-col items-baseline justify-between gap-10 md:items-center">
                        <header className="font-medium text-sm">Writing Title 2023</header>
                        <p className="font-mono opacity-60">1,522 views</p></div>
                </div>
            </Link>
        )
    }

    return <div>Big Write Item</div>
}

WriteItem.propTypes = {
    type: PropTypes.string,
    items: PropTypes.object
}
WriteItem.defaultProps = {
    type: 'small'
}

export default WriteItem;


