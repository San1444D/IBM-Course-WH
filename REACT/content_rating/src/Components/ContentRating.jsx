
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            totalRating: 0,
            handleLike: () => {
                this.setState((prevState) => ({
                    likes: prevState.likes + 1,
                    totalRating: prevState.totalRating + 1
                }));
            },
            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    totalRating: prevState.totalRating + 1
                }));
            }
        }
    }

    render() {
        return (
            <>
                <div className='content-rating'>
                    <h3>Trump orders India tariff hike to 50% for buying Russian oil</h3>
                    <p>
                        US President Donald Trump has issued an executive order hitting India with an additional 25% tariff over its purchases of Russian oil.
                        That will raise the total tariff on Indian imports to the United States to 50% - among the highest rates imposed by the US.
                        The new rate will come into effect in 21 days, so on 27 August, according to the executive order.
                        A response from India's foreign ministry on Wednesday said Delhi had already made clear its stance on imports from Russia, and reiterated that the tariff is "unfair, unjustified and unreasonable".
                        "It is therefore extremely unfortunate that the US should choose to impose additional tariffs on India for actions that several other countries are also taking in their own national interest," the brief statement read.
                        "India will take all actions necessary to protect its national interests," it added.
                        The US president had earlier warned he would raise levies, saying India doesn't "care how many people in Ukraine are being killed by the Russian War Machine".
                    </p>
                </div>
                <div className="rating-buttons">
                    <button className="like-button" onClick={this.state.handleLike}>
                        Like ({this.state.likes})
                    </button>
                    <button className="dislike-button" onClick={this.state.handleDislike}>
                        Dislike ({this.state.dislikes})
                    </button>
                    <p>Total Ratings: {this.state.totalRating}</p>
                </div>

            </>
        );
    }
}

export default ContentRating;
