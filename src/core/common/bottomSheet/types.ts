import { BottomSheetProps } from '@gorhom/bottom-sheet';

export interface CustomBottomSheetProps extends Partial<BottomSheetProps> {
  isOpenBottomSheet: boolean;
  onClose: () => void;
  snapPoints?: (string | number)[];
}
