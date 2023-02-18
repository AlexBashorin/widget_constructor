import Head from 'next/head';
import styles from '@/styles/NavBar.module.css';
import {FC, ReactNode} from 'react';
import NavLink from './UI/NavLink'

interface NavProps {
    children?: ReactNode;
    keywords?: any;
}

const Nav: FC<NavProps> = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta 
                    // keywords={"alexbash nextjs frontend engineer react" + keywords}
                ></meta>
                <title>widget constructor</title>
            </Head>
            <div className={styles.navbar}>
                <div>
                    <button>back</button>
                </div>
                <div className={styles.navpages}>
                    <NavLink href={"/"} text="board" />
                    <NavLink href={"/settings"} text="settings" />
                </div>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default Nav