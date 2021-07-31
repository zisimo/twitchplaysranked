// Click on the stream to get coordinate command on your chat text box
// Created for grathwrang's TwichPlaysRanked by zisimo
let videoPlayerDivs = document.getElementsByClassName('video-player__overlay');
let chatTextArea = document.querySelector('[data-test-selector="chat-input"]');

if (videoPlayerDivs && videoPlayerDivs.length) {
  const videoPlayerDiv = videoPlayerDivs[0];
  videoPlayerDiv.onclick = function clickEvent(e) {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left)/rect.width*100);
    const y = Math.round((e.clientY - rect.top)/rect.height*100);
    const mouseCommand = `!mouse ${x} ${y}`;
    console.log(mouseCommand);
  }
}
