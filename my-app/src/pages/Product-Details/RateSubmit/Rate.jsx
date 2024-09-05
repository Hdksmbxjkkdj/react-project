
export const Rate = ({ stars, type = 'md', className = '' }) => {
    const showCount = () => {
        switch (type) {
            case 'md':
                return <div className="review-link">
                    <span class="rating-number"><span>{stars} </span> 'از' 5</span>
                </div>
                break;
            case 'lg':
                return <div class="review-link">
                    <span>(<span>{stars} </span> ('از') 5)</span>
                </div>
                break;

            default:
                break;
        }
    }

    if (stars) {
        return <>
            <div className={"product-rating " + className}>
                <div className="star-rating rating-icon">
                    {
                        [...Array(parseInt(Math.floor(stars)))].map(() => (<>
                            <i className="fas fa-star text-warning"></i>
                        </>))
                    }
                    {
                        [...Array(5 - parseInt(Math.floor(stars)))].map(() => (<>
                            <i className="far fa-star text-warning"></i>
                        </>))
                    }
                </div>

                {showCount()}

            </div>
        </>

    }
}