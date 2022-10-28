import './profil.css';
import { useState, useContext } from 'react';
import { AppContext } from '../../../../App';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firestore';
function User_profil() {
    const appContext = useContext(AppContext);
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [postcode, setPostcode] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const updateProfil = async () => {
        await setDoc(doc(db, 'users', appContext.userID), {
            publicProfilData: {
                Name: name,
                Lastname: lastname,
                Street: street,
                Number: number,
                Postcode: postcode,
                City: city,
                Country: country
            }
        }, { merge: true })
            .then(() => {
                const a = document.querySelectorAll('.profildata');
                a.forEach(elem => {
                    elem.value = "";
                });
                setName();
                setLastname();
                setStreet();
                setNumber();
                setPostcode();
                setCity();
                setCountry();
            })
            .catch(e => console.log(e))
    };
    return (
        <div id="outlet_outlet_outer_div">
            <h1 id="outlet_outlet_h1">Profil</h1>
            <div id="user_profil_div_1">
                <label>Name:</label>
                <input type="text" placeholder='your name' onChange={e => setName(e.target.value)} className="profildata"></input>
                <label>Last Name:</label>
                <input type="text" placeholder='your last name' onChange={e => setLastname(e.target.value)} className="profildata"></input>
            </div>
            <div id="user_profil_div_2">
                <label>Street</label>
                <input type="text" placeholder='street name' onChange={e => setStreet(e.target.value)} className="profildata"></input>
                <label>Number</label>
                <input type="text" size="4" placeholder='your house number' onChange={e => setNumber(e.target.value)} className="profildata"></input>
                <label>Post code</label>
                <input type="text" size="8" placeholder='your post code' onChange={e => setPostcode(e.target.value)} className="profildata"></input>
            </div>
            <div id="user_profil_div_3">
                <label>City</label>
                <input type="text" placeholder='your city' onChange={e => setCity(e.target.value)} className="profildata"></input>
                <label>Country</label>
                <input type="text" placeholder='your country' onChange={e => setCountry(e.target.value)} className="profildata"></input>
            </div>
            <div id="user_profil_save_data">
                <button onClick={() => updateProfil()}>Save your personal data</button>
            </div>
            <div id="user_profil_div_4">
                <h3>Upload your profile picture</h3>
                {selectedImage ?
                    <div id="user_profil_div_picture">
                        <img width={250} height={250} src={URL.createObjectURL(selectedImage)} alt="something went wrong" />
                        <button id="user_profil_div_picture_delete_btn" onClick={() => {
                            setSelectedImage(null);
                            document.getElementById('user_profil_input_file').value = null;
                        }}>remove the picture</button>
                    </div>
                    :
                    <div id="user_profil_div_picture"></div>}
                <div id="user_profil_div_picture_input">
                    <input
                        type="file"
                        id="user_profil_input_file"
                        onChange={e => {
                            setSelectedImage(e.target.files[0]);
                        }}
                    />
                </div>
                {selectedImage ? <div id="user_profil_picture_submit_btn"><button>Submit Picture</button></div> : null}
            </div>
        </div>
    )
};
export default User_profil;











/*
    const updateProfil = async () => {
        await setDoc(doc(db, 'users', appContext.userID), {
            businessProfilData: {
                premium: true
            }
        }, { merge: true })
            .then(() => {
                const a = document.querySelectorAll('.profildata');
                a.forEach(elem => {
                    elem.value = "";
                });
                setName();
                setLastname();
                setStreet();
                setNumber();
                setPostcode();
                setCity();
                setCountry();
            })
            .catch(e => console.log(e))
    };
    updateProfil();
*/