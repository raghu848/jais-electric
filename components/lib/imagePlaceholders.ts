export function shimmer(w: number, h: number) {
  return `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#0f0f0f" offset="20%" />
        <stop stop-color="#2d2d2d" offset="50%" />
        <stop stop-color="#0f0f0f" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#0f0f0f"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.1s" repeatCount="indefinite" />
  </svg>`;
}

export function toBase64(str: string) {
  // Use Buffer on both server and client for consistency
  return Buffer.from(str).toString("base64");
}

export function blurDataURL(w = 1200, h = 800) {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}













