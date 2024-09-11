"use client"
import { Menu } from "@/components/menu";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

export default function QRCode() {
  function onScan(data: IDetectedBarcode[]) {
    data.forEach(item => {
      console.log(item.rawValue)
      window.open(item.rawValue, '_blank');
    })
  }


  return (
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      <div>
        <Scanner
          onScan={onScan}
          styles={{
            finderBorder: 10
          }}
        />
      </div>
      <Menu />
    </div>
  );
}
