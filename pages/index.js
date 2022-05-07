import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
      <p>kjdfkjdslfkjldsjflds</p>
    <Link href="/test"as={process.env.BACKEND_URL + '/test'}>fetch?</Link>
    </div>
  )
}
