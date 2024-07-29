"use client"
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  function onScan(data: IDetectedBarcode[]) {
    data.forEach(item => {
      console.log(item.rawValue)
      window.open(item.rawValue, '_blank');
    })
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Scanner
        onScan={onScan}

      />
    </main>
  );
}
