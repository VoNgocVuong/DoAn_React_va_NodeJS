import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { Link } from 'react-router-dom'
import anh from "../../../images/xinviec.jpg"
import "../../../scss/DetailNew/BannerNew.scss"
export default function BannerNew(props) {
    console.log(props);
    const style = {
        background: `url(${props.img}) repeat center`,
        backgroundSize: "cover"
    }
    return (
        <div className="bannerNew" style={style}>
            <div className="bannerNew__content">
                <div className="bannerNew__content__title">
                    <span>{props.title}</span>
                </div>
                <div className="bannerNew__content__tag">
                    {props.tags.map(data => (
                        <div className="newTag"><Link to="">{data.name}</Link></div>
                    ))}
                </div>
                <div className="bannerNew__content__date">
                    <Avatar size="large" src={anh} className="avatarNew" />
                    <span >Ngọc Vương, lúc 6 Tháng Mười Hai, 2024</span>
                </div>
            </div>
        </div>
    )
}
