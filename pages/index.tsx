import Image from 'next/image'
import data from '../data.json'

export default function Home() {
  return(
    <div className="flex flex-col items-center mx-auto w-full mt-16">
        <Image
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
          className="rounded-full"
        />
        <h1 className='font-mono mt-4 text-xl'>{data.name}</h1>
    </div>
  )
}
