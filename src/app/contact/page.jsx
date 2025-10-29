export default function ContactPage() {
    return (
        <section className='container section fade-in'>
            <div className='card p-8 space-y-6 max-w-lg mx-auto'>
                <h1 className='text-2xl font-semibold text-(--accent)'>
                    Kontakt oss
                </h1>
                <p className='text-muted'>
                    Har du spørsmål, forslag til kommende topics eller ønsker å
                    bidra? Send meg en melding da
                </p>

                <form className='space-y-4'>
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium mb-1'
                        >
                            Navn
                        </label>
                        <input
                            id='name'
                            type='text'
                            className='input'
                            placeholder='Ditt navn'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium mb-1'
                        >
                            E-post
                        </label>
                        <input
                            id='email'
                            type='email'
                            className='input'
                            placeholder='deg@eksempel.no'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='message'
                            className='block text-sm font-medium mb-1'
                        >
                            Melding
                        </label>
                        <textarea
                            id='message'
                            className='textarea h-32'
                            placeholder='Skriv her...'
                        />
                    </div>

                    <button
                        type='submit'
                        className='btn btn-primary w-full flex justify-center'
                    >
                        Send melding
                    </button>
                </form>
            </div>
        </section>
    );
}
