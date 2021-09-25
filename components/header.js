import Link from 'next/link';
import { useRouter, userRouter } from "next/router";
import style from './header.module.css';

export default function Header() {
    const router = useRouter();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={router.pathname == "/" ? "nav-link active" + style.customactive : "nav-link"} aria-current="page" >Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cart/user/2" >
                                <a className={router.pathname == "/cart/user/[userid]" ? "nav-link active" + style.customactive  : "nav-link"}>Cart</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" >
                                <a className={router.pathname == "/about" ? "nav-link active" + style.customactive  : "nav-link"}>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}