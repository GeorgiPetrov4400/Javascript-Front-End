function ProductItem(props) {
    const { name, cost, imgUrl, handleOnClick } = props;

    return (
        <article onClick={handleOnClick}>
            <p>Name: {name}</p>
            <p>Cost: {cost}</p>
            <img width='100' height='100' src={imgUrl} alt='Empty'/>
        </article>
    )
}

export default ProductItem;