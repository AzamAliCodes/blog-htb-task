import React from 'react';
import './Blogs.css';

const blogPosts = [
  {
    id: 1,
    title: 'Pokémon Red and Blue (1998)',
    content: 'The original Pokémon games that started it all. Explore the Kanto region and become a Pokémon Master.',
  },
  {
    id: 2,
    title: 'Pokémon Yellow (1999)',
    content: 'A special enhanced version of Red and Blue, allowing you to have Pikachu follow you around.',
  },
  {
    id: 3,
    title: 'Pokémon Gold and Silver (2000)',
    content: 'Journey to the Johto region and discover 100 new Pokémon. These games introduced day/night cycles and breeding.',
  },
  {
    id: 4,
    title: 'Pokémon Crystal (2001)',
    content: 'An enhanced version of Gold and Silver, featuring an animated sprite for Pokémon and a new subplot.',
  },
  {
    id: 5,
    title: 'Pokémon Ruby and Sapphire (2003)',
    content: 'Explore the Hoenn region and experience double battles for the first time. These games featured new weather mechanics.',
  },
  {
    id: 6,
    title: 'Pokémon FireRed and LeafGreen (2004)',
    content: 'Remakes of the original Red and Blue games, with updated graphics and features.',
  },
  {
    id: 7,
    title: 'Pokémon Emerald (2005)',
    content: 'An enhanced version of Ruby and Sapphire, with an expanded story and the Battle Frontier.',
  },
  {
    id: 8,
    title: 'Pokémon Diamond and Pearl (2007)',
    content: 'Travel to the Sinnoh region and explore the underground. These games were the first to be on the Nintendo DS.',
  },
  {
    id: 9,
    title: 'Pokémon Platinum (2009)',
    content: 'An enhanced version of Diamond and Pearl, with a new story and the Distortion World.',
  },
  {
    id: 10,
    title: 'Pokémon HeartGold and SoulSilver (2010)',
    content: 'Remakes of the Gold and Silver games, with updated graphics and features.',
  },
  {
    id: 11,
    title: 'Pokémon Black and White (2011)',
    content: 'Set in the Unova region, these games feature an all-new cast of Pokémon and a compelling story.',
  },
  {
    id: 12,
    title: 'Pokémon Black 2 and White 2 (2012)',
    content: 'Sequels to Black and White, with a new story and new areas to explore.',
  },
  {
    id: 13,
    title: 'Pokémon X and Y (2013)',
    content: 'The first Pokémon games on the Nintendo 3DS, featuring 3D graphics and the introduction of Mega Evolution.',
  },
  {
    id: 14,
    title: 'Pokémon Omega Ruby and Alpha Sapphire (2014)',
    content: 'Remakes of the Ruby and Sapphire games, with new Mega Evolutions and the Primal Reversion feature.',
  },
  {
    id: 15,
    title: 'Pokémon Sun and Moon (2016)',
    content: 'Explore the Alola region and experience Z-Moves. These games introduced island trials instead of gyms.',
  },
  {
    id: 16,
    title: 'Pokémon Ultra Sun and Ultra Moon (2017)',
    content: 'Enhanced versions of Sun and Moon, with an expanded story and new Z-Moves.',
  },
  {
    id: 17,
    title: 'Pokémon: Let\'s Go, Pikachu! and Let\'s Go, Eevee! (2018)',
    content: 'Remakes of Pokémon Yellow, with integration with Pokémon Go and motion controls.',
  },
  {
    id: 18,
    title: 'Pokémon Sword and Shield (2019)',
    content: 'Set in the Galar region, these games introduced Dynamax and Gigantamax battles.',
  },
  {
    id: 19,
    title: 'Pokémon Brilliant Diamond and Shining Pearl (2021)',
    content: 'Remakes of the Diamond and Pearl games, with a faithful art style and some modern updates.',
  },
  {
    id: 20,
    title: 'Pokémon Legends: Arceus (2022)',
    content: 'A new style of Pokémon game set in the ancient Hisui region, with a focus on action and exploration.',
  },
  {
    id: 21,
    title: 'Pokémon Scarlet and Violet (2022)',
    content: 'The first open-world Pokémon RPGs, set in the Paldea region with a new Terastal phenomenon.',
  },
  {
    id: 22,
    title: 'Pokémon Legends: Z-A (2025)',
    content: 'A new Pokémon Legends game, announced for release in 2025.',
  },
];

const Blogs = () => {
  return (
    <div>
      <h1>Pokémon Games</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
