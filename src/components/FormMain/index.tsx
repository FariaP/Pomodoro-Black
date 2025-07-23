import { InputForm } from "../InputForm"
import { Cycles } from "../Cycles"
import { ButtonForm } from "../ButtonForm"
import { PlayCircleIcon } from "lucide-react"

export function FormMain() {
    return (
        <form className='form'>
            <div className='formRow'>
                <InputForm type='text' id='input' labelText='task' placeholder='Digite algo' />
            </div>
            <div className='formRow'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
            <div className='formRow'>
                <ButtonForm icon={<PlayCircleIcon />} color='green' />
                {/* <ButtonForm icon={<StopCircleIcon />} color='red' /> */}
            </div>
        </form>
    )
}