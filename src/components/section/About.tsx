import { Briefcase, Calendar, GraduationCap, MapPin, Smartphone } from 'lucide-react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

export default function About() {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-5xl font-bold mb-12 text-center'>About <span className='text-primary'>Me</span></h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center'>
                    <div className='space-y-4'>
                        <h3 className='text-2xl font-semibold'>작은 개선이 모여 큰 변화를 만든다고 생각합니다.</h3>
                        <ul className='text-muted-foreground space-y-2'>
                            <li className='flex items-center gap-2'>
                                <Calendar className='w-4 h-4 text-primary' />
                                1995.10.31
                            </li>
                            <li className='flex items-center gap-2'>
                                <MapPin className='w-4 h-4 text-primary' />
                                대구
                            </li>
                            <li className='flex items-center gap-2'>
                                <Smartphone className='w-4 h-4 text-primary' />
                                +82 10.5434.1031
                            </li>
                        </ul>

                        <ul className='space-y-1 text-sm text-muted-foreground'>
                            <li className='li-dash'>정보처리산업기사</li>
                            <li className='li-dash'>컴퓨터활용능력 2급</li>
                        </ul>
                        <p className='text-muted-foreground'>
                            반복적인 기능도 직접 구현하며, 작동 방식을 이해하려고 노력합니다.<br/>
                            작은 개선을 쌓아 사용자에게 체감되는 결과를 만드는 것을 목표로 합니다.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <Link href='#contact' replace className='cosmic-button'>Get In Touch</Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 space-y-4 w-full sm:w-4/5'>
                        <div
                            className={cn(
                                'flex flex-col items-start justify-center p-6 bg-card',
                                'transition-transform duration-300',
                                'hover:scale-[1.02] hover:shadow-lg'
                            )}
                        >
                            <div className='flex items-center mb-3'>
                                <div className='p-3 rounded-full bg-primary/10 mr-3'>
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-semibold text-lg'>경력</h4>
                                </div>
                            </div>
                            <ul className='text-muted-foreground text-sm space-y-1'>
                                <div className='mb-2'>
                                    <p className='text-base text-foreground pl-4'>
                                        엔디소프트(주) · 연구원
                                    </p>
                                    <p className='text-xs text-muted-foreground pl-4'>
                                        (2023.07.01 – 2024.08.01)
                                    </p>
                                </div>
                                <li className='li-dash'>
                                    CMS 어드민 기능 개선 및 신규 기능 개발
                                </li>
                                <li className='li-dash'>
                                    jQuery 의존성 제거 및 바닐라 JS 리팩터링
                                </li>
                                <li className='li-dash'>
                                    WAMP 기반 PHP 연동 프론트엔드 개발
                                </li>
                            </ul>
                        </div>
                        
                        <div
                            className={cn(
                                'flex flex-col items-start justify-center p-6 bg-card',
                                'transition-transform duration-300',
                                'hover:scale-[1.02] hover:shadow-lg'
                            )}
                        >
                            <div className='flex items-center mb-3'>
                                <div className='p-3 rounded-full bg-primary/10 mr-3'>
                                    <GraduationCap className='h-6 w-6 text-primary' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-semibold text-lg'>
                                        교육 이수
                                    </h4>
                                </div>
                            </div>
                            <ul className='text-muted-foreground text-sm space-y-1'>
                                <li className='li-dash'>
                                    [KDT] 기업요구 반영 프론트엔드 개발자 양성과정<br />
                                    (2022.10.28 ~ 2023.04.13)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
