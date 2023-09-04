import {
  FontWeight,
  Typography,
} from '@components/atoms/Typography/Typography.types'

export default {
  COLORS: {
    '$color-grayscale-1': '#191E19',
    '$color-grayscale-2': '#51564F',
    '$color-grayscale-3': '#BEC3BD',
    '$color-grayscale-4': '#f2f2f2',
    '$color-grayscale-5': '#FFFFFF',
    '$color-gray-brand': '#454041',
    '$color-gray-dark': '#2E332D',

    $primary: '#418B64',
    $secondary: '#969595',
    '$bg-primary': '#FFFFFF',
    '$bg-secondary': '#ECF8F3',

    '$color-alert': '#DD482F',
    '$color-warning': '#DD482F',
    $transparent: 'transparent',
  },

  typography: {
    '$font-description-sm': Typography.DESCRIPTION_SM,
    '$font-description-md': Typography.DESCRIPTION_MD,
    '$font-description-lg': Typography.DESCRIPTION_LG,
    '$font-title-sm': Typography.TITLE_SM,
    '$font-title-md': Typography.TITLE_MD,
    '$font-brand': Typography.BRAND,
  },

  fontWeight: {
    $regular: FontWeight.REGULAR,
    $medium: FontWeight.MEDIUM,
    $bold: FontWeight.BOLD,
  },

  FONTS: {
    REGULAR: 'Poppins_400Regular',
    MEDIUM: 'Poppins_500Medium',
    BOLD: 'Poppins_700Bold',
  },
}
