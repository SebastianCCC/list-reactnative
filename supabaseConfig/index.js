import 'react-native-url-polyfill/auto'
import {createClient} from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  REACT_NATIVE_SUPABASE_URL,
  REACT_NATIVE_SUPABASE_ANON_KEY,
} from 'react-native-dotenv'

const supabase = createClient(
  REACT_NATIVE_SUPABASE_URL,
  REACT_NATIVE_SUPABASE_ANON_KEY,
  {
    localStorage: AsyncStorage,
  },
)

export default supabase
