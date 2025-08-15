export const htmlData = [
    // --- Document Metadata ---
    { name: '<!DOCTYPE html>', category: 'HTML', description: 'Defines the document type to be HTML5.', code: '<!DOCTYPE html>\n<html>...</html>' },
    { name: '<html>', category: 'HTML', description: 'The root element of an HTML page.', code: '<html>\n  <head>...</head>\n  <body>...</body>\n</html>' },
    { name: '<head>', category: 'HTML', description: 'Contains meta-information about the HTML document.', code: '<head>\n  <title>My Page</title>\n</head>' },
    { name: '<title>', category: 'HTML', description: 'Specifies a title for the document, shown in the browser tab.', code: '<title>My Awesome Website</title>' },
    { name: '<meta>', category: 'HTML', description: 'Provides metadata about the HTML document, such as character set, viewport settings, etc.', code: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
    { name: '<link>', category: 'HTML', description: 'Defines the relationship between the current document and an external resource (most often a stylesheet).', code: '<link rel="stylesheet" href="styles.css">' },
    { name: '<style>', category: 'HTML', description: 'Contains style information (CSS) for a document.', code: '<style>\n  body { background-color: lightblue; }\n</style>' },
    { name: '<base>', category: 'HTML', description: 'Specifies the base URL/target for all relative URLs in a document.', code: '<base href="https://www.example.com/images/" target="_blank">' },

    // --- Sectioning Root ---
    { name: '<body>', category: 'HTML', description: 'Defines the document\'s body, which contains all the contents of an HTML document.', code: '<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>' },

    // --- Content Sectioning ---
    { name: '<header>', category: 'HTML', description: 'Represents a container for introductory content or a set of navigational links.', code: '<header>\n  <h1>Main Page Title</h1>\n</header>' },
    { name: '<footer>', category: 'HTML', description: 'Defines a footer for a document or section.', code: '<footer>\n  <p>Posted by: Hege Refsnes</p>\n</footer>' },
    { name: '<nav>', category: 'HTML', description: 'Defines a set of navigation links.', code: '<nav>\n  <a href="/html/">HTML</a> |\n  <a href="/css/">CSS</a>\n</nav>' },
    { name: '<main>', category: 'HTML', description: 'Specifies the main content of a document. The content inside should be unique to the document.', code: '<main>\n  <h2>Most Important Content</h2>\n</main>' },
    { name: '<article>', category: 'HTML', description: 'Specifies independent, self-contained content.', code: '<article>\n  <h2>Article Title</h2>\n  <p>Article content...</p>\n</article>' },
    { name: '<section>', category: 'HTML', description: 'Defines a section in a document.', code: '<section>\n  <h3>Section Title</h3>\n  <p>Section content...</p>\n</section>' },
    { name: '<aside>', category: 'HTML', description: 'Defines some content aside from the content it is placed in (like a sidebar).', code: '<aside>\n  <h4>About the Author</h4>\n</aside>' },
    { name: '<h1> to <h6>', category: 'HTML', description: 'Heading tags. <h1> is the most important, <h6> is the least.', code: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>' },
    { name: '<hgroup>', category: 'HTML', description: 'Groups a set of <h1>-<h6> elements when a heading has multiple levels.', code: '<hgroup>\n  <h1>Main Title</h1>\n  <h2>Secondary Title</h2>\n</hgroup>' },
    { name: '<address>', category: 'HTML', description: 'Defines contact information for the author/owner of a document or an article.', code: '<address>\n  Written by John Doe.<br>\n  Visit us at: example.com\n</address>' },

    // --- Text Content ---
    { name: '<p>', category: 'HTML', description: 'Represents a paragraph.', code: '<p>This is a paragraph.</p>' },
    { name: '<hr>', category: 'HTML', description: 'Represents a thematic break between paragraph-level elements.', code: '<p>First part.</p>\n<hr>\n<p>Second part.</p>' },
    { name: '<pre>', category: 'HTML', description: 'Represents preformatted text. Text in this element is displayed in a fixed-width font, and it preserves both spaces and line breaks.', code: '<pre>\n  Text in a pre element\n  is displayed in a fixed-width\n  font, and it preserves\n  both      spaces and\n  line breaks.\n</pre>' },
    { name: '<blockquote>', category: 'HTML', description: 'Indicates that the enclosed text is an extended quotation.', code: '<blockquote cite="http://www.worldwildlife.org/who/index.html">\n  For 50 years, WWF has been protecting the future of nature.\n</blockquote>' },
    { name: '<ol>', category: 'HTML', description: 'Defines an ordered list.', code: '<ol>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ol>' },
    { name: '<ul>', category: 'HTML', description: 'Defines an unordered list.', code: '<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ul>' },
    { name: '<li>', category: 'HTML', description: 'Defines a list item.', code: '<ul>\n  <li>I am a list item</li>\n</ul>' },
    { name: '<dl>', category: 'HTML', description: 'Defines a description list.', code: '<dl>\n  <dt>Coffee</dt>\n  <dd>- black hot drink</dd>\n</dl>' },
    { name: '<dt>', category: 'HTML', description: 'Defines a term/name in a description list.', code: '<dl>\n  <dt>Coffee</dt>\n</dl>' },
    { name: '<dd>', category: 'HTML', description: 'Describes a term/name in a description list.', code: '<dl>\n  <dt>Coffee</dt>\n  <dd>- black hot drink</dd>\n</dl>' },
    { name: '<figure>', category: 'HTML', description: 'Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.', code: '<figure>\n  <img src="pic_trulli.jpg" alt="Trulli">\n  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>\n</figure>' },
    { name: '<figcaption>', category: 'HTML', description: 'Defines a caption for a <figure> element.', code: '<figure>\n  <img src="pic_trulli.jpg">\n  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>\n</figure>' },
    { name: '<div>', category: 'HTML', description: 'A generic container for flow content. It has no effect on the content or layout until styled using CSS.', code: '<div style="background-color:lightblue">\n  <h3>This is a heading in a div element</h3>\n</div>' },

    // --- Inline Text Semantics ---
    { name: '<a>', category: 'HTML', description: 'Anchor tag, used to create hyperlinks.', code: '<a href="https://www.google.com">Visit Google</a>' },
    { name: '<em>', category: 'HTML', description: 'Marks text that has stress emphasis.', code: '<p>This is <em>emphasized</em> text.</p>' },
    { name: '<strong>', category: 'HTML', description: 'Indicates that its contents have strong importance, seriousness, or urgency.', code: '<p>This is <strong>important</strong> text.</p>' },
    { name: '<small>', category: 'HTML', description: 'Represents side-comments and small print.', code: '<p>This is normal text. <small>This is small print.</small></p>' },
    { name: '<s>', category: 'HTML', description: 'Renders text with a strikethrough, or a line through it.', code: '<p><s>Only 50 tickets left!</s> SOLD OUT!</p>' },
    { name: '<cite>', category: 'HTML', description: 'Used to describe a reference to a cited creative work.', code: '<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>' },
    { name: '<q>', category: 'HTML', description: 'Defines a short quotation.', code: '<p>WWF\'s goal is to: <q>Build a future where people live in harmony with nature.</q></p>' },
    { name: '<code>', category: 'HTML', description: 'Displays a fragment of computer code.', code: '<p>The HTML <code>button</code> tag defines a clickable button.</p>' },
    { name: '<span>', category: 'HTML', description: 'A generic inline container for phrasing content, which does not inherently represent anything.', code: '<p>My mother has <span style="color:blue">blue</span> eyes.</p>' },
    { name: '<br>', category: 'HTML', description: 'Inserts a single line break.', code: 'Hello<br>World!' },
    { name: '<wbr>', category: 'HTML', description: 'Represents a word break opportunity.', code: '<p>This is a very long word: supercalifragilistic<wbr>expialidocious. Try resizing the window.</p>' },
    { name: '<i>', category: 'HTML', description: 'Represents a range of text that is set off from the normal text for some reason, e.g., technical terms, foreign language phrases. Often displayed in italic.', code: '<p>The <i>lorem ipsum</i> text is placeholder text.</p>' },
    { name: '<b>', category: 'HTML', description: 'Used to draw the reader\'s attention to the element\'s contents, which are not otherwise granted any special importance. Often displayed in bold.', code: '<p>This is a <b>bold</b> statement.</p>' },
    { name: '<u>', category: 'HTML', description: 'Represents a range of text with an unarticulated, non-textual annotation, such as labeling the text as being a proper name in Chinese text. Often displayed with an underline.', code: '<p>This is <u>underlined</u> text.</p>' },
    { name: '<sub>', category: 'HTML', description: 'Specifies inline text which should be displayed as subscript.', code: '<p>H<sub>2</sub>O</p>' },
    { name: '<sup>', category: 'HTML', description: 'Specifies inline text which should be displayed as superscript.', code: '<p>E=MC<sup>2</sup></p>' },
    { name: '<mark>', category: 'HTML', description: 'Represents text which is marked or highlighted for reference or notation purposes.', code: '<p>Do not forget to buy <mark>milk</mark> today.</p>' },
    { name: '<time>', category: 'HTML', description: 'Defines a specific time (or datetime).', code: '<p>We open at <time>10:00</time> every morning.</p>' },
    { name: '<data>', category: 'HTML', description: 'Links a given piece of content with a machine-readable translation.', code: '<ul><li><data value="21053">Cherry Tomato</data></li></ul>' },

    // --- Image and Multimedia ---
    { name: '<img>', category: 'HTML', description: 'Embeds an image into the document.', code: '<img src="image.jpg" alt="An image" width="500" height="333">' },
    { name: '<audio>', category: 'HTML', description: 'Embeds sound content in documents.', code: '<audio controls>\n  <source src="horse.ogg" type="audio/ogg">\n  Your browser does not support the audio element.\n</audio>' },
    { name: '<video>', category: 'HTML', description: 'Embeds a media player which supports video playback into the document.', code: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>' },
    { name: '<source>', category: 'HTML', description: 'Specifies multiple media resources for <video>, <audio>, and <picture> elements.', code: '<audio controls>\n  <source src="sound.ogg" type="audio/ogg">\n  <source src="sound.mp3" type="audio/mpeg">\n</audio>' },
    { name: '<track>', category: 'HTML', description: 'Specifies text tracks for <video> or <audio> elements (e.g., subtitles).', code: '<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">\n</video>' },
    { name: '<map>', category: 'HTML', description: 'Used with <area> elements to define an image map (a clickable link area).', code: '<map name="workmap">\n  <area shape="rect" coords="34,44,270,350" href="computer.htm">\n</map>' },
    { name: '<area>', category: 'HTML', description: 'Defines an area inside an image map.', code: '<map name="workmap">\n  <area shape="rect" coords="34,44,270,350" href="computer.htm">\n</map>' },

    // --- Embedded Content ---
    { name: '<iframe>', category: 'HTML', description: 'Represents a nested browsing context, embedding another HTML page into the current one.', code: '<iframe src="https://www.example.com" title="Example Website"></iframe>' },
    { name: '<embed>', category: 'HTML', description: 'Embeds external content at the specified point in the document. (Legacy)', code: '<embed type="image/svg+xml" src="circle.svg" />' },
    { name: '<object>', category: 'HTML', description: 'Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.', code: '<object data="helloworld.swf" width="400" height="400"></object>' },
    { name: '<picture>', category: 'HTML', description: 'Contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.', code: '<picture>\n  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">\n  <img src="img_orange_flowers.jpg" alt="Flowers">\n</picture>' },
    { name: '<portal>', category: 'HTML', description: 'Enables the embedding of another HTML page into the current one for the purposes of transitioning to a new page.', code: '<portal src="https://example.com/"></portal>' },

    // --- Scripting ---
    { name: '<script>', category: 'HTML', description: 'Used to embed a client-side script (JavaScript).', code: '<script>\n  document.getElementById("demo").innerHTML = "Hello JavaScript!";\n</script>' },
    { name: '<noscript>', category: 'HTML', description: 'Defines an alternate content for users that have disabled scripts in their browser or have a browser that doesn’t support script.', code: '<noscript>Sorry, your browser does not support JavaScript!</noscript>' },
    { name: '<template>', category: 'HTML', description: 'A mechanism for holding client-side content that is not to be rendered when a page is loaded but may be subsequently instantiated during runtime using JavaScript.', code: '<template>\n  <h2>Hidden Content</h2>\n</template>' },
    { name: '<canvas>', category: 'HTML', description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript).', code: '<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>' },

    // --- Table Content ---
    { name: '<table>', category: 'HTML', description: 'Represents tabular data.', code: '<table>\n  <tr>\n    <th>Month</th>\n    <th>Savings</th>\n  </tr>\n  <tr>\n    <td>January</td>\n    <td>$100</td>\n  </tr>\n</table>' },
    { name: '<caption>', category: 'HTML', description: 'Specifies the caption (or title) of a table.', code: '<table>\n  <caption>Monthly savings</caption>\n  ...\n</table>' },
    { name: '<thead>', category: 'HTML', description: 'Groups the header content in a table.', code: '<table>\n  <thead>\n    <tr><th>Head 1</th></tr>\n  </thead>\n</table>' },
    { name: '<tbody>', category: 'HTML', description: 'Groups the body content in a table.', code: '<table>\n  <tbody>\n    <tr><td>Data 1</td></tr>\n  </tbody>\n</table>' },
    { name: '<tfoot>', category: 'HTML', description: 'Groups the footer content in a table.', code: '<table>\n  <tfoot>\n    <tr><td>Footer</td></tr>\n  </tfoot>\n</table>' },
    { name: '<tr>', category: 'HTML', description: 'Defines a row in a table.', code: '<table>\n  <tr><td>Row 1</td></tr>\n  <tr><td>Row 2</td></tr>\n</table>' },
    { name: '<th>', category: 'HTML', description: 'Defines a header cell in a table.', code: '<table>\n  <tr>\n    <th>Header 1</th>\n  </tr>\n</table>' },
    { name: '<td>', category: 'HTML', description: 'Defines a standard data cell in a table.', code: '<table>\n  <tr>\n    <td>Cell 1</td>\n  </tr>\n</table>' },
    { name: '<colgroup>', category: 'HTML', description: 'Specifies a group of one or more columns in a table for formatting.', code: '<table>\n  <colgroup>\n    <col span="2" style="background-color:red">\n  </colgroup>\n</table>' },
    { name: '<col>', category: 'HTML', description: 'Specifies column properties for each column within a <colgroup> element.', code: '<colgroup>\n  <col style="background-color:yellow">\n</colgroup>' },

    // --- Forms ---
    { name: '<form>', category: 'HTML', description: 'Used to create an HTML form for user input.', code: '<form action="/action_page.php">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname"><br>\n  <input type="submit" value="Submit">\n</form>' },
    { name: '<label>', category: 'HTML', description: 'Defines a label for several form elements.', code: '<label for="username">Username:</label>\n<input type="text" id="username">' },
    { name: '<input>', category: 'HTML', description: 'Specifies an input field where the user can enter data.', code: '<input type="text" placeholder="Enter your name">' },
    { name: '<button>', category: 'HTML', description: 'Defines a clickable button.', code: '<button type="button" onclick="alert(\'Hello world!\')">Click Me</button>' },
    { name: '<select>', category: 'HTML', description: 'Creates a drop-down list.', code: '<select name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>' },
    { name: '<option>', category: 'HTML', description: 'Defines an option in a select list.', code: '<select>\n  <option value="volvo">Volvo</option>\n</select>' },
    { name: '<optgroup>', category: 'HTML', description: 'Used to group related options in a <select> element.', code: '<select>\n  <optgroup label="Swedish Cars">\n    <option value="volvo">Volvo</option>\n  </optgroup>\n</select>' },
    { name: '<textarea>', category: 'HTML', description: 'Defines a multi-line text input control.', code: '<textarea name="message" rows="10" cols="30">\nThe cat was playing in the garden.\n</textarea>' },
    { name: '<fieldset>', category: 'HTML', description: 'Used to group several controls as well as labels (<label>) within a web form.', code: '<form>\n  <fieldset>\n    <legend>Personalia:</legend>\n    <label for="fname">First name:</label>\n    <input type="text" id="fname">\n  </fieldset>\n</form>' },
    { name: '<legend>', category: 'HTML', description: 'Defines a caption for the <fieldset> element.', code: '<fieldset>\n  <legend>User Details</legend>\n</fieldset>' },
    { name: '<datalist>', category: 'HTML', description: 'Specifies a list of pre-defined options for an <input> element.', code: '<input list="browsers">\n<datalist id="browsers">\n  <option value="Edge">\n  <option value="Firefox">\n</datalist>' },
    { name: '<output>', category: 'HTML', description: 'Represents the result of a calculation.', code: '<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">\n  <input type="range" id="a" value="50">\n  + <input type="number" id="b" value="50">\n  = <output name="x" for="a b"></output>\n</form>' },
    { name: '<progress>', category: 'HTML', description: 'Represents the completion progress of a task.', code: '<label for="file">Downloading progress:</label>\n<progress id="file" value="32" max="100"> 32% </progress>' },
    { name: '<meter>', category: 'HTML', description: 'Defines a scalar measurement within a known range, or a fractional value. Also known as a gauge.', code: '<label for="disk_c">Disk usage C:</label>\n<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>' },

    // --- Interactive Elements ---
    { name: '<details>', category: 'HTML', description: 'Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.', code: '<details>\n  <summary>Copyright 2022.</summary>\n  <p> - by Jules. All Rights Reserved.</p>\n</details>' },
    { name: '<summary>', category: 'HTML', description: 'Specifies a summary, caption, or legend for a <details> element\'s disclosure box.', code: '<details>\n  <summary>Click to see details</summary>\n  <p>Hidden details...</p>\n</details>' },
    { name: '<dialog>', category: 'HTML', description: 'Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.', code: '<dialog open>This is an open dialog window</dialog>' },
    { name: '<menu>', category: 'HTML', description: 'A semantic alternative to <ul>, it represents an unordered list of items (which are represented by <li> elements).', code: '<menu>\n  <li><button>Copy</button></li>\n  <li><button>Paste</button></li>\n</menu>' }
];
