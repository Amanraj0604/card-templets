import React from 'react'

const Menucard = ({ MenuData }) => {
    return (
        <>
            <section className="main-card--cointainer">


                {
                    MenuData.map((CurElem) => {
                        const { id, image, name, category, price, description } = CurElem;
                        return (
                            <>
                                <div className="card-container" key={id} >
                                    <div classNam="card-body">
                                        <div className="card">
                                            <span className="card-number card-circle">{id}</span>
                                            <span className="card-author subtle">{category}</span>
                                            <h2 className="card-title">{name}</h2>
                                            <span className="caard-discription subtel">{description}</span>
                                            <div className="card-read">read</div>
                                            <img src={image} alt="images" className="card-media" />
                                            <span className="card-tag subtle">ouder now</span>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </>
                        )

                    })
                }

            </section>

        </>)
};

export default Menucard; 
