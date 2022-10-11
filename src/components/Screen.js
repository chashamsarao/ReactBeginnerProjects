

export default function Screen(props) {
    return (
        <div className="screen">
            <input type="text" placeholder="Result is " value={props.expression} readOnly/>
             {/* value of the input will be determined by parent state */}
        </div>
    )
}