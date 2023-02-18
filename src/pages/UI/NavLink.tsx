import Link from 'next/link';
import styles from '@/styles/NavLink.module.css';
import {FC} from 'react'

interface LinkProps {
    text: string;
    href: string;
}

const NavLink: FC<LinkProps> = ({text, href}) => {
    return (
        <Link href={href} className={styles.navlink}>{text}</Link>
    )
}

export default NavLink