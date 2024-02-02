import { error, redirect } from '@sveltejs/kit';

const redirectMap: {[key: string]: string} = {
    'github': 'https://github.com/polarr',
    'youtube': 'https://www.youtube.com/channel/UClZN6f71XImxoznqJ4jPknw',
    'instagram': 'https://www.instagram.com/tropicomango/',
    'discord': 'discord://-/users/365886855469727745',
    'steam': 'https://steamcommunity.com/id/tropicopineappo/',
    'email': 'mailto:polarity@polarity.sh',
    'shadertoy': 'https://www.shadertoy.com/user/IAmLegend',
    'resume': 'https://docs.google.com/document/d/1LyU9puk-V5XDCpSOV4h9Sq3ZsncYoosvmCpyz6IbL-o/edit?usp=sharing',
    'dmoj': 'https://dmoj.ca/user/1egend'
};

export function load({ params }){
    if (params?.link in redirectMap){
        throw redirect(308, redirectMap[params.link as string]);
    }

    throw error(404, 'Redirect Not Found');
}