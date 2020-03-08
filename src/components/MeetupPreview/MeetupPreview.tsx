import React from 'react';

import Talk from '../../types/talk';

const MeetupPreview: React.FC<Talk> = ({description, length, slides, speaker, topic}) => (
    <article className="">
        {description} {length}
        
        <div>
            {speaker.avatar}
        </div>
        {speaker.name}
    </article>
);

export default MeetupPreview;
