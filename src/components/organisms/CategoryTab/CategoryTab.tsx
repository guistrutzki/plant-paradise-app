import { useState } from 'react'
import * as S from './CategoryTab.styles'
import { Typography } from '@components/atoms/Typography'
import { StyledCommonProps } from '@utils/styledCommonProps'

interface CategoryTabProps extends StyledCommonProps {
  categories: string[]
  onChange: (category: string) => void
}

export const CategoryTab = ({
  categories,
  onChange,
  ...rest
}: CategoryTabProps) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories.length ? categories[0] : '',
  )

  const handleOnCategoryPress = (category: string) => {
    setSelectedCategory(category)
    onChange(category)
  }

  return (
    <S.Container {...rest}>
      {categories.map(eachCategory => (
        <S.CategoryPressable
          onPress={() => handleOnCategoryPress(eachCategory)}>
          <Typography
            fontWeight="$medium"
            key={eachCategory}
            color={
              selectedCategory === eachCategory
                ? '$color-grayscale-1'
                : '$secondary'
            }>
            {eachCategory}
          </Typography>
        </S.CategoryPressable>
      ))}
    </S.Container>
  )
}
