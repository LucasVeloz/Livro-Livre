"use client"
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

export default function QRCode() {
  function onScan(data: IDetectedBarcode[]) {
    data.forEach(item => {
      console.log(item.rawValue)
      window.open(item.rawValue, '_blank');
    })
  }


  return (
    <main className="overflow-hidden">
      <Scanner
        onScan={onScan}
        styles={{
          video: {
            accentColor: "#003ds",
          },
          // container: {
          //   color: "blue",
          //   background: "blue"
          // },
          finderBorder: 10
        }}
      />
    </main>
  );
}
