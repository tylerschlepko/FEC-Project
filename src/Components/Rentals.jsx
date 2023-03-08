import { useContext } from 'react';
import NavContext from '../Context/NavContext';
import LoginMenu from './LoginMenu';
import './Rentals.css'

function Rentals() {
    const { isLoginMenuVisible, openLoginMenu} = useContext(NavContext);

    return ( 
        <>
            <div className="rental-header-container">
                <div className="rental-header-property-title">
                    Mountaintop Getaway w/Stunning Views and Hot Tub
                </div>
                <div className="rental-header-property-details-container">
                    <div className="rental-header-property-details">
                        <div className="rating-star">
                            <svg viewBox='0 0 32 32'>
                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="rating-number">4.93 ·</div>
                        <button className='rating-reviews'>211 reviews</button>
                        <div className='rating-spacer'>·</div>
                        <button className='rating-location'>Boise, Idaho, United States</button>
                    </div>
                    <div className="rental-header-property-links">
                        <div className="rental-header-share-btn-container">
                            <button id='header-share-btn'>
                                <svg viewBox='0 0 32 32'>
                                    <g fill='none'>
                                        <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                                        <path d="M16 3v23V3z"></path>
                                        <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                                    </g>
                                </svg>
                                <div className="header-share-btn-text">
                                    Share
                                </div>
                            </button>
                        </div>
                        <div className="rental-header-save-btn-container">
                            <button id='header-save-btn' onClick={openLoginMenu}>
                                <svg viewBox='0 0 32 32'>
                                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                                </svg>
                                <div className="header-save-btn-text">
                                    Save
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isLoginMenuVisible && (
                <LoginMenu />
            )}
        </>
     );
}

export default Rentals;