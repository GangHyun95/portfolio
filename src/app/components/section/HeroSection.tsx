import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-5xl mx-auto text-center z-10 font-bold'>
                <p className='text-lg animate-fade-in pb-4 md:pb-5 md:text-2xl'>안녕하세요. 프론트엔드 개발자</p>
                <div className='text-5xl pb-4 md:pb-5 md:text-6xl'>
                    <span className='text-primary animate-fade-in-delay-1'>허강현</span>
                    <span className='ml-2 animate-fade-in-delay-2'>입니다.</span>
                </div>

                <div className='text-base text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay-3 md:text-xl'>
                    <p>React를 중심으로 웹 프론트엔드를 개발합니다.</p>
                    <p>사용자를 먼저 생각하고, 꾸준히 성장하며 책임지는 개발을 지향합니다.</p>
                </div>

                <div className='pt-5 animate-fade-in-delay-4'>
                    <a href='#projects' className='cosmic-button'>View My Work</a>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>
                    Scroll
                </span>
                <ArrowDown className='size-5 text-primary' />
            </div>
        </section>
    );
};
