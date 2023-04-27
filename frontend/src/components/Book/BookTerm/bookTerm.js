import React from "react";
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name} {props.term.author.surname}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>

            <td scope={"col"} className={"text-right"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a  title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <a  title={"MarkAsTaken"} className={"btn btn-success ms-2"}
                    onClick={() => props.markAsTaken(props.term.id)}>
                    Mark as Taken
                </a>
                <Link className={"btn btn-info ms-2"} onClick={() => props.onEdit(props.term.id)} to={`/books/edit/${props.term.id}`}>Edit</Link>

            </td>
        </tr>
    );
}


export default bookTerm;