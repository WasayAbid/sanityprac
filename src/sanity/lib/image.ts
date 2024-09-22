import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env';

// Create a builder to generate image URLs
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source).url(); // Make sure to call .url() to return a string
};
