function DoneTask() {
    return (
        <>
            <li className="flex gap-2 p-[22px] rounded-default bg-purpleLight">
                <p className="text-downy line-through">To study React fundamentals</p>
            </li>
        </>
    )
}


export default function DoneList() {
    return (
        <>
            <h3 className="text-white pb-[17px]">Done - 1</h3>
            <ul className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
                <DoneTask />
            </ul>
        </>
    );
}