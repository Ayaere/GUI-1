function toggleMute() {
    var myAudio = document.getElementById('site_audio');
    myAudio.muted = !myAudio.muted;
 }

// Existing code unchanged.
window.onload = function() {
    var context = new AudioContext();
    const oscillator = new OscillatorNode(context);
    const gain = new GainNode(context);
    const analyser = new AnalyserNode(context, {
      fftSize: 2048,
      maxDecibels: -25,
      minDecibels: -60,
      smoothingTimeConstant: 0.5,
    });

    oscillator.context;
    oscillator.numberOfInputs;
    oscillator.numberOfOutputs;
    oscillator.channelCount;
  }
  
  // One-liner to resume playback when user interacted with the page.
  document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });