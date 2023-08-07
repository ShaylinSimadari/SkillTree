import { Item } from "./Item";

interface IItemListProps {
    items: [string, number][],
}

export const ItemList = (props: IItemListProps) => {
    const els = (s: [string, number][]) => s.map( ([n, i]) => <Item {...{n, i}}/> )
    return <>{els(props.items)}</>
}
