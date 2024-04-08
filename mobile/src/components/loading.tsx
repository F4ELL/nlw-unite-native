import { ActivityIndicator } from 'react-native'

export function Loading() {
  return (
    <ActivityIndicator className='flex-1 justify-center items-center bg-green-500 text-orange-500' />
  )
}