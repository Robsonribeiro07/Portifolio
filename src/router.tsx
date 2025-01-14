import {createBrowserRouter} from 'react-router-dom'
import { AppLayout } from './App/app-layout'
import { HomePage } from './pages/Home/home'


export const router = createBrowserRouter([

    {path: '/', element: <AppLayout/>, 
        children: [
            {path: '/', element: <HomePage/> },
            
        ]
    }
])