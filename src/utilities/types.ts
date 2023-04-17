export interface contentType {
  id: string;
  title: string;
  thumbnail: any;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
}

export interface contextType {
  currentTab: string;
  currentSearch: string;
  bookmarked: {};
  updateSearch: (a: string) => void;
  updateTab: (a: string) => void;
  updateBookmarked: (a: string, b: string) => void;
}
