export const getInstagramUsername = (url: string) => {
  return url.replace("https://www.instagram.com/", "");
};

export const getFacebookUsername = (url: string) => {
  return url.replace("https://www.facebook.com/", "");
};

export const getTiktokUsername = (url: string) => {
  return url.replace("https://www.tiktok.com/@", "");
};
