export interface TweetProps {
  username: string;
  content: string;
  timestamp: string;
  avatarUrl: string;
  imagesURLs: string[];
  id: string;
  isAuthUser: boolean;
  likes: string[];
  onDelete?: (id: string) => void;
}

export interface TweetImagesContainerProps {
  $imageCount: number;
}
