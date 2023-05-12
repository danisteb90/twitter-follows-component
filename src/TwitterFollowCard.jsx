import { useState } from 'react';
import './TwitterFollowCard.css'

const TwitterFollowCard = ({children, userName, initialIsFollowing}) => {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';


    const handleClick = () => {
        setIsFollowing (!isFollowing);
    }

    return (
        <div className='tw-mainContent'>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt='avatar'/>
                    <div className='tw-followCard-info'>
                        <strong>{children}</strong>
                        <span className='tw-followCard-avatarInfo'>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClass} onClick={handleClick}>
                        <span className='tw-followCard-text'>{text}</span>
                        <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                    </button>
                </aside>
            </article>
        </div>
    );
}

export default TwitterFollowCard;
