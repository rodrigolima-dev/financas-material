import React from "react";

import { Picker as RNPickerSelect } from '@react-native-picker/picker'
import { PickerView } from './styles'


export default function Picker ({ onChange, type }) {
    return (
        <PickerView>
            <RNPickerSelect
            style={{
                width: '100%'
            }}
            selectedValue={type}
            onValueChange={ (value) => onchange(value) }
            >
                <RNPickerSelect.Item label="Receita" value="receita"/>
                <RNPickerSelect.Item label="Despesa" value="despesa"/>
            </RNPickerSelect>

            
        </PickerView>
    );
}