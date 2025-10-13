import Hero from "../components/Hero/Hero";
import SecondBlock from "../components/SecondBlock/SecondBlock";
import EventsBlock from "../components/EventBlock/Events";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";


export default function HomePage() {
  return (
    <>
      <Hero />
      <SecondBlock />
      <EventsBlock />
      <PhotoGallery />
      <SubscribeBlock />
   
    </>
  );
}
