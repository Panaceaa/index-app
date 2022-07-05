import { colors } from 'styles/colors'

export const Button = {
  baseStyle: {
    border: '2px solid',
    fontSize: 'md',
    fontWeight: 'bold',
    px: 6,
    py: 4,
    _disabled: {
      backgroundColor: 'rgba(132, 132, 132, 0.12)',
      borderColor: '#555555',
      color: '#555555',
    },
  },
  variants: {
    green: {
      backgroundColor: 'rgba(9, 170, 116, 0.12)',
      borderColor: colors.icMalachite,
      color: colors.icMalachite,
    },
    purple: {
      backgroundColor: 'rgba(128, 0, 128, 0.2)',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
  },
  defaultProps: {
    variant: 'green',
  },
}

export const headerButtonHover = {
  transform:
    'translate3d(0px, 2px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  transformStyle: 'preserve-3d',
}
