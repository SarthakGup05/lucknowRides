export const phoneNum = "+918887917034"
export const formattedPhone = "+91 88879 17034"
export const whatsappUrl = (type) => {
  const message = `Hello Lucknow Rides,

I would like to inquire about booking a ride:
*Booking Type/Car:* ${type}

Please share the fare estimate and driver availability.

*Booking Details:*
• Pickup Address: 
• Destination Address: 
• Date & Time: 
• Number of Passengers: 

Thank you!`;
  
  return `https://wa.me/918887917034?text=${encodeURIComponent(message)}`;
}
