import { error, redirect } from '@sveltejs/kit';

const redirectMap = {
    'github': 'https://github.com/polarr',
    'youtube': 'https://www.youtube.com/channel/UClZN6f71XImxoznqJ4jPknw',
    'instagram': 'https://www.instagram.com/tropicomango/',
    'discord': 'discord://-/users/365886855469727745',
    'steam': 'https://steamcommunity.com/id/tropicopineappo/',
    'email': 'mailto:polarity@polarity.sh',
    'shadertoy': 'https://www.shadertoy.com/user/IAmLegend'
};

export function load({ params }){
    if (params?.link in redirectMap){
        throw redirect(308, redirectMap[params.link as string]);
    }

    throw error(404, 'Redirect Not Found');
}