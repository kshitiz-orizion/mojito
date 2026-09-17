import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create("#contact h2",{type:'words'})

        const tl= gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center'
            },
            ease:"power1.inOut"
        })

        tl
        .from(titleSplit.words,{opacity:0,yPercent:100,stagger:0.02})
        .from('#contact h3,#contactp',{opacity:0,yPercent:100,stagger:0.02})
        .to("#f-right-leaf",{y:-50,duration:1,ease:'power1.inOut'})
        .to("#f-left-leaf",{y:-50,duration:1,ease:'power1.inOut'})

    },[])
  return (
    <footer id="contact" className='px-10 pb-0'>
        <img src="/images/footer-right-leaf.png" id="f-right-leaf"/>
        <img src="/images/footer-left-leaf.png" id="f-left-leaf"/>
        <div className='content pb-0'>
            <h2>Where to find us</h2>
            <div>
                <h3>Visit our store</h3>
                <p>XXXX,XXXX,XXXX,XXXXX</p>
            </div>
            <div>
                <h3>Contact us</h3>
                <p>(XXX) XXXX-XXXXXX</p>
                <p>xxxx@xxx.xxxx</p>
            </div>
            <div>
                <h3>OPEN EVERYDAY</h3>
                {openingHours.map((time)=>(
                    <p key={time.day}>
                        {time.day} : {time.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>Social</h3>
                <div className='flex-center gap-5'>
                    {socials.map((s)=>(
                        <a key={s.name}>
                            <img src={s.icon} />
                        </a>    
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact