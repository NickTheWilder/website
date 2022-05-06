function Button(props) {
    return (
        <button className="btn">
            <img src={props.imgPath}/>
            {props.label}
        </button>
    );
}
export default Button;
