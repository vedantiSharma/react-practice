import React from 'react';
import { Link } from 'react-router-dom';
import vg from './1.jpg';

const Header = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStart.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            qqqqqqqqqqqqqqqqqpppppppp ppppppppeeeeeee pppppppppfffff fjfnhbfhvb
            vsnihvkhnvv uvuewinhwvnjvns vnn hnuwbvbiuvbuijkn jviwnvuwjnebjb
            vbviwlvnhijnw
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
