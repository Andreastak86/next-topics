// src/app/page.jsx
export default function HomePage() {
    return (
        <section className='space-y-4'>
            <h1 className='text-3xl font-bold tracking-tight'>
                Hei fra forsiden
            </h1>
            <p>
                Dette er Topic 1: Filbasert routing & layout. Forsiden ligger
                som
                <code className='mx-1 px-1.5 py-0.5 rounded bg-black/5'>
                    src/app/page.jsx
                </code>
                .
            </p>
            <ul className='list-disc pl-6'>
                <li>
                    Felles ramme settes i <code>src/app/layout.jsx</code>
                </li>
                <li>
                    Undersider er mapper med <code>page.jsx</code>
                </li>
                <li>
                    Header/Footer lever i <code>src/app/components/</code>
                </li>
                <li>
                    Universell dekorering av sidene gjøres i <code>src/app/globals.css</code>
                </li>
            </ul>
        </section>
    );
}
