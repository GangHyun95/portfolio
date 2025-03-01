import React from 'react';
import globals from '../../styles/Global.module.css';
import styles from './Profile.module.css'

export default function Profile() {
    return (
        <section className={globals['tab-panel']}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h2 className={styles['header-title']}>안녕하세요. <br/>프론트엔드 개발자 <span className={globals['text-primary']}>허강현</span>입니다.</h2>
                    <ul className={styles['header-desc']}>
                        <li>안녕하세요! 👋</li>
                        <li>저는 간결하고 효율적인 기능 구현을 중시하는 프론트엔드 개발자 허강현입니다.</li>
                        <li>작은 단위의 기능을 직접 구현하고, 불필요한 의존성을 줄여 가벼운 코드를 유지하는 것을 좋아합니다.</li>
                        <li>물론, 필요에 따라 확장성과 효율성을 고려해 적절한 라이브러리를 도입하는 것도 중요하게 생각합니다.</li>
                        <li>새로운 기술을 배우고, 이를 실제 프로젝트에 적용해 더 나은 사용자 경험을 제공하는 데 큰 보람을 느낍니다.</li>
                        <li>저는 개발에 대한 열정과 배움을 팀원들과 나누는 것을 중요하게 여기며, 더 나은 결과를 만들기 위해 끊임없이 노력하는 것이 좋은 팀과 서비스를 만드는 핵심이라고 믿고 있습니다.</li>
                    </ul>
                </div>
                <ul className={styles.list}>
                    <div className={styles.grid}>
                        <li className={styles.item}>
                            <h2 className={styles.heading}>프로필</h2>
                            <div className={styles.card}>
                                <ul className={styles.desc}>
                                    <li>1995.10.31 | 대구</li>
                                    <li>+82 10.5434.1031</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.item}>
                            <h2 className={styles.heading}>자격증</h2>
                            <div className={styles.card}>
                                <div className={styles.card}>
                                    <ul className={styles.desc}>
                                        <li>정보처리산업기사</li>
                                        <li>컴퓨터활용능력 2급</li>
                                        <li>1종보통운전면허</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </div>
                    <li className={styles.item}>
                        <h2 className={styles.heading}>경력</h2>
                        <div className={styles.card}>
                            <p className={styles.title}>엔디소프트(주)</p>
                            <p className={styles.period}>(2023.07.01 ~ 2024.08.01)</p>
                            <ul className={styles.desc}>
                                <li>직책: 연구원</li>
                                <li>인터넷 신문 솔루션 CMS 시스템의 프론트엔드 개발을 담당하며, 어드민 페이지에 새로운 기능을 추가하고 기존 기능을 개선하는 역할을 수행했습니다.</li>
                                <li>jQuery 내부 라이브러리로 구현된 기능들을 의존성을 줄이고 효율성을 높이기 위해 바닐라 JavaScript로 대체하는 작업을 진행했습니다.</li>
                                <li>WAMP 기반의 로컬 환경에서 PHP 백엔드 시스템과 연동하여 JavaScript와 jQuery를 사용한 프론트엔드 개발을 진행했습니다.</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <h2 className={styles.heading}>교육</h2>
                        <div className={styles.card}>
                            <p className={styles.title}>[KDT] 기업요구를 반영한 프론트엔드(React) 개발자 양성 과정 수료</p>
                            <p className={styles.period}>(2022.10.28 ~ 2023.04.13)</p>
                            <ul className={styles.desc}>
                                <li>우수프로젝트상 수상 (팀: 쿨피스)</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <h2 className={styles.heading}>기술 스택</h2>
                        <div className={styles.card}>
                            <article className={styles.skill}>
                                <p className={styles.title}>편해요</p>
                                <ul className={styles['skill-list']}>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/html.svg" alt="html" />
                                        <span>HTML5</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/css.svg" alt="css" />
                                        <span>CSS3</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/javascript.svg" alt="javascript" />
                                        <span>JavaScript</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/typescript.svg" alt="typescript" />
                                        <span>TypeScript</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/react.svg" alt="react" />
                                        <span>React</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/vscode.svg" alt="vscode" />
                                        <span>VS Code</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/github.svg" alt="github" />
                                        <span>Github</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/git.svg" alt="git" />
                                        <span>Git</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/sourcetree.svg" alt="sourcetree" />
                                        <span>SourceTree</span>
                                    </li>
                                </ul>
                            </article>
                            <article className={styles.skill}>
                                <p className={styles.title}>어느정도 사용할 수 있어요.</p>
                                <ul className={styles['skill-list']}>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/nodejs.svg" alt="nodejs" />
                                        <span>Node.js</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/express.svg" alt="express" />
                                        <span>Express</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/mongodb.svg" alt="mongodb" />
                                        <span>MongoDB</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/nextjs.svg" alt="nextjs" />
                                        <span>Next.js</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/tailwind.svg" alt="tailwind" />
                                        <span>Tailwind</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/jquery.svg" alt="jquery" />
                                        <span>jQuery</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/figma.svg" alt="figma" />
                                        <span>Figma</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                    <   img className={styles['skill-img']} src="/assets/images/editplus.png" alt="editplus" />
                                        <span>Editplus</span>
                                    </li>
                                </ul>
                            </article>
                            <article className={styles.skill}>
                                <p className={styles.title}>사용해봤어요</p>
                                <ul className={styles['skill-list']}>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/php.svg" alt="php" />
                                        <span>PHP</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/bootstrap.svg" alt="bootstrap" />
                                        <span>Bootstrap</span>
                                    </li>
                                    <li className={styles['skill-item']}>
                                        <img className={styles['skill-img']} src="/assets/images/prisma.svg" alt="prisma" />
                                        <span>Prisma</span>
                                    </li>
                                </ul>
                            </article>
                            {/* <article className={styles.skill}>
                                <p className={styles.title}>현재 공부 중이에요</p>
                                <ul className={styles['skill-list']}>
                                </ul>
                            </article> */}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

