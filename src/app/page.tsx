import Image from 'next/image'
import { MainCanvas } from './(home–components)/main-canvas'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="fixed w-full h-full inset-0">
        <MainCanvas />
        hello
      </div>

    </main>
  )
}
