import {BeanIcon, BookOpenIcon, XIcon, Github} from "lucide-react";

const menus = [{
    title: 'About',
    to: '/about',
    icon: <BeanIcon size={17}/>
}, {
    title: 'Writing',
    to: '/writing',
    icon: <BookOpenIcon size={17}/>
}]

const socials = [{
    title: 'X',
    to: 'https://x.com/alisen_js',
    icon: <XIcon size={24}/>
}, {
    title: 'Github',
    to: 'https://github.com/alikdb',
    icon: <Github size={24}/>
}]
export {menus, socials}