import "./Item.css";

export default function Item(props) {
    return (
        <div className="item-card">
            <h3 className="item-card-header">{props.titulo}</h3>
            <img src={props.img} className="item-card-img" alt="Imagen"></img>
            <h4>{props.precio}</h4>
            <small>{props.descripcion}</small>
        </div>
    );
}
