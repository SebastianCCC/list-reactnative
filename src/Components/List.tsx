import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function List({
  id,
  inserted_at,
  is_complete,
  task,
  user_id,
}: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 25,
        marginVertical: 12.5,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{inserted_at}</Text>
        <Text>{id}</Text>
      </View>
      <Text style={{paddingVertical: 10}}>{task}</Text>
    </View>
  )
}
