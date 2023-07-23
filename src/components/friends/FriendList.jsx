import {Friend} from './Friend';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            <Friend friends={friends} />
        </ul>
    )
}