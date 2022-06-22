import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-web'

import ResultImc from './ResultImc'
import styles from './style'

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage]= useState(null)

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
    if(imc == null){
        setErrorMessage("Campo obrigatorio")
    }
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
    setErrorMessage(null)
}

    return(
        <View style={styles.formContext}>
            <View style={styles.from}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.imput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.57"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.imput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 73.200"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}