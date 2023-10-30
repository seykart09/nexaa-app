import Navbar from '@/components/Navbar';
import Carousel from '@/components/homepage/Carousel'
import Banner from '@/components/homepage/Banner';
import SmallImages from '@/components/homepage/SmallImages';
import UnlockCollaborations from '@/components/homepage/UnlockCollaborations';
import EffortlessCollaboration from '@/components/homepage/EffortlessCollaboration';
import Impressions from '@/components/homepage/Impressions';
import Creators from '@/components/homepage/Creators';
import ElevateBrand from '@/components/homepage/ElevateBrand';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen relative font-sharp-grotesk"
    >
      <Navbar />
      <div>
        <Banner />

        <SmallImages />
        
        <Carousel/>

        <UnlockCollaborations />

        <Impressions />

        <EffortlessCollaboration />
        
        <Creators />
        
        <ElevateBrand />

        <Footer />
      </div>
    </div>
  )
}
