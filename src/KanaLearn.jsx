import { useState, useEffect } from 'react'
import {hiragana} from "./data/hiragana"
import {katakana} from "./data/katakana"
import LearnModeHeader from './components/LearnModeHeader'
import KanaMnemonic from './components/KanaMnemonic'
import NextKanaButton from './components/NextKanaButton'
import useLearnMode from './hooks/useLearnMode'
import PlaySoundButton from './components/PlaySoundButton'



function KanaLearn(props) {

  const [kana,setKana] = useState([{}]);

  const { volumeIcon,
          current,
          num,
          setNextKana,
          resetQuiz,
          playSound } = useLearnMode();


    
    //Setup Quiz
    useEffect( () => {
      if(props.quiz == 'hiragana'){
        setKana(hiragana)
      }
      else if(props.quiz == 'katakana'){
        setKana(katakana)
      }
    }, [])


    //play first sound on render
    useEffect(() => {
      if(num < kana.length + 1){
        setTimeout(() => {
          playSound()

      }, 200);
    }
    },[])

    //play new sound on next kana
    useEffect(() => {
      if(num < kana.length + 1){
        playSound()
      }
    },[num])


return (
  <div className= "min-h-screen centerFlex bg-slate-50" > 
    {num < kana.length + 1 ? 
    <div className='flex justify-center  bg-slate-50 text-black text-center'>
      <div data-aos="slide-up" className=" m-10 p-10 max-w-md rounded shadow-lg bg-white card card-top-right soft-shadow" >
        <div className="card-inner ml-4">
          <LearnModeHeader
            kana={kana}
            current={current}
          />
          <div>
            <PlaySoundButton
              playSound={playSound}
              volumeIcon={volumeIcon}
            />
          </div>
          <div> 
            <KanaMnemonic 
              kana={kana} 
              current={current}
            />  
            <NextKanaButton
              setNextKana={setNextKana}
            />  
          </div>
        </div>
      </div>
    </div> : resetQuiz()}
  </div>
  )
}


export default KanaLearn
