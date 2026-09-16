import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {SplitText} from 'gsap/SplitText'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-3xl font-bold text-indigo-500">
        Hello world!
      </h1>
    </div>
  )
}

export default App