import React, {useState} from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

    const formatCount = () => {
        return counter === 0 ? "empty" : counter
    }
    const getBadgeClasses = () => {
        const classes = [
            'badge',
            counter === 0 ? 'bg-warning' : 'bg-primary',
            'm-2'
        ]
        return classes.join(' ')
    }

    const handleIncrement = () => {
        // херня работает асинхронно, так что в тупую вызвать второй раз и сделать +2 не выйдет
        // см конструкцию ниже
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        // Форма записи когда за один проход нужно изменить state несколько раз
        setCounter((prevState) => prevState - 1)
    }
    const handleTagChange = () => {
        // Форма записи когда за один проход нужно изменить state несколько раз
        setTags(['tag4', 'tag5'])
    }

    const imageUrl = 'https://picsum.photos/200'
    return (
        <>
            {/*<img src={imageUrl} alt="image"/>*/}
            <ul>
                {
                    tags.map(tag =>
                        (<li key={tag} className="btn btn-primary btn-sm m-2" onClick={handleTagChange}>{tag}</li>))
                }
            </ul>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
            <button className='btn btn-secondary btn-sm m-2' onClick={handleDecrement}>-</button>
        </>
    )
}
export default Counter