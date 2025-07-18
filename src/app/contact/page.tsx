import ContactCard from "@/components/ContactCard";

export default function page() {
  return (
    <>
      <div className="mx-auto relative bg-cover bg-center bg-[url('/webp/background/back_6.webp')] flex lg:flex-row max-lg:flex-col min-h-screen w-screen lg:items-start max-lg:items-center lg:justify-center max-lg:justify-start bg-primary lg:px-80 lg:py-32 max-lg:py-0">
        <div className="absolute  left-0 top-0 w-full h-full bg-primary opacity-90"></div>
        <div className="w-full lg:basis-1/2 z-30 max-lg:text-center text-white">
          <h1 className="mb-4 lg:text-5xl max-lg:text-4xl text-secondary lg:mt-48 max-lg:mt-12">
            Get in touch with us
          </h1>
          <h2>GUARDIAN BLOCKCHAIN LABS</h2>
          <h2>Robinson Road</h2>
        </div>
        <div className="w-full z-30 max-lg:mt-8 flex items-center justify-center lg:mt-24 lg:basis-1/2">
          <ContactCard />
        </div>
      </div>
    </>
  );
}
