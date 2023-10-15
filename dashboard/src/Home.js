import React from 'react'
import 
{BsCoin, BsDatabase, BsReverseLayoutTextSidebarReverse,  BsArrowDownShort, BsArrowUpShort}
 from 'react-icons/bs'
 import 
 { ResponsiveContainer} 
 from 'recharts';
 import { IoBagHandleOutline } from "react-icons/io5";
 import barchart from './images/barchart.jpg';
 import piechart from './images/piechart.jpg';
 import product from './images/product.jpg';
 


function Home() {
  return (
    <main className='main-container'>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <BsCoin className='card-logo'/>
                </div>
                <span className='card-data'>
                    <span className='cd1'>Earning</span>
                    <span><h1>$198K</h1></span>
                    <span className='card-data1'><BsArrowUpShort/>37.8%<p id='card-p'>this month</p></span>
                </span>
            </div>
            <div className='card2'>
                <div className='card-inner2'>
                <BsReverseLayoutTextSidebarReverse className='card-logo2'/>
                </div>
                <span className='card-data2'>
                    <span className='cd12'>Orders</span>
                    <h1>$2.4K</h1>
                    <span className='card-data12'><BsArrowDownShort/>37.8%<p id='card-p'>this month</p></span>
                </span>
            </div>
            <div className='card3'>
                <div className='card-inner3'>
                <BsDatabase className='card-logo3'/>
                </div>
                <span className='card-data3'>
                    <span className='cd13'>Balance</span>
                    <h1>$2.4K</h1>
                    <span className='card-data13'><BsArrowDownShort/>2%<p id='card-p'>this month</p></span>
                </span>
            </div>
            <div className='card4'>
                <div className='card-inner4'>
                <IoBagHandleOutline className='card-logo4'/>
                </div>
                <span className='card-data4'>
                    <span className='cd14'>Total Sales</span>
                    <h1>$89K</h1>
                    <span className='card-data14'><BsArrowUpShort/>11%<p id='card-p'>this week</p></span>
                </span>
            </div>
        </div>
        <div className='charts'>
           <ResponsiveContainer width="100%" height="100%">
              <img src={barchart} alt='logo' id='bar'/>
           </ResponsiveContainer> 

          <ResponsiveContainer width="100%" height="100%">
            <img src={piechart}  alt='piechart' id='pie'/>
        </ResponsiveContainer>
        </div>

        <div className='product'>
        <ResponsiveContainer width="100%" height="100%">
            <img src={product}  alt='product' id='product'/>
        </ResponsiveContainer>
        </div>
       
    </main>  
  )
}

export default Home