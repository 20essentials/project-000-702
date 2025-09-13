import { render } from "solid-js/web";

function App() {
  return (
    <>
      <style>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        body {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          place-content: center;
          background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
        }

        .center {
          position: absolute;
          left: 50%;
          top: 55%;
          transform: translate(-50%, -50%);
        }

        @media (width <= 1111px) {
          .center {
            zoom: 0.8;
          }
        }

        .cloud {
          position: relative;
          width: 300px;
          height: 100px;
          border-radius: 50px;
          background-color: #fff;
          animation: move 8s linear infinite;
          z-index: 50;
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
        }

        .cloud::before {
          top: -50px;
          left: 50px;
          width: 100px;
          height: 100px;
        }

        .cloud::after {
          top: -75px;
          right: 40px;
          width: 150px;
          height: 150px;
        }

        .sun {
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: #ffe208;
          border-radius: 50%;
          top: -100px;
          left: 50px;
          box-shadow: 0 0 15px #0002;
          z-index: 2;
          animation: animate 20s linear infinite;
        }

        .sun li {
          list-style: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(calc(360deg / 16 * var(--r)));
          z-index: -1;
          width: 140px;
          height: 3px;
          background-color: inherit;
          box-shadow: 0 0 15px #0002;
          border-radius: 50%;
        }

        .sun::before {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: inherit;
          content: '';
          position: absolute;
        }

        @keyframes animate {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes move {
          0% {
            transform: translate(0px);
          }
          50% {
            transform: translate(48px);
          }
          100% {
            transform: translate(0px);
          }
        }
      `}</style>
      <div class="center">
        <div class="cloud"></div>
        <ul class="sun">
          <li style="--r: 1"></li>
          <li style="--r: 2"></li>
          <li style="--r: 3"></li>
          <li style="--r: 4"></li>
          <li style="--r: 5"></li>
          <li style="--r: 6"></li>
          <li style="--r: 7"></li>
          <li style="--r: 8"></li>
          <li style="--r: 9"></li>
          <li style="--r: 10"></li>
          <li style="--r: 11"></li>
          <li style="--r: 12"></li>
          <li style="--r: 13"></li>
          <li style="--r: 14"></li>
          <li style="--r: 15"></li>
          <li style="--r: 16"></li>
        </ul>
      </div>
    </>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);
