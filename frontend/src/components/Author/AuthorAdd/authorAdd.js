import React from "react";
import {useNavigate} from "react-router-dom";

const AuthorAdd= (props) => {


    const navigate=useNavigate();
    const [formData,updateFormData]=React.useState({
        name: "",
        surname: "",
        country: props.countries.length>0 ? props.countries[0].id : 0
    })

    const handleChange = (e) =>
    {
        updateFormData({...formData,
            [e.target.name]:e.target.value.trim()
        })
    }

    const onFormSubmit = (e) =>
    {
        e.preventDefault();
        const name=formData.name;
        const surname=formData.surname;
        const country=formData.country;

        props.onAuthorAdd(name,surname,country);
        navigate("/authors");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter authors name"
                               onChange={handleChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input type="text"
                               className="form-control"
                               id="surname"
                               name="surname"
                               placeholder="Enter authors surname"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Country</label>
                        <select name="country" className="form-control" onChange={handleChange}>
                            {props.countries.map((term) =>
                                <option key={term.id} value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    )
}

export default AuthorAdd;