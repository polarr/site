<script lang="ts">
    import {
        Tabs,
		TabItem,
    } from 'flowbite-svelte';
	import {
		SitemapSolid,
		ServerSolid,
		DatabaseSolid,
		CloudSolid,
		CloudArrowUpSolid,
		CodeSolid,
		ScrewdriverWrenchSolid,
		ImageSolid
	} from 'svelte-awesome-icons';

	import BadgeList from './BadgeList.svelte';

	const languages: App.Badge[] = [
		{
			name: 'Typescript',
			slug: 'Typescript',
			loved: true,
			color: '3178C6'
		},
		{
			name: 'Javascript',
			slug: 'Javascript',
			logoColor: '333333',
			color: 'F7DF1E'
		},
		{
			name: 'Julia',
			slug: 'Julia',
			loved: true,
			color: '9558B2'
		},
		{
			name: 'Java',
			slug: 'https://www.svgrepo.com/show/184143/java.svg',
			color: '007396'
		},
		{
			name: 'C++',
			slug: 'cplusplus',
			loved: true,
			color: '00599C'
		},
		{
			name: 'C#',
			slug: 'csharp',
			color: '239120'
		},
		{
			name: 'Python',
			slug: 'Python',
			color: '3776AB'
		}
	];

	const frontend: App.Badge[] = [
		{
			name: 'SvelteKit',
			slug: 'Svelte',
			loved: true,
			color: 'FF3E00'
		},
		{
			name: 'React',
			slug: 'React',
            logoColor: '333333',
			color: '61DAFB'
		},
		{
			name: 'HTML',
			slug: 'HTML5',
			color: 'E34F26'
		},
		{
			name: 'CSS',
			slug: 'CSS3',
			color: '1572B6'
		},
		{
			name: 'SCSS',
			slug: 'SASS',
			loved: true,
			color: 'CC6699'
		},
		{
			name: 'jQuery',
			slug: 'jquery',
			color: '0769AD'
		},
		{
			name: 'Tailwind',
			slug: 'tailwindcss',
			loved: true,
			color: '06B6D4'
		},
		{
			name: 'Material Design',
			slug: 'materialdesign',
			color: '757575'
		},
		{
			name: 'Carbon Design',
			slug: 'ibm',
			color: '052FAD'
		},
		{
			name: 'Markdown',
			slug: 'markdown',
			loved: true,
			color: '000000'
		}
	];

	const tools: App.Badge[] = [
		{
			name: 'Figma',
			slug: 'figma',
			loved: true,
			color: 'F24E1E'
		},
		{
			name: 'Git',
			slug: 'git',
			loved: true,
			color: 'F05032'
		},
		{
			name: 'VSCode',
			slug: 'visualstudiocode',
			loved: true,
			color: '007ACC'
		},
		{
			name: 'Sublime Text',
			slug: 'sublimetext',
			color: 'FF9800'
		},
        {
			name: 'Neovim',
			slug: 'neovim',
            loved: true,
			color: '57A143'
		},
        { 
            name: 'Jupyter',
            slug: 'jupyter',
            loved: true,
            color: 'F37626'
        },
		{
			name: 'Linux',
			slug: 'linux',
			loved: true,
			logoColor: '333333',
			color: 'FCC624'
		},
		{
			name: 'Powershell',
			slug: 'powershell',
			loved: true,
			color: '5391FE'
		},
		{
			name: 'Firefox',
			slug: 'firefoxbrowser',
			loved: true,
			color: 'FF7139'
		},
		{
			name: 'Chrome',
			slug: 'google chrome',
			color: '4285F4'
		},
		{
			name: 'Obsidian',
			slug: 'obsidian',
			loved: true,
			color: '483699'
		},
		{
			name: 'Thunderbird',
			slug: 'thunderbird',
			loved: true,
			color: '0A84FF'
		}
	];

	const backend: App.Badge[] = [
        {
			name: 'Node.js',
			slug: 'node.js',
			loved: true,
			color: '339933'
		},
        {
			name: '.NET',
			slug: 'dotnet',
			color: '512BD4'
		},
        {
			name: 'Express',
			slug: 'express',
			color: '000000'
		},
        {
			name: 'Socket.io',
			slug: 'socket.io',
			loved: true,
			color: '010101'
		},
        {
			name: 'Auth0',
			slug: 'auth0',
			loved: true,
			color: 'EB5424'
		},
        {
			name: 'Pocketbase',
			slug: 'pocketbase',
			loved: true,
            logoColor: '333333',
			color: 'B8DBE4'
		},
        {
			name: 'Docker',
			slug: 'docker',
			loved: true,
			color: '2496ED'
		},
        {
			name: 'NGINX',
			slug: 'nginx',
			loved: true,
			color: '009639'
		},
        {
			name: 'Pocketbase',
			slug: 'pocketbase',
			loved: true,
            logoColor: '333333',
			color: 'B8DBE4'
		},
        {
			name: 'Supabase',
			slug: 'supabase',
			loved: true,
			color: '3ECF8E'
		},
		{
			name: 'Firebase',
			slug: 'firebase',
			logoColor: '333333',
			color: 'FFCA28'
		},
    ];
	const database: App.Badge[] = [
		{
			name: 'Postgres',
			slug: 'postgresql',
			loved: true,
			color: '4169E1'
		},
		{
			name: 'SQLite',
			slug: 'sqlite',
			loved: true,
			color: '003B57'
		},
        {
			name: 'Redis',
			slug: 'redis',
			loved: true,
			color: 'DC382D'
		},
		{
			name: 'MongoDB',
			slug: 'mongodb',
			color: '47A248'
		}
	];
	const hosting: App.Badge[] = [
		{
			name: 'Cloudflare Pages',
			slug: 'cloudflarepages',
			loved: true,
			color: 'F38020'
		},
		{
			name: 'Vercel',
			slug: 'vercel',
			color: '000000'
		},
		{
			name: 'Netlify',
			slug: 'netlify',
			color: '00C7B7'
		},
		{
			name: 'Vultr',
			slug: 'vultr',
			color: '007BFC'
		},
		{
			name: 'Hetzner',
			slug: 'hetzner',
			loved: true,
			color: 'D50C2D'
		},
		{
			name: 'Zoho',
			slug: 'zoho',
			color: 'C8202B'
		},
        {
			name: 'Heroku',
			slug: 'heroku',
			color: '430098'
		},
        {
            name: 'Render',
            slug: 'render',
            loved: true,
            color: '46E3B7'
        }
	];

	const cloud: App.Badge[] = [
		{
			name: 'Cloudflare',
			slug: 'cloudflare',
			loved: true,
			color: 'F38020'
		},
		{
			name: 'Github',
			slug: 'github',
			loved: true,
			color: '181717'
		},
		{
			name: 'AWS',
			slug: 'amazonaws',
			color: '232F3E'
		},
		{
			name: 'Google Cloud',
			slug: 'googlecloud',
			color: '4285F4'
		},
        {
            name: 'Azure',
            slug: 'microsoftazure',
            color: '0078D4'
        }
	];

	const graphics: App.Badge[] = [
        {
			name: 'OpenGL',
			slug: 'opengl',
            loved: true,
			color: '5586A4'
		},
        {
			name: 'p5.js',
			slug: 'p5.js',
			color: 'ED225D'
		}
    ];
</script>

<Tabs style="underline">
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <CodeSolid size="16" />
            Languages
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={languages} />
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <SitemapSolid size="16" />
            Frontend
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={frontend} />
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <ScrewdriverWrenchSolid size="16" />
            Tools
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={tools} />
        </div>
    </TabItem>
    <TabItem open>
        <div slot="title" class="flex items-center gap-2">
            <ServerSolid size="16" />
            Backend
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={backend} />
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <DatabaseSolid size="16" />
            DB
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={database} />
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <CloudArrowUpSolid size="16" />
            Hosting
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={hosting} />
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <CloudSolid size="16" />
            Cloud Services
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={cloud} />
        </div>
    </TabItem>
    <TabItem>
        <div slot="title" class="flex items-center gap-2">
            <ImageSolid size="16" />
            Graphics
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 w-full">
            <BadgeList badges={graphics} />
        </div>
    </TabItem>
</Tabs>