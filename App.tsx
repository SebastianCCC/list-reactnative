/**
 * @format
 */

import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import supabase from './supabaseConfig'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import List from './src/Components/List'

const App = () => {
  const [list, setList] = useState<any[] | null>([])
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6e6e6',
      padding: 25,
    },
  })

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    let {data: todos, error} = await supabase.from('todos').select('*')
    setList(todos)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={style.container}>
        <Text
          style={{
            paddingBottom: 25,
            fontSize: 18,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          Todos
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list?.length
            ? list!.map(({id, inserted_at, is_complete, task, user_id}) => (
                <List
                  key={id}
                  id={id}
                  inserted_at={inserted_at}
                  is_complete={is_complete}
                  task={task}
                  user_id={user_id}
                />
              ))
            : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default App
