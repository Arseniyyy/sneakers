import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Item } from 'types/card'
import Navbar from 'components/navbar/Navbar'
import Main from 'components/main'

const Root = () => {
  return <div>
    <Navbar />
    <Main />
  </div>
}

export default Root
