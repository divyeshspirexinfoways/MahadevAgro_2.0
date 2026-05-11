import React from 'react'
import PageHeader from '../../Components/common/PageHeader'
import ProductShowcase from './ProductShowcase'

const Product = () => {
    return (
        <main className='outfit'>
            <PageHeader 
                title="Our Products" 
                subtitle="Explore our curated selection of the finest grains, processed for purity and global excellence."
                image="https://i.pinimg.com/1200x/da/4c/c8/da4cc84e4aba23138da71ae896b78b29.jpg"
            />
            <ProductShowcase />
        </main>
    )
}

export default Product
