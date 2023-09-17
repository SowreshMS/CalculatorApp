/*
CalculatorApp
Author: Sowresh

equation = string that is displayed at the top of the screen

This app can perform basic calculations(such as addition, subtraction, multiplication, and division). It can also perform exponential calculations for one number raised to another and trig functions(sin, cosine, and tangent). Aside from the trig functions, the calculator can perform mutltioperational functions per equal-sign press. For example, if the calculator displayed "5+6-7^4*3" and then the user pressed equal, the calculator will display the correct answer(with following order of operations). The result that the calculator displays can then be used for futher calculations. Paranthesis are also included, however, the calculator only allows one set of paranthesis per calculation. Once a button is pressed, the respective string is displayed at the top of the screen using a text input. The text input cannot be edited using a pop-up keyboard and can only be edited by pressing on the touchable opacties that fill up the rest of the screen under the text input. The text input is also multiline and scrollable so if the equation is longer than the current line's width, then it will be moved to the next line and users are free to scroll back and forth to see their equation. If the user sees that they have made a mistake, they can undo their equation by either pressing the backspace button or the clear button. This calculator is crash-proof and all potential errors have been accounted for(with the scope of what the calculator can actually perform). For example, users cannot "spam" any of the operations or have an operation as the first character in the string. Issues might arrise when it comes to the paranthesis and negative sign buttons, however, once the equals button is pressed, the calculation will display a message saying "Please press clear and try again". Any other potential unaccounted "error" situation will also display the same result. The calculator will display "Error" if the result of a calculation was Infinity or NaN. Due to the complexity of trig functions and lack of time, I decided that it would be best to not use the result of a trig into another calculation in one equal-sign press. For example, if the equation is "8+sin(3.14)" and the equals button was pressed, the calculator would display a message saying "Please use trig functions as their own calculations". 
 
Extra:
1. I used touchable opacities as my extra component.
2. I made sure that there was no way for the user to crash the app
3. I added 4 extra operations on top of the basic(exponent, sin, cos, tan)
4. I added some features that makes this app more similar to a conventional calculator(such as paranthesis and calculating multiple operations)

Limitations: 
1. This calculator can only use one set of paranthesis and/or 1 trig per calculation
2. This app was built to only be compatible with IOS
 
*/

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';


let x = 0;
let y = 0;

var a;
var operationCheck = false;
var decimalCheck = false;
var negativeCheck = false;


