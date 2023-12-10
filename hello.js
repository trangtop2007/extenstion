// var img=document.createElement("img")
var i=document.querySelectorAll("img")
i.forEach((img)=>{
    img.src="/image.jpg"
    img.style.width="100%"
    img.style.height="100%"
    img.style.objectFit="cover"
})







// function takeScreenshot() {
// 	var screenshot = document.documentElement
// 		.cloneNode(true);
// 	screenshot.style.pointerEvents = 'none';
// 	screenshot.style.overflow = 'hidden';
// 	screenshot.style.webkitUserSelect = 'none';
// 	screenshot.style.mozUserSelect = 'none';
// 	screenshot.style.msUserSelect = 'none';
// 	screenshot.style.oUserSelect = 'none';
// 	screenshot.style.userSelect = 'none';
// 	screenshot.dataset.scrollX = window.scrollX;
// 	screenshot.dataset.scrollY = window.scrollY;
// 	var blob = new Blob([screenshot.outerHTML], {
// 		type: 'text/html'
// 	});
// 	return blob;
// }

// function generate() {
// 	window.URL = window.URL || window.webkitURL;
// 	window.open(window.URL
// 		.createObjectURL(takeScreenshot()));
// }
// takeScreenshot()
// const capture = async () => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     const video = document.createElement("video");
    
//     try {
//       const captureStream = await navigator.mediaDevices.getDisplayMedia();
//       video.srcObject = captureStream;
//       context.drawImage(video, 0, 0, window.width, window.height);
//       const frame = canvas.toDataURL("image/png");
//       captureStream.getTracks().forEach(track => track.stop());
//       window.location.href = frame;
//     } catch (err) {
//       console.error("Error: " + err);
//     }
//   };
  
//   capture();