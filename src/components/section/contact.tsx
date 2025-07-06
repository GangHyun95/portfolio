import Link from 'next/link';

export default function ContactSection() {
    return (
        <section id='contact' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Contact <span className='text-primary'>Me</span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    함께할 기회를 기다리고 있습니다.<br/>
                    궁금한 점이 있다면 언제든지 편하게 연락 주세요.
                </p>

                <div className='text-center mt-12'>
                    <Link
                        href='/contact-form'
                        prefetch
                        className='cosmic-button w-fit flex items-center mx-auto gap-2 text-xl'
                        scroll={false}
                    >
                        Send Mail!
                    </Link>
                </div>
            </div>
        </section>
    );
}
