import React, { useRef, useState } from 'react'
import { sliderLists } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalCockTails = sliderLists.length
    const goToSlide =(i) =>{
        const newIndex = (i  + totalCockTails) % totalCockTails
        setCurrentIndex(newIndex)
    }

    const prevCockTail = () =>{
        const newIndex = ((currentIndex - 1) + totalCockTails ) % totalCockTails

        return sliderLists[newIndex]
    }

    const nextCockTail = () =>{
        const newIndex = (currentIndex + 1  ) % totalCockTails

        return sliderLists[newIndex]
    }

    useGSAP(()=>{
        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1})
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{opacity:1,xPercent:0,duration:1, ease:'power1.inOut'})
        gsap.fromTo('.details h2',{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:1,ease:'power1.inOut'})
        gsap.fromTo('.details p',{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:1,ease:'power1.inOut'})
          const ptl = gsap.timeline({
            scrollTrigger:{
                trigger:'#menu',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true
            }
        })

        ptl.from('#m-left-leaf',{x:-100, y: 100}).from('#m-right-leaf',{x:100,y:100})
    },[currentIndex])
    return (
        <section id="menu" aria-labelledby='menu-heading' className='px-10'>
            <img src="/images/slider-left-leaf.png" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" id="m-right-leaf" />
            <h2 id="menu-heading" className='sr-only'>
                Cocktail Menu
            </h2>
            <nav className='cocktail-tabs mb-10' aria-label="Cocktail Navigation">
                {sliderLists.map((c, i) => {
                    const isActive = i === currentIndex;

                    return (
                        <button
                            onClick={()=>goToSlide(i)}
                            key={c.id}
                            className={isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
                        >
                            {c.name}
                        </button>
                    )
                })}
            </nav>
            <div className='content'>
                <div className='arrows'>
                    <button className='text-left' onClick={()=>goToSlide(currentIndex-1)}>
                        <span>{prevCockTail()?.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden={true}/>
                    </button>
                    <button className='text-left' onClick={()=>goToSlide(currentIndex+1)}>
                        <span>{nextCockTail()?.name}</span>
                        <img src="/images/left-arrow.png" alt="right-arrow" aria-hidden={true}/>
                    </button>
                </div>
                <div className='cocktail'>
                    <img src={sliderLists[currentIndex]?.image} alt="currentCocktailImage" className='object-contain' />
                </div>
                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p> Recipe for:</p>
                        <p id="title">{sliderLists[currentIndex]?.name}</p>
                    </div>
                    <div className='details'>
                        <h2>{sliderLists[currentIndex]?.title}</h2>
                        <p>{sliderLists[currentIndex]?.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu