import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import ServiceTimes from "@/app/(mainsite)/components/homepage/ServiceTimes/ServiceTimes"
import Welcome from "@/app/(mainsite)/components/homepage/Welcome/Welcome"
import WhatWeBelieve from "@/app/(mainsite)/components/homepage/WhatWeBelieve/WhatWeBelieve"
import Pastor from "@/app/(mainsite)/components/homepage/Pastor/Pastor"
import VisitUs from "@/app/(mainsite)/components/homepage/VisitUs/VisitUs"
import FAQ from "@/app/(mainsite)/components/homepage/FAQ/FAQ"

export default function Home() {
  return (
    <>
      <Header />
      <ServiceTimes />
      <Welcome imgSrc="/img/cross.webp" />
      <WhatWeBelieve />
      <Pastor imgSrc="/img/pastor.webp" />
      <VisitUs />
      <FAQ />
    </>
  )
}
