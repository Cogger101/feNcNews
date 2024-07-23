import "./Toggle.css"

export const Toggle = ({ handleChange, isChekced }) => {
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={handleChange}
                chekced={isChekced}
            />
            <label htmlFor="check">Dark Mode</label>
        </div>
    )
}