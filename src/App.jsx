import './App.css'
import TwitterFollowCard from './TwitterFollowCard';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

const App = () => {
    return (
        <section className='tw-mainSection'>
            <div className='tw-mainSection-title'>
                <h1>A quién seguir</h1>
            </div>
            {
                users.map(({userName, name, isFollowing}) =>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}

export default App;
