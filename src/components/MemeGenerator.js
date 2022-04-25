import Generate from "./Generate";
import MemeImage from "./MemeImage";
import { useState, useEffect } from "react";
function MemeGenerator() {
  const [top, setTop] = useState("");
  const [bot, setBot] = useState("");
  const [url, setUrl] = useState("");
  const [random, setRandom] = useState(1);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        const dataMemes = data.data.memes;
        const indexRandom = Math.floor(Math.random() * dataMemes.length);
        setUrl(dataMemes[indexRandom].url);
      });
  }, [random]);
  return (
    <div className="meme-generator">
      <Generate
        setTop={setTop}
        setBot={setBot}
        handleRandom={() => setRandom(Math.random())}
      />
      <MemeImage top={top} bot={bot} url={url} />
    </div>
  );
}
export default MemeGenerator;
