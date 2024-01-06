import React from 'react';
import './countries.css';
import cheh from './flags/cheh.png';
import china from './flags/china.png';
import fao from './flags/fao.png';
import korea from './flags/korea.png';
import nuido from './flags/nuido.png';
import russia from './flags/russia.png';
import stars from './flags/stars.png';
import Title from '../title/Title';
const Countries = () => (
    <>
    {/* <div className='countries'> */}
      <Title>Манай сургууль нь БНЧУ, БНСУ, ОХУ, БНХАУ, Европын холбоо, Европын холбооны FAO, UNIDO, НҮБ-тэй хамтран ажиллаж байна.</Title>
      <div class="logos">
        
        <div class="logos-slide">
          <img src={russia} />
          <img src={cheh} />
          <img src={korea} />
          <img src={nuido}/>
          <img src={fao}/>
          <img src={china} />
          <img src={stars} />
        </div>

        <div class="logos-slide">
          <img src={russia} />
          <img src={cheh} />
          <img src={korea} />
          <img src={nuido}/>
          <img src={fao}/>
          <img src={china} />
          <img src={stars} />
        </div>
      </div>
    {/* </div> */}
    
    </>
);

export default Countries;