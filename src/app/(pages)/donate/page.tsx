import type { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import DonateContent from "@/app/(mainsite)/components/donatepage/DonateContent/DonateContent"

export const metadata: Metadata = {
    title: "Donate Page",
    description: ""
}

export default function DonatePage(){
    return(
        <>
            <PageTitle pageTitle="Donate" />
            <DonateContent imgSrc="/img/grapes.webp" />
        </>
    )
}