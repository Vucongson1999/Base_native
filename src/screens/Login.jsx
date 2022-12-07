import { useState } from 'react'
import {
    Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet
} from 'react-native'
import {
    Box, Button
} from '@/components'

export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Box flex={1} justifyContent={'center'} alignItems={'center'} shape={{ paddingBottom: '40%' }}>
                    <Box
                        shape={{ width: '100%', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text
                            style={styles.formControlLabel}
                        >
                            Tên đăng nhập
                        </Text>
                        <TextInput
                            style={styles.formControlInput}
                            value={name}
                            onChangeText={val => setName(val)}
                        />
                    </Box>
                    <Box
                        shape={{ width: '100%', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text
                            style={styles.formControlLabel}
                        >
                            Mật khẩu
                        </Text>
                        <TextInput
                            style={styles.formControlInput}
                            value={password}
                            onChangeText={val => setPassword(val)}
                        />
                    </Box>
                    <Box
                        shape={{ width: '100%', paddingHorizontal: 20, paddingVertical: 10 }}
                        alignItems={'flex-end'}>
                        <Button.Text style={{ backgroundColor: 'orange' }}>
                            Đăng nhập
                        </Button.Text>
                    </Box>
                </Box>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    formControlLabel: {
        paddingBottom: 5
    },
    formControlInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#999',
        paddingVertical: 10,
        paddingHorizontal: 10
    }
})