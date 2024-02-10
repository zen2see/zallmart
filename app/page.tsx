import Header from '@/components/Header'
import HeartBalloons from '@/public/images/heartBalloons.1dy.png'
import ClothesRack from '@/public/images/clothes.rack.4y0.png'
import Furniture from '@/public/images/furniture.szu.png'
import Circuit from '@/public/images/circuitboard.457.png'
import Mario from '@/public/images/mario.pj2.png'
import SoccerBall from '@/public/images/soccerball.m8e.png'
import DeskItems from '@/public/images/deskitems.gs1.png'
import HairExtender from '@/public/images/hairExtender.745.png'
import BasketBallHoop from '@/public/images/basketball.hoop.sq2.png'
import HandsRaised from '@/public/images/handsRaised.9fh.png'
import Lightning from '@/public/images/lightningBolt.qx7.png'
import GridOption from "@/components/GridOption"

export default function Home() {
  return (
    <main>
      <Header />
      <div className='grid grid-cols-1 grid-flow-row-dense md:grid-cols-4'>
        <GridOption
          title='Sweet gifts for less'
          image={HeartBalloons.src}
          className='bg-pink-200 h-full md:h-32'
        />
        <GridOption
          title='Shop Wardrobe'
          image={ClothesRack.src}
          className='bg-blue-100 col-span-2 row-span-2'
        />
        <GridOption
          title='Shop Home'
          image={Furniture.src}
          className='bg-pink-200 row-span-2'
        />
        <GridOption
          title='Shop Electronics'
          image={Circuit.src}
          className='bg-yellow-100 h-64'
        />
        <GridOption
          title='Shop Toys'
          image={Mario.src}
          className='bg-green-100 h-64 col-span-2'
        />
        <GridOption
          title='All you need for Match day'
          image={SoccerBall.src}
          className='bg-red-100 col-span-2 row-span-2'
        />
        <GridOption
          title='Shop Gadgets'
          image={DeskItems.src}
          className='bg-orange-100 h-64'
        />
        <GridOption
          title='Shop Beauty'
          image={HairExtender.src}
          className='bg-blue-100 h-64'
        />
        <GridOption
          title='Shop Sports'
          image={BasketBallHoop.src}
          className='bg-blue-100 h-64'
        />
        <GridOption
          title='Enjoy Free Shipping'
          image={HandsRaised.src}
          className='bg-rose-100 h-64'
        />
        <GridOption
          title='Flash Deals'
          image={Lightning.src}
          className='bg-orange-200 H-64 col-span-2'
        />

      </div>

    </main>
  );
}
