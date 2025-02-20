import { visit } from 'unist-util-visit';

const blockquoteTypes = {
	'EDIT:': 'edit-blockquote',
	// 'NOTE:': 'note-blockquote'
};

function customBlockquotes() {
	return (tree) => {
        let lastEdit = -1;
		visit(tree, 'text', (node, i) => {
			const type = Object.keys(blockquoteTypes).find((key) => node.value.startsWith(key) || node.position.start.line == lastEdit);
			if (type) {
                node.value = `<span class=${blockquoteTypes[type]}>${node.value}</span>`;

                lastEdit = node.position.start.line;
			}
		});
	};
}

export default customBlockquotes;
