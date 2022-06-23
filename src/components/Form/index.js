import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, FlatList} from 'react-native'

import ResultImc from './ResultImc'
import styles from './style'

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage]= useState(null)
const [ imcList, SetImcList] = useState([])

function imcCalculator(){
    let heightForm = height.replace(",",".")
    let totalImc = ((weight/(heightForm*heightForm)).toFixed(2))
    SetImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
    setImc(totalImc)
}

function verificationImc(){
    if(imc == null){
        setErrorMessage("Campo obrigatorio")
    }
}

function validationImc(){
    console.log()
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return
    }
    else{
     verificationImc()
     setImc(null)
     setTextButton("Calcular")
     setMessageImc("Preencha o peso e altura")
    }
}

    return(
        <View style={styles.formContext}>
            {imc == null ? 
        <View onPress={Keyboard.dismiss} style={styles.from}>
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
            :
            <View style={styles.exhibitionResult}>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
                style={styles.listImc}
                data={imcList.reverse()}
                renderItem={({item}) =>{
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResulItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) =>{
                    item.id
                }}
                />
        </View>
    );
}