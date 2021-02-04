export type PandocInputFormat =
  /* BibTeX bibliography*/
  | "bibtex"
  /* BibLaTeX bibliography*/
  | "biblatex"
  /* CommonMark Markdown*/
  | "commonmark "
  /* CommonMark Markdown with extensions*/
  | "commonmark_x"
  /* Creole 1.0*/
  | "creole"
  /* CSL JSON bibliography*/
  | "csljson"
  /* CSV table*/
  | "csv"
  /* DocBook*/
  | "docbook"
  /* Word docx*/
  | "docx"
  /* DokuWiki markup*/
  | "dokuwiki"
  /* EPUB*/
  | "epub"
  /* FictionBook2 e-book*/
  | "fb2"
  /* GitHub-Flavored Markdown*/
  | "gfm"
  /* deprecated and less  accurate, use only if you need extensions not supported in gfm */
  | "markdown_github"
  /* Haddock markup*/
  | "haddock"
  /* HTML*/
  | "html"
  /* Jupyter notebook*/
  | "ipynb"
  /* JATS XML*/
  | "jats"
  /* Jira/Confluence wiki markup*/
  | "jira"
  /* JSON version of native AST*/
  | "json"
  /* LaTeX*/
  | "latex"
  /* Pandoc’s Markdown*/
  | "markdown"
  /* MultiMarkdown*/
  | "markdown_mmd"
  /* PHP Markdown Extra*/
  | "markdown_phpextra"
  /* original unextended Markdown*/
  | "markdown_strict"
  /* MediaWiki markup*/
  | "mediawiki"
  /* roff man*/
  | "man"
  /* Muse*/
  | "muse"
  /* native Haskell*/
  | "native"
  /* ODT*/
  | "odt"
  /* OPML*/
  | "opml"
  /* Emacs Org mode*/
  | "org"
  /* reStructuredText*/
  | "rst"
  /* txt2tags*/
  | "t2t"
  /* Textile*/
  | "textile"
  /* TikiWiki markup*/
  | "tikiwiki"
  /* TWiki markup*/
  | "twiki"
  /* Vimwiki*/
  | "vimwiki";

export type PandocOutputFormat =
  /* AsciiDoc*/
  | "asciidoc"
  /* AsciiDoctor*/
  | "asciidoctor"
  /* LaTeX beamer slide show*/
  | "beamer"
  /* CommonMark Markdown*/
  | "commonmark"
  /* CommonMark Markdown with extensions*/
  | "commonmark_x"
  /* ConTeXt*/
  | "context"
  /* CSL JSON bibliography*/
  | "csljson"
  /* DocBook 4*/
  | "docbook"
  | "docbook4"
  /* DocBook 5*/
  | "docbook5"
  /* Word docx*/
  | "docx"
  /* DokuWiki markup*/
  | "dokuwiki"
  /* EPUB v3 book*/
  | "epub"
  | "epub3"
  /* EPUB v2*/
  | "epub2"
  /* FictionBook2 e-book*/
  | "fb2"
  /* GitHub-Flavored  Markdown*/
  | "gfm"
  /* deprecated and less  accurate, use only if you need extensions not supported in gfm */
  | "markdown_github"
  /* Haddock markup*/
  | "haddock"
  /* HTML, i.e. HTML5/XHTML polyglot markup*/
  | "html"
  | "html5"
  /* XHTML 1.0 Transitional*/
  | "html4"
  /* InDesign ICML*/
  | "icml"
  /* Jupyter notebook*/
  | "ipynb"
  /* JATS XML, Archiving and Interchange Tag Set*/
  | "jats_archiving"
  /* JATS XML, Article Authoring Tag Set*/
  | "jats_articleauthoring"
  /* JATS XML, Journal Publishing Tag Set*/
  | "jats_publishing"
  /* alias for jats_archiving*/
  | "jats"
  /* Jira/Confluence wiki markup*/
  | "jira"
  /* JSON version of native AST*/
  | "json"
  /* LaTeX*/
  | "latex"
  /* roff man*/
  | "man"
  /* Pandoc’s Markdown*/
  | "markdown"
  /* MultiMarkdown*/
  | "markdown_mmd"
  /* PHP Markdown Extra*/
  | "markdown_phpextra"
  /* original unextended Markdown*/
  | "markdown_strict"
  /* MediaWiki markup*/
  | "mediawiki"
  /* roff ms*/
  | "ms"
  /* Muse*/
  | "muse"
  /* native Haskell*/
  | "native"
  /* OpenOffice text document*/
  | "odt"
  /* OPML*/
  | "opml"
  /* OpenDocument*/
  | "opendocument"
  /* Emacs Org mode*/
  | "org"
  /* PDF*/
  | "pdf"
  /* plain text*/
  | "plain"
  /* PowerPoint slide show*/
  | "pptx"
  /* reStructuredText*/
  | "rst"
  /* Rich Text Format*/
  | "rtf"
  /* GNU Texinfo*/
  | "texinfo"
  /* Textile*/
  | "textile"
  /* Slideous HTML and JavaScript slide show*/
  | "slideous"
  /* Slidy HTML and JavaScript slide show*/
  | "slidy"
  /* DZSlides HTML5 + JavaScript slide show*/
  | "dzslides"
  /* reveal.js HTML5 + JavaScript slide show*/
  | "revealjs"
  /* S5 HTML and JavaScript slide show*/
  | "s5"
  /* TEI Simple*/
  | "tei"
  /* XWiki markup*/
  | "xwiki"
  /* roff man*/
  | "man"
  /* Pandoc’s Markdown*/
  | "markdown"
  /* MultiMarkdown*/
  | "markdown_mmd"
  /* PHP Markdown Extra*/
  | "markdown_phpextra"
  /* original unextended Markdown*/
  | "markdown_strict"
  /* MediaWiki markup*/
  | "mediawiki"
  /* roff ms*/
  | "ms"
  /* Muse*/
  | "muse"
  /* native Haskell*/
  | "native"
  /* OpenOffice text document*/
  | "odt"
  /* OPML*/
  | "opml"
  /* OpenDocument*/
  | "opendocument"
  /* Emacs Org mode*/
  | "org"
  /* PDF*/
  | "pdf"
  /* plain text*/
  | "plain"
  /* PowerPoint slide show*/
  | "pptx"
  /* reStructuredText*/
  | "rst"
  /* Rich Text Format*/
  | "rtf"
  /* GNU Texinfo*/
  | "texinfo"
  /* Textile*/
  | "textile"
  /* Slideous HTML and JavaScript slide show*/
  | "slideous"
  /* Slidy HTML and JavaScript slide show*/
  | "slidy"
  /* DZSlides HTML5 + JavaScript slide show*/
  | "dzslides"
  /* reveal.js HTML5 + JavaScript slide show*/
  | "revealjs"
  /* S5 HTML and JavaScript slide show*/
  | "s5"
  /* TEI Simple*/
  | "tei"
  /* XWiki markup*/
  | "xwiki";
