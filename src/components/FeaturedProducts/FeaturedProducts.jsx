import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
            img2: "https://images.unsplash.com/photo-1582830359896-d2e492f4a0fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
            title: "Long Sleeve Graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1609324120004-364275e0ad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            title: "coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
            title: "skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title: "hat",
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className="FeaturedProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.</p>
        </div>
        <div className="bottom">
            {data.map(item=>
                    <Card item={item} key={item.id}/>
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts