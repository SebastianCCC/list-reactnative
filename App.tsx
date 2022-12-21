/**
 * @format
 */

import React, {useEffect} from 'react'
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native'
import supabase from './supabaseConfig'

import {Colors} from 'react-native/Libraries/NewAppScreen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    let {data: todos, error} = await supabase.from('todos').select('*')
    console.log(todos)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  )
}

export default App
