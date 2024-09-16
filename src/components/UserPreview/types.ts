export interface UserPreviewProps {
  id: string;
  avatarUrl: string;
  name: string;
  username: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  linkLabel?: string;
}
