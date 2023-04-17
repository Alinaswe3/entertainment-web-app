import { BROWSER_MOBILE, BROWSER_TABLET } from "@/utilities/constants";
import { contentType } from "@/utilities/types";

/**
 * Returns the appropriate show thumbnail path for the available viewport width
 * @param content - the content object which has the path to the image
 * @param width - the available viewport width
 */
export const setMovieThumbnailSize = (content: contentType, width: number) => {
  if (width > BROWSER_TABLET) return content.thumbnail.regular.large;
  if (width > BROWSER_MOBILE) return content.thumbnail.regular.medium;
  return content.thumbnail.regular.small;
};

/**
 * Returns the appropriate trending thumbnail path for the available viewport width
 * @param content - the content object which has the path to the image
 * @param width - the available viewport width
 */
export const setTrendingThumbnailSize = (
  content: contentType,
  width: number
) => {
  if (width > BROWSER_MOBILE) return content.thumbnail.trending.large;
  return content.thumbnail.trending.small;
};
