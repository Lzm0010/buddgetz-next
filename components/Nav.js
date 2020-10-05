import Link from 'next/link';

export default function Nav() {
    return (
        <div>
            <Link href="/">
                <a>Dashboard</a>
            </Link>
            <Link href="/budget">
                <a>Budget</a>
            </Link>
            <Link href="/balancesheet">
                <a>Balance Sheet</a>
            </Link>
        </div>
    )
}