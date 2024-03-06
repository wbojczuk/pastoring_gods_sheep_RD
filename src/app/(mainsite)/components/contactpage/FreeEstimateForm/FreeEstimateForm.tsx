"use client"
// import PhoneNumber from "./PhoneNumber/PhoneNumber"
import { useRef, useState } from "react"
import handleFormSubmit from "./handleFormSubmit"
import "./freeestimateform.css"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{handleFormSubmit(evt, setStatus, formRef)}}>
        <input type="hidden" name="_subject" value="New message from website"/>
        <input type="hidden" name="_captcha" value="false"/>

        {/* START FIELDS */}
            
        <h2 id="estimateFormTitle">Contact Us</h2>
            <div className="input-wrapper">
                <img width={200} height={200} id="formPersonIcon" src={"/icons/person.svg"} alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <img width={200} height={200} id="formPhoneIcon" src={"/icons/phone.svg"} alt="Phone Icon" />
                <input required type="text" name="phoneNumber" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <img width={200} height={200} id="formEmailIcon" src={"/icons/email.svg"} alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email Address"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={2000} name="details" id="messageInput" placeholder={"Your message..."}></textarea>
            </div>
            
            <div className="center">
                <a style={{color: "var(--secondary-text-color)", backgroundColor: "var(--primary-color)"}} onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Submit</a>
            </div>

        </form>
    </>
  )
}
