import { error, redirect } from '@sveltejs/kit';

const redirectMap: {[key: string]: string} = {
    'github': 'https://github.com/polarr',
    'youtube': 'https://www.youtube.com/channel/UClZN6f71XImxoznqJ4jPknw',
    'instagram': 'https://www.instagram.com/tropicomango/',
    'discord': 'discord://-/users/365886855469727745',
    'steam': 'https://steamcommunity.com/id/cranberry128/',
    'email': 'mailto:polarity@polarity.sh',
    'shadertoy': 'https://www.shadertoy.com/user/IAmLegend',
    'resume': '/resume.pdf',
    'dmoj': 'https://dmoj.ca/user/polarity',
    'codeforces': 'https://codeforces.com/profile/1egend',
    'linkedin': 'https://www.linkedin.com/in/charlesran/'
};

export function load({ params }){
    if (params?.link in redirectMap){
        throw redirect(308, redirectMap[params.link as string]);
    }

    throw error(404, 'Redirect Not Found');
}