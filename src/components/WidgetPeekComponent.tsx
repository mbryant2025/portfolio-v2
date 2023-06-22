import React from 'react';
import { PeekWidget } from '../types';
import { Link } from 'react-router-dom';
import './styles/widgets.css';

const WidgetPeekComponent: React.FC<PeekWidget> = ({ title, subtitle, link, image, peekImages, onClick }) => {
    return (
        <div className="peek-widget">

            <div className="peeking-images">
                {peekImages.map((peekImage: string | undefined) => (
                    peekImage && (
                        <img
                            src={peekImage}
                            alt=""
                            className="peeking-image"
                            onClick={() =>
                                onClick(
                                    peekImage.substring(
                                        peekImage.lastIndexOf('/') + 1,
                                        peekImage.lastIndexOf('.')
                                    )
                                )
                            }
                        />
                    )
                ))}
            </div>


            <Link to={link} className="link">

                <div className="peek-widget-inner">
                    <div className="container">
                        <div className="text-col">
                            <div className="text-box">
                                <p className="widget-title">{title}</p>
                                <p className="widget-subtitle">{subtitle}</p>
                            </div>
                        </div>
                        <div className="image-col">
                            <img src={image} alt={title} className="image" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default WidgetPeekComponent;
