import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

const About = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        tl.from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
        }).from('.top-grid div, .botton-grid div', {
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04
        },'-=0.5')
    })
    return (
        <section id="about">
            <div className='mb-16 md:px-10 px-5'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'>Best Cocktails</p>
                        <h2>
                            Where every detail matters <span className='text-white'>-</span>
                            from muddle with garnish
                        </h2>
                    </div>
                    <div className='sub-content'>
                        <p>
                            Every Cocktail we serve is a reflection of our obsession with detail - from muddle to the final garnish. That care is what turns a simple drink into something truly memorable
                        </p>
                        <div>
                            <p className='md:text-3xl text-xl font-bold'>
                                <span>4.5</span>/5

                            </p>
                            <p className='text-sm text-white'>
                                More than 12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='top-grid px-10'>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/images/abt1.png" alt="grid-img-1" />
                </div>
                <div className='md:col-span-6'>
                    <div className='noisy' />
                    <img src="/images/abt2.png" alt="grid-img-1" />
                </div>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/images/abt5.png" alt="grid-img-1" />
                </div>
            </div>
            <div className='bottom-grid px-10'>
                <div className='md:col-span-8'>
                    <div className='noisy' />
                    <img src="/images/abt3.png" alt="grid-img-1" />
                </div>
                <div className='md:col-span-4'>
                    <div className='noisy' />
                    <img src="/images/abt4.png" alt="grid-img-1" />
                </div>
            </div>
        </section>
    )
}

export default About