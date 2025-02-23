function CountryTile({name,flag,population}) {
    return (
        <article key={name}>
            <p>
                <img className="flag" src={flag} alt={name}/>
                {name}
            </p>
            Has a population of {population}
        </article>
    );
}

export default CountryTile;