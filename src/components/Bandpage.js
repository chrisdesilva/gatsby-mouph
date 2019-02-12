import React from 'react'

const Bandpage = (props) => {
  return (
    <div className="bg-white">
      <h1 className="bandHeader text-center py-5 text-black text-5xl">{props.bandName}</h1>
      <img className="bandPhoto rounded-lg mx-auto max-w-auto lg:max-w-2xl h-auto flex justify-center" src={props.src} alt={props.alt}/>
      <main className="bandBio px-12 lg:px-32 flex justify-center">
        <p className="py-5 text-black text-xl max-w-xl leading-tight">{props.bio}</p>
      </main>
      <div className="spotifyPlayer text-center py-5" >
      <iframe title="The Banisters Spotify player" src={props.spotify} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <p className="bandWebsite text-center py-5 text-3xl lg:text-5xl">
        <a 
          className="no-underline text-black" 
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
