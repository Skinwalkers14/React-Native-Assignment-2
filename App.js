/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { SafeAreaView } from 'react-native'
import React from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

export default function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  )
}