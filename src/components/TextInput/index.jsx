import './styles.css'

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input
            onChange={handleChange}
            type="search"
            className="text-input"
            value={searchValue}
            placeholder='Type your search'
        />
    )
}
