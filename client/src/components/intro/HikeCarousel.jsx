import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ImageListItem } from '@material-ui/core';
import trail_1 from '../../assets/trail_1.jpg'
import trail_2 from '../../assets/trail_2.jpg'
import trail_3 from '../../assets/trail_3.jpg'
import trail_4 from '../../assets/trail_4.jpg'
import trail_5 from '../../assets/trail_5.jpg'
import trail_6 from '../../assets/trail_6.jpg'
import trail_7 from '../../assets/trail_7.jpg'
import trail_8 from '../../assets/trail_8.jpg'
import trail_9 from '../../assets/trail_9.jpg'
import trail_10 from '../../assets/trail_10.jpg'

export function HikeCarousel() {
    return (
        <Carousel>
            {itemData.map((item) => (
                <ImageListItem key={item}>
                    <img
                        src={`${item.img}?w=160&h=160&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=160&h=160&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </Carousel>
    )
}

const itemData = [
    { img: trail_1 },
    { img: trail_2 },
    { img: trail_3 },
    { img: trail_4 },
    { img: trail_5 },
    { img: trail_6 },
    { img: trail_7 },
    { img: trail_8 },
    { img: trail_9 },
    { img: trail_10 }
]