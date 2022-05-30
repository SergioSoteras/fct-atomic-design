import React from "react";

const ProductCard = props => {
    return (
        <Card className={[cardLayoutStyles.CardLayout, props.className].join(' ')}>
            <div className={cardLayoutStyles.CardBody}>
                <div className={styles.BodyInternalPadding}>
                    <h2 className={styles.CardTitle}>
                        <a onClick​={props.onSelectProduct}>{props.product.name}</a>
                    </h2>
                    <img className={styles.ProductCartImage} src={props.product.imageSrc} alt={props.imageAlt ? props.imageAlt : props.product.name} />
                    <div className={styles.PriceWrapper}>
                        <Price price={props.product.price}></Price>
                    </div>
                </div>
            </div>
            <div className={cardLayoutStyles.CardFooter}>
                <div className={styles.FooterColor}>
                    <div className={styles.FooterEmptySpace} />
                    <RoundedButton onClick​={props.addToCart} icon={faCartPlus}>Add to cart</RoundedButton>
                </div>
            </div>
        </Card>
    )
}
 
export default ProductCard;