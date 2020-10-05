import Link from 'next/link';
import NavStyles from '../styles/NavStyles';

export default function Nav() {
    return (
        <NavStyles>
            <Link href="/">
                <a>Dashboard</a>
            </Link>
            <Link href="/budget">
                <a>Budget</a>
            </Link>
            <Link href="/balancesheet">
                <a>Balance Sheet</a>
            </Link>
            <Link href="/signup">
                <a>Sign Up</a>
            </Link>
            <Link href="/me">
                <a>My Account</a>
            </Link>
        </NavStyles>
    )
}