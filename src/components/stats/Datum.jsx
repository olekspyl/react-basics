import {Data} from './Stats.styled'

export const Datum = ({ stats }) => {
      function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    }
    return stats.map(({id, label, percentage}) => {
        return (
                <Data className="item" key={id} getrandomhexcolor={getRandomHexColor()}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage }</span>
                </Data>
            )
            })
}
    
