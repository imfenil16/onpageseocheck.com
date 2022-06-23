import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
const Scrap = dynamic(() => import("./scrap"), {
  ssr: false,
});
import Faqs from '../components/faqs';
import Footer from '../components/footer';

export default function Home() {
  const [url, setUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(url);
    setUrl('');
    <Scrap />
  }
  function handleChange(event) {
    const { name, value } = event.target
    if (name === 'url') {
      setUrl(value)
    }
  }
  return (
    <div>
      <Head>
        <title>On-page SEO</title>
        {/* This meta des. is 151 characters */}
        <meta name="description" content="On-page SEO checker, Check your web page's SEO in a single click, Improve SEO, SEO tips, On-page SEO check,SEO checker, What is On-page SEO?, Check Now" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link className='fill-blue-700 text-blue-700' rel="icon" href='favicon.svg' />
      </Head>

      <main className='h-auto'>
        <section className='flex justify-center flex-col items-center'>
          <h1 className="text-5xl font-bold mt-40 text-center">
            On-page SEO checker
          </h1>
          <h3 className='text-2xl mt-12 mb-9 text-center'>This on-page SEO checker analyze most important and basic information that affecting your ranking. You can use our guides to improve your organic traffic and organic traffic on google!</h3>
          <form className='flex justify-center -ml-5 lg:-ml-0 md:ml-3 w-full' onSubmit={handleSubmit}>
            <svg className='w-7 h-7 relative left-9 top-3 fill-blue-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z" /></svg>
            <input type="text" className='w-8/12 border-2 rounded-tl-xl rounded-bl-xl lg:px-12 px-10 py-3 border-blue-700 focus:border-blue-700 focus:outline-none' name="url" value={url} onChange={handleChange} placeholder="Enter your webpage's URL" />
            <Link href={{
              pathname: "/scrap",
              query: { url }
            }}
            >
              <a className='bg-blue-700 text-white lg:px-12 md:px-8 px-4 py-2.5 rounded-tr-xl rounded-br-xl text-xl tracking-wide'><b>
                <button type='submit'>Check</button></b></a>
            </Link>
          </form>
        </section>
        <Faqs />
      </main>
      <Footer />
    </div>
  )
}
