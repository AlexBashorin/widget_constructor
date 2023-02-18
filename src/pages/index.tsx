import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Desk from './Board/modules/desk/Desk';
import Nav from './Nav';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Nav>
      <DndProvider backend={HTML5Backend}>
        <Desk />
      </DndProvider>
    </Nav>
  )
}
