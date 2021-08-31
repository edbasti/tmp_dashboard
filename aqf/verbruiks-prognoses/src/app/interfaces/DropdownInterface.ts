export interface DropdownProps {
    dropdownName: string,
    items: ItemProps[]
}

interface ItemProps {
    id: string,
    value: string
}