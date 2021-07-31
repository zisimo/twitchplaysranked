// Click on the stream to get coordinate command on your clipboard; Aftewards
// just paste the result on the chat and send it.
// Created for grathwrang's TwichPlaysRanked by zisimo
let videoPlayerDivs = document.getElementsByClassName('video-player__overlay');
let chatTextArea = document.querySelector('[data-test-selector="chat-input"]');

let copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log(`Copied to clipboard ${str}`);
};

if (videoPlayerDivs && videoPlayerDivs.length) {
  const videoPlayerDiv = videoPlayerDivs[0];
  videoPlayerDiv.onclick = function clickEvent(e) {
    const rect = e.target.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left)/rect.width*100);
    const y = Math.round((e.clientY - rect.top)/rect.height*100);
    const mouseCommand = `!mouse ${x} ${y}`;
    
    copyToClipboard(mouseCommand);
  }
}
