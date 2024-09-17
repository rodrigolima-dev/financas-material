import React from "react";

import { Picker as RNPickerSelect } from '@react-native-picker/picker'
import { PickerView } from './styles'


export default function Picker ({ onChange, type }) {
    return (
        <PickerView>
            <RNPickerSelect
            style={{
                width: '100%',
                height: 50,
                border: 'none',
                padding: 10
            }}
            selectedValue={type}
            onValueChange={ (value) => onChange(value) }
            >
                <RNPickerSelect.Item label="Receita" value="receita"/>
                <RNPickerSelect.Item label="Despesa" value="despesa"/>
            </RNPickerSelect>

            
        </PickerView>
    );
}