import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import React, {useState} from 'react'
import QuizContainer from '../components/QuizContainer/QuizContainer'
import { Provider } from 'react-redux'
import store from '../redux/reducer'
import HistoryContainer from '../components/HistoryContainer/HistoryContainer'
import Header from '../components/Header/Header'
import Timer from '../components/Timer/Timer'
import OptionsContainer from '../components/OptionsContainer/OptionsContainer'

export default function Home({data}) {

  fetch('http://localhost:3080/questions')
    .then(response => response.json())
    .then(data => store.dispatch({type: 'populate', payload: data}))

  return (
    <div className="box-border h-screen bg-green-100">
      <Head>
        <title>Quiz zajebisty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="grid grid-rows-6 lg:grid-cols-12 sm:grid-cols-1 gap-4 p-4 box-border h-ninetyfive min-h-1220">
        <Provider store={store}>
            <QuizContainer/>
            <HistoryContainer/>
            <Timer/>
            <OptionsContainer/>
        </Provider>
      </div>
    </div>
  )
}