export default function App() {
  const [equation, setEquation] = useState('')
  let equation2 = ""

  const additionDisplay = () => setEquation((equation) => equation + '+');
  const subtractionDisplay = () => setEquation((equation) => equation + '-');
  const multiplicationDisplay = () => setEquation((equation) => equation + '*');
  const divisionDisplay = () => setEquation((equation) => equation + '/');
  const exponentDisplay = () => setEquation((equation) => equation + "**");

  const operationCheck2 = () => (operationCheck = true);
  const operationCheck3 = () => (operationCheck = false);
  const decimalCheck2 = () => (decimalCheck = true);
  const decimalCheck3 = () => (decimalCheck = false);

  const add2 = () => {
    if (operationCheck == true) {console.log("")
    } else {
      additionDisplay();
      operationCheck2();
      decimalCheck3();
    }
  };

  const subtract2 = () => {
    if (operationCheck == true) {
      console.log("")
    }else {
      subtractionDisplay();
      operationCheck2();
      decimalCheck3();
    }
  };

  const multiply2 = () => {
    if (operationCheck == true) {
      console.log("")
    } else {
      multiplicationDisplay();
      operationCheck2();
      decimalCheck3();
    }
  };

  const divide2 = () => {
    if (operationCheck == true) {
      console.log("")
    } else {
      divisionDisplay();
      operationCheck2();
      decimalCheck3();
    }
  };

  const exponent2 = () => {
    if (operationCheck == true) {
      console.log("")
    } else {
      exponentDisplay();
      operationCheck2();
      decimalCheck3();
    }
  };

  const one = () => setEquation((equation) => equation + '1');
  const two = () => setEquation((equation) => equation + '2');
  const three = () => setEquation((equation) => equation + '3');
  const four = () => setEquation((equation) => equation + '4');
  const five = () => setEquation((equation) => equation + '5');
  const six = () => setEquation((equation) => equation + '6');
  const seven = () => setEquation((equation) => equation + '7');
  const eight = () => setEquation((equation) => equation + '8');
  const nine = () => setEquation((equation) => equation + '9');
  const zero = () => setEquation((equation) => equation + '0');
  const clear = () => setEquation('');
  const decimal = () => setEquation((equation) => equation + '.');

  const negative = () => {
    if (negativeCheck == false) {
      for (var i in equation) {
        if (String(Number(equation[i])) == 'NaN' && equation[i] != '.') {
          a = equation.lastIndexOf('i');
        }
      }
      setEquation(
        (equation) => equation.slice(0, a) + '-' + equation.slice(a)
      );
      negativeCheck = true;
    } else {
      negativeCheck = false;
    }
  };

  const one2 = () => {
    one();
    operationCheck3();
  };

  const two2 = () => {
    two();
    operationCheck3();
  };

  const three2 = () => {
    three();
    operationCheck3();
  };

  const four2 = () => {
    four();
    operationCheck3();
  };

  const five2 = () => {
    five();
    operationCheck3();
  };

  const six2 = () => {
    six();
    operationCheck3();
  };

  const seven2 = () => {
    seven();
    operationCheck3();
  };

  const eight2 = () => {
    eight();
    operationCheck3();
  };

  const nine2 = () => {
    nine();
    operationCheck3();
  };

  const zero2 = () => {
    zero();
    operationCheck3();
  };

  const clear2 = () => {
    clear();
    operationCheck2();
    decimalCheck3();
  };
  const decimal2 = () => {
    if (decimalCheck == true) {
      console.log("")
    } else {
      decimal();
      decimalCheck2();
    }
  };

  const backspace = () => {
    try {
      setEquation((equation) => equation.slice(0, equation.length - 1));
    } catch (TypeError) {
      clear2();
    }
  };

  const paranethesis = () => {
    if (equation.length == 0)
    {
      setEquation((equation) => equation + '(')
    }
    else if (equation.includes(')'))
    {

    }
    else if (equation.includes('(')) {
      setEquation((equation) => equation + ')');
    } else if (!isNaN(Number(equation.slice(equation.length - 1)))) {
      setEquation((equation) => equation + '*(');
    } else {
      setEquation((equation) => equation + '(');
    }
  };

  const sine2 = () => {
    if ((isNaN(Number(equation.substr(equation.length - 1))) && (equation.substr(equation.length - 1) != '.')) || equation.length == 0)
    {
      setEquation((equation) => equation + 'sin(')
    }
    else 
    {
      setEquation((equation => equation + '*sin('))
    }
  }

  const cos2 = () => {
    if ((isNaN(Number(equation.substr(equation.length - 1))) && (equation.substr(equation.length - 1) != '.')) || equation.length == 0)
    {
      setEquation((equation) => equation + 'cos(')
    }
    else 
    {
      setEquation((equation => equation + '*cos('))
    }
  }

   const tan2 = () => {
    if ((isNaN(Number(equation.substr(equation.length - 1))) && (equation.substr(equation.length - 1) != '.')) || equation.length == 0)
    {
      setEquation((equation) => equation + 'tan(')
    }
    else 
    {
      setEquation((equation => equation + '*tan('))
    }
  }

  const sin = () => {
    if (!equation.includes(')'))
    {
      setEquation(equation => "Please put another paranthesis and try again")
    }
    else if (equation.substr(0, 1) != 's' || equation.substr(equation.length - 1) != ')')
    {
      setEquation(equation => "Please use trig functions as their own calculation")
    }
    else {
    equation2 = equation.slice(equation.indexOf("n(") + 2, equation.indexOf(")"))
    equation2 = eval(equation2)
    equation2 = String(Math.sin(Number(equation2)))
    setEquation(equation => equation2)
    }
  }
    const cosine = () => {
      if (!equation.includes(')'))
      {
        setEquation(equation => "Please put another paranthesis and try again")
      }
       else if (equation.substr(0, 1) != 'c' || equation.substr(equation.length - 1) != ')')
    {
      setEquation(equation => "Please use trig functions as their own calculation")
    }
      else {
        equation2 = equation.slice(equation.indexOf("s(") + 2, equation.indexOf(")"))
        equation2 = eval(equation2)
        equation2 = String(Math.cos(Number(equation2)))
        setEquation(equation => equation2)
      }
    }
      const tangent = () => {
        if (!equation.includes(')'))
        {
          setEquation(equation => "Please put another paranthesis and try again")
          
        }
         else if (equation.substr(0, 1) != 't' || equation.substr(equation.length - 1) != ')')
        {
        setEquation(equation => "Please use trig functions as their own calculation")
        }
        else {
        equation2 = equation.slice(equation.indexOf("n(") + 2, equation.indexOf(")"))
        equation2 = eval(equation2)
        equation2 = String(Math.tan(Number(equation2)))
        setEquation(equation => equation2)
      }
      }
    


  const calculations = (equation) => {   
    try { 
    if (equation.includes('sin'))
    {
      sin()
    }
    else if (equation.includes('cos'))
    {
      cosine()
    }
    else if (equation.includes('tan'))
    {
      tangent()
    }
    else {
    equation2 = equation
    equation2 = String(eval(equation2)) 
    if (equation2 == "Infinity" || equation2 == "NaN")
    {
       setEquation(equation => "Error") 
    }
    else 
    {
      setEquation(equation => equation2) 
    }
    }
    }     
      catch (TypeError) {
     setEquation(equation => "Please press clear and try again")
    }
  };

  return (
    <View style={[styles.container, { height: '100%', width: '100%' }]}>
      <TextInput
        style={[
          styles.input_props,
          { height: '25%', width: '100%', fontSize: '70%' },
        ]}
        placeholder="0"
        value={equation}
        onChangeText={(text) => setEquation(text)}
        editable={false}
        multiline={true}
        >
        </TextInput>

      <View
        style={[
          styles.container,
          { height: '75%', width: '100%', backgroundColor: '' },
        ]}>
        <View
          style={{ flexDirection: 'row', height: '15%', backgroundColor: '' }}>
          <TouchableOpacity style={styles.props_for_button} onPress={clear2}>
            <Text style={[styles.text_for_numbers, { color: 'red' }]}> C </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={backspace}>
            <Text style={[styles.text_for_numbers, { color: 'red' }]}> ⌫ </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.props_for_button}
            onPress={paranethesis}>
            <Text style={[styles.text_for_numbers, { color: 'green' }]}>
              ()
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={exponent2}>
            <Text style={[styles.text_for_numbers, { color: 'green' }]}>
              ^
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', top: y, height: '15%', right: '-1%'}}>
          <TouchableOpacity
            style={[styles.props_for_button, { right: '10%' }]}
            onPress={sine2}>
            <Text
              style={[
                styles.text_for_numbers,
                { fontSize: '63%', top: '10%', color: 'cyan' },
              ]}>
              sin
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.props_for_button, { right: '10%', width: '30%%' }]}
            onPress={cos2}>
            <Text
              style={[
                styles.text_for_numbers,
                { fontSize: '60%', top: '10%', color: 'cyan' },
              ]}>
              cos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.props_for_button, { right: '10%' }]}
            onPress={tan2}>
            <Text
              style={[
                styles.text_for_numbers,
                {
                  fontSize: '60%',
                  top: '10%',
                  textAlign: 'right',
                  color: 'cyan',
                },
              ]}>
              tan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.props_for_button, { left: '-24%' }]}
            onPress={() => divide2()}>
            <Text style={[styles.text_for_numbers, { color: 'green' }]}>
              /
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', top: y, height: '15%' }}>
          <TouchableOpacity style={styles.props_for_button} onPress={seven2}>
            <Text style={styles.text_for_numbers}> 7 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={eight2}>
            <Text style={styles.text_for_numbers}> 8 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={nine2}>
            <Text style={styles.text_for_numbers}> 9 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={multiply2}>
            <Text style={[styles.text_for_numbers, { color: 'green' }]}>
              x
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', top: y, height: '15%' }}>
          <TouchableOpacity style={styles.props_for_button} onPress={four2}>
            <Text style={styles.text_for_numbers}> 4 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={five2}>
            <Text style={styles.text_for_numbers}> 5 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={six2}>
            <Text style={styles.text_for_numbers}> 6 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={subtract2}>
            <Text style={[styles.text_for_numbers, { color: 'green' }]}>
              -
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', top: y, height: '15%' }}>
          <TouchableOpacity style={styles.props_for_button} onPress={one2}>
            <Text style={styles.text_for_numbers}> 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={two2}>
            <Text style={styles.text_for_numbers}> 2 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={three2}>
            <Text style={styles.text_for_numbers}> 3 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={add2}>
            <Text style={[styles.text_for_numbers, { color: 'green' }]}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', top: y, height: '15%' }}>
          <TouchableOpacity
            style={[styles.props_for_button, { top: y }]}
            onPress={negative}>
            <Text style={styles.text_for_numbers}> /- </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.props_for_button, { top: y }]}
            onPress={zero2}>
            <Text style={styles.text_for_numbers}> 0 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.props_for_button} onPress={decimal2}>
            <Text style={styles.text_for_numbers}> . </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.props_for_button, { top: y }]}
            onPress={() => calculations(equation)}>
            <Text style={[styles.text_for_numbers, { color: 'purple' }]}>
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    padding: 8,
  },
  props_for_button: {
    height: '90%',
    width: '25.5%',
    backgroundColor: '',
    right: x,
    borderRadius: '70%',
  },
  text_for_numbers: {
    color: 'white',
    textAlign: 'center',
    fontSize: '70%',
  },
  input_props: {
    height: 100,
    width: 300,
    borderWidth: 1,
    borderColor: '',
    textAlign: 'right',
    fontSize: 100,
    color: 'white',
    backgroundColor: '',
  },
});
