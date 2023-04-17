import { BROWSER_MOBILE, BROWSER_TABLET } from "@/utilities/constants";

export const setMovieThumbnailSize = (content, width) => {
  if (width > BROWSER_TABLET) return content.thumbnail.regular.large;
  if (width > BROWSER_MOBILE) return content.thumbnail.regular.medium;
  return content.thumbnail.regular.small;
};

export const setTrendingThumbnailSize = (content, width) => {
  if (width > BROWSER_MOBILE) return content.thumbnail.trending.large;
  return content.thumbnail.trending.small;
};
