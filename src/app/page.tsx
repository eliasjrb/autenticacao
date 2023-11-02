import Provider from '@/components/Provider'
import SignInButton from '@/components/SignInButton'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='max-w-5xl mx-auto  flex items-center justify-between px-5'>
        <div>
          <img src="/eb-logo.svg" className='h-14 w-14' width={100} height={100} />
        </div>
        <div>
          <Link className='bg-sky-600 mx-10 px-3 py-2 rounded-lg' href="">Home</Link>
          <Link className='bg-sky-600 mx-10 px-3 py-2 rounded-lg' href="/client">Client</Link>
          <Link className='bg-sky-600 mx-10 px-3 py-2 rounded-lg' href="/server">Server</Link>
        </div>
        <div>
          <SignInButton />
        </div>
      </div>
    </>
  )
}
