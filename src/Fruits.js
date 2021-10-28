import React from 'react';
import './fruit.css';

function Fruit(props){
    return(
       
        <div className="cont_padding">
            <div className="fruit_project">
                <div className="fruit_image">
                    <a href="#"><img src={props.data.img} /></a>
                </div>
                <div className="fruits_detail">
                    <div className="detail_top">
                        <p>{props.data.title}</p>
                        <button>Add</button>
                    </div>
                    <div className="detail_bottom">
                        <div className="fruit_date">
                            <p className="title">UOM</p>
                            <span className="value">{props.data.Uom}</span>
                        </div>
                        <div className="fruit_date">
                            <p className="title">Pack Size</p>
                            <span className="value">{props.data.size}</span>
                        </div>
                        <div className="fruit_date">
                             <p className="title">Per Unit</p>
                            <span className="value">{props.data.unit}</span>
                        </div>
                        <div className="fruit_date">
                            <p className="title">Total</p>
                            <span className="value">{props.data.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fruit;