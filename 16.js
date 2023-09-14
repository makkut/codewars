function int32ToIp(int32) {
  const octet1 = (int32 >> 24) & 255;
  const octet2 = (int32 >> 16) & 255;
  const octet3 = (int32 >> 8) & 255;
  const octet4 = int32 & 255;
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}
