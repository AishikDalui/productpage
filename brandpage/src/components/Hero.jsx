import React from 'react'

export default function Hero(props) {
    

    return (
        <>
            <div className='content'>
                <div className='herosection'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.
                    </p>
                    <div className='shopnow'>
                        <button>Shop Now</button>
                    
                    <div className='catagory'>
                        <button>catagory</button>
                        </div>

                    </div>
                    <div className="available">
                        <p>Also Available on</p>
                        <div >
                            <img src='/images/amazon.png' className='img' alt="" />
                            <img src="/images/flipkart.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="shoe">
                    <img src="/images/shoe_image.png" alt="" />
                </div>

            </div>
        </>
    )
}
