import { Friend } from './Friend';
import { FriendsList } from './Friends.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsList className="friend-list">
            <Friend friends={friends} />
        </FriendsList>
    )
}