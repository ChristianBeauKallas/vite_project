import { useState, useEffect } from "react";

export default function Fetch(){
    const [pokeTypes, setPokeTypes] = useState([]);
    pokeTypes.sort()

    function getPokemon() {
        fetch("https://pokeapi.co/api/v2/type/")
        .then((response) => response.json())
        .then((data) => {
            let pokeTypeArr = [];
            for(let i = 0; i < data.results.length; i++){
                pokeTypeArr.push(data.results[i].name);
            }
            setPokeTypes(pokeTypeArr);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    useEffect(()=>{
        getPokemon();
    }, []);

    return (
    <div>
        <ul>
            {pokeTypes.map((type, index)=>{
                return <li key ={index+type}>{type}</li>;
            })}
        </ul>
    </div>
    );
}
