import { CloseButton, Image, ImagePreview, ImagePreviewContainer } from './styled';
import { ImagePreviewListProps } from './types';

export const ImagePreviewList = ({ removeImage, selectedImages }: ImagePreviewListProps) => (
  <ImagePreviewContainer>
    {selectedImages.map(({ file, id }) => (
      <ImagePreview key={id}>
        <Image src={URL.createObjectURL(file)} alt={`Preview ${id}`} />
        <CloseButton type="button" onClick={() => removeImage(id)}>
          ×
        </CloseButton>
      </ImagePreview>
    ))}
  </ImagePreviewContainer>
);
