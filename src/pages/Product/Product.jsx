import React from 'react'
import BuyProduct from './_components/BuyProduct/BuyProduct'
import OfferProduct from './_components/OfferProduct/OfferProduct'
import ProductHeader from './_components/ProductHeader/ProductHeader'
import ProductReklama from './_components/ProductReklama/ProductReklama'
import ProductMenu from "../Home/_components/ProductMenu/ProductMenu";
import DownloadMobile from "../../components/DownloadMobile/DownloadMobile"
import Reklama from "../../components/Reklama/Reklama";
import Partners from "../../components/Partners/Partners";

function Product() {
  return (
    <div className='product globalContainer'>
        <ProductHeader/>
        <OfferProduct/>
        <BuyProduct/>
        <ProductReklama/>
        <ProductMenu/>
        <DownloadMobile/>
        <Reklama/>
        <Partners/>
    </div>
  )
}

export default Product