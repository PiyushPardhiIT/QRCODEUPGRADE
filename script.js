// function generateQR() {
//   const text = document.getElementById('text-input').value;
//   const color = document.getElementById('color-select').value;
//   const dimension = document.getElementById('dimension-input').value;
  
//   const qr = new QRCode(document.getElementById('qrcode'), {
//     text: text,
//     width: dimension,
//     height: dimension,
//     colorDark: color,
//   });
// }

// function printQR() {
//   const printContent = document.getElementById('qrcode');
//   const windowUrl = 'about:blank';
//   const uniqueName = new Date();
//   const windowName = 'Print_' + uniqueName.getTime();

//   const printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
//   printWindow.document.write('<html><head><title>Print</title></head><body>');
//   printWindow.document.write(printContent.innerHTML);
//   printWindow.document.write('</body></html>');
//   printWindow.document.close();
//   printWindow.print();
// }


let totalScans = 0;
let geoLocations = [];

function generateQR() {
  const text = document.getElementById('text-input').value;
  const color = document.getElementById('color-select').value;
  const dimension = document.getElementById('dimension-input').value;

  // Simulate tracking the number of scans (replace with actual tracking logic)
  totalScans++;
  document.getElementById('totalScans').innerText = totalScans;

  const qr = new QRCode(document.getElementById('qrcode'), {
    text: text,
    width: dimension,
    height: dimension,
    colorDark: color,
  });
}

function printQR() {
  const printContent = document.getElementById('qrcode');
  const windowUrl = 'about:blank';
  const uniqueName = new Date();
  const windowName = 'Print_' + uniqueName.getTime();

  const printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(printContent.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}