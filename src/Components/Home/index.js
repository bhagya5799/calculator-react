import React, { useState } from 'react'
import './index.css'

const Home = () => {
    const [input,setInput] = useState("")
    const [result,setResult]=useState(0)

    const changeInput = e => {
        let input_val= (e.target.value)
        console.log(input_val)
        setInput(input+input_val)
    }

    const clearInput =() => {
        let removeLast=(input.slice(0, -1))
        setInput(removeLast)
    }

    const resetInput = () => {
        setInput('')
    }

    const calCulate =(value) => {
        let result=eval(input)
        setInput(result)
        
    }
    console.log()
    return (
        <div className='home'>
            <div className='main-card'>
                <input className='result-bar' type="text" placeholder='00' name="input" onChange={changeInput} value={input} />
                <div className='input-boxes'>
                    <div className='input-box-container'>
                        <div className='box-card'>
                            <button className='box box-res' type="button"  onClick={resetInput} >Res</button>
                            <button className='box box-s' type="button" onClick={(() => setInput(input + "00"))}>00</button>
                            <button className='box box-c' type="button"  onClick={clearInput} >C</button>
                            <button className='box'  onClick={(() =>setInput (input+"%"))}>%</button>
                        </div>

                        <div className='box-card'>
                            <button className='box' type="button" value="7" onClick={(() => setInput(input + "7"))} >7</button>
                            <button className='box' type="button" value="8" onClick={(() => setInput(input + "8"))} >8</button>
                            <button className='box' type="button" value="9" onClick={(() => setInput(input + "9"))} >9</button>
                            <button className='box box-s' value="+" onClick={(() => setInput(input + "10"))} >10</button>
                        </div>

                        <div className='box-card'>
                            <button className='box' type="button" value="4" onClick={(() => setInput(input + "4"))} >4</button>
                            <button className='box' type="button" value="5" onClick={(() => setInput(input + "5"))} >5</button>
                            <button className='box' type="button" value="6" onClick={(() => setInput(input + "6"))} >6</button>
                            <button className='box box-s' onClick={(() => setInput(input + "-"))} >-</button>
                        </div>

                        <div className='box-card'>
                            <button className='box' type="button" value="1" onClick={(() => setInput(input + "1"))} >1</button>
                            <button className='box' type="button" value="2" onClick={(() => setInput( input+ "2"))} >2</button>
                            <button className='box' type="button" value="3" onClick={(() => setInput(input + "3"))} >3</button>
                            <button className='box' type="button" value="10" onClick={(() => setInput(input + "*"))} >x</button>
                        </div>
                        <div className='box-card'>
                            <button className='box box-' onClick={(() => setInput(input+"+"))} >+</button>
                            <button className='box box-y' onClick={(() => calCulate("="))}>=</button>
                            <button className='box'  onClick={(() => setInput(input+"."))}>.</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home