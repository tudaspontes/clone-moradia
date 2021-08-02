import { Flex, Text } from '@chakra-ui/react';

import { HowItWorks } from '../components/HowItWorks';
import { CallToAction } from '../components/CallToAction';

import { SEO } from '../utils/seo'
import { AboutUs } from '../components/AboutUs';
import { Testimonials } from '../components/Testimonials';
import { SliderSection } from '../components/Slider';

export default function Home() {
  return (
    <>
      <SEO />
      <CallToAction
        image="img-index.jpg"
        text="Seu novo espaço com um novo estilo"
        subText="um novo jeito de decorar sua casa"
      />
      <Flex>
        <HowItWorks />
      </Flex>
      <CallToAction
        image="img-index2.jpg"
        text="Pronto para transformar seu ambiente?"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque repellat, ratione eum labore voluptatibus? Similique delectus tempore vel a."
      />
      <AboutUs
        title="sobre nós"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lorem rutrum
        , eleifend lorem eleifend, tincidunt elit. Ut a sapien vestibulum, maximus augue ut, aliquet nunc. Cras feugiat facilisis justo tincidunt aliquam."
      />
      <Testimonials />
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="600"
        color="pink.500"
        align="center"
        mb={14}
        >
        NOSSOS PROJETOS
      </Text>
      <SliderSection href="teste" image="img-index2.jpg" />
    </>
    
  )
}