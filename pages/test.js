import React from 'react'
import Link from "next/link"

export default function test({txt}) {
  return (
    <>
    <div>{txt}</div>
    <Link href="/"as={process.env.BACKEND_URL + '/'}>back</Link>
    </>
  )
}

// on load, we can also use javascript code to call an api
// getStaticProps can also take a context which is just the params (/:id) or the query (?=)
// basically this always calls when the component is mounted??
export async function getServerSideProps() {
    const x = Math.floor(Math.random()*200)+1;
    const res = await (await fetch("https://jsonplaceholder.typicode.com/todos/" + x)).json();
    // console.log(res);

    return {
      props: {
          txt: JSON.stringify(res)
      } // will be passed to the page component as props
    }
  }
