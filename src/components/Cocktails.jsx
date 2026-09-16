import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

    useGSAP(()=>{
        const ptl = gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true
            }
        })

        ptl.from('#c-left-leaf',{x:-100, y: 100}).from('#c-right-leaf',{x:100,y:100})
    },[])
  return (
    <section id="cocktails" className='noisy'>
        <img src="/images/cocktail-left-leaf.png" id="c-left-leaf"/>
         <img src="/images/cocktail-right-leaf.png" id='c-right-leaf'/>
         <div className='list'>
            <div className='popular'>
                <h2>Most Popular cocktails:</h2>
                <ul>
                    {cocktailLists.map((clist)=>(
                        <li key={clist.name}>
                            <div className='md:me-28'>
                                <h3>{clist.name}</h3>
                                <p>{clist.country} | {clist.detail}</p>

                            </div>
                            <span>- {clist.price} </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='loved'>
                <h2>Most loved mocktails:</h2>
                <ul>
                    {mockTailLists.map((clist)=>(
                        <li key={clist.name}>
                            <div className='md:me-28'>
                                <h3>{clist.name}</h3>
                                <p>{clist.country} | {clist.detail}</p>

                            </div>
                            <span>- {clist.price} </span>
                        </li>
                    ))}
                </ul>
            </div>
         </div>
    </section>
  )
}

export default Cocktails