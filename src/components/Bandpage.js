import React from 'react'

const Bandpage = (props) => {
  return (
    <div className="bg-black">
      <h1 className="bandHeader text-center py-5 text-grey">{props.bandName}</h1>
      <img className="bandPhoto py-5 mx-auto px-32 max-w-2xl h-auto flex justify-center" src={props.src} alt={props.alt}/>
      <main className="bandBio px-32 flex justify-center">
        <p className="py-5 text-white max-w-3xl leading-tight">{props.bio}</p>
      </main>
      <div className="spotifyPlayer text-center py-5" >
      <iframe title="The Banisters Spotify player" src={props.spotify} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <p className="bandWebsite text-center py-5 text-3xl">
        <a 
          className="no-underline text-white" 
          href={props.url} target="_blank" 
          rel="noopener noreferrer"
        >
          {props.website}
        </a>
      </p>
    </div>
    )
  };

export default Bandpage;
