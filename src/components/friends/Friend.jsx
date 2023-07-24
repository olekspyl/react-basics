import { FriendItem } from "./Friends.styled"

export const Friend = ({ friends }) => {
    return friends.map(({avatar, name, isOnline, id}) => {
        return <FriendItem className="item" key={id} $isonline={isOnline}>
            <div>
                <span className="status">{isOnline }</span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name }</p>
            </div>
                    
                </FriendItem>
    })
}