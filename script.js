const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//select a media stream

const selectMediStream = async () => {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = ()=>{
        videoElement.play()
    }
  } catch (error) {
    console.log(error);
  }
};
button.addEventListener('click', async ()=>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

//onLoad
selectMediStream();
