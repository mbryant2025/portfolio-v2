import { Unity, useUnityContext } from "react-unity-webgl";
import BackButton from "../../../components/BackButton";
import "../../../components/styles/super-meme-bros.css";
import "./TemplateData/style.css";

function SuperMemeBrosPlayer() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "super-meme-bros/build/SuperMemeBros.loader.js",
        dataUrl: "super-meme-bros/build/SuperMemeBros.data",
        frameworkUrl: "super-meme-bros/build/SuperMemeBros.framework.js",
        codeUrl: "super-meme-bros/build/SuperMemeBros.wasm",
    });

    return (
        <div>
            <BackButton />
            <Unity unityProvider={unityProvider} className="unity-canvas" style={{ width: '100%', height: '100%' }} />
        </div>
    );
}

export default SuperMemeBrosPlayer;
