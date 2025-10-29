import Link from "next/link";

export default function Header() {
    return (
        <header className='border-b'>
            <div className='mx-auto max-w-5xl px-4 h-14 flex items-center justify-between'>
                <Link href='/' className='font-semibold'>
                    Next Topics
                </Link>
                <nav className='flex items-center gap-4 text-sm'>
                    <Link href='/about' className='hover:underline'>
                        Om
                    </Link>
                    <Link href='/contact' className='hover:underline'>
                        Kontakt
                    </Link>
                </nav>
            </div>
        </header>
    );
}
