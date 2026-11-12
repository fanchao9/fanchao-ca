'use client';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import { useScrollDirection } from '../logic/scrollDir';
import '../css/header.css';

function Header() {
    const scrollDir = useScrollDirection();

    return (
        <header className={`header ${scrollDir === "down" ? "hide" : "show"}`}>
            <div className="header-container">
                <div className="header-logo">
                    <Link href="/" aria-label="Home"><HomeIcon /></Link>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
