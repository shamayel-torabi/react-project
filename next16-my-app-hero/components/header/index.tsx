import Link from 'next/link'

function Header() {
    return (
        <header className="h-16 flex items-center justify-between px-5 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900">
            <div>سایت نمونه</div>
            <nav>
                <ul className="flex gap-2">
                    <li><Link href="/">خانه</Link></li>
                    <li><Link href="/form-demo">نمونه فرم</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header