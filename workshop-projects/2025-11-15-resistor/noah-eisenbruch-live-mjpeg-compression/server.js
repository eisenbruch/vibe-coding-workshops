const http = require('http');
const { createCanvas } = require('canvas');

const PORT = 3000;
const WIDTH = 800;
const HEIGHT = 600;

// Helper function to convert HSL to RGB
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

let interactionData = { mouseX: 0.5, mouseY: 0.5, webcamBrightness: 0 };
let webcamImageData = null;
let glitchTime = 0;

// Effect parameters
let glitchParams = {
  sortProbability: 0.5,
  sortThreshold: 100,
  horizontalShift: 0.3,
  rgbShift: 0.4,
  blockDisplacement: 0.25,
  chromaIntensity: 0.6
};

let jpegQuality = 0.5;

// Pixel sorting glitch effect
function generateGlitchFrame() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Base image - either webcam or procedural noise
  if (webcamImageData) {
    // Scale webcam to canvas size
    const tempCanvas = createCanvas(webcamImageData.width, webcamImageData.height);
    const tempCtx = tempCanvas.getContext('2d');
    const imgData = tempCtx.createImageData(webcamImageData.width, webcamImageData.height);
    imgData.data.set(webcamImageData.data);
    tempCtx.putImageData(imgData, 0, 0);
    ctx.drawImage(tempCanvas, 0, 0, WIDTH, HEIGHT);
  } else {
    // Generate colorful noise pattern
    const imageData = ctx.createImageData(WIDTH, HEIGHT);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const x = (i / 4) % WIDTH;
      const y = Math.floor(i / 4 / WIDTH);
      const hue = (x * 2 + y * 3 + glitchTime * 10) % 360;
      const noise = Math.random() * 0.3 + 0.7;
      const rgb = hslToRgb(hue / 360, 0.7, 0.5 * noise);
      imageData.data[i] = rgb[0];
      imageData.data[i + 1] = rgb[1];
      imageData.data[i + 2] = rgb[2];
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  // Get image data for glitch processing
  let imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
  let pixels = imageData.data;

  // Pixel sorting on rows and columns
  for (let y = 0; y < HEIGHT; y++) {
    if (Math.random() < glitchParams.sortProbability) {
      let ranges = [];
      let start = -1;

      for (let x = 0; x < WIDTH; x++) {
        const idx = (y * WIDTH + x) * 4;
        const brightness = (pixels[idx] + pixels[idx + 1] + pixels[idx + 2]) / 3;

        if (brightness > glitchParams.sortThreshold && start === -1) {
          start = x;
        } else if (brightness <= glitchParams.sortThreshold && start !== -1) {
          ranges.push({ start, end: x });
          start = -1;
        }
      }
      if (start !== -1) {
        ranges.push({ start, end: WIDTH });
      }

      for (let range of ranges) {
        const len = range.end - range.start;
        if (len < 2) continue;

        let pixelArray = [];
        for (let x = range.start; x < range.end; x++) {
          const idx = (y * WIDTH + x) * 4;
          pixelArray.push({
            r: pixels[idx],
            g: pixels[idx + 1],
            b: pixels[idx + 2],
            a: pixels[idx + 3],
            brightness: (pixels[idx] + pixels[idx + 1] + pixels[idx + 2]) / 3
          });
        }

        pixelArray.sort((a, b) => a.brightness - b.brightness);

        for (let i = 0; i < pixelArray.length; i++) {
          const x = range.start + i;
          const idx = (y * WIDTH + x) * 4;
          pixels[idx] = pixelArray[i].r;
          pixels[idx + 1] = pixelArray[i].g;
          pixels[idx + 2] = pixelArray[i].b;
          pixels[idx + 3] = pixelArray[i].a;
        }
      }
    }
  }

  // Horizontal displacement glitches
  if (Math.random() < glitchParams.horizontalShift) {
    const numGlitches = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < numGlitches; i++) {
      const glitchY = Math.floor(Math.random() * HEIGHT);
      const glitchHeight = Math.floor(Math.random() * 80) + 2;
      const offset = Math.floor((Math.random() - 0.5) * 200);

      for (let y = glitchY; y < Math.min(glitchY + glitchHeight, HEIGHT); y++) {
        for (let x = 0; x < WIDTH; x++) {
          const sourceX = (x + offset + WIDTH) % WIDTH;
          const sourceIdx = (y * WIDTH + sourceX) * 4;
          const targetIdx = (y * WIDTH + x) * 4;

          if (sourceIdx >= 0 && sourceIdx < pixels.length) {
            pixels[targetIdx] = pixels[sourceIdx];
            pixels[targetIdx + 1] = pixels[sourceIdx + 1];
            pixels[targetIdx + 2] = pixels[sourceIdx + 2];
          }
        }
      }
    }
  }

  // RGB channel shifting
  if (Math.random() < glitchParams.rgbShift) {
    const redShift = Math.floor((Math.random() - 0.5) * 40);
    const blueShift = Math.floor((Math.random() - 0.5) * 40);
    const tempPixels = new Uint8ClampedArray(pixels);

    for (let i = 0; i < pixels.length; i += 4) {
      const redIdx = Math.max(0, Math.min(pixels.length - 4, i + redShift * 4));
      const blueIdx = Math.max(0, Math.min(pixels.length - 4, i + blueShift * 4));
      pixels[i] = tempPixels[redIdx];
      pixels[i + 2] = tempPixels[blueIdx + 2];
    }
  }

  // Block displacement
  if (Math.random() < glitchParams.blockDisplacement) {
    const numBlocks = Math.floor(Math.random() * 8) + 2;
    for (let i = 0; i < numBlocks; i++) {
      const blockX = Math.floor(Math.random() * WIDTH);
      const blockY = Math.floor(Math.random() * HEIGHT);
      const blockW = Math.floor(Math.random() * 100) + 20;
      const blockH = Math.floor(Math.random() * 100) + 20;
      const offsetX = Math.floor((Math.random() - 0.5) * 60);
      const offsetY = Math.floor((Math.random() - 0.5) * 60);

      for (let y = 0; y < blockH; y++) {
        for (let x = 0; x < blockW; x++) {
          const srcX = blockX + x;
          const srcY = blockY + y;
          const dstX = srcX + offsetX;
          const dstY = srcY + offsetY;

          if (srcX >= 0 && srcX < WIDTH && srcY >= 0 && srcY < HEIGHT &&
              dstX >= 0 && dstX < WIDTH && dstY >= 0 && dstY < HEIGHT) {
            const srcIdx = (srcY * WIDTH + srcX) * 4;
            const dstIdx = (dstY * WIDTH + dstX) * 4;
            pixels[dstIdx] = pixels[srcIdx];
            pixels[dstIdx + 1] = pixels[srcIdx + 1];
            pixels[dstIdx + 2] = pixels[srcIdx + 2];
          }
        }
      }
    }
  }

  // Chromatic aberration
  if (glitchParams.chromaIntensity > 0.1) {
    const tempPixels = new Uint8ClampedArray(pixels);
    const intensity = glitchParams.chromaIntensity * 15;

    for (let y = 0; y < HEIGHT; y++) {
      for (let x = 0; x < WIDTH; x++) {
        const idx = (y * WIDTH + x) * 4;
        const centerX = WIDTH / 2;
        const centerY = HEIGHT / 2;
        const dx = (x - centerX) / WIDTH;
        const dy = (y - centerY) / HEIGHT;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const rShift = Math.floor(dist * intensity);
        const bShift = Math.floor(-dist * intensity);

        const rX = Math.max(0, Math.min(WIDTH - 1, x + rShift));
        const bX = Math.max(0, Math.min(WIDTH - 1, x + bShift));

        const rIdx = (y * WIDTH + rX) * 4;
        const bIdx = (y * WIDTH + bX) * 4;

        pixels[idx] = tempPixels[rIdx];
        pixels[idx + 2] = tempPixels[bIdx + 2];
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
  glitchTime += 1;

  return canvas.toBuffer('image/jpeg', { quality: jpegQuality });
}

const server = http.createServer((req, res) => {
  if (req.url === '/stream') {
    res.writeHead(200, {
      'Content-Type': 'multipart/x-mixed-replace; boundary=frame',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    const interval = setInterval(() => {
      try {
        const frame = generateGlitchFrame();
        res.write(`--frame\r\n`);
        res.write(`Content-Type: image/jpeg\r\n`);
        res.write(`Content-Length: ${frame.length}\r\n\r\n`);
        res.write(frame);
        res.write('\r\n');
      } catch (err) {
        clearInterval(interval);
        res.end();
      }
    }, 100); // 10 fps

    req.on('close', () => {
      clearInterval(interval);
    });
  } else if (req.url.startsWith('/interact')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    interactionData.mouseX = parseFloat(url.searchParams.get('x')) || 0.5;
    interactionData.mouseY = parseFloat(url.searchParams.get('y')) || 0.5;
    interactionData.webcamBrightness = parseFloat(url.searchParams.get('b')) || 0;
    res.writeHead(200);
    res.end('ok');
  } else if (req.url === '/webcam' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        webcamImageData = {
          data: new Uint8ClampedArray(data.data),
          width: data.width,
          height: data.height
        };
        res.writeHead(200);
        res.end('ok');
      } catch (err) {
        res.writeHead(400);
        res.end('error');
      }
    });
  } else if (req.url === '/glitch-params' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        Object.assign(glitchParams, data);
        res.writeHead(200);
        res.end('ok');
      } catch (err) {
        res.writeHead(400);
        res.end('error');
      }
    });
  } else if (req.url === '/jpeg-quality' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        jpegQuality = parseFloat(data.quality);
        res.writeHead(200);
        res.end('ok');
      } catch (err) {
        res.writeHead(400);
        res.end('error');
      }
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MJPEG Compression & Glitch Stream</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      background: #000;
      color: #fff;
      font-family: monospace;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    h1 {
      margin-bottom: 10px;
      font-size: 24px;
    }
    .controls {
      margin-bottom: 20px;
      display: flex;
      gap: 15px;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
    }
    button {
      background: #333;
      color: #fff;
      border: 1px solid #666;
      padding: 8px 16px;
      cursor: pointer;
      font-family: monospace;
      border-radius: 4px;
    }
    button:hover {
      background: #444;
    }
    button.active {
      background: #0066cc;
      border-color: #0088ff;
    }
    .sliders {
      background: #111;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 900px;
      width: 90%;
    }
    .slider-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 15px;
    }
    .slider-control {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .slider-label {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #999;
    }
    .slider-label .value {
      color: #0088ff;
    }
    input[type="range"] {
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: #333;
      outline: none;
      -webkit-appearance: none;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #0088ff;
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #0088ff;
      cursor: pointer;
      border: none;
    }
    .section-title {
      font-size: 14px;
      color: #666;
      margin-top: 0;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .streams {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .stream-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .stream-container h2 {
      font-size: 16px;
      margin-bottom: 10px;
      color: #999;
    }
    .stream-container.hidden {
      display: none;
    }
    .container {
      position: relative;
      display: inline-block;
    }
    img {
      border: 2px solid #333;
      max-width: 100%;
      height: auto;
      display: block;
    }
    #webcam {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 160px;
      height: 120px;
      border: 2px solid #666;
      display: none;
      z-index: 100;
    }
    .info {
      margin-top: 10px;
      font-size: 12px;
      color: #888;
      text-align: center;
    }

    /* Mobile responsive styles */
    @media (max-width: 768px) {
      body {
        padding: 10px;
      }
      h1 {
        font-size: 20px;
      }
      .controls {
        flex-direction: column;
        gap: 10px;
      }
      #status {
        font-size: 12px;
        text-align: center;
      }
      .sliders {
        padding: 15px;
        width: 95%;
      }
      .slider-group {
        grid-template-columns: 1fr;
        gap: 15px;
      }
      .slider-control {
        gap: 6px;
      }
      input[type="range"] {
        height: 8px;
      }
      input[type="range"]::-webkit-slider-thumb {
        width: 24px;
        height: 24px;
      }
      input[type="range"]::-moz-range-thumb {
        width: 24px;
        height: 24px;
      }
      #webcam {
        width: 100px;
        height: 75px;
      }
      .stream-container {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <h1>Glitch MJPEG Stream</h1>
  <div class="controls">
    <button id="webcamBtn">Enable Webcam</button>
    <span id="status"></span>
  </div>

  <video id="webcam" autoplay playsinline></video>
  <div class="streams" id="streams-container">
    <div class="stream-container">
      <div class="container">
        <img id="stream" src="/stream" alt="Glitch effect">
      </div>
    </div>
  </div>

  <div class="sliders">
    <h3 class="section-title">Effect Controls</h3>
    <div class="slider-group">
      <div class="slider-control">
        <div class="slider-label">
          <span>JPEG Quality</span>
          <span class="value" id="jpegQuality-val">0.50</span>
        </div>
        <input type="range" id="jpegQuality" min="0" max="1" step="0.001" value="0.5">
      </div>
      <div class="slider-control">
        <div class="slider-label">
          <span>Pixel Sort Intensity</span>
          <span class="value" id="sortProbability-val">0.5</span>
        </div>
        <input type="range" id="sortProbability" min="0" max="1" step="0.001" value="0.5">
      </div>
      <div class="slider-control">
        <div class="slider-label">
          <span>Sort Threshold</span>
          <span class="value" id="sortThreshold-val">100</span>
        </div>
        <input type="range" id="sortThreshold" min="0" max="255" step="0.001" value="100">
      </div>
      <div class="slider-control">
        <div class="slider-label">
          <span>Horizontal Shift</span>
          <span class="value" id="horizontalShift-val">0.3</span>
        </div>
        <input type="range" id="horizontalShift" min="0" max="1" step="0.001" value="0.3">
      </div>
      <div class="slider-control">
        <div class="slider-label">
          <span>RGB Shift</span>
          <span class="value" id="rgbShift-val">0.4</span>
        </div>
        <input type="range" id="rgbShift" min="0" max="1" step="0.001" value="0.4">
      </div>
      <div class="slider-control">
        <div class="slider-label">
          <span>Block Displacement</span>
          <span class="value" id="blockDisplacement-val">0.25</span>
        </div>
        <input type="range" id="blockDisplacement" min="0" max="1" step="0.001" value="0.25">
      </div>
      <div class="slider-control">
        <div class="slider-label">
          <span>Chromatic Aberration</span>
          <span class="value" id="chromaIntensity-val">0.6</span>
        </div>
        <input type="range" id="chromaIntensity" min="0" max="1" step="0.001" value="0.6">
      </div>
    </div>
  </div>

  <script>
    const streamImg = document.getElementById('stream');
    const webcamBtn = document.getElementById('webcamBtn');
    const webcamVideo = document.getElementById('webcam');
    const status = document.getElementById('status');
    let webcamEnabled = false;
    let webcamStream = null;

    // JPEG Quality slider
    const jpegQualitySlider = document.getElementById('jpegQuality');
    const jpegQualityValue = document.getElementById('jpegQuality-val');

    jpegQualitySlider.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      jpegQualityValue.textContent = value.toFixed(3);

      fetch('/jpeg-quality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quality: value })
      }).catch(() => {});
    });

    // Glitch parameter sliders
    const sliders = ['sortProbability', 'sortThreshold', 'horizontalShift', 'rgbShift', 'blockDisplacement', 'chromaIntensity'];
    sliders.forEach(sliderId => {
      const slider = document.getElementById(sliderId);
      const valueDisplay = document.getElementById(sliderId + '-val');

      slider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        valueDisplay.textContent = sliderId === 'sortThreshold' ? value.toFixed(3) : value.toFixed(3);

        const params = {};
        params[sliderId] = value;
        fetch('/glitch-params', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(params)
        }).catch(() => {});
      });
    });

    // Webcam interaction
    webcamBtn.addEventListener('click', async () => {
      if (!webcamEnabled) {
        try {
          webcamStream = await navigator.mediaDevices.getUserMedia({
            video: { width: 320, height: 240 }
          });
          webcamVideo.srcObject = webcamStream;
          webcamVideo.style.display = 'block';
          webcamEnabled = true;
          webcamBtn.classList.add('active');
          webcamBtn.textContent = 'Disable Webcam';
          status.textContent = 'Webcam active - analyzing brightness';
          startWebcamAnalysis();
        } catch (err) {
          status.textContent = 'Webcam access denied';
        }
      } else {
        if (webcamStream) {
          webcamStream.getTracks().forEach(track => track.stop());
        }
        webcamVideo.style.display = 'none';
        webcamEnabled = false;
        webcamBtn.classList.remove('active');
        webcamBtn.textContent = 'Enable Webcam';
        status.textContent = '';
      }
    });

    function startWebcamAnalysis() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 160;
      canvas.height = 120;

      setInterval(() => {
        if (!webcamEnabled) return;

        ctx.drawImage(webcamVideo, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        let totalBrightness = 0;
        for (let i = 0; i < data.length; i += 4) {
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          totalBrightness += brightness;
        }

        // Send webcam image data to server
        fetch('/webcam', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: Array.from(data),
            width: canvas.width,
            height: canvas.height
          })
        }).catch(() => {});
      }, 100);
    }
  </script>
</body>
</html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
