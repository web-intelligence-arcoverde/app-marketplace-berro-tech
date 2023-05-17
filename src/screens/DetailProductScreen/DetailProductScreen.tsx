import { Text } from '@rneui/base'
import { useEffect } from 'react'
import { View } from 'react-native'

export const DetailProductScreen = ({ route }: any) => {
  const { id } = route.params

  useEffect(() => {
    console.log(id)
  }, [])


  return (<View>
    <Text>Eu</Text>
  </View>)
}