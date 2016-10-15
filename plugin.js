// This code is based on:
// <http://ckeditor.com/forums/CKEditor-3.x/CKEditor-and-serverpreview#comment-49442>

CKEDITOR.plugins.add('serverpreview', {
	lang: 'de,en',
	icons: 'serverpreview',
	init: function(editor) {
		editor.ui.addButton && editor.ui.addButton('ServerPreview', {
			label: editor.lang.preview.preview,
			command: 'serverpreview',
			toolbar: 'document,40'
		});
		editor.addCommand('serverpreview', {
			modes: { wysiwyg: 1, source: 1 },
			canUndo: false,
			readOnly: 1,
			exec: function(editor) {
				// window._cke_htmlToLoad = editor.getData();
				// var url = editor.config.serverPreviewUrl; //CKEDITOR.getUrl(pluginPath + 'preview.html');
				// var w = parseInt(window.screen.width *  0.8);
				// var h = parseInt(window.screen.height * 0.7);
				// var t = parseInt((window.screen.height - h) / 2);
				// var	l = parseInt((window.screen.width  - w) / 2);
				// var popupWindow = window.open(url, '_blank'); //, 'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes,width=' + w + ',height=' + h + ',top=' + t + ',left=' + l, true);
				// if (!popupWindow) {
				// 	return false; // Blocked by a popup blocker.
				// }
				// popupWindow.focus();
				// return true;

				console.log(CKEDITOR.config.allowedContent);

				var form = document.getElementById('serverPreviewForm');
				if (!form) {
					form = document.createElement('form');
					form.method = 'POST';
					form.name = 'serverPreviewForm';
					form.id = form.name;
					form.style.display = 'none';
					form.action = editor.config.serverPreviewUrl;
					form.target = '_blank';
					var input = document.createElement('input');
					input.type = 'hidden';
					input.name = 'content' ;
					form.appendChild(input);
					document.body.appendChild(form);
				}
				form.elements[0].value = editor.getData();
				form.submit();

				return true;
			}
		});
	}
});