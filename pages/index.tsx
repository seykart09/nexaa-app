import Navbar from '@/components/shared/Navbar';
import Carousel from '@/components/homepage/Carousel'
import Banner from '@/components/homepage/Banner';
import SmallImages from '@/components/homepage/SmallImages';
import UnlockCollaborations from '@/components/homepage/UnlockCollaborations';
import EffortlessCollaboration from '@/components/homepage/EffortlessCollaboration';
import Impressions from '@/components/homepage/Impressions';
import Creators from '@/components/homepage/Creators';
import ElevateBrand from '@/components/homepage/ElevateBrand';
import { Footer } from '@/components/shared/Footer';
import { Testimonials } from '@/components/homepage/Testimonials';

export default function Home() {
  return (
    <div
      className="min-h-screen relative font-test-grotesk"
    >
      <Navbar />
      <div className='w-screen'>
        <Banner />

        <SmallImages />
        
        <Carousel/>

        <UnlockCollaborations />

        <Impressions />

        <EffortlessCollaboration />
        
        <Creators />

        <Testimonials />
        
        <ElevateBrand />

        <Footer />
      </div>
    </div>
  )
}
