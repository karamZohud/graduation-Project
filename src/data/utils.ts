export interface Doctor {
    id: number;
    name: string;
    isVerified: boolean;
    description: string;
    specialty: string;
    rating: number;
    location: string;
    image?: string; // Optional in case some doctors lack images
  }


  const date = new Date();

const timestamp = date.getTime();
console.log(timestamp);

const timestamp1 = 12345674532; 
const date1 = new Date(timestamp1);

console.log(date1.toString());

const birthday = new Date('March 13, 08 04:20');

console.log(birthday.getHours());
// Expected output: 4
