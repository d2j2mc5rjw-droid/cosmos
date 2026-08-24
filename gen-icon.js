// Generate build/icon.png (1024x1024) without native deps
const zlib = require('zlib');
const fs = require('fs');
const S = 1024;
const px = Buffer.alloc(S * S * 4);
function set(x, y, r, g, b) {
  if (x < 0 || y < 0 || x >= S || y >= S) return;
  const i = (y * S + x) * 4;
  px[i] = r; px[i+1] = g; px[i+2] = b; px[i+3] = 255;
}
let seed = 42;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
// starfield
for (let i = 0; i < 500; i++) {
  const x = Math.floor(rnd() * S), y = Math.floor(rnd() * S);
  const b = rnd(), c = Math.floor(110 + b * 145);
  set(x, y, c, c, 255);
  if (rnd() > 0.75) { set(x+1, y, c, c, 255); set(x, y+1, c, c, 255); }
}
// planet with top-left lighting + latitude bands
const cx = S/2, cy = S*0.52, R = S*0.30;
for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
  const dx = x - cx, dy = y - cy, d = Math.sqrt(dx*dx + dy*dy);
  if (d > R) continue;
  const t = d / R;
  let diff = (dx * -0.55 + dy * -0.6) / (R * 0.814);
  diff = Math.max(-1, Math.min(1, diff));
  const shade = 0.30 + 0.70 * (diff * 0.5 + 0.5);
  const band = 0.92 + 0.08 * Math.sin(dy / R * 13 + t * 2);
  const glow = t > 0.9 ? (t - 0.9) / 0.1 : 0;
  set(x, y,
    Math.min(255, 122 * shade * band + 50 * glow),
    Math.min(255, 150 * shade * band + 60 * glow),
    Math.min(255, Math.min(1, shade * band * 1.05) * 255 + 80 * glow));
}
function crc32(buf) {
  const table = [];
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; table[n] = c >>> 0; }
  let c = 0xFFFFFFFF;
  for (const b of buf) c = table[(c ^ b) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(S, 0); ihdr.writeUInt32BE(S, 4); ihdr[8] = 8; ihdr[9] = 6;
const raw = Buffer.alloc(S * (S * 4 + 1));
for (let y = 0; y < S; y++) { raw[y * (S*4+1)] = 0; px.copy(raw, y*(S*4+1)+1, y*S*4, (y+1)*S*4); }
const png = Buffer.concat([
  Buffer.from([137,80,78,71,13,10,26,10]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0))
]);
fs.mkdirSync('build', { recursive: true });
fs.writeFileSync('build/icon.png', png);
console.log('build/icon.png', png.length, 'bytes');
