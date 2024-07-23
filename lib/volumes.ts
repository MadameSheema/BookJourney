type Item = {
  volumeInfo: VolumeInfo;
};

type ImageLinks = {
  smallThumbnail: string;
};

type VolumeInfo = {
  title: string;
  authors: string[];
  imageLinks: ImageLinks;
};

export type VolumesResponse = {
  items: [Item];
  totalItems: number
};

export const searchVolumes = async (search: string, index: number) => {
  const books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${index.toString()}`
  );
  return (await books.json()) as VolumesResponse;
};