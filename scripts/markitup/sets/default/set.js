var myBbcodeSettings = {
    nameSpace: 'bbcode',
    previewParserPath: './ajax/bbcode_parser.php',
    previewInElement: 'preview-window',
    markupSet: [
        {name: 'Bold', key: 'B', openWith: '[b]', closeWith: '[/b]', className: 'boldbutton'},
        {name: 'Italic', key: 'I', openWith: '[i]', closeWith: '[/i]', className: 'italicbutton'},
        {name: 'Underline', key: 'U', openWith: '[u]', closeWith: '[/u]', className: 'underlinebutton'},
        {name: 'Strike through', key: 'S', openWith: '[s]', closeWith: '[/s]', className: 'strikebutton'},
        {name: 'Subscript', openWith: '[sub]', closeWith: '[/sub]', className: 'subscriptbutton'},
        {name: 'Superscript', openWith: '[sup]', closeWith: '[/sup]', className: 'superscriptbutton'},
        {name: 'Horizontal line', openWith: '[hr] ', className: 'Horizontal_line'},
        {separator: ' '},
        {name: 'Picture', key: 'P', replaceWith: '[img][![Url]!][/img]', className: 'picture'},
        {
            name: 'Link',
            key: 'L',
            openWith: '[url=[![Url]!]]',
            closeWith: '[/url]',
            className: 'linkbutton',
            placeHolder: 'Your text to link here...'
        },
        {
            name: 'Youtube / Google Video',
            openWith: '[video=[![Enter URL to Google Or Yahoo Video Here]!]]',
            className: 'youtubebutton'
        },
        {
            name: 'MP3 / Audio',
            openWith: '[audio][![Enter URL to Audio File Here]!]',
            closeWith: '[/audio]',
            className: "audiobutton"
        },
        {
            name: 'Email',
            openWith: '[email][![Enter Email Address Here]!]',
            closeWith: '[/email]',
            className: "emailbutton"
        },
        {separator: ' '},
        {
            name: 'Fonts', className: 'fontsbutton', dropMenu: [
            {name: 'Oswald', showName: 'Oswald', openWith: '[font01]', closeWith: '[/font01]', className: 'text-1'},
            {
                name: 'PT Sans Narrow',
                showName: 'PT Sans Narrow',
                openWith: '[font02]',
                closeWith: '[/font02]',
                className: 'text-2'
            },
            {
                name: 'Nova Square',
                showName: 'Nova Square',
                openWith: '[font03]',
                closeWith: '[/font03]',
                className: 'text-3'
            },
            {name: 'Lobster', showName: 'Lobster', openWith: '[font04]', closeWith: '[/font04]', className: 'text-4'},
            {
                name: 'Open Sans',
                showName: 'Open Sans',
                openWith: '[font05]',
                closeWith: '[/font05]',
                className: 'text-5'
            },
            {
                name: 'Encode Sans Condensed',
                showName: 'Encode Sans Condensed',
                openWith: '[font06]',
                closeWith: '[/font06]',
                className: 'text-6'
            },
            {
                name: 'Baloo Bhaijaan',
                showName: 'Baloo Bhaijaan',
                openWith: '[font07]',
                closeWith: '[/font07]',
                className: 'text-7'
            },
            {name: 'Acme', showName: 'Acme', openWith: '[font08]', closeWith: '[/font08]', className: 'text-8'},
            {name: 'Arial', showName: 'Arial', openWith: '[font=Arial]', closeWith: '[/font]', className: "font_7"},
            {
                name: 'Arial Black',
                showName: 'Arial Black',
                openWith: '[font=Arial Black]',
                closeWith: '[/font]',
                className: "font_Arial"
            },
            {
                name: 'Comic Sans MS',
                showName: 'Comic Sans MS',
                openWith: '[font=Comic Sans MS]',
                closeWith: '[/font]',
                className: "font_Comic_Sans_MS"
            },
            {
                name: 'Courier New',
                showName: 'Courier New',
                openWith: '[font=Courier New]',
                closeWith: '[/font]',
                className: "font_Courier_New"
            },
            {
                name: 'Georgia',
                showName: 'Georgia',
                openWith: '[font=Georgia]',
                closeWith: '[/font]',
                className: "font_Georgia"
            },
            {
                name: 'Impact',
                showName: 'Impact',
                openWith: '[font=Impact]',
                closeWith: '[/font]',
                className: "font_Impact"
            },
            {
                name: 'Times New Roman',
                showName: 'Times New Roman',
                openWith: '[font=Times New Roman]',
                closeWith: '[/font]',
                className: "font_Times_New_Roman"
            },
            {
                name: 'Trebuchet MS',
                showName: 'Trebuchet MS',
                openWith: '[font=Trebuchet MS]',
                closeWith: '[/font]',
                className: "font_Trebuchet_MS"
            },
            {
                name: 'Verdana',
                showName: 'Verdana',
                openWith: '[font=Verdana]',
                closeWith: '[/font]',
                className: "font_Verdana"
            },
            {
                name: 'Courier',
                showName: 'Courier',
                openWith: '[font=Courier]',
                closeWith: '[/font]',
                className: "font_Courier"
            },
            {
                name: 'Helvetica',
                showName: 'Helvetica',
                openWith: '[font=Helvetica]',
                closeWith: '[/font]',
                className: "font_Helvetica"
            },
            {name: 'Times', showName: 'Times', openWith: '[font=Times]', closeWith: '[/font]', className: "font_Times"},
            {
                name: 'Andale Mono',
                showName: 'Andale Mono',
                openWith: '[font=Andale Mono]',
                closeWith: '[/font]',
                className: "font_Andale_Mono"
            },
            {
                name: 'Bitstream Vera Sans',
                showName: 'Bitstream Vera Sans',
                openWith: '[font=Bitstream Vera Sans]',
                closeWith: '[/font]',
                className: "font_Bitstream_Vera_Sans"
            },
            {name: 'Mono', showName: 'Mono', openWith: '[font=Mono]', closeWith: '[/font]', className: "font_Mono"}
        ]
        },
        {
            name: 'Colors',
            className: 'palette',
            openWith: '[color=[![Enter Hex or web-safe color, ie: #FF33FF or purple]!]]',
            closeWith: '[/color]',
            dropMenu: [
                {name: '#330000', openWith: '[color=#330000]', closeWith: '[/color]', className: "col1-1"},
                {name: '#333300', openWith: '[color=#333300]', closeWith: '[/color]', className: "col1-2"},
                {name: '#336600', openWith: '[color=#336600]', closeWith: '[/color]', className: "col1-3"},
                {name: '#339900', openWith: '[color=#339900]', closeWith: '[/color]', className: "col1-4"},
                {name: '#33CC00', openWith: '[color=#33CC00]', closeWith: '[/color]', className: "col1-5"},
                {name: '#33FF00', openWith: '[color=#33FF00]', closeWith: '[/color]', className: "col1-6"},
                {name: '#66FF00', openWith: '[color=#66FF00]', closeWith: '[/color]', className: "col1-7"},
                {name: '#66CC00', openWith: '[color=#66CC00]', closeWith: '[/color]', className: "col1-8"},
                {name: '#669900', openWith: '[color=#669900]', closeWith: '[/color]', className: "col1-9"},
                {name: '#666600', openWith: '[color=#666600]', closeWith: '[/color]', className: "col1-10"},
                {name: '#663300', openWith: '[color=#663300]', closeWith: '[/color]', className: "col1-11"},
                {name: '#660000', openWith: '[color=#660000]', closeWith: '[/color]', className: "col1-12"},
                {name: '#FF0000', openWith: '[color=#FF0000]', closeWith: '[/color]', className: "col1-13"},
                {name: '#FF3300', openWith: '[color=#FF3300]', closeWith: '[/color]', className: "col1-14"},
                {name: '#FF6600', openWith: '[color=#FF6600]', closeWith: '[/color]', className: "col1-15"},
                {name: '#FF9900', openWith: '[color=#FF9900]', closeWith: '[/color]', className: "col1-16"},
                {name: '#FFCC00', openWith: '[color=#FFCC00]', closeWith: '[/color]', className: "col1-17"},
                {name: '#FFFF00', openWith: '[color=#FFFF00]', closeWith: '[/color]', className: "col1-18"},

                {name: '#330033', openWith: '[color=#330033]', closeWith: '[/color]', className: "col2-1"},
                {name: '#333333', openWith: '[color=#333333]', closeWith: '[/color]', className: "col2-2"},
                {name: '#336633', openWith: '[color=#336633]', closeWith: '[/color]', className: "col2-3"},
                {name: '#339933', openWith: '[color=#339933]', closeWith: '[/color]', className: "col2-4"},
                {name: '#33CC33', openWith: '[color=#33CC33]', closeWith: '[/color]', className: "col2-5"},
                {name: '#33FF33', openWith: '[color=#33FF33]', closeWith: '[/color]', className: "col2-6"},
                {name: '#66FF33', openWith: '[color=#66FF33]', closeWith: '[/color]', className: "col2-7"},
                {name: '#66CC33', openWith: '[color=#66CC33]', closeWith: '[/color]', className: "col2-8"},
                {name: '#669933', openWith: '[color=#669933]', closeWith: '[/color]', className: "col2-9"},
                {name: '#666633', openWith: '[color=#666633]', closeWith: '[/color]', className: "col2-10"},
                {name: '#663333', openWith: '[color=#663333]', closeWith: '[/color]', className: "col2-11"},
                {name: '#660033', openWith: '[color=#660033]', closeWith: '[/color]', className: "col2-12"},
                {name: '#FF0033', openWith: '[color=#FF0033]', closeWith: '[/color]', className: "col2-13"},
                {name: '#FF3333', openWith: '[color=#FF3333]', closeWith: '[/color]', className: "col2-14"},
                {name: '#FF6633', openWith: '[color=#FF6633]', closeWith: '[/color]', className: "col2-15"},
                {name: '#FF9933', openWith: '[color=#FF9933]', closeWith: '[/color]', className: "col2-16"},
                {name: '#FFCC33', openWith: '[color=#FFCC33]', closeWith: '[/color]', className: "col2-17"},
                {name: '#FFFF33', openWith: '[color=#FFFF33]', closeWith: '[/color]', className: "col2-18"},

                {name: '#330066', openWith: '[color=#330066]', closeWith: '[/color]', className: "col3-1"},
                {name: '#333366', openWith: '[color=#333366]', closeWith: '[/color]', className: "col3-2"},
                {name: '#336666', openWith: '[color=#336666]', closeWith: '[/color]', className: "col3-3"},
                {name: '#339966', openWith: '[color=#339966]', closeWith: '[/color]', className: "col3-4"},
                {name: '#33CC66', openWith: '[color=#33CC66]', closeWith: '[/color]', className: "col3-5"},
                {name: '#33FF66', openWith: '[color=#33FF66]', closeWith: '[/color]', className: "col3-6"},
                {name: '#66FF66', openWith: '[color=#66FF66]', closeWith: '[/color]', className: "col3-7"},
                {name: '#66CC66', openWith: '[color=#66CC66]', closeWith: '[/color]', className: "col3-8"},
                {name: '#669966', openWith: '[color=#669966]', closeWith: '[/color]', className: "col3-9"},
                {name: '#666666', openWith: '[color=#666666]', closeWith: '[/color]', className: "col3-10"},
                {name: '#663366', openWith: '[color=#663366]', closeWith: '[/color]', className: "col3-11"},
                {name: '#660066', openWith: '[color=#660066]', closeWith: '[/color]', className: "col3-12"},
                {name: '#FF0066', openWith: '[color=#FF0066]', closeWith: '[/color]', className: "col3-13"},
                {name: '#FF3366', openWith: '[color=#FF3366]', closeWith: '[/color]', className: "col3-14"},
                {name: '#FF6666', openWith: '[color=#FF6666]', closeWith: '[/color]', className: "col3-15"},
                {name: '#FF9966', openWith: '[color=#FF9966]', closeWith: '[/color]', className: "col3-16"},
                {name: '#FFCC66', openWith: '[color=#FFCC66]', closeWith: '[/color]', className: "col3-17"},
                {name: '#FFFF66', openWith: '[color=#FFFF66]', closeWith: '[/color]', className: "col3-18"},

                {name: '#330099', openWith: '[color=#330099]', closeWith: '[/color]', className: "col4-1"},
                {name: '#333399', openWith: '[color=#333399]', closeWith: '[/color]', className: "col4-2"},
                {name: '#336699', openWith: '[color=#336699]', closeWith: '[/color]', className: "col4-3"},
                {name: '#339999', openWith: '[color=#339999]', closeWith: '[/color]', className: "col4-4"},
                {name: '#33CC99', openWith: '[color=#33CC99]', closeWith: '[/color]', className: "col4-5"},
                {name: '#33FF99', openWith: '[color=#33FF99]', closeWith: '[/color]', className: "col4-6"},
                {name: '#66FF99', openWith: '[color=#66FF99]', closeWith: '[/color]', className: "col4-7"},
                {name: '#66CC99', openWith: '[color=#66CC99]', closeWith: '[/color]', className: "col4-8"},
                {name: '#669999', openWith: '[color=#669999]', closeWith: '[/color]', className: "col4-9"},
                {name: '#666699', openWith: '[color=#666699]', closeWith: '[/color]', className: "col4-10"},
                {name: '#663399', openWith: '[color=#663399]', closeWith: '[/color]', className: "col4-11"},
                {name: '#660099', openWith: '[color=#660099]', closeWith: '[/color]', className: "col4-12"},
                {name: '#FF0099', openWith: '[color=#FF0099]', closeWith: '[/color]', className: "col4-13"},
                {name: '#FF3399', openWith: '[color=#FF3399]', closeWith: '[/color]', className: "col4-14"},
                {name: '#FF6699', openWith: '[color=#FF6699]', closeWith: '[/color]', className: "col4-15"},
                {name: '#FF9999', openWith: '[color=#FF9999]', closeWith: '[/color]', className: "col4-16"},
                {name: '#FFCC99', openWith: '[color=#FFCC99]', closeWith: '[/color]', className: "col4-17"},
                {name: '#FFFF99', openWith: '[color=#FFFF99]', closeWith: '[/color]', className: "col4-18"},

                {name: '#3300CC', openWith: '[color=#3300CC]', closeWith: '[/color]', className: "col5-1"},
                {name: '#3333CC', openWith: '[color=#3333CC]', closeWith: '[/color]', className: "col5-2"},
                {name: '#3366CC', openWith: '[color=#3366CC]', closeWith: '[/color]', className: "col5-3"},
                {name: '#3399CC', openWith: '[color=#3399CC]', closeWith: '[/color]', className: "col5-4"},
                {name: '#33CCCC', openWith: '[color=#33CCCC]', closeWith: '[/color]', className: "col5-5"},
                {name: '#33FFCC', openWith: '[color=#33FFCC]', closeWith: '[/color]', className: "col5-6"},
                {name: '#66FFCC', openWith: '[color=#66FFCC]', closeWith: '[/color]', className: "col5-7"},
                {name: '#66CCCC', openWith: '[color=#66CCCC]', closeWith: '[/color]', className: "col5-8"},
                {name: '#6699CC', openWith: '[color=#6699CC]', closeWith: '[/color]', className: "col5-9"},
                {name: '#6666CC', openWith: '[color=#6666CC]', closeWith: '[/color]', className: "col5-10"},
                {name: '#6633CC', openWith: '[color=#6633CC]', closeWith: '[/color]', className: "col5-11"},
                {name: '#6600CC', openWith: '[color=#6600CC]', closeWith: '[/color]', className: "col5-12"},
                {name: '#FF00CC', openWith: '[color=#FF00CC]', closeWith: '[/color]', className: "col5-13"},
                {name: '#FF33CC', openWith: '[color=#FF33CC]', closeWith: '[/color]', className: "col5-14"},
                {name: '#FF66CC', openWith: '[color=#FF66CC]', closeWith: '[/color]', className: "col5-15"},
                {name: '#FF99CC', openWith: '[color=#FF99CC]', closeWith: '[/color]', className: "col5-16"},
                {name: '#FFCCCC', openWith: '[color=#FFCCCC]', closeWith: '[/color]', className: "col5-17"},
                {name: '#FFFFCC', openWith: '[color=#FFFFCC]', closeWith: '[/color]', className: "col5-18"},

                {name: '#3300FF', openWith: '[color=#3300FF]', closeWith: '[/color]', className: "col6-1"},
                {name: '#3333FF', openWith: '[color=#3333FF]', closeWith: '[/color]', className: "col6-2"},
                {name: '#3366FF', openWith: '[color=#3366FF]', closeWith: '[/color]', className: "col6-3"},
                {name: '#3399FF', openWith: '[color=#3399FF]', closeWith: '[/color]', className: "col6-4"},
                {name: '#33CCFF', openWith: '[color=#33CCFF]', closeWith: '[/color]', className: "col6-5"},
                {name: '#33FFFF', openWith: '[color=#33FFFF]', closeWith: '[/color]', className: "col6-6"},
                {name: '#66FFFF', openWith: '[color=#66FFFF]', closeWith: '[/color]', className: "col6-7"},
                {name: '#66CCFF', openWith: '[color=#66CCFF]', closeWith: '[/color]', className: "col6-8"},
                {name: '#6699FF', openWith: '[color=#6699FF]', closeWith: '[/color]', className: "col6-9"},
                {name: '#6666FF', openWith: '[color=#6666FF]', closeWith: '[/color]', className: "col6-10"},
                {name: '#6633FF', openWith: '[color=#6633FF]', closeWith: '[/color]', className: "col6-11"},
                {name: '#6600FF', openWith: '[color=#6600FF]', closeWith: '[/color]', className: "col6-12"},
                {name: '#FF00FF', openWith: '[color=#FF00FF]', closeWith: '[/color]', className: "col6-13"},
                {name: '#FF33FF', openWith: '[color=#FF33FF]', closeWith: '[/color]', className: "col6-14"},
                {name: '#FF66FF', openWith: '[color=#FF66FF]', closeWith: '[/color]', className: "col6-15"},
                {name: '#FF99FF', openWith: '[color=#FF99FF]', closeWith: '[/color]', className: "col6-16"},
                {name: '#FFCCFF', openWith: '[color=#FFCCFF]', closeWith: '[/color]', className: "col6-17"},
                {name: '#fff', openWith: '[color=#fff]', closeWith: '[/color]', className: "col6-18"},

                {name: '#0000FF', openWith: '[color=#0000FF]', closeWith: '[/color]', className: "col7-1"},
                {name: '#0033FF', openWith: '[color=#0033FF]', closeWith: '[/color]', className: "col7-2"},
                {name: '#0066FF', openWith: '[color=#0066FF]', closeWith: '[/color]', className: "col7-3"},
                {name: '#0099FF', openWith: '[color=#0099FF]', closeWith: '[/color]', className: "col7-4"},
                {name: '#00CCFF', openWith: '[color=#00CCFF]', closeWith: '[/color]', className: "col7-5"},
                {name: '#00FFFF', openWith: '[color=#00FFFF]', closeWith: '[/color]', className: "col7-6"},
                {name: '#99FFFF', openWith: '[color=#99FFFF]', closeWith: '[/color]', className: "col7-7"},
                {name: '#99CCFF', openWith: '[color=#99CCFF]', closeWith: '[/color]', className: "col7-8"},
                {name: '#9999FF', openWith: '[color=#9999FF]', closeWith: '[/color]', className: "col7-9"},
                {name: '#9966FF', openWith: '[color=#9966FF]', closeWith: '[/color]', className: "col7-10"},
                {name: '#9933FF', openWith: '[color=#9933FF]', closeWith: '[/color]', className: "col7-11"},
                {name: '#9900FF', openWith: '[color=#9900FF]', closeWith: '[/color]', className: "col7-12"},
                {name: '#CC00FF', openWith: '[color=#CC00FF]', closeWith: '[/color]', className: "col7-13"},
                {name: '#CC33FF', openWith: '[color=#CC33FF]', closeWith: '[/color]', className: "col7-14"},
                {name: '#CC66FF', openWith: '[color=#CC66FF]', closeWith: '[/color]', className: "col7-15"},
                {name: '#CC99FF', openWith: '[color=#CC99FF]', closeWith: '[/color]', className: "col7-16"},
                {name: '#CCCCFF', openWith: '[color=#CCCCFF]', closeWith: '[/color]', className: "col7-17"},
                {name: '#CCFFFF', openWith: '[color=#CCFFFF]', closeWith: '[/color]', className: "col7-18"},

                {name: '#0000CC', openWith: '[color=#0000CC]', closeWith: '[/color]', className: "col8-1"},
                {name: '#0033CC', openWith: '[color=#0033CC]', closeWith: '[/color]', className: "col8-2"},
                {name: '#0066CC', openWith: '[color=#0066CC]', closeWith: '[/color]', className: "col8-3"},
                {name: '#0099CC', openWith: '[color=#0099CC]', closeWith: '[/color]', className: "col8-4"},
                {name: '#00CCCC', openWith: '[color=#00CCCC]', closeWith: '[/color]', className: "col8-5"},
                {name: '#00FFCC', openWith: '[color=#00FFCC]', closeWith: '[/color]', className: "col8-6"},
                {name: '#99FFCC', openWith: '[color=#99FFCC]', closeWith: '[/color]', className: "col8-7"},
                {name: '#99CCCC', openWith: '[color=#99CCCC]', closeWith: '[/color]', className: "col8-8"},
                {name: '#9999CC', openWith: '[color=#9999CC]', closeWith: '[/color]', className: "col8-9"},
                {name: '#9966CC', openWith: '[color=#9966CC]', closeWith: '[/color]', className: "col8-10"},
                {name: '#9933CC', openWith: '[color=#9933CC]', closeWith: '[/color]', className: "col8-11"},
                {name: '#9900CC', openWith: '[color=#9900CC]', closeWith: '[/color]', className: "col8-12"},
                {name: '#CC00CC', openWith: '[color=#CC00CC]', closeWith: '[/color]', className: "col8-13"},
                {name: '#CC33CC', openWith: '[color=#CC33CC]', closeWith: '[/color]', className: "col8-14"},
                {name: '#CC66CC', openWith: '[color=#CC66CC]', closeWith: '[/color]', className: "col8-15"},
                {name: '#CC99CC', openWith: '[color=#CC99CC]', closeWith: '[/color]', className: "col8-16"},
                {name: '#CCCCCC', openWith: '[color=#CCCCCC]', closeWith: '[/color]', className: "col8-17"},
                {name: '#CCFFCC', openWith: '[color=#CCFFCC]', closeWith: '[/color]', className: "col8-18"},

                {name: '#000099', openWith: '[color=#000099]', closeWith: '[/color]', className: "col9-1"},
                {name: '#003399', openWith: '[color=#003399]', closeWith: '[/color]', className: "col9-2"},
                {name: '#006699', openWith: '[color=#006699]', closeWith: '[/color]', className: "col9-3"},
                {name: '#009999', openWith: '[color=#009999]', closeWith: '[/color]', className: "col9-4"},
                {name: '#00CC99', openWith: '[color=#00CC99]', closeWith: '[/color]', className: "col9-5"},
                {name: '#00FF99', openWith: '[color=#00FF99]', closeWith: '[/color]', className: "col9-6"},
                {name: '#99FF99', openWith: '[color=#99FF99]', closeWith: '[/color]', className: "col9-7"},
                {name: '#99CC99', openWith: '[color=#99CC99]', closeWith: '[/color]', className: "col9-8"},
                {name: '#999999', openWith: '[color=#999999]', closeWith: '[/color]', className: "col9-9"},
                {name: '#996699', openWith: '[color=#996699]', closeWith: '[/color]', className: "col9-10"},
                {name: '#993399', openWith: '[color=#993399]', closeWith: '[/color]', className: "col9-11"},
                {name: '#990099', openWith: '[color=#990099]', closeWith: '[/color]', className: "col9-12"},
                {name: '#CC0099', openWith: '[color=#CC0099]', closeWith: '[/color]', className: "col9-13"},
                {name: '#CC3399', openWith: '[color=#CC3399]', closeWith: '[/color]', className: "col9-14"},
                {name: '#CC6699', openWith: '[color=#CC6699]', closeWith: '[/color]', className: "col9-15"},
                {name: '#CC9999', openWith: '[color=#CC9999]', closeWith: '[/color]', className: "col9-16"},
                {name: '#CCCC99', openWith: '[color=#CCCC99]', closeWith: '[/color]', className: "col9-17"},
                {name: '#CCFF99', openWith: '[color=#CCFF99]', closeWith: '[/color]', className: "col9-18"},

                {name: '#000066', openWith: '[color=#000066]', closeWith: '[/color]', className: "col10-1"},
                {name: '#003366', openWith: '[color=#003366]', closeWith: '[/color]', className: "col10-2"},
                {name: '#006666', openWith: '[color=#006666]', closeWith: '[/color]', className: "col10-3"},
                {name: '#009966', openWith: '[color=#009966]', closeWith: '[/color]', className: "col10-4"},
                {name: '#00CC66', openWith: '[color=#00CC66]', closeWith: '[/color]', className: "col10-5"},
                {name: '#00FF66', openWith: '[color=#00FF66]', closeWith: '[/color]', className: "col10-6"},
                {name: '#99FF66', openWith: '[color=#99FF66]', closeWith: '[/color]', className: "col10-7"},
                {name: '#99CC66', openWith: '[color=#99CC66]', closeWith: '[/color]', className: "col10-8"},
                {name: '#999966', openWith: '[color=#999966]', closeWith: '[/color]', className: "col10-9"},
                {name: '#996666', openWith: '[color=#996666]', closeWith: '[/color]', className: "col10-10"},
                {name: '#993366', openWith: '[color=#993366]', closeWith: '[/color]', className: "col10-11"},
                {name: '#990066', openWith: '[color=#990066]', closeWith: '[/color]', className: "col10-12"},
                {name: '#CC0066', openWith: '[color=#CC0066]', closeWith: '[/color]', className: "col10-13"},
                {name: '#CC3366', openWith: '[color=#CC336]', closeWith: '[/color]', className: "col10-14"},
                {name: '#CC6666', openWith: '[color=#CC6666]', closeWith: '[/color]', className: "col10-15"},
                {name: '#CC9966', openWith: '[color=#CC9966]', closeWith: '[/color]', className: "col10-16"},
                {name: '#CCCC66', openWith: '[color=#CCCC66]', closeWith: '[/color]', className: "col10-17"},
                {name: '#CCFF66', openWith: '[color=#CCFF66]', closeWith: '[/color]', className: "col10-18"},

                {name: '#000033', openWith: '[color=#000033]', closeWith: '[/color]', className: "col11-1"},
                {name: '#003333', openWith: '[color=#003333]', closeWith: '[/color]', className: "col11-2"},
                {name: '#006633', openWith: '[color=#006633]', closeWith: '[/color]', className: "col11-3"},
                {name: '#009933', openWith: '[color=#009933]', closeWith: '[/color]', className: "col11-4"},
                {name: '#00CC33', openWith: '[color=#00CC33]', closeWith: '[/color]', className: "col11-5"},
                {name: '#00FF33', openWith: '[color=#00FF33]', closeWith: '[/color]', className: "col11-6"},
                {name: '#99FF33', openWith: '[color=#99FF33]', closeWith: '[/color]', className: "col11-7"},
                {name: '#99CC33', openWith: '[color=#99CC33]', closeWith: '[/color]', className: "col11-8"},
                {name: '#999933', openWith: '[color=#999933]', closeWith: '[/color]', className: "col11-9"},
                {name: '#996633', openWith: '[color=#996633]', closeWith: '[/color]', className: "col11-10"},
                {name: '#993333', openWith: '[color=#993333]', closeWith: '[/color]', className: "col11-11"},
                {name: '#990033', openWith: '[color=#990033]', closeWith: '[/color]', className: "col11-12"},
                {name: '#CC0033', openWith: '[color=#CC0033]', closeWith: '[/color]', className: "col11-13"},
                {name: '#CC3333', openWith: '[color=#CC3333]', closeWith: '[/color]', className: "col11-14"},
                {name: '#CC6633', openWith: '[color=#CC6633]', closeWith: '[/color]', className: "col11-15"},
                {name: '#CC9933', openWith: '[color=#CC9933]', closeWith: '[/color]', className: "col11-16"},
                {name: '#CCCC33', openWith: '[color=#CCCC33]', closeWith: '[/color]', className: "col11-17"},
                {name: '#CCFF33', openWith: '[color=#CCFF33]', closeWith: '[/color]', className: "col11-18"},

                {name: '#000000', openWith: '[color=#000000]', closeWith: '[/color]', className: "col12-1"},
                {name: '#003300', openWith: '[color=#003300]', closeWith: '[/color]', className: "col12-2"},
                {name: '#006600', openWith: '[color=#006600]', closeWith: '[/color]', className: "col12-3"},
                {name: '#009900', openWith: '[color=#009900]', closeWith: '[/color]', className: "col12-4"},
                {name: '#00CC00', openWith: '[color=#00CC00]', closeWith: '[/color]', className: "col12-5"},
                {name: '#00FF00', openWith: '[color=#00FF00]', closeWith: '[/color]', className: "col12-6"},
                {name: '#99FF00', openWith: '[color=#99FF00]', closeWith: '[/color]', className: "col12-7"},
                {name: '#99CC00', openWith: '[color=#99CC00]', closeWith: '[/color]', className: "col12-8"},
                {name: '#999900', openWith: '[color=#999900]', closeWith: '[/color]', className: "col12-9"},
                {name: '#996600', openWith: '[color=#996600]', closeWith: '[/color]', className: "col12-10"},
                {name: '#993300', openWith: '[color=#993300]', closeWith: '[/color]', className: "col12-11"},
                {name: '#990000', openWith: '[color=#990000]', closeWith: '[/color]', className: "col12-12"},
                {name: '#CC0000', openWith: '[color=#CC0000]', closeWith: '[/color]', className: "col12-13"},
                {name: '#CC3300', openWith: '[color=#CC3300]', closeWith: '[/color]', className: "col12-14"},
                {name: '#CC6600', openWith: '[color=#CC6600]', closeWith: '[/color]', className: "col12-15"},
                {name: '#CC9900', openWith: '[color=#CC9900]', closeWith: '[/color]', className: "col12-16"},
                {name: '#CCCC00', openWith: '[color=#CCCC00]', closeWith: '[/color]', className: "col12-17"},
                {name: '#CCFF00', openWith: '[color=#CCFF00]', closeWith: '[/color]', className: "col12-18"},

                {name: '#000000', openWith: '[color=#000000]', closeWith: '[/color]', className: "col13-1"},
                {name: '#000000', openWith: '[color=#000000]', closeWith: '[/color]', className: "col13-1"},
                {name: '#000000', openWith: '[color=#000000]', closeWith: '[/color]', className: "col13-1"},
                {name: '#111111', openWith: '[color=#111111]', closeWith: '[/color]', className: "col13-2"},
                {name: '#222222', openWith: '[color=#222222]', closeWith: '[/color]', className: "col13-3"},
                {name: '#333333', openWith: '[color=#333333]', closeWith: '[/color]', className: "col13-4"},
                {name: '#444444', openWith: '[color=#444444]', closeWith: '[/color]', className: "col13-5"},
                {name: '#555555', openWith: '[color=#555555]', closeWith: '[/color]', className: "col13-6"},
                {name: '#666666', openWith: '[color=#666666]', closeWith: '[/color]', className: "col13-7"},
                {name: '#777777', openWith: '[color=#777777]', closeWith: '[/color]', className: "col13-8"},
                {name: '#888888', openWith: '[color=#888888]', closeWith: '[/color]', className: "col13-9"},
                {name: '#999999', openWith: '[color=#999999]', closeWith: '[/color]', className: "col13-10"},
                {name: '#AAAAAA', openWith: '[color=#AAAAAA]', closeWith: '[/color]', className: "col13-11"},
                {name: '#BBBBBB', openWith: '[color=#BBBBBB]', closeWith: '[/color]', className: "col13-12"},
                {name: '#CCCCCC', openWith: '[color=#CCCCCC]', closeWith: '[/color]', className: "col13-13"},
                {name: '#DDDDDD', openWith: '[color=#DDDDDD]', closeWith: '[/color]', className: "col13-14"},
                {name: '#EEEEEE', openWith: '[color=#EEEEEE]', closeWith: '[/color]', className: "col13-15"},
                {name: '#fff', openWith: '[color=#fff]', closeWith: '[/color]', className: "col13-16"}
            ]
        },
        {
            name: 'Size',
            key: 'S',
            openWith: '[size=[![Text size]!]]',
            closeWith: '[/size]',
            className: 'sizebutton',
            dropMenu: [
                {
                    name: 'xx-large',
                    showName: 'xx-large',
                    openWith: '[size=7]',
                    closeWith: '[/size]',
                    className: 'size_7'
                },
                {name: 'x-large', showName: 'x-large', openWith: '[size=6]', closeWith: '[/size]', className: 'size_6'},
                {name: 'large', showName: 'large', openWith: '[size=5]', closeWith: '[/size]', className: 'size_5'},
                {name: 'medium', showName: 'medium', openWith: '[size=4]', closeWith: '[/size]', className: 'size_4'},
                {name: 'small', showName: 'small', openWith: '[size=3]', closeWith: '[/size]', className: 'size_3'},
                {name: 'x-small', showName: 'x-small', openWith: '[size=2]', closeWith: '[/size]', className: 'size_2'},
                {
                    name: 'xx-small',
                    showName: 'xx-small',
                    openWith: '[size=1]',
                    closeWith: '[/size]',
                    className: 'size_1'
                },
            ]
        },
        {separator: ' '},
        {name: 'Unordered list', openWith: '[list]\n', closeWith: '[/list]', className: 'list_bullet'},
        {
            name: 'Ordered list',
            openWith: '[list=[![Starting number]!]]\n',
            closeWith: '\n[/list]',
            className: 'list_numeric'
        },
        {name: 'List item', openWith: '[*] ', className: 'list_item'},
        {separator: ' '},
        {name: 'Align Left', openWith: '[left]', closeWith: '[/left]', className: 'align-left'},
        {name: 'Align Center', openWith: '[center]', closeWith: '[/center]', className: 'align-center'},
        {name: 'Align Right', openWith: '[right]', closeWith: '[/right]', className: 'align-right'},
        {name: 'Justify', openWith: '[justify]', closeWith: '[/justify]', className: 'align-justify'},
        {separator: ' '},
        {name: 'Blockquote', openWith: '[blockquote]', closeWith: '[/blockquote]', className: 'blockquotebutton'},
        {name: 'Quotes', key: 'Q', openWith: '[quote]', closeWith: '[/quote]', className: 'quotebutton'},
        {name: 'Code', key: 'K', openWith: '[code]', closeWith: '[/code]', className: 'codebutton'},
        {name: 'Marquee', openWith: '[marquee]', closeWith: '[/marquee]', className: 'marqueebutton'},
        {name: 'Spoiler', openWith: '[spoiler]', closeWith: '[/spoiler]', className: 'spoilerbutton'},
        {separator: ' '},
        {
            name: 'Table generator',
            className: 'tablegenerator',
            placeholder: 'Your text here...',
            replaceWith: function (h) {
                var cols = prompt('How many cols?'),
                    rows = prompt('How many rows?'),
                    thead = prompt('Is first row a table header? (yes or no)'),
                    html = '[table]\n';
                if (thead == 'yes') {
                    for (var c = 0; c < cols; c++) {
                        html += '\t[th] [![TH' + (c + 1) + ' text:]!][/th]\n';
                    }
                }
                for (var r = 0; r < rows; r++) {
                    html += '\t[tr]\n';
                    for (var c = 0; c < cols; c++) {
                        html += '\t\t[td]' + (h.placeholder || '') + '[/td]\n';
                    }
                    html += '\t[/tr]\n';
                }
                html += '[/table]';
                return html;
            }
        },
        {separator: ' '},
        {
            name: 'Remove Formatting from Selected Text', className: 'clean', replaceWith: function (h) {
            return h.selection.replace(/\[(.*?)\]/g, '')
        }
        },
        {name: 'Preview', key: '!', className: 'preview', call: 'preview'}
    ]
}
