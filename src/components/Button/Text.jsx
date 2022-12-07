import React from 'react'
import { TouchableOpacity, Text as TextBase } from 'react-native'

export default function Text({ children, ...rest }) {
    return (
        <TouchableOpacity
            style={{
                borderRadius: 5,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
                ...rest.style
            }}
        >
            <TextBase
                style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20
                }}
            >
                {children}
            </TextBase>
        </TouchableOpacity >
    )
}
