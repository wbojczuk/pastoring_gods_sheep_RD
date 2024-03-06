import type { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import VisitContent from "@/app/(mainsite)/components/visitpage/VisitContent/VisitContent"

export const metadata: Metadata = {
    title: "Visit Us",
    description: ""
}

export default function VisitPage(){
    return(
        <>
            <PageTitle pageTitle="Visit Us" />
            <VisitContent />
        </>
    )
}