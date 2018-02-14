import React from 'react';

class YoutubePlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(!window.YT) {
            let tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                this.player = new YT.Player('mountVideo', {
                    height: '390',
                    width: '640',
                    videoId: this.props.video,
                    playerVars: {
                        'rel': 0,
                        'showinfo': 1,
                        'autoplay': 1,
                        'controls': 1
                    },
                    events: {
                        'onReady': onPlayerReady
                    }
                });
            }
        } else {
            this.player = new YT.Player('mountVideo', {
                height: '390',
                width: '640',
                videoId: this.props.video,
                playerVars: {
                    'rel': 0,
                    'showinfo': 1,
                    'autoplay': 1,
                    'controls': 1
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    }

    render() {
        return (
            <div id='mountVideo'>
                video
            </div>
        )
    }
}

export default YoutubePlayer;