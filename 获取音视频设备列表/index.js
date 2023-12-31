// 判断浏览器是否支持这些 API
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
}

// 枚举 cameras and microphones.
navigator.mediaDevices
  .enumerateDevices()
  .then((deviceInfos) => {
    console.log(deviceInfos);
    // 打印出每一个设备的信息
    deviceInfos.forEach(function (deviceInfo) {
      console.log(
        `${deviceInfo.kind}: ${deviceInfo.label} id = ${deviceInfo.deviceId}`
      );
    });
  })
  .catch((err) => {
    console.log(err.name + ": " + err.message);
  });
