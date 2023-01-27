import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const _counters = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ]
    const [counters, setCounters] = useState(_counters)
    const handleIncrement = (id) => {
        console.log('handleIncrement()')
        setCounters((prevState) => prevState.map(el => {
            if (el.id === id) {
                el.value++
                return el
            }
            return el
        }))
    }
    const handleDecrement = (id) => {
        console.log('handleDecrement()')
        setCounters((prevState) => prevState.map(el => {
            if (el.id === id) {
                el.value--
                return el
            }
            return el
        }))
    }
    const handleDelete = (id) => {
        console.log('handleDeleteCounter', id)
        setCounters(prevState => prevState.filter(el => el.id !== id))
    }
    const handleReset = () => {
        console.log('handleReset')
        setCounters(_counters)
    }
    return (
        <>
            {
                counters.map(counter => {
                    return (
                        <Counter key={counter.id} {...counter} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete}/>
                    )
                })
            }
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    )
}

export default CountersList