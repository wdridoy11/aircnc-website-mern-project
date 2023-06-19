import React from 'react'
import Container from '../Shared/Container'
import {categories} from './categoriesData';
import CategoriesBox from './CategoriesBox';

const Categories = () => {
  return (
    <div>
        <Container>
            <div className='pt-4 flex items-center flex-row justify-between overflow-x-auto gap-5'>
                {categories.map((item,index)=><CategoriesBox 
                    key={index}
                    label={item.label} 
                    icon={item.icon}
                    >
                </CategoriesBox>)}
            </div>
        </Container>
    </div>
  )
}

export default Categories