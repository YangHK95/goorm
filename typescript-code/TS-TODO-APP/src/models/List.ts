import { IListItem } from "./ListItem";

interface IList {
    list: IListItem[];
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemobj: IListItem): void;
    removeItem(id: string): void;
}



export default class List implements IList {

    static instance = new List();

    private constructor(
        private _list: IListItem[] = [],
    ) { }

    get list(): IListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('myList')
        if (typeof storedList !== 'string') return

        const parsedList: {
            _id: string,
            _item: string,
            _checked: boolean,
        }[] = JSON.parse(storedList)

        // listItem 인스턴스 객체를 생성 => list 인스턴스 객체에 넣어주기

        parsedList.forEach(itemobj => {
            const newListItem = new ListItem(
                itemobj._id,
                itemobj._item,
                itemobj._checked
            )

            List.instance.addItem(newListItem)
        })

    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()

    }

    addItem(itemobj: IListItem): void {
        this._list.push(itemobj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id);
        this.save()
    }
}

