'use client';
import HomeIcon from '@mui/icons-material/Home';
import { useScrollDirection } from '../logic/scrollDir';
import '../css/header.css'
import { Button, Link } from '@mui/material';

function Header() {
    const scrollDir = useScrollDirection();

    return (
        <header className={`header ${scrollDir === "down" ? "hide" : "show"}`}>
            <div className="header-container">
                <div className="header-logo">
                    <a href="/"><HomeIcon /></a>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <Link
                            href="#projects"
                        >
                            Projects
                        </Link>
                        <li><a href="#finance">Finance</a></li>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;