import React ,{useState} from 'react'


export default function Galerie () {
    const [selectedItem, setSelectedItem] = useState(0);
    const songs = [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80',
        title: 'Bunker',
        subtitle: 'Balthazar',
        time: '4.05'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        title: 'Words Remain',
        subtitle: 'Moderator',
        time: '4.05'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Falling Out',
        subtitle: 'Otzeki',
        time: '4.05'
      }
    ];
  
    const handleItemClick = (index) => {
      setSelectedItem(index);
    };
  
    return (
      <div className="container d-flex">
        <div className="cards">
          {songs.map((song, index) => (
            <label className="card" htmlFor={`item-${song.id}`} key={song.id} id={`song-${song.id}`}>
              <img src={song.src} alt="song" />
            </label>
          ))}
        </div>
        <div className="player">
          <div className="upper-part">
            <div className="play-icon">
              <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-play" viewBox="0 0 24 24">
                <defs />
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            
          </div>
          <div className="progress-bar">
            <span className="progress" />
          </div>
        </div>
      </div>
    );
}
