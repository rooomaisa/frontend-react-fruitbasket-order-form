
import './App.css'
import {useState} from "react";
// import {useForm} from "react-hook-form";

function App() {

    // const {register = useForm()}
    const [strawberries, setStrawberries] = useState(0)
    const [bananas, setBananas]= useState(0)
    const [appels, setAppels] = useState(0)
    const [kiwis, setKiwis] = useState (0)


    function resetFruits() {
        setKiwis(0);
        setAppels(0);
        setBananas(0);
        setStrawberries(0);
    }

    return (
      <>
          <h1>Fruitmand bezorgservice</h1>
          <section className={'fruitbox'}>
              <article>
                  <span className="icon">🍓</span>
                  <h2>Aardbeien</h2>
                  <button type={'button'} onClick={() => setStrawberries(strawberries -1)} disabled={strawberries===0}>
                      -
                  </button>
                  {strawberries}
                  <button type={'button'} onClick={() => setStrawberries(+1)}>
                      +
                  </button>
              </article>
          </section>

          <section className={'fruitbox'}>
              <article>
                  <span className="icon">🍌</span>
                  <h2>Bananen</h2>
                  <button type={'button'} onClick={() => setBananas (bananas -1)} disabled={bananas===0}>
                      -
                  </button>
                  {bananas}
                  <button type={'button'} onClick={() => setBananas (bananas +1)}>
                      +
                  </button>
              </article>
          </section>

          <section className={'fruitbox'}>
              <article>
                  <span className="icon">🍏</span>
                  <h2>Appels</h2>
                  <button type={'button'} onClick={() => setAppels(appels-1)} disabled={appels===0}>
                      -
                  </button>
                  {appels}
                  <button type={'button'} onClick={() => setAppels(appels+1)} >
                      +
                  </button>
              </article>
          </section>

          <section className={'fruitbox'}>
              <article>
                  <span className="icon">🥝</span>
                  <h2>Kiwi's</h2>
                  <button type={'button'} onClick={() => setKiwis(kiwis-1)} disabled={kiwis===0}>
                      -
                  </button>
                  {kiwis}
                  <button type={'button'} onClick={() => setKiwis(kiwis+1)}>
                      +
                  </button>
              </article>

              <button type={"button"} onClick={() => resetFruits()}>
                  Reset
              </button>
          </section>
      </>
  )
}

export default App
