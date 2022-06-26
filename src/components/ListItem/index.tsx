import * as C from './styles';
import { Item } from '../../types/item';
import { useState } from 'react';

type ListProps = {
  items: Item;
}

export const ListItem = ({ items }: ListProps) => {
  const [isChecked, setIscheked] = useState (items.done);

return (
  <C.Container done={isChecked}>
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIscheked(e.target.checked)}
    />
    <label>{items.name} - {items.done.toString()}</label>
  </C.Container>
);
}