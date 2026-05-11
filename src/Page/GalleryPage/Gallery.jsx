import React from 'react'
import PageHeader from '../../Components/common/PageHeader'
import GalleryGrid from './GalleryGrid'

const Gallery = () => {
    return (
        <main className='outfit'>
            <PageHeader 
                title="Gallery" 
                subtitle="A visual journey through our fields, processing excellence, and global reach." 
                image="https://i.pinimg.com/736x/ff/68/56/ff6856f8cc4af12fd79fae42bf167c7b.jpg" 
            />
            <GalleryGrid />
        </main>
    )
}

export default Gallery