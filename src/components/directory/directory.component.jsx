import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import './directory.style.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [{
                      title: 'hats',
                      imageUrl: 'https://img.freepik.com/free-psd/hat-mockup-woman-s-head_53876-98657.jpg?w=826&t=st=1663953525~exp=1663954125~hmac=4bf114922f45e144b1e9531f46529577dd8d6a72e1b60f483c21c7c4d1074ad8',
                      id: 1,
                      linkUrl: 'shop/hats'
                    },
                    {
                      title: 'Hoodies',
                      imageUrl: 'https://img.freepik.com/free-photo/young-woman-posing-listening-music-through-her-pink-headphones_197531-12661.jpg?w=1380&t=st=1663953638~exp=1663954238~hmac=9bf0ceaf54a10ff6d7cb68233b3562b7e84c1c4dfce0a07fe2a3c36c6a47181b',
                      id: 2,
                      linkUrl: 'shop/jackets'
                    },
                    {
                      title: 'sneakers',
                      imageUrl: 'https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1663953721~exp=1663954321~hmac=ee68acbf17f8a3881818172e53f75b63d3d50aaf8a0a18bf7db270184c39cfde',
                      id: 3,
                      linkUrl: 'shop/sneakers'
                    },
                    {
                      title: 'womens',
                      imageUrl: 'https://img.freepik.com/free-photo/retro-girls-park_1157-15684.jpg?w=1380&t=st=1663953769~exp=1663954369~hmac=d20d952d7af6fe9c5ef1bb6158f5319bd1c73bac97b7074a66e7464653a14d29',
                      size: 'large',
                      id: 4,
                      linkUrl: 'shop/womens'
                    },
                    {
                      title: 'mens',
                      imageUrl: 'https://img.freepik.com/free-photo/stylish-african-american-man-wear-beige-jacket-black-hat-pose-street_627829-12375.jpg?w=1380&t=st=1663956029~exp=1663956629~hmac=1f7a59c4ec7e126b4db9923ab244d237c0ed101058036df415f0f48adcaa9be8',
                      size: 'large',
                      id: 5,
                      linkUrl: 'shop/mens'
                    }
            ]
        }
    }

    render() {
        return(
            <div className="menu">
                { 
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} imageUrl={imageUrl} title={title} size={size}/>
                ))
                }
            </div>
        )
    }
}


export default Directory;