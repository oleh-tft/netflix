import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ItemDescription.css'

export function ItemDescription(props) {
    return (
        <Modal {...props} centered>
            <div className='desc-head-wrap'>
                <div className='description-bg'>
                    <img src='sample1_desc.jpg' />
                    <div className='desc-img-fade'></div>
                </div>
                <Modal.Header closeButton></Modal.Header>
                <div className='desc-btn-wrap'>
                    <button className="mr-1 banner-button play">
                        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M6 4l15 8-15 8z" />
                        </svg>
                        Play
                    </button>
                    <div className='mr-1 slider-item-btn item-btn-gray desc-btn-size'><img src='plus-icon.svg' /></div>
                    <div className='mr-1 slider-item-btn item-btn-gray desc-btn-size'><img src='like-icon.svg' /></div>
                </div>
            </div>
            <Modal.Body>
                <div className='desc-wrap'>
                    <div className='desc-left'>
                        <div className='desc-left-wrap'>
                            <div className='desc-movie-meta'>
                                <div className='mr-1 movie-year'>2023</div>
                                <div className='mr-1 movie-duration'>1h 49m</div>
                                <div className='mr-1 movie-feature'>HD</div>
                            </div>
                            <div className='desc-movie-info'>
                                <div className='mr-1 movie-restriction'>16+</div>
                                <div className='mr-1 movie-additional'>violence</div>
                            </div>
                        </div>
                        <div className='desc-movie-text'>Mauris vel enim quis sapien faucibus feugiat. Suspendisse sed ligula ut ligula ultrices tristique. Etiam congue eros ac urna scelerisque, vel tempor ipsum imperdiet.</div>
                    </div>
                    <div className='desc-right'>
                        <div className='desc-right-text'>
                            <span className='desc-text-gray'>Cast:</span>
                            <span className='desc-text-normal'> Josh Hutcherson, Elizabeth Lail, Piper Rubio, <i>more</i></span>
                        </div>
                        <div className='desc-right-text'>
                            <span className='desc-text-gray'>Genres:</span>
                            <span className='desc-text-normal'> Horror Movies, Thriller Movies, Mystery Movies</span>
                        </div>
                        <div className='desc-right-text'>
                            <span className='desc-text-gray'>This Movie Is:</span>
                            <span className='desc-text-normal'> Scary</span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}