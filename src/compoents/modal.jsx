import { useState } from "react";

const ModalSide = ({ a, b, data }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const product = data[selectedIndex];

    function closeModal() {
        b(false);
    }

    function stopFunc(e) {
        e.stopPropagation();
    }

    return (
        <>
            <div className='modal-wrap' onClick={closeModal}>
                <div className='modal-main' onClick={(e) => stopFunc(e)}>
                    <div className='cancel'>
                        <button onClick={closeModal}>x</button>
                    </div>
                    <div className='modal'>
                        <div className='modal-img'>
                            <img src={product.img} alt={product.description} />
                        </div>
                        <div className='modal-info'>
                            <p className='desc'>{product.desc}</p>
                            <p className='color-info'>Rangi: {product.color}</p>
                            <div className='btns'>
                                {data.map((item, index) => (
                                    <button
                                        key={item.id}
                                        className={`btn ${selectedIndex === index ? "active" : ""}`}
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.description}
                                        />
                                    </button>
                                ))}
                            </div>
                            <div className='price-section'>
                                <div>
                                    <span className='price-discount'>
                                        {Number(product.price) -
                                            (Number(product.price) *
                                                Number(product.discount)) /
                                                100}
                                    </span>
                                    <span className='price-original'>
                                        {Number(product.price).toLocaleString()}{" "}
                                        so'm
                                    </span>
                                </div>
                                <span className='discount-info'>
                                    {product.discount}% chegirma
                                </span>
                            </div>
                            <p className='availability'>Sotuvda ta bor</p>
                            <button className='cart-btn'>
                                Savatga qo'shish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ModalSide;
