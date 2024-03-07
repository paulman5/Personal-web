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
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex justify-center items-center text-center mt-8">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
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
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    In recent times, cryptocurrency has gained widespread
                    attention to the extent that modern investment vehicles such
                    as exchange-traded funds (ETFs) have entered the Web3
                    marketspace. However, even though large investments are
                    being made, large-scale blockchain adaptations still remain
                    off the charts. Blockchain has proven benefits for
                    decentralized finance (DeFi) but also poses a large
                    potential competitor to traditional cloud storage. This
                    article is going to dive deep into the benefits of
                    decentralization of digital storage providers.
                  </p>
                </div>
                <div className="flex items-center mt-5 ml-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl mt-10">
                    What is the diffference between centralised and
                    decentralised storage?
                  </h2>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Centralized storage constitutes a network of servers that
                    are owned by organizational entities. Such networks of
                    services make cloud computing possible and, in turn, realize
                    a serverless approach for customers, which means that
                    servers are managed by the centralized storage providers.
                    Decentralized storage constitutes a broad network of systems
                    that communicate with each other. This network validates the
                    integrity of the transactions upon the approval of the whole
                    network. This is different from centralized storage as data
                    can be retrieved from many different systems within the
                    decentralized network.
                  </p>
                </div>
                <div className="flex items-center ml-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl mt-10">
                    Is decentralised storage always better?
                  </h2>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Decentralized storage networks have proven benefits for
                    customers of centralized storage providers. Businesses are
                    increasingly relying on digital infrastructure to deliver
                    services, but that puts third-party reliance and data
                    security at issue. Decentralized storage networks let users
                    benefit from storing large amounts of data without having to
                    worry about having the need for solid service-level
                    agreements with centralized storage providers.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Third-party reliance can prove a hurdle for companies that
                    need to store valuable data for their business.
                    Service-level agreements keep customers protected from
                    unwanted actions being employed by their service providers
                    but are also hard to implement. The difficulty comes from a
                    lack of understanding of policies from centralized storage
                    providers and requires huge efforts to know that your data
                    is truly protected. Hence, censorship and lack of ownership
                    of digitalized data are at issue. The centralized storage
                    providers can be pressured by institutions to change
                    jurisdictions, which can negatively impact the service level
                    agreement made with the customer. Furthermore, vendor
                    lock-ins make it hard for customers to move their data out
                    of centralized storage providers when they are dissatisfied
                    with the provided service. Centralized storage providers can
                    keep customers locked in by enabling fees on data that the
                    customer wants to get out of their storage system (i.e.,
                    data migration).
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    The competitive landscape of digital storage providers has
                    left centralized organizations in a position where they can
                    implement changes in their payment policy on short notice.
                    These centralized storage providers have been competing with
                    each other for more than a decade to obtain large market
                    shares, which stimulates their leverage on forcing customers
                    to increase their digital infrastructure costs.
                    Decentralized storage networks deliver data on an economic
                    principle of data storage competition. Storage providers
                    within the decentralized network are competing with each
                    other to store the sensitive data of customers on their
                    storage units. This increases incentive to keep storage
                    costs low, hence the customer can choose which storage
                    provider they want their data to be stored on.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Another advantage of decentralized storage is how
                    denial-of-service (DDoS) attacks can be kept at bay. Because
                    decentralized storage makes use of a content delivery
                    network, which reduces the strain on a content delivery
                    system. Moreover, decentralized storage can be further
                    protected by incorporating it into a blockchain where
                    requests are dependent on transaction fees. The introduction
                    of transaction fees makes DDoS attacks less economically
                    viable. Additionally, centralized storage providers are
                    prone to cyberattacks due to a high incentive for criminals
                    to expose sensitive customer data. Data outages could also
                    be further exposed through hardware failures, maintenance
                    issues. Decentralized blockchain makes sure data is
                    immutable so it cannot be tampered with and operates on
                    self-executing so-called smart contracts that have a
                    predefined set of rules.
                  </p>
                </div>
                <div className="flex items-center ml-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl mt-10">
                    Since decentralisation seems so robust, why is not it
                    already widely adopted?
                  </h2>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Distributed content networks already exist and are
                    incorporated by many large tech businesses such as
                    Cloudflare, Chrome, and Netflix. Yet smaller companies tend
                    to rely on centralized storage providers. First and
                    foremost, many customers of centralized storage providers do
                    not have the resources to configure a decentralized storage
                    network in their current technology stack. Secondly,
                    centralized storage providers are using aggressive marketing
                    strategies to persuade the market into thinking centralized
                    storage still provides all of the needs of potential and
                    current customers.
                  </p>
                </div>
                <div className="flex items-center mt-8 ml-10">
                  <p>
                    Finally, this leaves the door open for startups that connect
                    businesses that are currently reliant on centralized storage
                    providers to adapt to the future of digitized storage. The
                    onboarding process is not clear enough for most businesses
                    to see change is technically viable and with the right
                    marketing tactics strides can be made to make storage
                    digitalization more secure and give businesses back the
                    control over their data.
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
