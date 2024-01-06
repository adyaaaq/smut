import React from 'react';
import './advs.css';
import hundred from '../advantages/imgs/100green.png'
const ValueItem = ({ img, infoValue }) => (
    <div class="card">
         <img src={hundred} alt="Placeholder Alt Text" />
        <p>{infoValue}</p>
    </div>
);


class AdvList extends React.Component{

    state = {
        allInfo: [
            {
                img: 'Зорилго',
                infoValue: 'СУРГАЛТЫН ТӨЛБӨР ҮНЭГҮЙ',
            },
            {
                img: 'Зорилт',
                infoValue: 'ДОТУУР БАЙР, ХООЛ ҮНУГҮЙ',
                
            },
            {
                img: 'Алсын хараа',
                infoValue: 'САР БҮР 200’000 ТӨГРӨГНИЙ ТЭТГЭЛЭГТЭЙ',
            },
            {
                img: 'Алсын хараа',
                infoValue: 'БҮРЭН ДУНД БОЛОВСРОЛ ЭЗЭМШИНЭ',
            },
            {
                img: 'Алсын хараа',
                infoValue: 'А, М, В ЖОЛООНЫ АНГИЛАЛД 1 ЖИЛИЙН ОЮУТАН 30%,2 ЖИЛИЙН ОЮУТАН 50% ХӨНГӨЛӨЛТТЭЙ СУРАЛЦАНА',
            },
            {
                img: 'Алсын хараа',
                infoValue: 'ДОТООДЫН ИХ СУРГУУЛИУДАД ШАТЛАН СУРАЛЦАХ БОЛОМЖТОЙ',
            },
            {
                img: 'Алсын хараа',
                infoValue: 'ЗАСГИЙН ГАЗРЫН ТЭТГЭЛЭГЭЭР ОХУ, БНХАУ-ЫН ИХ ДЭЭД СУРГУУЛИУДАД СУРАЛЦУУЛНА'
            },
            {
                img: 'Алсын хараа',
                infoValue: 'МЯНГАНЫ ЗАМ ДАГУУ БАЙРЛАЛТАЙ'
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

export default AdvList;