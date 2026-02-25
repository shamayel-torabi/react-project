import FaqSection from '@/components/sections/faq-section';
import HeroSection from '@/components/sections/hero-section';
import Newsletter from '@/components/sections/newsletter';
import OurLatestCreations from '@/components/sections/our-latest-creations';
import OurTestimonialSection from '@/components/sections/our-testimonials-section';
import WhatWeDoSection from '@/components/sections/what-we-do-section';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <WhatWeDoSection />
            <OurLatestCreations />
            <OurTestimonialSection />
            <FaqSection />
            <Newsletter />
        </main>
    );
}
