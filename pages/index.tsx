import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { BiLastPage, BiCheck } from "react-icons/bi";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Disauth</title>
        <meta name="description" content="Next generationn authentication" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900 text-slate-50">
          <div className="font-bold text-8xl text-center">
            <h1>The authentication</h1>
            <h1>for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">developers</span></h1>
          </div>
          <p className="text-xl my-8 text-slate-400">
            The infinitely-compatible serverless authentication platform.
          </p>
          <div className="flex gap-4">
            <a href="#" className="pl-4 pr-4 py-3 leading-none border rounded text-white border-pink-500 hover:border-white mt-4 flex items-center justify-center transition-all gap-1 hover:gap-3 hover:pr-2">
              Get started
              <BiLastPage className="text-pink-500 text-xl"/>
            </a>
            <a href="#" className="pl-4 pr-4 py-3 leading-none rounded text-white mt-4 flex items-center justify-center transition-all gap-1 hover:gap-3 hover:pr-2">
              See demo
              <BiLastPage className="text-pink-500 text-xl"/>
            </a>
          </div>
        </section>
        <section id="pricing" className="w-screen h-screen flex flex-col justify-center items-center bg-slate-900 text-slate-50">
          <h1 className="text-5xl text-center my-8">Transparent pricing you can understand</h1>
          <div className="w-full px-8 text-center gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full p-4 bg-slate-800 rounded-lg h-full flex flex-col gap-1">
              <div className="border-b border-slate-400 h-32">
                <h2 className="text-2xl">Hobby</h2>
                <p className="text-slate-400">One environment per organization</p>
                <h2 className="text-4xl mt-5">Free</h2>
              </div>
              <div className="h-96 flex flex-col gap-1 py-4">
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 5,000 users</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> No MAU limit</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited logins</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1 production branch</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> User role management</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 5 automations</div>
              </div>
              <a href="#" className="pl-4 pr-4 py-3 leading-none rounded text-white mt-4 flex items-center justify-center transition-all gap-1 hover:gap-3 hover:pr-2">
                Get started
                <BiLastPage className="text-pink-500 text-xl"/>
              </a>
            </div>
            <div className="w-full p-4 bg-slate-800 rounded-lg h-full flex flex-col gap-1">
              <div className="border-b border-slate-400 h-32">
                <h2 className="text-2xl text-pink-500">Startup</h2>
                <p className="text-slate-400">Small teams needing more users</p>
                <div className="mt-5 flex justify-center">
                  $
                  <p className="text-4xl ">29</p>
                  <p className="text-xl mt-3">/mo</p>
                </div>
              </div>
              <div className="h-96 flex flex-col gap-1 py-4">
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 20,000 users</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> No MAU limit</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited logins</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1 production branch</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1 development branch</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> User role management</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Custom domains</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 100 automations</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 10 organization seats</div>
              </div>
              <a href="#" className="pl-4 pr-4 py-3 leading-none rounded text-white mt-4 flex items-center justify-center transition-all gap-1 hover:gap-3 hover:pr-2">
                Get started
                <BiLastPage className="text-pink-500 text-xl"/>
              </a>
            </div>
            <div className="w-full p-4 bg-slate-800 rounded-lg h-full flex flex-col gap-1">
              <div className="border-b border-slate-400 h-32">
                <h2 className="text-2xl text-red-500">Team</h2>
                <p className="text-slate-400">Large teams needing a lot of users</p>
                <div className="mt-5 flex justify-center">
                  $
                  <p className="text-4xl ">399</p>
                  <p className="text-xl mt-3">/mo</p>
                </div>
              </div>
              <div className="h-96 flex flex-col gap-1 py-4">
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 100,000 users</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> No MAU limit</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited logins</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1 production branch</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1 staging branch</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1 development branch</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> User role management</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Custom domains</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 1000 automations</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> 50 organization seats</div>
              </div>
              <a href="#" className="pl-4 pr-4 py-3 leading-none border rounded text-white border-pink-500 hover:border-white mt-4 flex items-center justify-center transition-all gap-1 hover:gap-3 hover:pr-2">
                Get started
                <BiLastPage className="text-pink-500 text-xl"/>
              </a>
            </div>
            <div className="w-full p-4 bg-slate-800 rounded-lg h-full flex flex-col gap-1">
              <div className="border-b border-slate-400 h-32">
                <h2 className="text-2xl text-yellow-500">Enterprise</h2>
                <p className="text-slate-400">Built for scale</p>
                <div className="mt-5 flex justify-center">
                  $
                  <p className="text-4xl ">2499</p>
                  <p className="text-xl mt-3">/mo</p>
                </div>
              </div>
              <div className="h-96 flex flex-col gap-1 py-4">
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited users</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> No MAU limit</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited logins</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited production branches</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited staging branches</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited development branches</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Advanced role management</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Custom domains</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Self-hosting option</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited automations</div>
                <div className="flex items-center gap-2 text-lg"><BiCheck className="text-xl text-green-600"/> Unlimited organization seats</div>
              </div>
              <a href="#" className="pl-4 pr-4 py-3 leading-none border rounded text-white border-pink-500 hover:border-white mt-4 flex items-center justify-center transition-all gap-1 hover:gap-3 hover:pr-2">
                Contact sales
                <BiLastPage className="text-pink-500 text-xl"/>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
