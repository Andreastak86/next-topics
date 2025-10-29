import Link from "next/link";

export default function AboutPage() {
    return (
        <section className='container section fade-in'>
            <div className='card p-8 space-y-4'>
                <h1 className='text-3xl font-semibold text-(--accent)'>
                    Om dette prosjektet
                </h1>
                <p className='text-lg text-muted leading-relaxed'>
                    «Dagens topic» er en serie korte, praktiske gjennomganger av
                    viktige Next.js- og Tailwind-konsepter.
                </p>

                <p className='text-muted'>
                    Prosjektet bruker Next.js 16, App Router og Tailwind CSS 4.1
                    – med enkel, oversiktlig struktur i <code>src/app</code>.
                </p>

                <div className='flex gap-3 pt-2'>
                    <Link href='/contact' className='btn btn-primary'>
                        Ta kontakt
                    </Link>
                    <Link href='/' className='btn btn-primary'>
                        Til forsiden
                    </Link>
                </div>
            </div>
        </section>
    );
}
