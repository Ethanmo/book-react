import React from "react";
import "./style.css";
import { ListItem } from "../List";

const Book = ({
    authors,
    description,
    image,
    title,
    ViewBtn,
    RmvBtn
}) => {

    return (
        <ListItem>
            <div className="wrapper">
                <div className="row">
                    <p className="title">{title}</p>
                    <ViewBtn />
                    <RmvBtn />
                </div>
                <div className="row">
                    <p className="authors">Written by {authors}</p>
                </div>
                <div className="row">
                    <img className="col-md-2 coverImg" src={image} alt={title} />
                    <div className="description">{description}</div>
                </div>
            </div>
        </ListItem>
    )


}

export default Book;