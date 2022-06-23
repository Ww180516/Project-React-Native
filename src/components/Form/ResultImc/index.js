import React from 'react'
import { View, Text } from 'react-native'

import styles from './style'

export default function ResultImc(props){

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxSharebutton}>
            <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
                <View/>
            </View>
        
        </View>
    );
}