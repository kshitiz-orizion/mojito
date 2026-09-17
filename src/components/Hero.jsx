import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {

    const videoRef = useRef()
    const videoContainerRef = useRef()

    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        ScrollTrigger.config({ ignoreMobileResize: true })

        if (isMobile) {
            ScrollTrigger.normalizeScroll(true)
        }
        const heroSplit = new SplitText('.title', { type: 'chars,words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)


        const startValue = isMobile ? 'top top' : 'top top'
        const endValue = isMobile ? '150% top' : 'bottom top'


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: videoContainerRef.current,
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                pinType: 'transform',
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const v = videoRef.current
                    if (v && v.duration) {
                        v.currentTime = v.duration * self.progress
                    }
                },// recompute start/end on refresh
            }
        })

        videoRef.current.onloadedmetadata = () => {
            videoRef.current.pause()
            videoRef.current.removeAttribute('autoplay')
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
            ScrollTrigger.refresh()
        }
        const handleResize = () => ScrollTrigger.refresh()
        window.addEventListener('orientationchange', handleResize)

        return () => window.removeEventListener('orientationchange', handleResize)
    }, [])
    return (
        <div className='relative'>
            <section id="hero" className='noisy'>
                <h1 className='title'>Mojito</h1>
                <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>Cool. Crisp. Classic</p>
                            <p className='subtitle'>
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='video-container' ref={videoContainerRef}>
                <video ref={videoRef} src="/videos/output.mp4" muted autoPlay playsInline preload='auto' />
            </div>
        </div>
    )
}

export default Hero