import { itemsList } from '@/utils/itemsList'
import { ListContainer } from './styles'

export function Items() {
  return (
    <>
      {itemsList.map(({ content, color, Icon }) => {
        return (
          <ListContainer key={content} color={color}>
            <i>{Icon && <Icon weight="fill" size={16} color="white" />}</i>
            <span>{content}</span>
          </ListContainer>
        )
      })}
    </>
  )
}
