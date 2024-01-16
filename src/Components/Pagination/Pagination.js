
function classNames(...classNamees) {
	return classNamees.filter(Boolean).join(" ");
}
    const Pagination = ({
        next,
        prev,
        jump,
        currentPage,
        maxPage,
        dataLength,
        beginItem,
        endItem,
    }) => {
        const pages = Array(maxPage).fill();
    
        const nextHandleClick = () => {
            // aller à la page suivante
            next();
        };
    
        const prevHandleClick = () => {
            // aller à la page précèdente
            prev();
        };
    
        return (

           
            <div className="flex items-center justify-center   py-3 ">
    
                
                <div className="flex items-center justify-center">
                   
                    <div>

                    <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center m-0">
            <li className="page-item" style={{marginInline:'20px'}}>
            <span className="page-link rounded-0" aria-label="Previous" >
            <span aria-hidden="true" onClick={prevHandleClick} disabled={currentPage === 1}><i className="bi bi-arrow-left"></i></span>
            </span>
            </li>
            {/* {pages.map((item, index) => {
                                return (
                                    <li className="page-item ">
                                    <span
                                    aria-current="page"
                                        onClick={() => jump(index + 1)}
                                        className={classNames(
                                            "page-link",
                                            index + 1 === currentPage
                                                ? "active"
                                                : "disabled"
                                        )}>
                                        {index + 1}

                                    </span>
                                        
                                    </li>
                                );
                            })} */}
            <li className="page-item" style={{marginInline:'20px'}}>
            <span className="page-link rounded-0"  aria-label="Next">
            <span aria-hidden="true" onClick={nextHandleClick}
                                disabled={currentPage === maxPage}><i className="bi bi-arrow-right"></i></span>
            </span>
            </li>
            </ul>
            </nav>
                       
                    </div>
                </div>
            </div>
        );
    };
    
    export default Pagination;


 
    