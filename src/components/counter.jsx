import React from "react"

const Counter = (props) => {
    console.log(props)
    // const [value, setValue] = useState(props.value)
    const {value} = props

    const formatValue = () => {
        return value === 0 ? "empty" : value
    }
    const getBadgeClasses = () => {
        const classes = [
            'badge',
            value === 0 ? 'bg-warning' : 'bg-primary',
            'm-2'
        ]
        return classes.join(' ')
    }

    // const handleIncrement = (id) => {
    //     console.log('handleIncrement()')
    //     // херня работает асинхронно, так что в тупую вызвать второй раз и сделать +2 не выйдет
    //     // см конструкцию ниже
    //     // setValue(value + 1)
    // }
    // const handleDecrement = (id) => {
    //     console.log('handleDecrement()')
    //     // Форма записи когда за один проход нужно изменить state несколько раз
    //     // setValue((prevState) => prevState - 1)
    // }

    // const imageUrl = 'https://picsum.photos/200'

    return (
        <div>
            {/*<img src={imageUrl} alt="image"/>*/}
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={() => props.onIncrement(props.id)}>+</button>
            <button className='btn btn-secondary btn-sm m-2' onClick={() => props.onDecrement(props.id)}>-</button>
            <button type="button" className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>
                <i className="bi-trash"></i>
            </button>
        </div>
    )
}
export default Counter