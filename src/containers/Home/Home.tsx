import React from 'react';
import Meetups from '../../meetups.json'
import Talk from '../../types/talk'

import MeetupPreview from '../../components/MeetupPreview';


class Home extends React.Component<{}> {

    render() {
        return (
            <section>
            {Meetups && Meetups.map((meetup) => {
                return meetup.talks.map((talk) => {
                    return(
                        <MeetupPreview talk={talk}/>
                    )
                    })
                
            })}
            </section>
        )
    }
};


export default Home;