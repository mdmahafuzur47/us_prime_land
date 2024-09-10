import Container from '@/components/ui/Container'
import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, PhoneCallIcon, TwitterIcon, YoutubeIcon } from '../icons/Icons'

export default function TopNavBar() {
  return (
    <Container className="flex justify-between items-center">
    {/* icons  */}
    <div className="flex gap-2 py-3">
      <FacebookIcon className="text-[17.5px] text-blue-700"/>
      <InstagramIcon />
      <TwitterIcon />
      <YoutubeIcon />
      <LinkedinIcon />
    </div>
    {/* address and location  */}
    <div className="text-[15px] flex gap-8 items-center">
      <div className="text-primary font-medium  flex items-center gap-1">
        <LocationIcon />
        <p>7509 LUPINE DR 33610, Tampa, FL.</p>
      </div>
      <div className="text-primary font-medium  flex items-center gap-1">
        <PhoneCallIcon />
        <p>(941) 284-9653</p>
      </div>
    </div>
  </Container>
  )
}
