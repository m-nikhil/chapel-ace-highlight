
require.config({

        paths: {
            ace: "ace/lib/ace"
        }
    });

require(["ace/ace"], function (ace) {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/chapel");
});
