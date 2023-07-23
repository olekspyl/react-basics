import { Datum } from './Datum'
import {Stats} from './Stats.styled'

  

export const Statistics = ({ title, stats }) => {

    return (
        <Stats className="statistics" >
             {title &&  <h2 className="title">{title}</h2>}
            <ul className="stat-list" >
                <Datum stats={stats} ></Datum>
            </ul>    
        </Stats>
    )      
}

                
  

