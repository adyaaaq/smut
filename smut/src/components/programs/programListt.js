import React from 'react';
import './programList.css';

const ValueItem = ({ infoTitle, infoValue }) => (
    <div class = "valueItem">
        <h1>
        {infoTitle}
        </h1>
        <p>
        {infoValue}
        </p>
    </div>
);

class InfoList extends React.Component{

    state = {
        allInfo: [
            {
                infoTitle: 'Зорилго',
                infoValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam consectetur aspernatur aliquam, eligendi accusantium placeat quae quaerat mollitia ullam Similique debitis a nisi aperiam deleniti quam ad doloribus odit.',
            },
            {
                infoTitle: 'Зорилт',
                infoValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam consectetur aspernatur aliquam, eligendi accusantium placeat quae quaerat mollitia ullam Similique debitis a nisi aperiam deleniti quam ad doloribus odit.',
           
            },
            {
                infoTitle: 'Алсын хараа',
                infoValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam consectetur aspernatur aliquam, eligendi accusantium placeat quae quaerat mollitia ullam Similique debitis a nisi aperiam deleniti quam ad doloribus odit.',
            }
        ]
    }

    render(){
        return(
            <>
                <div className="Values">
                    {
                        this.state.allInfo.map((item, index) => (
                            <ValueItem key={index} {...item} />
                        ))
                    }
                </div>
            </>
        );
    }
}

export default InfoList;