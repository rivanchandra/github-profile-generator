import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class="grid">
      <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">left</div>
      </div>
      <div class="col">
        <div class="text-center p-3 border-round-sm bg-primary font-bold ">right</div>
      </div>
    </div>
  )
}
