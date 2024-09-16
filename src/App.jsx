
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

    const [formState, setFormState] = useState({
        firstname:'',
        lastname:'',
        age:0,
        zipcode:'',
        delivery:'Select frequency',
        choosetime:'day',
        remark:'',
        agreeterms: false,
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type ==='checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ... formState,
            [changedFieldName]: newValue,
            });

        console.log(handleChange)

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

          <form>
              <section>
                  <label htmlFor={'firstname'}>Firstname</label>
                  <input
                      name={'firstname'}
                      id={'firstname'}
                      type={'text'}
                      value={formState.firstname}
                      onChange={handleChange}
                  />
              </section>
              <section>
                  <label htmlFor={'Lastname'}>Firstname</label>
                  <input
                      name={'lastname'}
                      id={'lastname'}
                      type={'text'}
                      value={formState.lastname}
                      onChange={handleChange}
                  />
              </section>
              <section>
                  <label htmlFor={'age'}>Age</label>
                  <input
                      name={'age'}
                      id={'age'}
                      type={'number'}
                      value={formState.age}
                      onChange={handleChange}
                  />
              </section>
              <section>
                  <label htmlFor={'zipcode'}>Zipcode</label>
                  <input
                      name={'zipcode'}
                      id={'zipcode'}
                      type={'text'}
                      value={formState.zipcode}
                      onChange={handleChange}
                  />
              </section>

              <section>
                  <label htmlFor={'frequency'}>Frequency</label>
              </section>
              <section>
                  <select
                      name={"delivery"}
                      id={'delivery'}
                      value={formState.frequency}
                      onChange={handleChange}
                  >
                      <option value={'select frequency'} disabled selected>Select frequency</option>
                      <option value={'day'}>Every day some vitamin C! Champ</option>
                      <option value={'twoaweek'}>Two times a week, Almost Champ</option>
                      <option value={'onceaweek'}>Once a week? kind of lame..</option>
                  </select>
              </section>

              <section>
                  <input
                         name={'choosetime'}
                         id={'daytime'}
                         type={'radio'}
                         value={'day'}
                         checked={formState.choosetime === 'day'}
                         onChange={handleChange}
                  />
                  <label htmlFor={'time-slot'}>Daytime</label>
                  <input name={'choosetime'}
                         id={'nighttime'}
                         type={'radio'}
                         value={'night'}
                         checked={formState.choosetime === 'night'}
                         onChange={handleChange}
                  />
                  <label htmlFor={'time-slot'}>Nighttime</label>
              </section>

              <section>
                  <label htmlFor={'Remarks'}>Remarks</label>
                  <textarea
                      name={'remark'}
                      id={'remark'}
                      rows={5}
                      cols={40}
                      value={formState.remark}
                      onChange={handleChange}
                      />
              </section>

              <section>
                  <input
                      type={'checkbox'}
                      name={'agreeterms'}
                      id={'agreeterms'}
                      value={formState.agreeterms}
                      onChange={handleChange}
                  />
                  <label htmlFor={'agreeterms'}>I agree to the term and conditions</label>
              </section>

              <button type={'submit'}>Submit</button>

          </form>
      </>
    );
}

export default App
