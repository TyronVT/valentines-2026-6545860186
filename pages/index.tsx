import Head from "next/head";
import { useState, useEffect } from "react";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

function FlowerElements() {
  return (
    <>
      {/* Flower 1 */}
      <div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
          <div className="flower__line__leaf flower__line__leaf--5"></div>
          <div className="flower__line__leaf flower__line__leaf--6"></div>
        </div>
      </div>

      {/* Flower 2 */}
      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      {/* Flower 3 */}
      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      {/* G-Long */}
      <div
        className="grow-ans"
        style={{ "--d": "1.2s" } as React.CSSProperties}
      >
        <div className="flower__g-long">
          <div className="flower__g-long__top"></div>
          <div className="flower__g-long__bottom"></div>
        </div>
      </div>

      {/* Grass 1 */}
      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      {/* Grass 2 */}
      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      {/* G-Right 1 */}
      <div
        className="grow-ans"
        style={{ "--d": "2.4s" } as React.CSSProperties}
      >
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf"></div>
        </div>
      </div>

      {/* G-Right 2 */}
      <div
        className="grow-ans"
        style={{ "--d": "2.8s" } as React.CSSProperties}
      >
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf"></div>
        </div>
      </div>

      {/* G-Front */}
      <div
        className="grow-ans"
        style={{ "--d": "2.8s" } as React.CSSProperties}
      >
        <div className="flower__g-front">
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__line"></div>
        </div>
      </div>

      {/* G-FR */}
      <div
        className="grow-ans"
        style={{ "--d": "3.2s" } as React.CSSProperties}
      >
        <div className="flower__g-fr">
          <div className="leaf"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
        </div>
      </div>

      {/* Long grass groups */}
      {[
        { cls: "long-g--0", delays: ["3s", "2.2s", "3.4s", "3.6s"] },
        { cls: "long-g--1", delays: ["3.6s", "3.8s", "4s", "4.2s"] },
        { cls: "long-g--2", delays: ["4s", "4.2s", "4.4s", "4.6s"] },
        { cls: "long-g--3", delays: ["4s", "4.2s", "3s", "3.6s"] },
        { cls: "long-g--4", delays: ["4s", "4.2s", "3s", "3.6s"] },
        { cls: "long-g--5", delays: ["4s", "4.2s", "3s", "3.6s"] },
        { cls: "long-g--6", delays: ["4.2s", "4.4s", "4.6s", "4.8s"] },
        { cls: "long-g--7", delays: ["3s", "3.2s", "3.5s", "3.6s"] },
      ].map((group, i) => (
        <div key={i} className={`long-g ${group.cls}`}>
          {group.delays.map((d, j) => (
            <div
              key={j}
              className="grow-ans"
              style={{ "--d": d } as React.CSSProperties}
            >
              <div className={`leaf leaf--${j}`}></div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const isMobile = useIsMobile();

  const handleClick = () => {
    setStarted(true);
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>For You</title>
        <meta name="description" content="Will you be my Valentine?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Intro screen */}
      <div className={`intro-screen ${started ? "intro-screen--hidden" : ""}`}>
        <div className="intro-screen__glow"></div>
        <button className="intro-screen__btn" onClick={handleClick}>
          Click here
        </button>
      </div>

      {/* Flower scene */}
      <div
        className={`flower-scene ${started ? "flower-scene--visible" : ""} ${loaded ? "" : "not-loaded"}`}
      >
        <div className="night"></div>

        {isMobile ? (
          /* ====== MOBILE LAYOUT ====== */
          <>
            <div className="m-sign valentine-sign">
              <div className="valentine-sign__glow"></div>
              <div className="valentine-sign__content">
                <span className="valentine-sign__text">
                  Will you be my Valentine?
                </span>

                {/*<button
                  className="accept-btn"
                  onClick={() => setAccepted(true)}
                >
                  Accept 💖
                </button>*/}
                {accepted && (
                  <div className="date-card">
                    <span className="valentine-sign__text">
                      <h2>Our Valentines Date </h2>
                    </span>
                    <span className="valentine-sign__text">
                      <strong>Time:</strong> 11AM
                    </span>
                    <p>
                      <strong>Where:</strong> MOA
                    </p>
                    <p>
                      <strong>What to do:</strong>
                    </p>
                    <ul>
                      <li>Bowling</li>
                      <li>Eat</li>
                      <li>Karaoke</li>
                      <li>Adidas window shopping</li>
                      <li>Ferris Wheel</li>
                      <li>Street Food Foodtrip</li>
                    </ul>
                    <p className="valentine-sign__text">
                      See you! I love you! ❤️
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="m-photo photo-frame">
              <img className="photo-frame__img" src="/couple.jpg" alt="Us" />
            </div>
            <div className="flowers">
              <FlowerElements />
            </div>
          </>
        ) : (
          /* ====== DESKTOP LAYOUT ====== */
          <div className="flowers">
            <div className="photo-frame">
              <img className="photo-frame__img" src="/couple.jpg" alt="Us" />
            </div>

            <FlowerElements />

            <div className="valentine-sign">
              <div className="valentine-sign__glow"></div>
              <span className="valentine-sign__text">
                Will you be my Valentine?
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
