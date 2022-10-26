import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import {
    CartComponent,
    Header,
    LandingPageComponent,
    Products
} from "../components/HomeComponents"
import {Tab} from "@headlessui/react"
import {Category, Product} from "../types"
import {fetchCategories, fetchProducts} from '../utils'

type HomeProps = {
    categories: Category[],
    products: Product[]
}

const Home: NextPage<HomeProps> = ({categories, products}) => {

    /** Filter products by number **/
    const showProducts = (categoryId: string) => 
        (products.filter((product) => 
                         product.category._ref == categoryId).map((product) =>
                         <Products product = {product} key = {product._id} />))
    return (
        <div>
            <Head>
                <title>Apple redesign</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <CartComponent />
            <main className = "relative h-[200vh] bg-[#e7ecee]">
                <LandingPageComponent />
            </main>
            <section className = "relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
                <div className = "space-y-10 py-16">
                    <h1 className = "text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
                        New Promos
                    </h1>
                    <Tab.Group>
                        <Tab.List className = "flex justify-center">
                            {
                                categories.map((category) => (
                                    <Tab
                                        key = {category._id}
                                        id= {category._id}
                                        className = {({selected}) => `whitespace-nowrap rounded-t-lg py-3 text-sm px-5 font-light outline-none md:py-4 md:px-6 md:text-base 
                                            ${(selected) ? "borderGradient  bg-[#35383c] text-white" : "border-b-2 border-[#35383c] text-[#747474]"}`}

                                    >
                                        {category.title}
                                    </Tab>
                                ))
                            }
                        </Tab.List>
                        <Tab.Panels className = "mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                            {
                                categories.map((category) => (
                                    <Tab.Panel className = "tabPanel">{showProducts(category._id)}</Tab.Panel>
                                ))
                            }
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    )
}

export default Home 

export const getServerSideProps: GetServerSideProps<HomeProps> = async() => {
    const categories = await fetchCategories()
    const products = await fetchProducts()
    return ({
        props: {
            categories,
            products
        }
    })
}

