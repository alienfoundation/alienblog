import React from "react";
import Navbar from "../navbar/navbar";

import './topics.css';

export default class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topicComponent">
                <Navbar />
                <div className="topicContainer">
                    <div className="topicHeading">
                        <h4>Change for good.</h4>
                        <p className="postDate">15th July, 2018</p>
                        <p className="penName">- Alien</p>
                    </div>
                    <div className="topicImage"></div>
                    <div className="topicContent">
                        <p>
                            One morning you woke up and decided to expel yourself from the list of mediocres. You made a complete inventory of things
                            that you are going to work on and started your mission towards a better life. Everything was
                            going great and you were on your endeavour for a very long time, say around 3 days (not that
                            long though). After that you start losing hope because nothing was working, you were not able
                            to properly follow whatever you decided. No results could be seen. Tired of which you sabotage
                            your mission and continued the way you were.
                            <br/>
                            <br/>
                            <em>"If you pull a spring and realease it, it will get back to its original shape. But if you pull
                                a spring and keep it in that position for a long time, it will atain a new shape."</em>
                            <br/>
                            <br/> The same is the case with a human brain. If you want a better life or want to procure anything
                            in life, you need to keep following whatever you have decided. Start will be onerous but you
                            don't have to lose hope, no matter how many times you fizzle. As mentioned earlier you brain
                            is like a spring, you want to alter it's shape, it's properties. To change something like that
                            you got to haul that spring and keep it likewise for a very long time so as to make it invariable.
                            In your case streching the spring means to follow whatever you have decided. Change takes time,
                            the most prevalent reason why people give up is because they want to see the result briskly.
                            But destiny demands endeavour, sometimes you will have to work for years to bring that change.
                            In his book "365 Days with Self-Discipline", Martin mentioned that
                            <em>in order to be a superlative basketball player you will have to practice for years, it cannot
                                be done in 2 or 3 days or even in a week.</em>
                            The day you will remove your focus from the end result and make the process your cynosure, things will start changing and
                            if you are true to your process and your efforts are bona fide, you will achieve whatever you
                            are seeking for.
                            <br/>
                            <br/>
                            <em>"Patience and Persistence is the key."</em>
                            <br/>
                            <br/> When I started my haul to change myself to be a better human. At the start it was very difficult.
                            For the first 10 days I was still at the same predicament where I was earlier, nothing changed.
                            But this time I was too commited to my promise to change for a better cause and to be a better
                            human, as 2-3 more days passed, I realised that I was just focusing on the final outcome and
                            was being frustated just because things were not the way I wanted them to. Because I was busy
                            wasting my mind focusing on the negative thought of not getting the desired outcome in 10 days,
                            I was unable to see that things have started to change tough.
                            <em>I wanted to build a house. So I started with the bricks, after two rows of bricks were added
                                I stepped back and had a look, it was no where close to a house. There was just a stack of
                                bricks one over the other. I was very dissappointed. Soon I realised that there was a lens
                                of expectation environing my eyes, when I eliminated that lens I saw that I was one step
                                closer to building that house. Also I realised that I will get a result if I kept adding
                                the bricks. It will take time but it will happen. </em>
                            <br/>
                            <br/> So whenever next time you feel that the change is not happening or get dissappointed by not
                            seeing the outcome, just take a deep breath, remove the lens of expectations and then observe
                            the situtaion. Trust me, things will look far better and will prompt you to keep making the effort
                            to <em>change for good</em>.
                            <br/>
                            <br/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}