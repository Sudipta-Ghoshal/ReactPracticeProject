
import checkIcon from "../assets/Check.svg"
import trashIcon from "../assets/Trash.svg"


function TodoTask() {
    return (
        <>
            <li className="flex gap-2 p-[22px] rounded-default bg-purpleLight">
                <p className="text-lavender flex-1">To study React fundamentals</p>
                <button type="button"><img src={checkIcon} alt="" /></button>
                <button type="button"><img src={trashIcon} alt="" /></button>
            </li>
        </>
    )
}


export default function TodoList() {
    return (
        <>
            <h3 className="text-white pb-[17px]">Tasks to do - 4</h3>
            <ul className="flex flex-col gap-4 max-h-[400px] overflow-y-auto mb-[60px]">
                <TodoTask />
                <TodoTask />
                <TodoTask />
                <TodoTask />
            </ul>
        </>
    );
}

