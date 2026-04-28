"use client"

import axios from "axios"

function CheckSms() {

  const BASE_URL = 'https://api.textbee.dev/api/v1'
  const API_KEY = process.env.NEXT_PUBLIC_TEXT_BEE_API
  const DEVICE_ID = process.env.NEXT_PUBLIC_TEXT_BEE_DEVICE_ID

  async function handleSMS() {
    const response = await axios.post(
      `${BASE_URL}/gateway/devices/${DEVICE_ID}/send-sms`,
      {
        recipients: ['9223453450'],
        message: 'Hello from TextBee!'
      },
      { headers: { 'x-api-key': API_KEY } }
    )
    console.log(response.data)
  }

  return (
    <>
      <button onClick={handleSMS} className='bg-black text-white'>
        send msg
      </button>

    </>
  )
}

export default CheckSms