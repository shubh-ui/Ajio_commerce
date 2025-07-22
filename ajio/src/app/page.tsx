import Image from 'next/image'
import Navbar from './component/Navbar/Navbar'
import ImageSlider from './component/ImageSlider/ImageSlider'

export default function Home() {
  return (
    <main>
      <ImageSlider />
      <div>
        <div className='flex items-center justify-around py-24'> 
          <div className='rounded-xl overflow-hidden'>
              <Image className='scale-100 hover:scale-105 transition-transform' src="/images/banner1.png" width={600} height={200} alt='baner-image'/>
          </div>

          <div className='rounded-xl overflow-hidden'>
              <Image className='scale-100 hover:scale-105 transition-transform' src="/images/banner2.png" width={600} height={200} alt='baner-image'/>

          </div>
        </div>
      </div>
    </main>
  )
}
