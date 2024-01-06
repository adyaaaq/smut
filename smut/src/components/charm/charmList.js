import React from 'react';
import './charms.css';
import Title from '../title/Title';
import charm1 from '../charm/charm1.png'
import charm2 from '../charm/charm2.png'
const CharmItem = ({ imgsrc, charmTitle, charmValue }) => (
    <div className="charmItem">
        <img src={charm1} alt="Placeholder Alt Text" />
        <h4>{charmTitle}</h4>
        <h2>{charmValue}</h2>
    </div>
);
class CharmList extends React.Component{

    charms = {
        Info: [
            {   
                imgsrc: {charm1},
                charmTitle: 'Хөдөлмөрийн баатар',
                charmValue:  '25'
            },
            {   
                imgsrc: {charm2},
                charmTitle: 'Хөдөлмөрийн баатар',
                charmValue: '25'
            }
        ]
    }

    render(){
        return(
            <>
            <div className='Charm'>
                <Title>About us</Title>
                <div className="charms">
                    {
                        this.charms.Info.map((item, index) => (
                            <CharmItem key={index} {...item} />
                        ))
                    }
                </div>
            </div>
            </>
        );
    }
}

export default CharmList;