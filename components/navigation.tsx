import Link from 'next/link';
import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/memories">Memories</Link>
                </li>
                <li>
                    <Link href="/playlist">Playlist</Link>
                </li>
                <li>
                    <Link href="/letter">Letter</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;