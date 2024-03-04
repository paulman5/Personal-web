import React from "react"
import Image from "next/image"
import blockchainstorage from "../../../lib/icons/articleimages/blockchainstorage.jpg"
import { Articledata } from "@/lib/data/articledata"
import Footer from "@/components/footer"

export default function Articles() {
  const articledata = Articledata.map((item) => (
    <div key={item.id} className="flex flex-col ml-12 mt-5">
      <p>by {item.author}</p>
      <p>{item.date}</p>
    </div>
  ))
  return (
    <>
      <article>
        <div className="sm:px-8" id="scroll-1">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex justify-center items-center text-center mt-8">
                  <h1 className="font-bold tracking-tight text-zinc-800 sm:text-4xl">
                    Storage decentralisation, the future of digital
                    infrastructure
                  </h1>
                </div>
                {articledata}
                <div className="flex justify-center items-center text-center mt-14">
                  <Image
                    src={blockchainstorage}
                    alt="blockchain storage"
                  ></Image>
                </div>
                <div className="flex items-center mt-14 ml-10">
                  <p className=" text-base text-zinc-600 dark:text-zinc-400">
                    In recent times cryptocurrency has gained widespread
                    attention to the extent that modern investment vehicles such
                    as exchange traded funds (ETFs) hit the web3 marketspace.
                    However, even though large investments are being made large
                    scale blockchain adaptations still remain off the charts.
                    Blockchain has proven benefits for decentralised finance
                    (DeFi), but also a large potential competitor of traditional
                    cloud storage. This article is going to dive deep into the
                    benefits of decentralisation of digital storage providers.{" "}
                  </p>
                </div>
                <div className="flex items-center mt-14 ml-10">
                  <h2 className="font-bold tracking-tight text-zinc-800 sm:text-2xl mt-10">
                    What is the diffference between centralised and
                    decentralised storage?
                  </h2>
                </div>
                <div className="flex items-center mt-14 ml-10">
                  <p>
                    Centralised storage constitutes of a network of servers that
                    are owned by organisational entities. Such networks of
                    services make cloud computing possible and in turn realises
                    a serverless approach for customers, which means that
                    servers are managed by the centralised storage providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
