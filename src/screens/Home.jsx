import React, { useEffect, useState } from 'react'
import { Text, FlatList, TextInput, ScrollView } from 'react-native'
import { Box, Button } from '@/components'
import { useItem } from '@/hooks'

export default function Home() {
    const {
        list,
        isFetching,
        isError,
        message,
        handleFetchList
    } = useItem()

    const [name, setName] = useState()

    useEffect(() => {
        handleFetchList()
    }, [])

    if (isFetching) {
        return (
            <Text>Loading</Text>
        )
    }

    if (isError) {
        return (
            <Text>{message}</Text>
        )
    }

    return (
        <Box flex={1} backgroundColor='#eee'>
            <Box>
                <Text>Navigate</Text>
            </Box>
            <Box>
                <FlatList
                    data={list}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <Box key={`${item.id}`}>
                            <Text>{item.name}</Text>
                        </Box>
                    )}
                />
            </Box>
        </Box>
    )
}
