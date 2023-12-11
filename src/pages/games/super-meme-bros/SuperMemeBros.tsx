import React from "react";
import BackButton from '../../../components/BackButton';
import ScrollableWidgetPanel from '../../../components/ScrollableWidgetPanel';
import FullWidthWidget from '../../../components/FullWidthWidget';



const SuperMemeBros: React.FC = () => {
    
    return (
        
        <div>
            <BackButton />
            <ScrollableWidgetPanel title='Super Meme Bros'>

                <FullWidthWidget>
                    <button className="button" onClick={() => window.location.href = "/#/games/super-meme-bros/player"}>
                        Launch Game
                    </button>
                </FullWidthWidget>
            </ScrollableWidgetPanel>

        </div>
    );
};

export default SuperMemeBros;