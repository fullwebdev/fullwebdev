--- standard-code
-- Turns <pre class="*"><code> into <pre><code class="language-*".
-- Throws away all attributes, so it should come after any filters that use attributes.
-- author: @a-vrma
-- from: https://github.com/a-vrma/pandoc-filters/blob/7d97589/dist/standard-code.lua
-- see: https://github.com/jgm/pandoc/issues/3858#issuecomment-438457679

local languages = {"abap","abnf","actionscript","ada","al","antlr4","apacheconf","apl","applescript","aql","arduino","arff","asciidoc","asm6502","aspnet","autohotkey","autoit","bash","basic","batch","bbcode","bison","bnf","brainfuck","brightscript","bro","c","cil","clike","clojure","cmake","coffeescript","concurnas","cpp","crystal","csharp","csp","css","css-extras","d","dart","dax","diff","django","dns-zone-file","docker","ebnf","eiffel","ejs","elixir","elm","erb","erlang","etlua","excel-formula","factor","firestore-security-rules","flow","fortran","fsharp","ftl","gcode","gdscript","gedcom","gherkin","git","glsl","gml","go","graphql","groovy","haml","handlebars","haskell","haxe","hcl","hlsl","hpkp","hsts","http","ichigojam","icon","iecst","inform7","ini","io","j","java","javadoc","javadoclike","javascript","javastacktrace","jolie","jq","js-extras","js-templates","jsdoc","json","json5","jsonp","jsx","julia","keyman","kotlin","latex","latte","less","lilypond","liquid","lisp","livescript","llvm","lolcode","lua","makefile","markdown","markup","markup-templating","matlab","mel","meta","mizar","monkey","moonscript","n1ql","n4js","nand2tetris-hdl","nasm","neon","nginx","nim","nix","nsis","objectivec","ocaml","opencl","oz","parigp","parser","pascal","pascaligo","pcaxis","peoplecode","perl","php","php-extras","phpdoc","plsql","powerquery","powershell","processing","prolog","properties","protobuf","pug","puppet","pure","purebasic","python","q","qml","qore","r","racket","reason","regex","renpy","rest","rip","roboconf","robotframework","ruby","rust","sas","sass","scala","scheme","scss","shell-session","smalltalk","smarty","solidity","solution-file","soy","sparql","splunk-spl","sqf","sql","stylus","swift","t4-cs","t4-templating","t4-vb","tap","tcl","textile","toml","tsx","tt2","turtle","twig","typescript","unrealscript","vala","vbnet","velocity","verilog","vhdl","vim","visual-basic","warpscript","wasm","wiki","xeora","xojo","xquery","yaml","zig","html","js","ts"
}


local function checkClassIsLanguage(name)
  -- returns index of the programming language if found or -1 if not found.
  -- TODO: this is spaghetti. use hash set.
  for i, val in ipairs(languages) do
    if val == name then
      return i
    end
  end
  io.stderr:write('unknow language ' .. name .. '\n')
  return -1
end

local function escape(s, in_attribute)
  -- escape according to html5 rules
  return s:gsub(
    '[<>&"\']',
    function(x)
      if x == '<' then
        return '&lt;'
      elseif x == '>' then
        return '&gt;'
      elseif x == '&' then
        return '&amp;'
      elseif x == '"' then
        return '&quot;'
      elseif x == "'" then
        return '&#39;'
      else
        return x
      end
    end
  )
end

local function getCodeClass(classes)
  -- check if classes includes a programming language name. Side effect is that it
  -- removes the class that matches from the `classes` table
  -- returns: Valid class attr using first match (with a space at beginning).
  --          or empty string if no classes match a programming language name.
  local classIndex = -1

  for i, cl in ipairs(classes) do
    if cl == 'mjs' then
      cl = 'js'
    end
    classIndex = checkClassIsLanguage(cl)
    if classIndex ~= -1 then
      return ' class="language-' .. table.remove(classes, i) .. '"'
    end
  end
  return ''
end

local function makeIdentifier(ident)
  -- returns: valid id attr (with a space at the beginning) OR empty string
  if #ident ~= 0 then
    return ' id="'.. ident .. '"'
  else
    return ''
  end
end

local function makeClasses(classes)
  -- returns valid class attr with classes separated by spaces (with a space at
  -- the beginning) OR empty string.
  if #classes ~= 0 then
    return ' class="' .. table.concat(classes, " ") .. '"'
  else
    return ''
  end
end

return {
  {
    CodeBlock = function(p)
      if FORMAT ~= 'html' then
        return p
      end

      id = makeIdentifier(p.identifier)
      classLang = getCodeClass(p.classes)
      classReg = makeClasses(p.classes)

      local pre_code = string.format(
        '<pre%s%s><code%s>%s</code></pre>', id, classReg, classLang, escape(p.text)
      )
      return pandoc.RawBlock('html', pre_code ,'RawBlock')
    end,

  }
}
