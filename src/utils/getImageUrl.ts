export const getImageUrl = (src: string) => {
  return new URL(`../assets/images/${src}`, import.meta.url).href
}
