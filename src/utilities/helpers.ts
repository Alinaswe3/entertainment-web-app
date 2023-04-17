import { BROWSER_MOBILE, BROWSER_TABLET } from "@/utilities/constants";

/**
 * Returns the appropriate show thumbnail path for the available viewport width
 * @param content - the content object which has the path to the image
 * @param width - the available viewport width
 */
export const setMovieThumbnailSize = (content, width) => {
  if (width > BROWSER_TABLET) return content.thumbnail.regular.large;
  if (width > BROWSER_MOBILE) return content.thumbnail.regular.medium;
  return content.thumbnail.regular.small;
};

/**
 * Returns the appropriate trending thumbnail path for the available viewport width
 * @param content - the content object which has the path to the image
 * @param width - the available viewport width
 */
export const setTrendingThumbnailSize = (content, width) => {
  if (width > BROWSER_MOBILE) return content.thumbnail.trending.large;
  return content.thumbnail.trending.small;
};
