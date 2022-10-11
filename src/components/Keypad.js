import { useState } from "react";
import Screen from "./Screen";

export default function Keypad() {
    let [expData, setExp] = useState('');
    function buttonValue(e) {
        setExp(prevexp => {
            if (e.target.value === 'C' && JSON.stringify(prevexp).length > 0){
               let result= prevexp.slice(0, prevexp.length -1 )
            //    console.log(typeof(result), result)
               return result
            }
            else if (e.target.value === 'AC'){
                return ''
            }
            else { 
                return prevexp + e.target.value
            }
        })
        // console.log(e.target.value)
    }

    function solveExp () {
        let expDataToBeEvaluated = expData;
        let result = new Function(`return ${expDataToBeEvaluated}`)();
        setExp(result.toString())
    }
    
    console.log(expData)
    return (
        <div>
        <p>Keypad Here</p>
        <form>
            <Screen expression={expData} />
            <button type='button' onClick={buttonValue} value="1">1</button>
            <button type='button' onClick={buttonValue} value="2">2</button>
            <button type='button' onClick={buttonValue} value="3">3</button>
            <button type='button' onClick={solveExp} value="=">=</button>
            <button type='button' onClick={buttonValue} value="(">(</button>
            <br></br>

            <button type='button' onClick={buttonValue} value="4">4</button>
            <button type='button' onClick={buttonValue} value="5">5</button>
            <button type='button' onClick={buttonValue} value="6">6</button>
            <button type='button' onClick={buttonValue} value="/">/</button>
            <button type='button' onClick={buttonValue} value=")">)</button>

            <br></br>
            <button type='button' onClick={buttonValue} value="7">7</button>
            <button type='button' onClick={buttonValue} value="8">8</button>
            <button type='button' onClick={buttonValue} value="9">9</button>
            <button type='button' onClick={buttonValue} value="*">*</button>
            <button type='button' onClick={buttonValue} value=".">.</button>
            <button type='button' onClick={buttonValue} value="AC">AC</button>

            <br></br>
            <button type='button' onClick={buttonValue}value="0">0</button>
            <button type='button' onClick={buttonValue}value="+">+</button>
            <button type='button' onClick={buttonValue}value="-">-</button>
            <button type='button' onClick={buttonValue}value="%">%</button>
            <button type='button' onClick={buttonValue}value="C">C</button>
        </form>
        </div>
    )
}