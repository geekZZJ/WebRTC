// const promise=navigator.mediaDevices.getUserMedia({
//   audio:{
//     // 回音消除
//     echoCancellation:true,
//     // 降噪
//     noiseSuppression:true,
//     // 自动增益
//     autoGainControl:true
//   }
// })

const mediaStreamConstraints = {
  video: true,
};

const localVideo = document.querySelector("video");

navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then((mediaStream) => {
    localVideo.srcObject = mediaStream;
  })
  .catch((e) => {
    console.log("navigator.getUserMedia error: ", e);
  });
