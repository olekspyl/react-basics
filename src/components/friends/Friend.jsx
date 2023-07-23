export const Friend = ({ friends }) => {
    return friends.map(({avatar, name, isOnline, id}) => {
        return <li className="item" key={id}>
                    <span className="status">{isOnline }</span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name }</p>
                </li>
    })
}