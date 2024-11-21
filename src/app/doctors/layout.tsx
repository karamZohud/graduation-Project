import React from 'react'
import HeaderSide from '../components/HomePage/HeaderSide';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    return (
      <html lang="en">
        <body className="relative" >
       <HeaderSide/>
        
         <div className=" bg-gray-50">
         {children}
         </div>
          
        </body>
      </html>
    );
  }