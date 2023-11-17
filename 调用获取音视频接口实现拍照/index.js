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
  video: {
    width: 1280,
    height: 720,
    frameRate: 15,
  },
  audio: false,
};

const videoPlay = document.querySelector("video#player");
const picture = document.querySelector("canvas#picture");
picture.width = 640;
picture.height = 360;
const btn = document.getElementById("TakePhoto");
const filtersSelect = document.getElementById("filter");

navigator.mediaDevices
  .getUserMedia(mediaStreamConstraints)
  .then((mediaStream) => {
    videoPlay.srcObject = mediaStream;
  })
  .catch((e) => {
    console.log("navigator.getUserMedia error: ", e);
  });

btn.onclick = function () {
  // 增加滤镜
  picture.className = filtersSelect.value;
  picture
    .getContext("2d")
    .drawImage(videoPlay, 0, 0, picture.width, picture.height);
};

function downLoad() {
  const picInfo = picture.toDataURL({
    type: "png",
    pixelRatio: 1.5,
    backgroundColor: "white",
  });
  const oA = document.createElement("a");
  oA.download = "photo"; // 设置下载的文件名，默认是'下载'
  oA.href = picInfo;
  document.body.appendChild(oA);
  oA.click();
  oA.remove(); // 下载之后把创建的元素删除
}

document.querySelector("button#save").onclick = function () {
  downLoad();
};
