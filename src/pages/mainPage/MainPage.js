import React, {useState} from 'react';

function MainPage() {
    const [input, setInput] = useState('')
    const [list,setList]=useState([])
    const [isButtonEnabled, setIsButtonEnabled] = useState([])
    const onChange =(event)=>{
        setInput(event.target.value)
    }
    const receiveInput =()=>{
        if (input.trim() ===''){
            return
        }
        setList([...list, input])
        setInput('')
        setIsButtonEnabled([...isButtonEnabled, false])
    }

    const editInput =(index)=>{
        const newInput = prompt('Введите изменения')
        if( newInput===null ){
            return
        }

        if ( newInput.trim() ===''){
            setIsButtonEnabled([...isButtonEnabled].fill(true))
            return
        }

        const newList = [...list]
        newList[index]=newInput.trim()
        setList(newList)

    }

    return (
        <div>

            <input type="text" placeholder="name" value={input} onChange={onChange}/>
            <button onClick={receiveInput} disabled={input.trim()===''}>Добавить</button>

            {
                list.length > 0
                    ?
                    <ul>
                        {list.map((item,index) =>
                            <li key={index}>{item}
                                <button onClick={()=> editInput(index)} disabled={isButtonEnabled[index]}>Изменить</button>
                            </li>)}
                    </ul>
                    :
                    <h3>Список пуст</h3>
            }
        </div>
    );
}

export default MainPage;



