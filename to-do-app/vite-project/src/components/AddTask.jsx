
import plueIcon from '../assets/Plus.svg'


export default function AddTask() {
    return (
        <div className="flex gap-[11px] mb-[60px]">
            <input className="form-control placeholder:text-gray focus:border-white" type="text" name="" id="" placeholder='Add a new task' />
            <button type="button" className="p-[9px] bg-lavender rounded-default"><img src={plueIcon} /></button>
        </div>
    );
}